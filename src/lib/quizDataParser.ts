import { type ParsedQuestion } from './pdfParser';
import quizDataJson from '@/data/quizData.json';

export interface QuizQuestion extends ParsedQuestion {
  subjectId: string;
  subjectName: string;
  cycleOrBranch: string;
  frequencyAsked: number;
  yearsAppeared: string[];
  category: 'most-asked' | 'moderately-asked' | 'can-be-asked';
  difficulty: 'easy' | 'medium' | 'hard';
  // Quiz component compatibility
  year?: string;
  text?: string;
  correct?: number;
  explanation?: string;
  formula?: string;
}

export interface SubjectQuizData {
  subjectId: string;
  subjectName: string;
  cycleOrBranch: string;
  questions: QuizQuestion[];
  totalQuestions: number;
  mostAskedCount: number;
  moderatelyAskedCount: number;
  canBeAskedCount: number;
}

/**
 * Hash function using keywords and question type to detect similar questions
 */
function hashQuestion(question: ParsedQuestion): string {
  const keywords = question.keywords || [];
  const type = question.type;
  return `${type}-${keywords.sort().join('-')}`;
}

export async function parseAllPYQsToQuiz(): Promise<SubjectQuizData[]> {
  // In a real scenario, this could fetch from an API.
  // Here, we load the pre-calculated JSON directly.
  return quizDataJson as SubjectQuizData[];
}

/**
 * Get quiz questions by category for a subject
 */
export function getQuestionsByCategory(
  quizData: SubjectQuizData[],
  subjectId: string,
  category: 'most-asked' | 'moderately-asked' | 'can-be-asked'
): QuizQuestion[] {
  const subjectData = quizData.find(q => q.subjectId === subjectId);
  if (!subjectData) return [];
  
  return subjectData.questions.filter(q => q.category === category);
}

/**
 * Get analytics for a subject
 */
export function getSubjectAnalytics(quizData: SubjectQuizData[], subjectId: string) {
  const subjectData = quizData.find(q => q.subjectId === subjectId);
  if (!subjectData) return null;

  const totalMarks = subjectData.questions.reduce((sum, q) => sum + (q.marks || 0), 0);
  const avgMarksPerQuestion = totalMarks / subjectData.totalQuestions;

  const difficultyDistribution = {
    easy: subjectData.questions.filter(q => q.difficulty === 'easy').length,
    medium: subjectData.questions.filter(q => q.difficulty === 'medium').length,
    hard: subjectData.questions.filter(q => q.difficulty === 'hard').length,
  };

  return {
    totalQuestions: subjectData.totalQuestions,
    totalMarks,
    avgMarksPerQuestion,
    categoryDistribution: {
      mostAsked: subjectData.mostAskedCount,
      moderatelyAsked: subjectData.moderatelyAskedCount,
      canBeAsked: subjectData.canBeAskedCount,
    },
    difficultyDistribution,
  };
}
