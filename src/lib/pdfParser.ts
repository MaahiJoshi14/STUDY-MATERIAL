import * as pdfjsLib from 'pdfjs-dist';

// Configure pdfjs worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

export type QuestionType = 'mcq' | 'theory' | 'numerical';

export interface ParsedQuestion {
  id: string;
  question: string;
  type: QuestionType;
  options?: string[];
  correctAnswer?: string;
  marks?: number;
  topic?: string;
  keywords?: string[];
  formulas?: string[];
  note?: string;
}

// Common keywords for different subject types
const NUMERICAL_KEYWORDS = [
  'calculate', 'compute', 'find', 'determine', 'solve', 'evaluate',
  'numerical', 'value', 'sum', 'difference', 'product', 'divide',
  'derive', 'integrate', 'differentiate', 'equation', 'formula'
];

const COMMON_FORMULAS = [
  'E = mc²', 'F = ma', 'a² + b² = c²', 'area = πr²',
  'SELECT', 'INSERT', 'UPDATE', 'DELETE', 'JOIN', 'WHERE',
  'v = u + at', 's = ut + ½at²', 'v² = u² + 2as'
];

function extractKeywords(text: string): string[] {
  const words = text.toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 3);

  const stopwords = new Set([
    'the', 'and', 'for', 'with', 'that', 'this', 'from', 'have',
    'has', 'been', 'will', 'your', 'you', 'are', 'was', 'one',
    'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'
  ]);

  const frequency: Record<string, number> = {};
  for (const word of words) {
    if (!stopwords.has(word)) {
      frequency[word] = (frequency[word] || 0) + 1;
    }
  }

  return Object.entries(frequency)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([word]) => word);
}

function extractFormulas(text: string): string[] {
  const formulas: string[] = [];

  for (const formula of COMMON_FORMULAS) {
    if (text.toLowerCase().includes(formula.toLowerCase())) {
      formulas.push(formula);
    }
  }

  const equationMatches = text.match(/[A-Za-z0-9]+\s*=\s*[A-Za-z0-9+\-*/()²³]+/g);
  if (equationMatches) {
    formulas.push(...equationMatches);
  }

  return formulas.slice(0, 3);
}

function detectQuestionType(text: string, hasOptions: boolean): QuestionType {
  if (hasOptions) return 'mcq';

  const lowerText = text.toLowerCase();
  const isNumerical = NUMERICAL_KEYWORDS.some(keyword =>
    lowerText.includes(keyword)
  );

  return isNumerical ? 'numerical' : 'theory';
}

/**
 * Parse PDF questions from a local file path or URL in the browser
 */
export async function parsePDFQuestions(pdfUrl: string): Promise<ParsedQuestion[]> {
  try {
    // Load the PDF document
    const loadingTask = pdfjsLib.getDocument({ url: pdfUrl });
    const pdf = await loadingTask.promise;

    let fullText = '';

    // Extract text from all pages
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const pageText = textContent.items.map((item: any) => item.str).join(' ');
      fullText += pageText + '\n';
    }

    const questions: ParsedQuestion[] = [];

    // Parse questions from text
    const lines = fullText.split('\n').filter((line: string) => line.trim());
    let currentQuestion: Partial<ParsedQuestion> | null = null;
    let questionIndex = 0;

    for (const line of lines) {
      const questionMatch = line.match(/^(?:Q\s*\.?\s*)?(\d+)[.)\s]+(.+)/i);

      if (questionMatch) {
        if (currentQuestion && currentQuestion.question) {
          const type = detectQuestionType(currentQuestion.question, !!currentQuestion.options?.length);
          const keywords = extractKeywords(currentQuestion.question);
          const formulas = extractFormulas(currentQuestion.question);

          let note = '';
          if (type === 'theory') {
            note = `Note: Keywords - ${keywords.join(', ')}`;
          } else if (type === 'numerical') {
            note = `Note: Formulas - ${formulas.length > 0 ? formulas.join(', ') : 'Please write all formulas used'}`;
          }

          questions.push({
            id: `q-${questionIndex}`,
            question: currentQuestion.question,
            type,
            options: type === 'mcq' ? currentQuestion.options : undefined,
            correctAnswer: currentQuestion.correctAnswer,
            marks: currentQuestion.marks,
            topic: currentQuestion.topic,
            keywords,
            formulas,
            note,
          });
          questionIndex++;
        }

        currentQuestion = {
          question: questionMatch[2].trim(),
        };

        const marksMatch = line.match(/\[?\(?(\d+)\s*(?:marks?|pts?)\)?\]?/i);
        if (marksMatch) {
          currentQuestion.marks = parseInt(marksMatch[1]);
        }
      } else if (currentQuestion) {
        const optionMatch = line.match(/^([a-d])[.)\s]+(.+)/i);
        if (optionMatch) {
          if (!currentQuestion.options) {
            currentQuestion.options = [];
          }
          currentQuestion.options.push(optionMatch[2].trim());
        } else if (line.length > 10) {
          currentQuestion.question += ' ' + line.trim();
        }
      }
    }

    if (currentQuestion && currentQuestion.question) {
      const type = detectQuestionType(currentQuestion.question, !!currentQuestion.options?.length);
      const keywords = extractKeywords(currentQuestion.question);
      const formulas = extractFormulas(currentQuestion.question);

      let note = '';
      if (type === 'theory') {
        note = `Note: Keywords - ${keywords.join(', ')}`;
      } else if (type === 'numerical') {
        note = `Note: Formulas - ${formulas.length > 0 ? formulas.join(', ') : 'Please write all formulas used'}`;
      }

      questions.push({
        id: `q-${questionIndex}`,
        question: currentQuestion.question,
        type,
        options: type === 'mcq' ? currentQuestion.options : undefined,
        correctAnswer: currentQuestion.correctAnswer,
        marks: currentQuestion.marks,
        topic: currentQuestion.topic,
        keywords,
        formulas,
        note,
      });
    }

    return questions;
  } catch (error) {
    console.error('Error parsing PDF:', error);
    return [];
  }
}

export function categorizeQuestion(frequencyAsked: number): 'most-asked' | 'moderately-asked' | 'can-be-asked' {
  if (frequencyAsked >= 3) return 'most-asked';
  if (frequencyAsked === 2) return 'moderately-asked';
  return 'can-be-asked';
}
