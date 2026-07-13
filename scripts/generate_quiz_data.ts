import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ─── Load studyMaterial data dynamically ───
const studyMaterialPath = path.join(__dirname, '..', 'src', 'data', 'studyMaterial.ts');
const rawFile = fs.readFileSync(studyMaterialPath, 'utf-8');

// Quick regex extraction of PYQ urls per subjectId
// Find all subjects and their pyqs
const subjectPYQMap = new Map<string, { subjectId: string; subjectName: string; cycleOrBranch: string; pyqs: { title: string; url: string }[] }>();

// Match subject blocks
const subjectBlocks = rawFile.matchAll(/"id":\s*"([^"]+)"[^}]*?"name":\s*"([^"]+)"/g);
const allSubjectIds: string[] = [];
for (const match of subjectBlocks) {
  allSubjectIds.push(match[1]);
}

// Extract pyq entries near their subject
// We'll parse the whole file to extract subject -> pyqs mapping
const lines = rawFile.split('\n');
let currentSubjectId = '';
let currentSubjectName = '';
let currentCycle = '';
let inPyqs = false;
let currentPyqs: { title: string; url: string }[] = [];
let pyqTitle = '';

// Simple state machine parser
for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();

  // Detect cycle/branch context
  const cycleMatch = line.match(/"id":\s*"(physics-cycle|chemistry-cycle|cse|cce|aiml|iot|mechanical|eee)"/);
  if (cycleMatch) {
    currentCycle = cycleMatch[1];
  }

  // Detect subject id  
  const subjectIdMatch = line.match(/"id":\s*"([^"]+)"/);
  if (subjectIdMatch && !line.includes('physics-cycle') && !line.includes('chemistry-cycle') && !line.includes('cse') && !line.includes('cce') && !line.includes('aiml') && !line.includes('iot') && !line.includes('mechanical') && !line.includes('eee')) {
    const possId = subjectIdMatch[1];
    if (possId !== currentSubjectId && possId.length > 2) {
      // Save current subject if has pyqs
      if (currentSubjectId && currentPyqs.length > 0) {
        subjectPYQMap.set(currentSubjectId, {
          subjectId: currentSubjectId,
          subjectName: currentSubjectName,
          cycleOrBranch: currentCycle,
          pyqs: [...currentPyqs],
        });
      }
      currentSubjectId = possId;
      currentPyqs = [];
      inPyqs = false;
    }
  }

  // Detect subject name
  const nameMatch = line.match(/"name":\s*"([^"]+)"/);
  if (nameMatch && lines[i - 1]?.trim().startsWith('"id"')) {
    currentSubjectName = nameMatch[1];
  }

  // Detect pyqs array start
  if (line === '"pyqs": [') {
    inPyqs = true;
    currentPyqs = [];
  }

  // Detect end of pyqs array
  if (inPyqs && line === '],') {
    inPyqs = false;
  }

  if (inPyqs) {
    const titleMatch = line.match(/"title":\s*"([^"]+)"/);
    if (titleMatch) pyqTitle = titleMatch[1];

    const urlMatch = line.match(/"url":\s*"([^"]+)"/);
    if (urlMatch && pyqTitle) {
      currentPyqs.push({ title: pyqTitle, url: urlMatch[1] });
      pyqTitle = '';
    }
  }
}

// Save the last subject
if (currentSubjectId && currentPyqs.length > 0) {
  subjectPYQMap.set(currentSubjectId, {
    subjectId: currentSubjectId,
    subjectName: currentSubjectName,
    cycleOrBranch: currentCycle,
    pyqs: [...currentPyqs],
  });
}

console.log(`Found ${subjectPYQMap.size} subjects with PYQs`);

// ─── PDF Extraction ───
import { PDFExtract } from 'pdf.js-extract';
const pdfExtract = new PDFExtract();

const NUMERICAL_KEYWORDS = ['calculate', 'compute', 'find', 'determine', 'solve', 'evaluate', 'derive', 'integrate', 'differentiate', 'equation', 'formula'];

function extractKeywords(text: string): string[] {
  const words = text.toLowerCase().replace(/[^\w\s]/g, ' ').split(/\s+/).filter(word => word.length > 3);
  const stopwords = new Set(['the', 'and', 'for', 'with', 'that', 'this', 'from', 'have', 'been', 'will', 'your', 'you', 'are', 'was', 'also', 'what', 'when', 'where', 'which', 'they', 'them', 'their']);
  const frequency: Record<string, number> = {};
  for (const word of words) {
    if (!stopwords.has(word)) frequency[word] = (frequency[word] || 0) + 1;
  }
  return Object.entries(frequency).sort((a, b) => b[1] - a[1]).slice(0, 6).map(([word]) => word);
}

function detectQuestionType(text: string): 'theory' | 'numerical' {
  const lower = text.toLowerCase();
  return NUMERICAL_KEYWORDS.some(k => lower.includes(k)) ? 'numerical' : 'theory';
}

