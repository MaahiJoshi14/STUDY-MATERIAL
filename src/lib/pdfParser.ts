import * as pdfjsLib from 'pdfjs-dist';

// Set worker source
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

export interface ParsedQuestion {
  id: string;
  question: string;
  options?: string[];
  correctAnswer?: string;
  marks?: number;
  topic?: string;
}

export async function parsePDFQuestions(pdfUrl: string): Promise<ParsedQuestion[]> {
  try {
    const loadingTask = pdfjsLib.getDocument(pdfUrl);
    const pdf = await loadingTask.promise;
    
    const questions: ParsedQuestion[] = [];
    let fullText = '';
    
    // Extract text from all pages
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const pageText = textContent.items
        .map((item: any) => item.str)
        .join(' ');
      fullText += pageText + '\n';
    }
    
    // Parse questions from text
    const lines = fullText.split('\n').filter((line: string) => line.trim());
    let currentQuestion: Partial<ParsedQuestion> | null = null;
    let questionIndex = 0;
    
    for (const line of lines) {
      // Detect question patterns (Q1, Q.1, 1., etc.)
      const questionMatch = line.match(/^(?:Q\s*\.?\s*)?(\d+)[.)\s]+(.+)/i);
      
      if (questionMatch) {
        // Save previous question if exists
        if (currentQuestion && currentQuestion.question) {
          questions.push({
            id: `q-${questionIndex}`,
            question: currentQuestion.question,
            options: currentQuestion.options,
            correctAnswer: currentQuestion.correctAnswer,
            marks: currentQuestion.marks,
            topic: currentQuestion.topic,
          });
          questionIndex++;
        }
        
        // Start new question
        currentQuestion = {
          question: questionMatch[2].trim(),
        };
        
        // Try to extract marks from the line
        const marksMatch = line.match(/\[?\(?(\d+)\s*(?:marks?|pts?)\)?\]?/i);
        if (marksMatch) {
          currentQuestion.marks = parseInt(marksMatch[1]);
        }
      } else if (currentQuestion) {
        // Detect options (a), b), c), d) or a., b., c., d.)
        const optionMatch = line.match(/^([a-d])[.)\s]+(.+)/i);
        if (optionMatch) {
          if (!currentQuestion.options) {
            currentQuestion.options = [];
          }
          currentQuestion.options.push(optionMatch[2].trim());
        } else if (line.length > 10) {
          // Append to current question if not an option
          currentQuestion.question += ' ' + line.trim();
        }
      }
    }
    
    // Add the last question
    if (currentQuestion && currentQuestion.question) {
      questions.push({
        id: `q-${questionIndex}`,
        question: currentQuestion.question,
        options: currentQuestion.options,
        correctAnswer: currentQuestion.correctAnswer,
        marks: currentQuestion.marks,
        topic: currentQuestion.topic,
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
