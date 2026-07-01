import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Zap, Trophy, CheckCircle2, AlertCircle, HelpCircle, ChevronRight, BookOpen, Star, Sparkles } from 'lucide-react';
import { year1Cycles, branches, type Subject, type Question, QUESTIONS_DB } from '@/data/studyMaterial';

import FloatingDock from '@/components/ui/FloatingDock';
import BentoCard from '@/components/ui/BentoCard';
import FolderTab from '@/components/ui/FolderTab';

type Step = 'course' | 'year' | 'branch' | 'subject' | 'quiz';

export default function Quiz() {
  const [step, setStep] = useState<Step>('course');
  const [_course, setCourse] = useState<string>('');
  const [year, setYear] = useState<number>(0);
  const [branchOrCycle, setBranchOrCycle] = useState<string>('');
  const [subject, setSubject] = useState<Subject | null>(null);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState<Record<string, boolean>>({});
  const [score, setScore] = useState(0);

  const questions: Question[] = subject ? (QUESTIONS_DB[subject.id] || []) : [];

  const getSubjectList = (): Subject[] => {
    if (year === 1) {
      const cycle = year1Cycles.find(c => c.id === branchOrCycle);
      return cycle ? cycle.subjects : [];
    }
    const branch = branches.find(b => b.id === branchOrCycle);
    return branch ? branch.subjects : [];
  };

  const handleAnswer = (qId: string, optIdx: number, correctIdx: number, marks: number) => {
    if (submitted[qId]) return;
    setAnswers(p => ({ ...p, [qId]: optIdx }));
    setSubmitted(p => ({ ...p, [qId]: true }));
    if (optIdx === correctIdx) setScore(p => p + marks);
  };

  const progressPct = questions.length > 0 ? (Object.keys(submitted).length / questions.length) * 100 : 0;

  return (
    <div className="min-h-screen bg-graph-paper text-[#1E1E1E] antialiased pb-28">
      {/* Decorative vector doodles */}
      <div className="absolute top-20 left-10 w-8 h-8 border-2 border-[#1E1E1E] bg-[#FF7EB9] rounded-full rotate-45 animate-float pointer-events-none hidden md:block" />
      <div className="absolute top-[500px] right-8 w-10 h-10 border-2 border-[#1E1E1E] bg-[#FFB236] rounded-xl rotate-12 animate-float-delayed pointer-events-none hidden md:block" />

      {/* Nav */}
      <nav className="max-w-4xl mx-auto px-5 pt-6 flex items-center justify-between">
        {step !== 'course' ? (
          <button 
            onClick={() => {
              if (step === 'quiz') { setStep('subject'); setSubject(null); }
              else if (step === 'subject') { setStep('branch'); }
              else if (step === 'branch') { setStep('year'); }
              else if (step === 'year') { setStep('course'); }
            }} 
            className="w-10 h-10 bg-white border-3 border-[#1E1E1E] rounded-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_#1E1E1E] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_#1E1E1E] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#1E1E1E] transition-all cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        ) : (
          <Link 
            to="/" 
            className="w-10 h-10 bg-white border-3 border-[#1E1E1E] rounded-2xl flex items-center justify-center shadow-[3px_3px_0px_0px_#1E1E1E] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_#1E1E1E] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#1E1E1E] transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
        )}

        <div className="flex items-center gap-2 bg-white border-3 border-[#1E1E1E] px-4 py-2 rounded-2xl shadow-[3px_3px_0px_0px_#1E1E1E]">
          <div className="w-6 h-6 bg-[#FFB236] border-2 border-[#1E1E1E] rounded-lg flex items-center justify-center">
            <Trophy className="w-3.5 h-3.5 text-[#1E1E1E] fill-[#1E1E1E]" />
          </div>
          <span className="font-display font-bold text-[#1E1E1E] text-base tracking-tight">MUJSTUDY</span>
        </div>

        <div className="flex items-center gap-2 bg-white border-2 border-[#1E1E1E] px-3 py-1.5 rounded-xl shadow-[2px_2px_0px_0px_#1E1E1E] text-xs font-bold uppercase">
          {step === 'quiz' && (
            <div className="flex items-center gap-1.5 text-[#FFB236]">
              <Trophy className="w-4 h-4 fill-[#FFB236]" />
              <span className="text-[#1E1E1E]">{score} XP</span>
            </div>
          )}
          {step !== 'quiz' && (
            <span>
              {step === 'course' && 'STEP 01'}
              {step === 'year' && 'STEP 02'}
              {(step === 'branch' || step === 'subject') && 'STEP 03'}
            </span>
          )}
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-5 py-12">
        <AnimatePresence mode="wait">
          {/* ── STEP: COURSE ── */}
          {step === 'course' && (
            <motion.div
              key="course"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-8"
            >
              <div className="text-center space-y-3">
                <div className="inline-flex items-center gap-2 bg-white border-2 border-[#1E1E1E] px-3.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest shadow-[2.5px_2.5px_0px_0px_#1E1E1E]">
                  <Zap className="w-3.5 h-3.5 text-[#FFB236] fill-[#FFB236]" /> TEST YOUR KNOWLEDGE
                </div>
                <h1 className="font-display font-extrabold text-4xl md:text-5xl text-[#1E1E1E] uppercase">
                  Select Your Program
                </h1>
                <p className="text-slate-500 font-bold text-xs max-w-sm mx-auto">
                  Choose your department to begin diagnostic practice sessions with matching subject topics.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {[
                  { id: 'B.Tech', emoji: '🎓', label: 'B.Tech Program', desc: 'Engineering subjects from MUJ archive', color: 'coral' as const, available: true },
                  { id: 'BBA', emoji: '💼', label: 'BBA Program', desc: 'Commerce and Management streams', color: 'pink' as const, available: false },
                  { id: 'B.Com', emoji: '📈', label: 'B.Com Program', desc: 'Finance and Accountancy subjects', color: 'blue' as const, available: false },
                  { id: 'LLB', emoji: '⚖️', label: 'LLB Program', desc: 'Constitutional and Corporate Law', color: 'mint' as const, available: false },
                ].map((c) => (
                  <button
                    key={c.id}
                    disabled={!c.available}
                    onClick={() => { setCourse(c.id); setStep('year'); }}
                    className="text-left relative w-full"
                  >
                    <BentoCard
                      bgColor={c.color}
                      hoverScale={c.available}
                      className={!c.available ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                    >
                      <div className="flex flex-col justify-between h-36">
                        <div className="flex justify-between items-start">
                          <span className="text-3xl">{c.emoji}</span>
                          {!c.available && (
                            <span className="text-[8px] font-extrabold bg-[#1E1E1E] text-white px-2 py-0.5 rounded border border-white/20 uppercase">
                              COMING SOON
                            </span>
                          )}
                        </div>
                        <div>
                          <h3 className="font-display font-extrabold text-xl text-[#1E1E1E] uppercase leading-tight">
                            {c.id}
                          </h3>
                          <p className="text-[10px] font-bold text-[#1E1E1E] opacity-75 leading-tight mt-1">
                            {c.desc}
                          </p>
                        </div>
                      </div>
                    </BentoCard>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── STEP: YEAR ── */}
          {step === 'year' && (
            <motion.div
              key="year"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-8"
            >
              <div className="text-center space-y-3">
                <div className="inline-flex text-[10px] font-extrabold uppercase bg-white border-2 border-[#1E1E1E] px-3 py-1 rounded-full shadow-[2px_2px_0px_0px_#1E1E1E]">
                  B.TECH • TEST MATCH
                </div>
                <h1 className="font-display font-extrabold text-4xl md:text-5xl text-[#1E1E1E] uppercase">
                  Select Your Academic Year
                </h1>
                <p className="text-slate-500 font-bold text-xs">Which level are you currently test prepping for?</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { y: 1, label: 'Year 01', tag: 'FOUNDATION', desc: 'Two core cycles', color: 'blue' as const, emoji: '🔬' },
                  { y: 2, label: 'Year 02', tag: 'SPECIALIZED', desc: 'Core branch subjects', color: 'purple' as const, emoji: '🚀' },
                  { y: 3, label: 'Year 03', tag: 'ADVANCED', desc: 'Major engineering electives', color: 'pink' as const, emoji: '⚡' },
                  { y: 4, label: 'Year 04', tag: 'GRADUATION', desc: 'Capstone & Placements', color: 'mint' as const, emoji: '🎓' },
                ].map(({ y, label, tag, desc, color, emoji }) => (
                  <button
                    key={y}
                    onClick={() => { setYear(y); setBranchOrCycle(y === 1 ? 'physics-cycle' : 'aiml'); setStep('branch'); }}
                    className="text-left cursor-pointer"
                  >
                    <FolderTab title={label} subtitle={tag} emoji={emoji} color={color}>
                      <div className="w-[85%] h-36 bg-white border-2 border-[#1E1E1E] rounded-xl shadow-[3px_3px_0px_0px_#1E1E1E] p-4 flex flex-col justify-between">
                        <p className="text-[10px] font-bold text-slate-500">{desc}</p>
                        <span className="text-[8px] font-extrabold uppercase bg-slate-100 border border-[#1E1E1E] px-1.5 py-0.5 rounded w-fit">
                          Select Level
                        </span>
                      </div>
                    </FolderTab>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── STEP: BRANCH / CYCLE ── */}
          {step === 'branch' && (
            <motion.div
              key="branch"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-8"
            >
              <div className="text-center space-y-3">
                <div className="inline-flex text-[10px] font-extrabold uppercase bg-white border-2 border-[#1E1E1E] px-3 py-1 rounded-full shadow-[2px_2px_0px_0px_#1E1E1E]">
                  YEAR 0{year} • SPECIALIZATION
                </div>
                <h1 className="font-display font-extrabold text-4xl md:text-5xl text-[#1E1E1E] uppercase">
                  {year === 1 ? 'Select Your Academic Cycle' : 'Select Branch'}
                </h1>
              </div>

              {year === 1 ? (
                <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                  {year1Cycles.map((cycle, i) => (
                    <BentoCard
                      key={cycle.id}
                      bgColor={i === 0 ? 'coral' : 'blue'}
                      onClick={() => { setBranchOrCycle(cycle.id); setStep('subject'); }}
                    >
                      <div className="flex flex-col justify-between h-44">
                        <div className="flex justify-between items-start">
                          <span className="text-3xl">{cycle.emoji}</span>
                          <span className="text-[9px] font-extrabold bg-white border-2 border-[#1E1E1E] px-2 py-0.5 rounded-full">
                            {cycle.subjectPreview}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-display font-extrabold text-2xl text-[#1E1E1E] uppercase leading-tight">
                            {cycle.name}
                          </h3>
                          <p className="text-[10px] font-bold text-[#1E1E1E] opacity-75 mt-1 leading-normal">
                            {cycle.description}
                          </p>
                        </div>
                      </div>
                    </BentoCard>
                  ))}
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {branches.map((b, i) => (
                    <BentoCard
                      key={b.id}
                      bgColor={['yellow', 'purple', 'pink', 'mint'][i % 4] as any}
                      onClick={() => { setBranchOrCycle(b.id); setStep('subject'); }}
                    >
                      <div className="flex flex-col justify-between h-36">
                        <div className="flex justify-between items-start">
                          <span className="text-2xl">{b.emoji}</span>
                          <span className="text-[8px] font-extrabold bg-white border-2 border-[#1E1E1E] px-1.5 py-0.5 rounded-full shadow-[1px_1px_0px_0px_#1E1E1E]">
                            {b.subjects.length} Subjects
                          </span>
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-base text-[#1E1E1E] uppercase tracking-wide truncate">
                            {b.shortName}
                          </h3>
                          <p className="text-[9.5px] font-bold text-[#1E1E1E] opacity-75 line-clamp-2 leading-tight mt-0.5">
                            {b.description}
                          </p>
                        </div>
                      </div>
                    </BentoCard>
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {/* ── STEP: SUBJECT ── */}
          {step === 'subject' && (
            <motion.div
              key="subject"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-8"
            >
              <div className="text-center space-y-3">
                <div className="inline-flex text-[10px] font-extrabold uppercase bg-white border-2 border-[#1E1E1E] px-3 py-1 rounded-full shadow-[2px_2px_0px_0px_#1E1E1E]">
                  YEAR 0{year} • BUNDLES
                </div>
                <h1 className="font-display font-extrabold text-4xl md:text-5xl text-[#1E1E1E] uppercase">
                  Select a Notebook
                </h1>
                <p className="text-slate-500 font-bold text-xs">Choose the subject database to fetch active practice questions.</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {getSubjectList().map((sub, i) => {
                  const hasQuestions = (QUESTIONS_DB[sub.id] || []).length > 0;
                  return (
                    <button
                      key={sub.id}
                      disabled={!hasQuestions}
                      onClick={() => { setSubject(sub); setAnswers({}); setSubmitted({}); setScore(0); setStep('quiz'); }}
                      className="text-left w-full cursor-pointer"
                    >
                      <FolderTab
                        title={sub.shortName}
                        subtitle={sub.code}
                        emoji={sub.emoji}
                        color={['yellow', 'blue', 'pink', 'mint'][i % 4] as any}
                        className={!hasQuestions ? 'opacity-50 cursor-not-allowed' : ''}
                      >
                        <div className="w-[85%] h-36 bg-white border-2 border-[#1E1E1E] rounded-xl shadow-[3px_3px_0px_0px_#1E1E1E] p-4 flex flex-col justify-between">
                          <span className="text-[8px] font-extrabold bg-[#1E1E1E] text-white px-2 py-0.5 rounded w-fit uppercase">
                            {hasQuestions ? `${(QUESTIONS_DB[sub.id] || []).length} MATCHES` : 'SOON'}
                          </span>
                          <p className="text-[9px] font-bold text-slate-500 line-clamp-3 leading-normal mt-2">
                            {sub.description}
                          </p>
                        </div>
                      </FolderTab>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* ── STEP: QUIZ ── */}
          {step === 'quiz' && subject && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-8"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row items-start justify-between gap-6 border-b-3 border-dashed border-[#1E1E1E]/20 pb-6">
                <div>
                  <button 
                    onClick={() => { setStep('subject'); setSubject(null); }} 
                    className="flex items-center gap-1 text-[10px] text-slate-500 hover:text-slate-900 font-extrabold uppercase bg-white border-2 border-[#1E1E1E] px-2.5 py-1 rounded-full shadow-[1.5px_1.5px_0px_0px_#1E1E1E] w-fit mb-4 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back
                  </button>
                  <h2 className="font-display font-extrabold text-3xl uppercase text-[#1E1E1E] flex items-center gap-2">
                    <span>{subject.emoji}</span>
                    <span>{subject.name}</span>
                  </h2>
                  <p className="text-xs font-bold text-slate-500 mt-1 uppercase tracking-wider">{subject.code} • REAL PYQ BOARD</p>
                </div>

                <div className="bg-[#FFB236] border-3 border-[#1E1E1E] rounded-3xl p-4 text-center min-w-[120px] shadow-[3.5px_3.5px_0px_0px_#1E1E1E]">
                  <Trophy className="w-5 h-5 text-[#1E1E1E] fill-[#1E1E1E] mx-auto mb-1" />
                  <p className="font-display font-bold text-[#1E1E1E] text-2xl leading-none">{score}</p>
                  <p className="text-[9px] font-extrabold text-[#1E1E1E]/80 uppercase mt-1">XP Score</p>
                </div>
              </div>

              {/* Progress Bar (Chunky Neo-Brutalist design) */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[10px] font-extrabold uppercase text-slate-500">
                  <span>{Object.keys(submitted).length} / {questions.length} MATCHES</span>
                  <span>{Math.round(progressPct)}% COMPLETE</span>
                </div>
                <div className="h-4 bg-white border-3 border-[#1E1E1E] rounded-full overflow-hidden shadow-[2px_2px_0px_0px_#1E1E1E]">
                  <motion.div
                    className="h-full bg-[#3CD070] border-r-3 border-[#1E1E1E] rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPct}%` }}
                    transition={{ type: 'spring', stiffness: 80, damping: 15 }}
                  />
                </div>
              </div>

              {/* Questions */}
              {questions.length > 0 ? (
                <div className="space-y-8">
                  {questions.map((q, qi) => {
                    const isSubmitted = submitted[q.id];
                    const selectedOpt = answers[q.id];
                    return (
                      <div 
                        key={q.id} 
                        className="bg-white border-3 border-[#1E1E1E] rounded-3xl p-6 shadow-[5px_5px_0px_0px_#1E1E1E] space-y-4"
                      >
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[9px] font-extrabold uppercase bg-[#FF7EB9]/10 border-2 border-[#FF7EB9] text-[#FF7EB9] px-2 py-0.5 rounded-full">{q.topic}</span>
                          <span className="text-[9px] font-extrabold uppercase bg-[#4FA3F7]/10 border-2 border-[#4FA3F7] text-[#4FA3F7] px-2 py-0.5 rounded-full">{q.year}</span>
                          <span className="text-[9px] font-extrabold uppercase bg-[#FFB236]/10 border-2 border-[#FFB236] text-[#FFB236] px-2 py-0.5 rounded-full">+{q.marks} XP</span>
                        </div>
                        
                        <p className="font-display font-bold text-[#1E1E1E] text-sm leading-relaxed">
                          <span className="text-[#FF6B6B] mr-1.5 uppercase">Q{qi + 1}.</span>{q.text}
                        </p>

                        <div className="grid sm:grid-cols-2 gap-3.5">
                          {q.options.map((opt, oi) => {
                            const isSelected = selectedOpt === oi;
                            const isCorrect = q.correct === oi;
                            
                            // Styled like beautiful speech bubbles from image 4
                            let cls = 'w-full text-left p-4 rounded-2xl text-xs font-bold border-2 transition-all flex items-center shadow-[3px_3px_0px_0px_#1E1E1E] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#1E1E1E] ';
                            
                            // Left bubbles sharp bottom right, Right bubbles sharp bottom left
                            if (oi % 2 === 0) {
                              cls += 'bubble-tr-bl-sharp ';
                            } else {
                              cls += 'bubble-tl-br-sharp ';
                            }

                            if (isSubmitted) {
                              if (isCorrect) {
                                cls += 'bg-[#3CD070] border-[#1E1E1E] text-white shadow-[1px_1px_0px_0px_#1E1E1E] translate-y-[2px] translate-x-[2px]';
                              } else if (isSelected) {
                                cls += 'bg-[#FF6B6B] border-[#1E1E1E] text-white shadow-[1px_1px_0px_0px_#1E1E1E] translate-y-[2px] translate-x-[2px]';
                              } else {
                                cls += 'bg-slate-50 border-slate-200 text-slate-400 shadow-none opacity-40';
                              }
                            } else {
                              cls += 'bg-[#F9F5EE] border-[#1E1E1E] text-[#1E1E1E] hover:bg-white hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_#1E1E1E] cursor-pointer';
                            }

                            return (
                              <button
                                key={oi}
                                disabled={isSubmitted}
                                onClick={() => handleAnswer(q.id, oi, q.correct, q.marks)}
                                className={cls}
                              >
                                <span className="inline-flex w-5 h-5 rounded-full border-2 border-current items-center justify-center text-[9px] font-black mr-2.5 flex-shrink-0">
                                  {String.fromCharCode(65 + oi)}
                                </span>
                                <span className="flex-1 leading-normal">{opt}</span>
                              </button>
                            );
                          })}
                        </div>

                        {/* Animated Speech Bubble Explanation */}
                        {isSubmitted && (
                          <motion.div 
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className={`p-4 rounded-2xl border-2 flex items-start gap-3 shadow-[2.5px_2.5px_0px_0px_#1E1E1E] bubble-tl-br-sharp ${
                              selectedOpt === q.correct 
                                ? 'bg-[#3CD070]/10 text-[#29B059] border-[#3CD070]' 
                                : 'bg-[#FF6B6B]/10 text-[#FF6B6B] border-[#FF6B6B]'
                            }`}
                          >
                            {selectedOpt === q.correct
                              ? <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#29B059]" />
                              : <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#FF6B6B]" />}
                            <div className="text-xs font-bold">
                              <p className="uppercase font-display mb-0.5">{selectedOpt === q.correct ? '🎉 Correct Match!' : '❌ Incorrect Match'}</p>
                              <p className="opacity-85 font-medium leading-relaxed mt-1 text-[#1E1E1E]">{q.explanation}</p>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    );
                  })}

                  {/* Completion Card banner */}
                  {Object.keys(submitted).length === questions.length && questions.length > 0 && (
                    <motion.div 
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="bg-[#1E1E1E] text-white border-4 border-[#1E1E1E] rounded-3xl p-8 text-center shadow-[8px_8px_0px_0px_#FFB236]"
                    >
                      <Trophy className="w-16 h-16 text-[#FFB236] fill-[#FFB236] mx-auto mb-4 animate-float" />
                      <h3 className="font-display font-extrabold text-3xl uppercase text-[#FFB236] leading-none mb-3">Quiz Complete!</h3>
                      <p className="font-bold text-sm text-slate-300">
                        Total score obtained: <span className="text-white bg-[#FF7EB9] px-3 py-1 rounded-full border-2 border-white/20 inline-block rotate-[-2deg] font-display ml-1">{score} XP</span>
                      </p>
                      <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mt-2">
                        out of {questions.reduce((sum, q) => sum + q.marks, 0)} total marks
                      </p>
                      
                      <div className="flex items-center justify-center gap-4 mt-8">
                        <button
                          onClick={() => { setSubmitted({}); setAnswers({}); setScore(0); }}
                          className="px-5 py-3 bg-[#3CD070] border-3 border-[#1E1E1E] text-[#1E1E1E] rounded-2xl font-display font-bold text-xs shadow-[3px_3px_0px_0px_#1E1E1E] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_#1E1E1E] active:translate-x-[1px] active:translate-y-[1px] cursor-pointer transition-all"
                        >
                          Try Again
                        </button>
                        <button
                          onClick={() => { setStep('subject'); setSubject(null); setSubmitted({}); setAnswers({}); setScore(0); }}
                          className="px-5 py-3 bg-white border-3 border-[#1E1E1E] text-[#1E1E1E] rounded-2xl font-display font-bold text-xs shadow-[3px_3px_0px_0px_#1E1E1E] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_#1E1E1E] active:translate-x-[1px] active:translate-y-[1px] cursor-pointer transition-all"
                        >
                          New Subject
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              ) : (
                <div className="text-center py-16 bg-white border-3 border-[#1E1E1E] rounded-3xl shadow-[5px_5px_0px_0px_#1E1E1E] space-y-4">
                  <HelpCircle className="w-12 h-12 text-[#FF6B6B] mx-auto" />
                  <h3 className="font-display font-bold text-lg uppercase">No Questions Found</h3>
                  <p className="text-xs font-bold text-slate-400 max-w-sm mx-auto leading-normal">
                    Practice sheets for this subject are being processed and will be updated shortly.
                  </p>
                  <button 
                    onClick={() => { setStep('subject'); setSubject(null); }} 
                    className="px-5 py-3 bg-[#4FA3F7] border-3 border-[#1E1E1E] text-[#1E1E1E] rounded-2xl font-display font-bold text-xs shadow-[3px_3px_0px_0px_#1E1E1E] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_#1E1E1E] active:translate-x-[1px] active:translate-y-[1px] cursor-pointer transition-all uppercase"
                  >
                    Select Another
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <FloatingDock />
    </div>
  );
}