function estimateDifficulty(marks: number): 'easy' | 'medium' | 'hard' {
  if (marks <= 2) return 'easy';
  if (marks <= 5) return 'medium';
  return 'hard';
}

function categorizeQuestion(freq: number): 'most-asked' | 'moderately-asked' | 'can-be-asked' {
  if (freq >= 3) return 'most-asked';
  if (freq === 2) return 'moderately-asked';
  return 'can-be-asked';
}

async function parsePDFFromUrl(url: string): Promise<any[]> {
  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(15000) });
    if (!response.ok) return [];
    if (!url.toLowerCase().includes('.pdf')) return [];

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const data = await new Promise<any>((resolve, reject) => {
      pdfExtract.extractBuffer(buffer, {}, (err, d) => {
        if (err) reject(err);
        else resolve(d);
      });
    });

    const fullText = data.pages.map((p: any) => p.content.map((i: any) => i.str).join(' ')).join('\n');
    const questions: any[] = [];
    const lineArr = fullText.split('\n').filter(l => l.trim().length > 15);

    let currentQ: any = null;
    for (const line of lineArr) {
      // Match question patterns like "Q1.", "1)", "1.", "Q.1"
      const qMatch = line.match(/^\s*(?:Q\s*\.?\s*)?([\d]+)[.)]\s+(.{10,})/i);
      if (qMatch) {
        if (currentQ?.question) questions.push(currentQ);
        const marksMatch = line.match(/\[?\(?\s*(\d+)\s*(?:marks?|m|pts?)[\s)\]]/i);
        currentQ = {
          question: qMatch[2].trim(),
          marks: marksMatch ? parseInt(marksMatch[1]) : null,
        };
      } else if (currentQ && line.length > 10) {
        currentQ.question += ' ' + line.trim();
      }
    }
    if (currentQ?.question) questions.push(currentQ);

    return questions.filter(q => q.question.length > 15).map(q => {
      const type = detectQuestionType(q.question);
      const keywords = extractKeywords(q.question);
      const marks = q.marks || (type === 'numerical' ? 5 : 2);
      return {
        id: `q-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
        question: q.question.substring(0, 300),
        text: q.question.substring(0, 300),
        type,
        marks,
        keywords,
        topic: 'General',
      };
    });
  } catch (err: any) {
    if (!err.message?.includes('Invalid PDF')) {
      console.error(`  Failed to fetch ${url.split('/').pop()}: ${err.message}`);
    }
    return [];
  }
}

async function generateQuizData() {
  const allQuizData: any[] = [];

  for (const [subjectId, subjectData] of subjectPYQMap.entries()) {
    console.log(`Processing: ${subjectData.subjectName} (${subjectData.pyqs.length} PYQs)...`);
    const questionMap = new Map<string, any>();

    for (const pyq of subjectData.pyqs) {
      const parsed = await parsePDFFromUrl(pyq.url);
      const years = (pyq.title.match(/\b(20\d{2})\b/g) || []) as string[];

      for (const pq of parsed) {
        const hash = `${pq.type}-${pq.keywords.sort().join('-')}`;
        if (questionMap.has(hash)) {
          const ex = questionMap.get(hash)!;
          ex.frequencyAsked += 1;
          ex.yearsAppeared = [...new Set([...ex.yearsAppeared, ...years])];
          ex.category = categorizeQuestion(ex.frequencyAsked);
        } else {
          questionMap.set(hash, {
            ...pq,
            subjectId,
            subjectName: subjectData.subjectName,
            cycleOrBranch: subjectData.cycleOrBranch,
            frequencyAsked: 1,
            yearsAppeared: years,
            category: categorizeQuestion(1),
            difficulty: estimateDifficulty(pq.marks),
          });
        }
      }
    }

    const allQuestions = Array.from(questionMap.values());
    if (allQuestions.length === 0) {
      console.log(`  → No questions extracted.`);
      continue;
    }

    console.log(`  → ${allQuestions.length} questions extracted.`);
    allQuizData.push({
      subjectId,
      subjectName: subjectData.subjectName,
      cycleOrBranch: subjectData.cycleOrBranch,
      questions: allQuestions,
      totalQuestions: allQuestions.length,
      mostAskedCount: allQuestions.filter(q => q.category === 'most-asked').length,
      moderatelyAskedCount: allQuestions.filter(q => q.category === 'moderately-asked').length,
      canBeAskedCount: allQuestions.filter(q => q.category === 'can-be-asked').length,
    });
  }

  const outputPath = path.join(__dirname, '..', 'src', 'data', 'quizData.json');
  fs.writeFileSync(outputPath, JSON.stringify(allQuizData, null, 2));
  console.log(`\n✅ Generated quizData.json with ${allQuizData.length} subjects at ${outputPath}`);
}

generateQuizData();
