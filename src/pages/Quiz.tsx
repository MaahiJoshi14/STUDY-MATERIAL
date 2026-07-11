import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, Trophy, Zap, ChevronRight,
  BookOpen, Search, ChevronLeft, HelpCircle
} from 'lucide-react';
import {
  year1Cycles, branches, type Subject, type Question, QUESTIONS_DB
} from '@/data/studyMaterial';

type Step = 'setup' | 'categories' | 'practice';
type Category = 'most' | 'moderate' | 'can-be' | string;

export default function Quiz() {
  const [step, setStep] = useState<Step>('setup');

  // Setup form states (B&W)
  const [year, setYear] = useState<number>(1);
  const [branchOrCycle, setBranchOrCycle] = useState<string>('physics-cycle');
  const [subject, setSubject] = useState<Subject | null>(null);
  const [isSubjectDropdownOpen, setIsSubjectDropdownOpen] = useState(false);
  const [subjectSearch, setSubjectSearch] = useState('');

  // Practice States
  const [selectedCategory, setSelectedCategory] = useState<Category>('most');
  const [selectedCategoryLabel, setSelectedCategoryLabel] = useState<string>('Most Asked');
  
  // MCQ/Answer States
  const [answers, setAnswers] = useState<Record<string, string>>({}); // user written answer
  const [submitted, setSubmitted] = useState<Record<string, boolean>>({});
  const [aiFeedback, setAiFeedback] = useState<Record<string, { correct: boolean; feedback: string; points: number }>>({});
  const [score, setScore] = useState(0);
  const [checking, setChecking] = useState<Record<string, boolean>>({});

  // Mobile navigation index for swipeable cards
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);
  // Active Category Stack Toggle: 'frequency' | 'topic'
  const [activeStackType, setActiveStackType] = useState<'frequency' | 'topic'>('frequency');


  // Load setup data from sessionStorage if set by Home page
  useEffect(() => {
    const storedSubjectId = sessionStorage.getItem('setup_subject_id');
    const storedYear = sessionStorage.getItem('setup_year');
    const storedBranch = sessionStorage.getItem('setup_branch');

    if (storedSubjectId && storedYear && storedBranch) {
      const yr = parseInt(storedYear, 10);
      setYear(yr);
      setBranchOrCycle(storedBranch);
      
      // Find subject
      let subList: Subject[] = [];
      if (yr === 1) {
        subList = year1Cycles.find(c => c.id === storedBranch)?.subjects || [];
      } else {
        subList = branches.find(b => b.id === storedBranch)?.subjects || [];
      }
      
      const sub = subList.find(s => s.id === storedSubjectId);
      if (sub) {
        setSubject(sub);
        setStep('categories');
      }
      
      // Clean up storage so returning here doesn't auto-redirect again
      sessionStorage.removeItem('setup_subject_id');
      sessionStorage.removeItem('setup_year');
      sessionStorage.removeItem('setup_branch');
    } else {
      // Set default subject on load
      const subList = year1Cycles.find(c => c.id === 'physics-cycle')?.subjects || [];
      setSubject(subList[0] || null);
    }
  }, []);

  const handleYearChange = (yr: number) => {
    setYear(yr);
    if (yr === 1) {
      setBranchOrCycle('physics-cycle');
      const list = year1Cycles.find(c => c.id === 'physics-cycle')?.subjects || [];
      setSubject(list[0] || null);
    } else {
      setBranchOrCycle('cse');
      const list = branches.find(b => b.id === 'cse')?.subjects || [];
      setSubject(list[0] || null);
    }
  };

  const getSubjectList = (): Subject[] => {
    if (year === 1) {
      const cycle = year1Cycles.find(c => c.id === branchOrCycle);
      return cycle ? cycle.subjects : [];
    }
    const branch = branches.find(b => b.id === branchOrCycle);
    return branch ? branch.subjects : [];
  };

  const getQuestionsForSubject = (subjectId: string): Question[] => {
    const targetId = subjectId === 'applied-mathematics' ? 'computational-mathematics' : subjectId;
    return QUESTIONS_DB[targetId] || [];
  };

  const allQuestions = subject ? getQuestionsForSubject(subject.id) : [];
  const topics = Array.from(new Set(allQuestions.map(q => q.topic))).map(topicName => ({
    name: topicName,
    questions: allQuestions.filter(q => q.topic === topicName)
  }));

  const mostAsked = allQuestions.filter(q => q.frequency === 'most'); 
  const moderatelyAsked = allQuestions.filter(q => q.frequency === 'moderate');
  const canBeAsked = allQuestions.filter(q => q.frequency === 'can-be');

  const getCategoryQuestions = (): Question[] => {
    if (selectedCategory === 'most') return mostAsked;
    if (selectedCategory === 'moderate') return moderatelyAsked;
    if (selectedCategory === 'can-be') return canBeAsked;
    return allQuestions.filter(q => q.topic === selectedCategory);
  };

  const currentQuestions = getCategoryQuestions();

  const handleAnswerSubmit = async (question: Question) => {
    if (submitted[question.id] || checking[question.id]) return;
    const userAnswer = answers[question.id] || '';
    
    setChecking(prev => ({ ...prev, [question.id]: true }));
    await new Promise(resolve => setTimeout(resolve, 1200));

    let isCorrect = false;
    let feedback = '';
    let earnedPoints = 0;

    if (question.type === 'mcq') {
      const ansVal = parseInt(userAnswer, 10);
      isCorrect = ansVal === question.correct;
      earnedPoints = isCorrect ? question.marks : 0;
      feedback = isCorrect 
        ? `Correct! ${question.explanation}` 
        : `Incorrect. The correct option is ${String.fromCharCode(65 + question.correct)}. ${question.explanation}`;
    } else if (question.type === 'theory') {
      // Check keywords
      const words = (question.keywords || []).map(w => w.toLowerCase());
      const userText = userAnswer.toLowerCase();
      const matched = words.filter(w => userText.includes(w));
      const matchRatio = words.length > 0 ? matched.length / words.length : 0;

      if (matchRatio >= 0.6) {
        isCorrect = true;
        earnedPoints = question.marks;
        feedback = `Excellent response! You correctly identified key terms: ${matched.join(', ')}.`;
      } else if (matched.length > 0) {
        isCorrect = false;
        earnedPoints = Math.max(1, Math.floor(question.marks * (matched.length / words.length)));
        feedback = `Partial match. You mentioned: ${matched.join(', ')}. Try to also cover: ${words.filter(w => !matched.includes(w)).join(', ')}.`;
      } else {
        isCorrect = false;
        earnedPoints = 0;
        feedback = `Incorrect or incomplete. Make sure to include core concepts like: ${words.slice(0, 3).join(', ')}.`;
      }
    } else if (question.type === 'numerical') {
      // Numerical
      const cleanUser = userAnswer.toLowerCase().replace(/\s+/g, '');
      const cleanFormula = (question.formula || '').toLowerCase().replace(/\s+/g, '');
      
      const formulaNumbers = (question.formula || '').match(/\d+(\.\d+)?/g) || [];
      const userNumbers = userAnswer.match(/\d+(\.\d+)?/g) || [];
      const matchesNumber = formulaNumbers.some(fn => userNumbers.some(un => Math.abs(parseFloat(un) - parseFloat(fn)) < 0.05));

      if (cleanUser.includes(cleanFormula) || matchesNumber) {
        isCorrect = true;
        earnedPoints = question.marks;
        feedback = `Correct formula and final answer match! ${question.explanation}`;
      } else {
        const matchedNums = formulaNumbers.filter(fn => userNumbers.some(un => Math.abs(parseFloat(un) - parseFloat(fn)) < 0.05));
        if (matchedNums.length > 0) {
          earnedPoints = Math.max(1, Math.floor(question.marks / 2));
          feedback = `Formula structure or values are partially correct. Check the calculation. Expected values like: ${formulaNumbers.join(', ')}.`;
        } else {
          earnedPoints = 0;
          feedback = `Calculation or formula mismatch. Expected key values/formula pattern: ${question.formula}`;
        }
      }
    }

    setSubmitted(prev => ({ ...prev, [question.id]: true }));
    setAiFeedback(prev => ({ ...prev, [question.id]: { correct: isCorrect, feedback, points: earnedPoints } }));
    setScore(prev => prev + earnedPoints);
    setChecking(prev => ({ ...prev, [question.id]: false }));
  };  const handleEnterArena = () => {
    if (subject) {
      setStep('categories');
    }
  };

  const activeSubjects = getSubjectList();
  const filteredSubjects = activeSubjects.filter(s =>
    s.name.toLowerCase().includes(subjectSearch.toLowerCase()) ||
    s.code.toLowerCase().includes(subjectSearch.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#FFF8FA] text-[#1E1E1E] font-sans antialiased pb-28">
      
      {/* ── HEADER NAVIGATION ── */}
      <header className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-8.5 h-8.5 bg-[#FF5252] rounded-xl flex items-center justify-center border border-slate-200 shadow-sm">
            <BookOpen className="w-4.5 h-4.5 text-white" />
          </div>
          <span className="font-display font-black text-[#1E1E1E] text-xl tracking-tight uppercase">MUJ SPACE</span>
        </Link>

        {/* Navigation Middle Pill Bar */}
        <div className="flex items-center gap-1.5 bg-white border border-slate-200/80 px-2 py-1.5 rounded-full shadow-sm">
          <Link
            to="/"
            className="px-5 py-1.5 rounded-full text-xs font-bold text-slate-500 hover:text-[#1E1E1E] transition-all"
          >
            Home
          </Link>
          <Link
            to="/explore"
            className="px-5 py-1.5 rounded-full text-xs font-bold text-slate-500 hover:text-[#1E1E1E] transition-all"
          >
            Library
          </Link>
          <Link
            to="/quiz"
            className={`px-5 py-1.5 rounded-full text-xs font-black transition-all ${
              step === 'setup' ? 'text-slate-500' : 'bg-[#1E1E1E] text-white'
            }`}
          >
            Practice Arena
          </Link>
        </div>

        {/* Score Counter */}
        <div className="flex items-center gap-2 bg-[#FFB236] border border-[#1E1E1E]/10 px-4 py-1.5 rounded-full shadow-sm">
          <Trophy className="w-4 h-4 text-[#1E1E1E] fill-[#1E1E1E]" />
          <span className="text-xs font-black text-[#1E1E1E]">{score} XP</span>
        </div>
      </header>

      {/* Main Body */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        
        {step !== 'setup' && (
          <button
            onClick={() => {
              if (step === 'practice') setStep('categories');
              else if (step === 'categories') setStep('setup');
            }}
            className="mb-6 inline-flex items-center gap-1.5 text-xs font-black uppercase text-slate-505 hover:text-[#1E1E1E] cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
        )}

        <AnimatePresence mode="wait">
          
          {/* ── STEP 1: SETUP FORM (B&W) ── */}
          {step === 'setup' && (
            <motion.div
              key="setup"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="flex justify-center py-6"
            >
              <div className="bg-white border border-slate-200 rounded-[28px] w-full max-w-md overflow-hidden shadow-md p-6 space-y-6 text-left">
                <div className="pb-4 border-b border-slate-100 flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#1E1E1E] rounded-xl flex items-center justify-center">
                    <Trophy className="w-4.5 h-4.5 text-white" />
                  </div>
                  <div>
                    <h2 className="font-display font-black text-lg text-[#1E1E1E] uppercase leading-tight">Enter sessional arena</h2>
                    <p className="text-[9px] font-black uppercase text-slate-400 mt-0.5">Select details to start</p>
                  </div>
                </div>

                {/* Course Stream */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-wider text-slate-400">Course Stream</label>
                  <div className="flex flex-wrap gap-2">
                    {['B.Tech', 'BBA (Soon)', 'B.Com (Soon)'].map((c, idx) => (
                      <button
                        key={c}
                        disabled={idx > 0}
                        className={`px-4 py-2 rounded-full text-xs font-black border transition-all ${
                          idx === 0
                            ? 'bg-[#1E1E1E] border-[#1E1E1E] text-white'
                            : 'bg-white border-slate-200 text-slate-350 cursor-not-allowed opacity-50'
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Academic Year */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-wider text-slate-400">Academic Year</label>
                  <div className="grid grid-cols-4 gap-2">
                    {[1, 2, 3, 4].map((y) => (
                      <button
                        key={y}
                        onClick={() => handleYearChange(y)}
                        className={`py-2 rounded-xl text-xs font-black border transition-all cursor-pointer ${
                          year === y
                            ? 'bg-[#1E1E1E] border-[#1E1E1E] text-white'
                            : 'bg-white border-slate-200 text-[#1E1E1E] hover:bg-slate-50'
                        }`}
                      >
                        {y === 1 ? '1st' : y === 2 ? '2nd' : y === 3 ? '3rd' : '4th'} Yr
                      </button>
                    ))}
                  </div>
                </div>

                {/* Cycle / Branch */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                    {year === 1 ? 'Cycle Selection' : 'Branch Specialization'}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {year === 1 ? (
                      year1Cycles.map((c) => (
                        <button
                          key={c.id}
                          onClick={() => {
                            setBranchOrCycle(c.id);
                            const list = c.subjects;
                            setSubject(list[0] || null);
                          }}
                          className={`px-4 py-2 rounded-full text-xs font-black border transition-all cursor-pointer ${
                            branchOrCycle === c.id
                              ? 'bg-[#1E1E1E] border-[#1E1E1E] text-white'
                              : 'bg-white border-slate-200 text-[#1E1E1E] hover:bg-slate-50'
                          }`}
                        >
                          {c.name}
                        </button>
                      ))
                    ) : (
                      branches.map((b) => (
                        <button
                          key={b.id}
                          onClick={() => {
                            setBranchOrCycle(b.id);
                            const list = b.subjects;
                            setSubject(list[0] || null);
                          }}
                          className={`px-4 py-2 rounded-full text-xs font-black border transition-all cursor-pointer ${
                            branchOrCycle === b.id
                              ? 'bg-[#1E1E1E] border-[#1E1E1E] text-white'
                              : 'bg-white border-slate-200 text-[#1E1E1E] hover:bg-slate-50'
                          }`}
                        >
                          {b.shortName}
                        </button>
                      ))
                    )}
                  </div>
                </div>

                {/* Select Subject */}
                <div className="space-y-2" ref={subRef => {
                  if (!subRef) return;
                  const handler = (e: MouseEvent) => {
                    if (!subRef.contains(e.target as Node)) setIsSubjectDropdownOpen(false);
                  };
                  document.addEventListener('mousedown', handler);
                  return () => document.removeEventListener('mousedown', handler);
                }}>
                  <label className="text-[10px] font-black uppercase tracking-wider text-slate-400">Select Subject</label>
                  <div className="relative">
                    <button
                      onClick={() => setIsSubjectDropdownOpen(!isSubjectDropdownOpen)}
                      className="w-full h-12 px-4 bg-white border border-slate-200 rounded-xl flex items-center justify-between text-xs font-black text-[#1E1E1E] hover:bg-slate-50 transition-all cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        {subject ? (
                          <>
                            <span>{subject.emoji}</span>
                            <span>{subject.name} ({subject.code})</span>
                          </>
                        ) : (
                          <span className="text-slate-400">Choose Subject...</span>
                        )}
                      </span>
                      <ChevronRight className={`w-4 h-4 text-[#1E1E1E] transition-transform ${isSubjectDropdownOpen ? 'rotate-90' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {isSubjectDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          className="absolute z-50 w-full mt-1.5 bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden max-h-52 flex flex-col"
                        >
                          <div className="p-2 border-b border-slate-100 flex items-center gap-2">
                            <Search className="w-3.5 h-3.5 text-slate-400 ml-2" />
                            <input
                              type="text"
                              value={subjectSearch}
                              onChange={(e) => setSubjectSearch(e.target.value)}
                              placeholder="Search subjects..."
                              className="w-full bg-transparent border-none text-xs font-bold focus:outline-none py-1 text-neutral-800 placeholder-neutral-400"
                            />
                          </div>

                          <div className="overflow-y-auto flex-1 no-scrollbar">
                            {filteredSubjects.length > 0 ? (
                              filteredSubjects.map((s) => {
                                const hasQ = true;
                                return (
                                  <button
                                    key={s.id}
                                    disabled={!hasQ}
                                    onClick={() => {
                                      setSubject(s);
                                      setIsSubjectDropdownOpen(false);
                                      setSubjectSearch('');
                                    }}
                                    className={`w-full text-left px-4 py-2.5 text-xs font-black transition-colors flex items-center justify-between border-b border-slate-50 last:border-none cursor-pointer ${
                                      !hasQ
                                        ? 'opacity-35 cursor-not-allowed text-slate-400'
                                        : 'hover:bg-slate-50 text-neutral-800'
                                    }`}
                                  >
                                    <span className="flex items-center gap-2">
                                      <span>{s.emoji}</span>
                                      <span>{s.name}</span>
                                    </span>
                                    {hasQ ? (
                                      <span className="text-[9px] font-black bg-[#1E1E1E] text-white px-2 py-0.5 rounded-full uppercase tracking-wider">Active</span>
                                    ) : (
                                      <span className="text-[9px] font-bold bg-neutral-100 text-slate-450 px-2 py-0.5 rounded-full">Soon</span>
                                    )}
                                  </button>
                                );
                              })
                            ) : (
                              <div className="p-4 text-center text-xs text-slate-400 font-bold">No matching subjects</div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Enter arena button */}
                <button
                  disabled={!subject}
                  onClick={handleEnterArena}
                  className="w-full py-3.5 bg-gradient-to-r from-[#FF7EB9] to-[#FF5252] text-white font-black text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer hover:shadow-[0_4px_16px_rgba(255,126,185,0.4)] transition-all duration-300 shadow-sm"
                >
                  <Zap className="w-4 h-4 fill-white" />
                  Enter Practice Arena
                </button>
              </div>
            </motion.div>
          )}

          {/* ── STEP 2: SELECT CATEGORY ── */}
          {step === 'categories' && subject && (
            <motion.div
              key="categories"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="space-y-6"
            >
                {/* Header */}
              <div className="text-center space-y-3">
                <span className="inline-block text-[10px] font-black uppercase bg-white border border-slate-200 px-3 py-1 rounded-full shadow-sm text-slate-500">
                  {subject.name} ({subject.code})
                </span>
                <h1 className="font-display font-black text-4xl text-[#1E1E1E] uppercase">
                  Select Category
                </h1>

                {/* Toggle Stack Tabs */}
                <div className="flex gap-2 justify-center pt-1">
                  <button
                    onClick={() => setActiveStackType('frequency')}
                    className={`px-4 py-2 rounded-full text-xs font-black border transition-all cursor-pointer ${activeStackType === 'frequency' ? 'bg-neutral-900 text-white border-neutral-900 shadow-sm' : 'bg-white text-slate-650 border-slate-200 hover:border-slate-350'}`}
                  >
                    By Frequency
                  </button>
                  <button
                    onClick={() => setActiveStackType('topic')}
                    className={`px-4 py-2 rounded-full text-xs font-black border transition-all cursor-pointer ${activeStackType === 'topic' ? 'bg-neutral-900 text-white border-neutral-900 shadow-sm' : 'bg-white text-slate-650 border-slate-200 hover:border-slate-350'}`}
                  >
                    By Topic
                  </button>
                </div>
              </div>

              {activeStackType === 'frequency' ? (
                <>
                  {/* DESKTOP LAYOUT (Mockup 1 style) */}
                  <div className="hidden md:grid grid-cols-3 gap-6 pt-4">
                    {[
                      {
                        label: 'MOST ASKED',
                        desc: 'High weightage questions asked repeatedly',
                        count: mostAsked.length,
                        cat: 'most',
                        catLabel: 'Most Asked',
                        bg: 'bg-[#C4EBD0]',
                        border: 'border-[#A3DBB5]',
                        text: 'text-[#1B5E20]',
                        descText: 'text-[#1B5E20]/80'
                      },
                      {
                        label: 'MODERATELY ASKED',
                        desc: 'Important questions with moderate probability',
                        count: moderatelyAsked.length,
                        cat: 'moderate',
                        catLabel: 'Moderately Asked',
                        bg: 'bg-[#FFE5A3]',
                        border: 'border-[#F0C27D]',
                        text: 'text-[#E65100]',
                        descText: 'text-[#E65100]/80'
                      },
                      {
                        label: 'CAN BE ASKED',
                        desc: 'Possible questions from the entire syllabus',
                        count: canBeAsked.length,
                        cat: 'can-be',
                        catLabel: 'Can Be Asked',
                        bg: 'bg-[#D2C2F9]',
                        border: 'border-[#B39DDB]',
                        text: 'text-[#4A148C]',
                        descText: 'text-[#4A148C]/80'
                      }
                    ].map(({ label, desc, count, cat, catLabel, bg, border, text, descText }) => (
                      <button
                        key={cat}
                        onClick={() => {
                          setSelectedCategory(cat);
                          setSelectedCategoryLabel(catLabel);
                          setCurrentMobileIndex(0);
                          setStep('practice');
                        }}
                        className="text-left w-full focus:outline-none cursor-pointer group"
                      >
                        <div className={`${bg} ${border} border-2 rounded-[32px] p-6 shadow-sm hover:translate-y-[-3px] hover:shadow-md transition-all h-[340px] flex flex-col justify-between relative overflow-hidden`}>
                          <div className="absolute top-0 right-0 w-28 h-28 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                          
                          <div className="space-y-4">
                            <h3 className={`font-display font-black text-2xl uppercase tracking-wide leading-tight ${text}`}>
                              {label}
                            </h3>
                            <p className={`text-sm font-bold leading-relaxed ${descText}`}>
                              {desc}
                            </p>
                          </div>

                          <div className="pt-4 border-t border-black/10 flex justify-between items-center">
                            <span className={`text-xs font-black uppercase tracking-wider ${text}`}>
                              {count} Questions
                            </span>
                            <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                              <ChevronRight className={`w-5 h-5 ${text}`} />
                            </span>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* MOBILE LAYOUT (Mockup 5 Peeking vertical stack) */}
                  <div className="md:hidden flex flex-col gap-4 py-4 px-2">
                    {[
                      {
                        badge: 'HIGH-VOLUME',
                        label: 'MOST ASKED',
                        desc: 'High weightage questions asked repeatedly',
                        count: mostAsked.length,
                        cat: 'most',
                        catLabel: 'Most Asked',
                        bg: 'bg-[#C4EBD0]',
                        border: 'border-[#A3DBB5]',
                        text: 'text-[#1B5E20]',
                        descText: 'text-[#1B5E20]/80',
                        offset: 'translate-y-0 z-10'
                      },
                      {
                        badge: 'MODERATE',
                        label: 'MODERATELY ASKED',
                        desc: 'Important questions with moderate probability',
                        count: moderatelyAsked.length,
                        cat: 'moderate',
                        catLabel: 'Moderately Asked',
                        bg: 'bg-[#FFE5A3]',
                        border: 'border-[#F0C27D]',
                        text: 'text-[#E65100]',
                        descText: 'text-[#E65100]/80',
                        offset: '-mt-16 z-20'
                      },
                      {
                        badge: 'POSSIBLE',
                        label: 'CAN BE ASKED',
                        desc: 'Possible questions from the entire syllabus',
                        count: canBeAsked.length,
                        cat: 'can-be',
                        catLabel: 'Can Be Asked',
                        bg: 'bg-[#D2C2F9]',
                        border: 'border-[#B39DDB]',
                        text: 'text-[#4A148C]',
                        descText: 'text-[#4A148C]/80',
                        offset: '-mt-16 z-30'
                      }
                    ].map(({ badge, label, desc, count, cat, catLabel, bg, border, text, descText, offset }) => (
                      <button
                        key={cat}
                        onClick={() => {
                          setSelectedCategory(cat);
                          setSelectedCategoryLabel(catLabel);
                          setCurrentMobileIndex(0);
                          setStep('practice');
                        }}
                        className={`w-full text-left focus:outline-none cursor-pointer transition-all transform hover:scale-[1.01] ${offset}`}
                      >
                        <div className={`${bg} ${border} border-2 rounded-[36px] p-6 shadow-md h-[220px] flex flex-col justify-between relative overflow-hidden`}>
                          <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-xl pointer-events-none" />
                          
                          <div>
                            <div className="flex justify-between items-center">
                              <span className={`text-[8px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/40 border border-white/20 ${text}`}>
                                {badge}
                              </span>
                              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                                <ChevronRight className={`w-4 h-4 ${text}`} />
                              </div>
                            </div>
                            <h3 className={`font-display font-black text-xl uppercase tracking-tight mt-3 ${text}`}>
                              {label}
                            </h3>
                            <p className={`text-[11px] font-bold mt-1 line-clamp-2 leading-snug ${descText}`}>
                              {desc}
                            </p>
                          </div>

                          <div className="pt-2 border-t border-black/5 flex justify-between items-center text-[10px] font-black uppercase tracking-wider">
                            <span className={text}>{count} Questions</span>
                            <span className={text}>Active</span>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                /* By Topic (both desktop + mobile) */
                <div className="grid md:grid-cols-3 gap-6 pt-4">
                  {topics.length > 0 ? (
                    topics.slice(0, 3).map((topic, index) => {
                      const bgColors = ['bg-[#00838f]', 'bg-[#1a237e]', 'bg-[#6a1b9a]'];
                      return (
                        <button
                          key={topic.name}
                          onClick={() => {
                            setSelectedCategory(topic.name);
                            setSelectedCategoryLabel(topic.name);
                            setCurrentMobileIndex(0);
                            setStep('practice');
                          }}
                          className="text-left w-full focus:outline-none cursor-pointer"
                        >
                          <div className={`${bgColors[index % bgColors.length]} rounded-[32px] p-6 shadow-sm hover:translate-y-[-2px] transition-all h-[300px] md:h-[340px] flex flex-col justify-between text-white relative overflow-hidden`}>
                            <div>
                              <span className="text-[9px] font-extrabold uppercase bg-white/20 border border-white/40 px-3 py-1 rounded-full tracking-widest">
                                Topic Domain
                              </span>
                              <h3 className="font-display font-black text-2xl uppercase mt-4 tracking-wide leading-none truncate max-w-[200px]">
                                {topic.name}
                              </h3>
                              <p className="text-white/80 text-xs font-bold mt-2 leading-relaxed">
                                Curated subject sheets covering the core syllabus blueprint for sessional marks.
                              </p>
                            </div>
                            <div className="pt-4 border-t border-white/20 flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-white/95">
                              <span>{topic.questions.length} Questions</span>
                              <span>Curriculum</span>
                            </div>
                          </div>
                        </button>
                      );
                    })
                  ) : (
                    <div className="col-span-3 py-10 bg-white border border-slate-200 rounded-3xl text-center text-xs font-bold text-slate-400">
                      No subject topics found.
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          )}


          {/* ── STEP 3: PRACTICE SHEETS ── */}
          {step === 'practice' && subject && (
            <motion.div
              key="practice"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="space-y-8"
            >
              {/* Header Details with Points Counter at Top */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-pink-100 pb-6 gap-4 text-left">
                <div className="space-y-1">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[9px] font-black uppercase bg-[#FF7EB9] text-white px-3 py-1 rounded-full">
                      {subject.name}
                    </span>
                    <span className="text-[9px] font-black uppercase bg-white border border-pink-200 text-pink-500 px-3 py-1 rounded-full">
                      {selectedCategoryLabel}
                    </span>
                  </div>
                  <h2 className="font-display font-extrabold text-3xl uppercase">Practice Deck</h2>
                </div>

                <div className="space-y-1 sm:text-right">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Progress: {Object.keys(submitted).length} / {currentQuestions.length} Checked
                  </p>
                  <div className="w-44 h-1.5 bg-pink-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#FF7EB9] to-[#FF5252] rounded-full transition-all duration-300"
                      style={{ width: `${(Object.keys(submitted).length / Math.max(1, currentQuestions.length)) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* PYQ Resources for Subject */}
              {subject.pyqs && subject.pyqs.length > 0 && (
                <div className="bg-pink-50 border border-pink-100 rounded-2xl p-4">
                  <p className="text-[10px] font-black uppercase tracking-widest text-pink-500 mb-3 flex items-center gap-1.5">
                    📚 PYQ Papers for {subject.name}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {subject.pyqs.map((pyq, i) => (
                      <a
                        key={i}
                        href={pyq.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 bg-white border border-pink-200 hover:border-pink-400 text-[10px] font-black text-pink-600 px-3 py-1.5 rounded-lg hover:bg-pink-50 transition-all duration-200"
                      >
                        📄 {pyq.title}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {currentQuestions.length > 0 ? (
                <>
                  {/* DESKTOP LAYOUT (Grid Card solutions) */}
                  <div className="hidden md:grid grid-cols-1 gap-6 text-left">
                    {currentQuestions.map((q, idx) => {
                      const isSubmitted = submitted[q.id];
                      const feedback = aiFeedback[q.id];
                      const isChecking = checking[q.id];

                      return (
                        <div
                          key={q.id}
                          className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden"
                        >
                          <div className="flex justify-between items-center px-6 py-3 border-b border-slate-100 bg-[#FAF9F5]">
                            <span className="text-[9px] font-black uppercase tracking-widest text-slate-405">
                              Question {idx + 1}
                            </span>
                            <span className="text-[9px] font-black uppercase bg-white border border-slate-200 px-2.5 py-1 rounded shadow-sm">
                              +{q.marks} XP
                            </span>
                          </div>

                          <div className="p-6 space-y-6">
                            <div className="flex flex-wrap gap-2">
                              <span className="text-[9px] font-black bg-[#E3F2FD] border border-blue-100 text-[#297BCF] px-2.5 py-1 rounded-full">
                                📅 {q.year}
                              </span>
                              <span className="text-[9px] font-black bg-[#EDE7F6] border border-purple-100 text-[#8E6BB8] px-2.5 py-1 rounded-full">
                                🏷 {q.topic}
                              </span>
                            </div>

                            <div className="space-y-1">
                              <h3 className="font-display font-extrabold text-xl text-[#1E1E1E] leading-relaxed">
                                {q.text}
                              </h3>
                            </div>

                            <div className="space-y-3">
                              <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Your Answer Solution</label>
                              
                              {q.options && q.options.length > 0 ? (
                                <div className="grid sm:grid-cols-2 gap-3.5">
                                  {q.options.map((opt, oi) => {
                                    const isSelected = answers[q.id] === oi.toString();
                                    const isCorrect = q.correct === oi;
                                    let btnCls = 'w-full text-left p-4 rounded-xl text-xs font-bold border transition-all flex items-center shadow-sm cursor-pointer ';

                                    if (isSubmitted) {
                                      if (isCorrect) btnCls += 'bg-[#3CD070] text-white border-[#3CD070]';
                                      else if (isSelected) btnCls += 'bg-[#FF6B6B] text-white border-[#FF6B6B]';
                                      else btnCls += 'bg-slate-50 border-slate-100 text-slate-400 opacity-40 shadow-none';
                                    } else {
                                      btnCls += isSelected
                                        ? 'bg-[#FFB236] border-[#FFB236] text-[#1E1E1E]'
                                        : 'bg-[#FAF6F0] border-slate-200 text-[#1E1E1E] hover:bg-white';
                                    }

                                    return (
                                      <button
                                        key={oi}
                                        disabled={isSubmitted}
                                        onClick={() => setAnswers(prev => ({ ...prev, [q.id]: oi.toString() }))}
                                        className={btnCls}
                                      >
                                        <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[9px] font-black mr-2.5 shrink-0">
                                          {String.fromCharCode(65 + oi)}
                                        </span>
                                        <span className="flex-1 leading-normal">{opt}</span>
                                      </button>
                                    );
                                  })}
                                </div>
                              ) : (
                                <textarea
                                  disabled={isSubmitted}
                                  value={answers[q.id] || ''}
                                  onChange={(e) => setAnswers(prev => ({ ...prev, [q.id]: e.target.value }))}
                                  rows={4}
                                  placeholder={
                                    q.type === 'theory'
                                      ? "Write key theory terms (e.g. Meissner effect, flux expulsion, perfect diamagnetic)..."
                                      : "Write the formula (e.g. lambda = h / sqrt(2meV)) and your calculation steps/values..."
                                  }
                                  className="w-full p-4 border border-slate-200 rounded-2xl focus:outline-none focus:border-[#5D5FEF] bg-[#FAF9F5] text-xs font-bold leading-relaxed text-[#1E1E1E] placeholder-slate-400 resize-none disabled:opacity-60"
                                />
                              )}

                              {!isSubmitted && (
                                <button
                                  disabled={isChecking || !answers[q.id]}
                                  onClick={() => handleAnswerSubmit(q)}
                                  className="w-full py-3 bg-[#1E1E1E] text-white font-black text-xs uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:bg-black transition-all"
                                >
                                  {isChecking ? 'AI Grading Answer...' : 'Check with AI Evaluator'}
                                </button>
                              )}
                            </div>

                            {isSubmitted && feedback && (
                              <motion.div
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="rounded-xl border border-slate-200 overflow-hidden shadow-sm"
                              >
                                <div className={`px-5 py-3 flex items-center justify-between border-b border-slate-200 ${feedback.correct ? 'bg-[#3CD070]/10 text-[#29B059]' : 'bg-[#FF6B6B]/10 text-[#FF6B6B]'}`}>
                                  <span className="text-[10px] font-black uppercase tracking-widest">
                                    {feedback.correct ? '🎉 Verified Correct' : '❌ Revision Suggested'}
                                  </span>
                                  <span className="text-[10px] font-black bg-white border border-slate-200 px-2 py-0.5 rounded-full text-slate-800">
                                    +{feedback.points}/{q.marks} XP
                                  </span>
                                </div>
                                <div className="p-4 space-y-3 bg-white">
                                  <p className="text-xs font-bold text-slate-600 leading-normal">{feedback.feedback}</p>
                                  {q.explanation && (
                                    <div>
                                      <p className="text-[9px] font-black uppercase text-slate-400 mb-1">Board Key Explanation</p>
                                      <p className="text-xs font-mono bg-slate-50 border border-slate-200 p-3 rounded-xl leading-relaxed text-slate-700">
                                        {q.explanation}
                                      </p>
                                    </div>
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* MOBILE VIEW (Layout in 3rd screenshot: Swipeable Deck layout) */}
                  <div className="md:hidden block text-left">
                    <div className="relative h-[480px] w-full flex items-center justify-center">
                      {currentQuestions.map((q, idx) => {
                        const offset = idx - currentMobileIndex;
                        if (offset < -1 || offset > 2) return null;

                        const isSubmitted = submitted[q.id];
                        const feedback = aiFeedback[q.id];
                        const isChecking = checking[q.id];

                        return (
                          <motion.div
                            key={q.id}
                            style={{ zIndex: 100 - offset }}
                            animate={{
                              scale: 1 - offset * 0.05,
                              y: offset * 12,
                              opacity: offset === 0 ? 1 : offset === 1 ? 0.9 : 0.6,
                              pointerEvents: offset === 0 ? 'auto' : 'none',
                            }}
                            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                            className="absolute w-full h-[450px] bg-white border border-slate-200 rounded-[28px] shadow-md flex flex-col justify-between overflow-hidden"
                          >
                            <div className="flex justify-between items-center px-5 py-3 border-b border-slate-100 bg-[#FAF9F5]">
                              <span className="text-[9px] font-black text-slate-400">
                                {idx + 1} of {currentQuestions.length}
                              </span>
                              <span className="text-[9px] font-black bg-white border border-slate-200 px-2 py-0.5 rounded shadow-sm">
                                +{q.marks} XP
                              </span>
                            </div>

                            <div className="p-5 flex-1 overflow-y-auto no-scrollbar space-y-4">
                              <div className="flex gap-2">
                                <span className="text-[8px] font-black bg-slate-100 border border-slate-200 px-2 py-0.5 rounded text-slate-500">
                                  {q.year}
                                </span>
                              </div>
                              <h3 className="font-display font-extrabold text-base text-[#1E1E1E] leading-snug">
                                {q.text}
                              </h3>

                              <div className="space-y-3">
                                {q.options && q.options.length > 0 ? (
                                  <div className="grid grid-cols-1 gap-2.5">
                                    {q.options.map((opt, oi) => {
                                      const isSelected = answers[q.id] === oi.toString();
                                      const isCorrect = q.correct === oi;
                                      let btnCls = 'w-full text-left p-3 rounded-xl text-xs font-bold border transition-all flex items-center shadow-sm ';

                                      if (isSubmitted) {
                                        if (isCorrect) btnCls += 'bg-[#3CD070] text-white border-[#3CD070]';
                                        else if (isSelected) btnCls += 'bg-[#FF6B6B] text-white border-[#FF6B6B]';
                                        else btnCls += 'bg-slate-50 border-slate-100 text-slate-400 opacity-40 shadow-none';
                                      } else {
                                        btnCls += isSelected
                                          ? 'bg-[#FFB236] border-[#FFB236] text-[#1E1E1E]'
                                          : 'bg-[#FAF6F0] border-slate-200 text-[#1E1E1E]';
                                      }

                                      return (
                                        <button
                                          key={oi}
                                          disabled={isSubmitted}
                                          onClick={() => setAnswers(prev => ({ ...prev, [q.id]: oi.toString() }))}
                                          className={btnCls}
                                        >
                                          <span className="w-4 h-4 rounded-full border border-current flex items-center justify-center text-[9px] font-black mr-2 shrink-0">
                                            {String.fromCharCode(65 + oi)}
                                          </span>
                                          <span className="leading-tight text-[11px]">{opt}</span>
                                        </button>
                                      );
                                    })}
                                  </div>
                                ) : (
                                  <textarea
                                    disabled={isSubmitted}
                                    value={answers[q.id] || ''}
                                    onChange={(e) => setAnswers(prev => ({ ...prev, [q.id]: e.target.value }))}
                                    rows={3}
                                    placeholder={
                                      q.type === 'theory'
                                        ? "Write key theory terms (e.g. population inversion)..."
                                        : "Write calculations & formula (e.g. lambda = h/sqrt(2meV))..."
                                    }
                                    className="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:border-[#5D5FEF] bg-[#FAF9F5] text-xs font-bold text-[#1E1E1E]"
                                  />
                                )}
                              </div>

                              {isSubmitted && feedback && (
                                <div className="border border-slate-200 rounded-xl overflow-hidden text-xs">
                                  <div className={`px-3 py-1.5 font-black text-[9px] uppercase ${feedback.correct ? 'bg-[#3CD070]/10 text-[#29B059]' : 'bg-[#FF6B6B]/10 text-[#FF6B6B]'}`}>
                                    {feedback.correct ? 'Verified Correct' : 'Revision Suggested'}
                                  </div>
                                  <div className="p-3 bg-white space-y-1 font-bold text-slate-500">
                                    <p>{feedback.feedback}</p>
                                    <p className="font-mono text-[9px] bg-slate-50 p-2 rounded border border-slate-200 mt-2 text-slate-700 select-all">
                                      {q.explanation}
                                    </p>
                                  </div>
                                </div>
                              )}
                            </div>

                            <div className="p-4 border-t border-slate-100 bg-[#FAF9F5] flex items-center justify-between gap-3">
                              {!isSubmitted ? (
                                <button
                                  disabled={isChecking || !answers[q.id]}
                                  onClick={() => handleAnswerSubmit(q)}
                                  className="w-full py-2.5 bg-[#1E1E1E] text-white font-black text-[10px] uppercase rounded-xl flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                                >
                                  {isChecking ? 'Checking...' : 'Check with AI'}
                                </button>
                              ) : (
                                <span className="text-[10px] font-black text-[#3CD070] uppercase">Completed</span>
                              )}
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>

                    <div className="flex justify-between items-center mt-6 px-4">
                      <button
                        disabled={currentMobileIndex === 0}
                        onClick={() => setCurrentMobileIndex(p => Math.max(0, p - 1))}
                        className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center shadow-sm disabled:opacity-40 transition-all cursor-pointer"
                      >
                        <ChevronLeft className="w-5 h-5 text-[#1E1E1E]" />
                      </button>
                      <span className="text-xs font-black text-slate-500 uppercase">
                        Question {currentMobileIndex + 1} of {currentQuestions.length}
                      </span>
                      <button
                        disabled={currentMobileIndex === currentQuestions.length - 1}
                        onClick={() => setCurrentMobileIndex(p => Math.min(currentQuestions.length - 1, p + 1))}
                        className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center shadow-sm disabled:opacity-40 transition-all cursor-pointer"
                      >
                        <ChevronRight className="w-5 h-5 text-[#1E1E1E]" />
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-24 bg-white border border-slate-200 rounded-3xl shadow-sm">
                  <HelpCircle className="w-12 h-12 text-[#FF6B6B] mx-auto mb-4" />
                  <h3 className="font-display font-black text-xl">No Questions Configured</h3>
                  <p className="text-xs font-bold text-slate-400 max-w-sm mx-auto leading-normal">
                    This subject category does not have practice questions yet. Try another sessional category.
                  </p>
                  <button
                    onClick={() => setStep('categories')}
                    className="mt-6 px-5 py-2.5 bg-[#4FA3F7] border border-slate-200 text-[#1E1E1E] font-bold text-xs rounded-xl cursor-pointer hover:bg-sky-400 transition-all uppercase shadow-sm"
                  >
                    Select Another
                  </button>
                </div>
              )}

            </motion.div>
          )}

        </AnimatePresence>
      </div>

    </div>
  );
}
