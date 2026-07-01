import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BookOpen, Zap, ArrowRight, ChevronRight, Play, Download,
  ArrowLeft, RefreshCw, Star
} from 'lucide-react';
import {
  year1Cycles, branches, nonBtechCourses, QUESTIONS_DB,
  type Subject, type NonBtechCourse, type Question
} from '@/data/studyMaterial';

import FloatingDock from '@/components/ui/FloatingDock';
import BentoCard from '@/components/ui/BentoCard';
import FolderTab from '@/components/ui/FolderTab';

type ResourceTab = 'notes' | 'pyqs' | 'yt';

export default function Home() {
  // ── NON-B.TECH WIZARD STATE ──
  const [nbCourse, setNbCourse] = useState<NonBtechCourse | null>(null);
  const [nbYear, setNbYear] = useState<number | null>(null);
  const [nbSubject, setNbSubject] = useState<Subject | null>(null);
  const [nbTab, setNbTab] = useState<ResourceTab>('notes');

  // ── MASTER ARENA STATE ──
  const [arenaOpen, setArenaOpen] = useState(false);
  const [arenaStep, setArenaStep] = useState<'course' | 'year' | 'branch' | 'subject' | 'play'>('course');
  const [arenaCourse, setArenaCourse] = useState<string>('');
  const [arenaYear, setArenaYear] = useState<number>(0);
  const [arenaBranchOrCycle, setArenaBranchOrCycle] = useState<string>('');
  const [arenaSubject, setArenaSubject] = useState<Subject | null>(null);
  const [arenaScore, setArenaScore] = useState(0);
  const [arenaAnswers, setArenaAnswers] = useState<Record<string, number>>({});
  const [arenaSubmitted, setArenaSubmitted] = useState<Record<string, boolean>>({});

  // ── Scroll Helper ──
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ── Helpers for Master Arena ──
  const getArenaBranchList = () => {
    if (arenaCourse === 'B.Tech') {
      if (arenaYear === 1) {
        return year1Cycles.map(c => ({ id: c.id, name: c.name, emoji: c.emoji }));
      }
      return branches.map(b => ({ id: b.id, name: b.name, emoji: b.emoji }));
    }
    return [];
  };

  const getArenaSubjectList = (): Subject[] => {
    if (arenaCourse === 'B.Tech') {
      if (arenaYear === 1) {
        const cycle = year1Cycles.find(c => c.id === arenaBranchOrCycle);
        return cycle ? cycle.subjects : [];
      }
      const branch = branches.find(b => b.id === arenaBranchOrCycle);
      return branch ? branch.subjects : [];
    } else {
      const course = nonBtechCourses.find(c => c.id === arenaCourse.toLowerCase());
      if (course) {
        const yr = course.years.find(y => y.year === arenaYear);
        return yr ? yr.subjects : [];
      }
    }
    return [];
  };

  const currentQuestions: Question[] = arenaSubject ? (QUESTIONS_DB[arenaSubject.id] || []) : [];

  const questionsByTopic: Record<string, Question[]> = {};
  currentQuestions.forEach(q => {
    if (!questionsByTopic[q.topic]) {
      questionsByTopic[q.topic] = [];
    }
    questionsByTopic[q.topic].push(q);
  });

  const handleArenaAnswer = (qId: string, optIdx: number, correctIdx: number, marks: number) => {
    if (arenaSubmitted[qId]) return;
    setArenaAnswers(p => ({ ...p, [qId]: optIdx }));
    setArenaSubmitted(p => ({ ...p, [qId]: true }));
    if (optIdx === correctIdx) {
      setArenaScore(p => p + marks);
    }
  };

  return (
    <div className="min-h-screen bg-graph-paper text-[#1E1E1E] antialiased pb-28">
      {/* Playful Floating Elements/Doodles for Gen Z Vibe */}
      <div className="absolute top-20 left-10 w-12 h-12 border-3 border-[#1E1E1E] bg-[#FFB236] rounded-xl rotate-12 animate-float pointer-events-none hidden md:block" />
      <div className="absolute top-48 right-16 w-10 h-10 border-3 border-[#1E1E1E] bg-[#FF7EB9] rounded-full animate-float-delayed pointer-events-none hidden md:block" />
      <div className="absolute top-[600px] left-8 w-8 h-8 border-3 border-[#1E1E1E] bg-[#3CD070] rotate-45 animate-float-side pointer-events-none hidden md:block" />

      {/* Header / Brand */}
      <header className="max-w-6xl mx-auto px-6 pt-6 flex justify-between items-center">
        <div className="flex items-center gap-2.5 bg-white border-3 border-[#1E1E1E] px-4 py-2 rounded-2xl shadow-[3px_3px_0px_0px_#1E1E1E]">
          <div className="w-7 h-7 bg-[#FF6B6B] border-2 border-[#1E1E1E] rounded-lg flex items-center justify-center">
            <BookOpen className="w-4 h-4 text-white" />
          </div>
          <span className="font-display font-bold text-[#1E1E1E] text-lg tracking-tight">MUJSTUDY</span>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/quiz"
            className="bg-white border-2 border-[#1E1E1E] px-4 py-2 rounded-xl text-xs font-bold shadow-[2px_2px_0px_0px_#1E1E1E] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_#1E1E1E] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#1E1E1E] transition-all"
          >
            📋 Standard Quiz
          </Link>
          <a
            href="https://github.com/MaahiJoshi14/STUDY-MATERIAL"
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 bg-white border-2 border-[#1E1E1E] rounded-xl flex items-center justify-center shadow-[2px_2px_0px_0px_#1E1E1E] hover:bg-slate-50"
          >
            <Star className="w-4 h-4 text-[#FFB236] fill-[#FFB236]" />
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-12 text-center relative z-10">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-[#FAF6F0] border-2 border-[#1E1E1E] text-xs font-bold px-4 py-1.5 rounded-full shadow-[2.5px_2.5px_0px_0px_#1E1E1E] mb-6"
        >
          <Star className="w-3.5 h-3.5 text-[#FFB236] fill-[#FFB236]" />
          <span>NEVER STUDY BORING AGAIN</span>
        </motion.div>

        <h1 className="font-display font-extrabold text-5xl md:text-7xl text-[#1E1E1E] tracking-tight leading-[0.95] mb-6 uppercase">
          STUDY <span className="bg-[#4FA3F7] px-3 py-1 border-3 border-[#1E1E1E] inline-block rotate-[-2deg] rounded-2xl shadow-[4px_4px_0px_0px_#1E1E1E]">SMARTER</span><br />
          SCORE <span className="bg-[#FF7EB9] px-3 py-1 border-3 border-[#1E1E1E] inline-block rotate-[3deg] rounded-2xl shadow-[4px_4px_0px_0px_#1E1E1E] font-display">HIGHER</span>
        </h1>

        <p className="text-[#1E1E1E] text-sm md:text-base font-bold max-w-lg mx-auto leading-relaxed mb-8 opacity-80">
          Unlock premium study guides, folderized PYQs, and interactive topic play arenas designed for Manipal students.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => scrollToId('btech-division')}
            className="px-6 py-3.5 bg-[#FF6B6B] border-3 border-[#1E1E1E] text-white rounded-2xl font-display font-bold text-sm shadow-[4px_4px_0px_0px_#1E1E1E] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#1E1E1E] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#1E1E1E] transition-all cursor-pointer"
          >
            🔥 B.Tech Folders
          </button>
          <button
            onClick={() => scrollToId('other-streams')}
            className="px-6 py-3.5 bg-white border-3 border-[#1E1E1E] text-[#1E1E1E] rounded-2xl font-display font-bold text-sm shadow-[4px_4px_0px_0px_#1E1E1E] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#1E1E1E] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#1E1E1E] transition-all cursor-pointer"
          >
            ⚡ Other Streams
          </button>
        </div>
      </section>

      {/* SECTION 1: Select Academic Year (B.Tech Folder Grid) */}
      <section id="btech-division" className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center mb-10">
          <span className="text-[10px] font-extrabold uppercase bg-[#FAF6F0] border-2 border-[#1E1E1E] px-3 py-1 rounded-full shadow-[2px_2px_0px_0px_#1E1E1E] mb-3">
            B.TECH DIVISION
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#1E1E1E] uppercase text-center">
            Select Academic Year
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              y: 1,
              title: 'Year 01',
              subtitle: 'FOUNDATION',
              emoji: '🔬',
              color: 'blue' as const,
              bullets: ['Physics Cycle', 'Chemistry Cycle'],
            },
            {
              y: 2,
              title: 'Year 02',
              subtitle: 'SPECIALIZED',
              emoji: '🚀',
              color: 'purple' as const,
              bullets: ['Core Subjects', 'Labs'],
            },
            {
              y: 3,
              title: 'Year 03',
              subtitle: 'ELECTIVES',
              emoji: '⚡',
              color: 'pink' as const,
              bullets: ['Mini Projects', 'Electives'],
            },
            {
              y: 4,
              title: 'Year 04',
              subtitle: 'GRADUATION',
              emoji: '🎓',
              color: 'mint' as const,
              bullets: ['Capstone Project', 'Placements'],
            },
          ].map(({ y, title, subtitle, emoji, color, bullets }) => (
            <Link key={y} to={`/explore?year=${y}`}>
              <FolderTab
                title={title}
                subtitle={subtitle}
                emoji={emoji}
                color={color}
              >
                {/* Custom animated paper list inside the folder */}
                <div className="w-[85%] h-36 bg-white border-2 border-[#1E1E1E] rounded-xl shadow-[3px_3px_0px_0px_#1E1E1E] rotate-[-2deg] p-4 flex flex-col justify-between">
                  <div className="flex justify-between items-center">
                    <span className="text-xl">{emoji}</span>
                    <span className="text-[9px] font-extrabold uppercase bg-slate-100 border border-[#1E1E1E] px-1.5 py-0.5 rounded">MUJ</span>
                  </div>
                  <div className="space-y-1">
                    {bullets.map(b => (
                      <div key={b} className="flex items-center gap-1.5 text-[9px] font-extrabold text-slate-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B6B]" />
                        {b}
                      </div>
                    ))}
                  </div>
                </div>
              </FolderTab>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 2: BEYOND ENGINEERING & MASTER ARENA (Side-by-Side Bento) */}
      <section id="other-streams" className="max-w-6xl mx-auto px-6 py-12 border-t-3 border-dashed border-[#1E1E1E]/20">
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          
          {/* Left Column: Non-Btech Explorer */}
          <BentoCard bgColor="cream" hoverScale={false} className="flex flex-col justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-3xl font-display font-extrabold bg-[#FFB236] border-2 border-[#1E1E1E] px-3 py-1 rounded-xl rotate-[-2deg] shadow-[2.5px_2.5px_0px_0px_#1E1E1E]">BEYOND</span>
                <span className="text-3xl font-display font-bold text-slate-500 italic">ENGINEERING</span>
              </div>
              <p className="text-xs font-bold leading-relaxed text-slate-600 max-w-md">
                We've built specialized portals for Commerce, Management, and Law students to ensure excellence across all faculties.
              </p>
            </div>

            {/* Dynamic Interactive Mini Flow for Non-Btech */}
            <div className="w-full mt-4">
              {!nbCourse ? (
                <div className="bg-white border-3 border-[#1E1E1E] rounded-3xl shadow-[4px_4px_0px_0px_#1E1E1E] overflow-hidden">
                  {[
                    { id: 'bba', name: '💼 BBA STREAM', color: 'bg-[#FF7EB9]/10 hover:bg-[#FF7EB9]/25' },
                    { id: 'bcom', name: '📈 B.COM STREAM', color: 'bg-[#4FA3F7]/10 hover:bg-[#4FA3F7]/25' },
                    { id: 'llb', name: '⚖️ LLB STREAM', color: 'bg-[#3CD070]/10 hover:bg-[#3CD070]/25' },
                  ].map((item, idx, arr) => {
                    const courseData = nonBtechCourses.find(c => c.id === item.id);
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          if (courseData) {
                            setNbCourse(courseData);
                            setNbYear(null);
                            setNbSubject(null);
                          }
                        }}
                        className={`w-full flex items-center justify-between px-5 py-4.5 text-left font-display font-bold text-xs tracking-wider transition-colors cursor-pointer ${item.color} ${
                          idx < arr.length - 1 ? 'border-b-3 border-[#1E1E1E]' : ''
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronRight className="w-4 h-4 text-[#1E1E1E]" />
                      </button>
                    );
                  })}
                </div>
              ) : (
                <motion.div 
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-white border-3 border-[#1E1E1E] rounded-3xl p-5 shadow-[4px_4px_0px_0px_#1E1E1E]"
                >
                  {/* Year Select Screen */}
                  {!nbYear && (
                    <div>
                      <button 
                        onClick={() => setNbCourse(null)} 
                        className="flex items-center gap-1 text-[10px] text-slate-500 hover:text-slate-900 font-extrabold mb-4 uppercase bg-slate-50 border-2 border-[#1E1E1E] px-2.5 py-1 rounded-full shadow-[1.5px_1.5px_0px_0px_#1E1E1E]"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" /> Back to Streams
                      </button>
                      <h4 className="font-display font-bold text-sm text-[#1E1E1E] mb-3 uppercase">Select Year for {nbCourse.name}</h4>
                      <div className="grid grid-cols-3 gap-2.5">
                        {nbCourse.years.map(y => (
                          <button
                            key={y.year}
                            onClick={() => setNbYear(y.year)}
                            className="py-3 px-4 bg-white border-2 border-[#1E1E1E] hover:bg-[#FFB236] rounded-xl text-center font-display font-bold text-xs text-[#1E1E1E] cursor-pointer shadow-[2px_2px_0px_0px_#1E1E1E] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#1E1E1E] transition-all"
                          >
                            Year 0{y.year}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Subject Select Screen */}
                  {nbYear && !nbSubject && (
                    <div>
                      <button 
                        onClick={() => setNbYear(null)} 
                        className="flex items-center gap-1 text-[10px] text-slate-500 hover:text-slate-900 font-extrabold mb-4 uppercase bg-slate-50 border-2 border-[#1E1E1E] px-2.5 py-1 rounded-full shadow-[1.5px_1.5px_0px_0px_#1E1E1E]"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" /> Back to Years
                      </button>
                      <h4 className="font-display font-bold text-sm text-[#1E1E1E] mb-3 uppercase">{nbCourse.name} — Year 0{nbYear}</h4>
                      <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
                        {nbCourse.years.find(y => y.year === nbYear)?.subjects.map(s => (
                          <button
                            key={s.id}
                            onClick={() => { setNbSubject(s); setNbTab('notes'); }}
                            className="w-full p-3 bg-white hover:bg-slate-50 border-2 border-[#1E1E1E] rounded-xl text-left transition-all flex items-center justify-between cursor-pointer shadow-[2px_2px_0px_0px_#1E1E1E] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#1E1E1E]"
                          >
                            <div className="flex items-center gap-2.5">
                              <span className="text-base">{s.emoji}</span>
                              <div>
                                <span className="font-bold text-xs text-[#1E1E1E] block leading-tight">{s.name}</span>
                                <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">{s.code}</span>
                              </div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-[#1E1E1E]" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Resource Viewer Screen */}
                  {nbYear && nbSubject && (
                    <div>
                      <button 
                        onClick={() => setNbSubject(null)} 
                        className="flex items-center gap-1 text-[10px] text-slate-500 hover:text-slate-900 font-extrabold mb-4 uppercase bg-slate-50 border-2 border-[#1E1E1E] px-2.5 py-1 rounded-full shadow-[1.5px_1.5px_0px_0px_#1E1E1E]"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" /> Back to Subjects
                      </button>
                      <div className="mb-4">
                        <span className="text-[9px] text-[#FF6B6B] font-extrabold tracking-wider block uppercase">{nbSubject.code}</span>
                        <h4 className="font-display font-bold text-base text-[#1E1E1E]">{nbSubject.emoji} {nbSubject.name}</h4>
                      </div>

                      {/* Custom folder index tab style selectors */}
                      <div className="flex gap-1.5 mb-4 border-b-2 border-[#1E1E1E] pb-2">
                        {(['notes', 'pyqs', 'yt'] as ResourceTab[]).map(t => (
                          <button
                            key={t}
                            onClick={() => setNbTab(t)}
                            className={`px-3 py-1.5 rounded-t-xl font-display font-bold text-[10px] uppercase border-2 border-b-0 border-[#1E1E1E] transition-all cursor-pointer ${
                              nbTab === t 
                                ? 'bg-[#FFB236] translate-y-[2px] shadow-[0px_2px_0px_0px_#FFB236]' 
                                : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                            }`}
                          >
                            {t === 'yt' ? 'Playlists' : t === 'pyqs' ? 'PYQs' : 'Notes'}
                          </button>
                        ))}
                      </div>

                      <div className="space-y-2 max-h-[180px] overflow-y-auto pr-1">
                        {nbTab === 'notes' && nbSubject.studyMaterials.map((sm, idx) => (
                          <a 
                            key={idx} 
                            href={sm.url} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="flex items-center justify-between p-3 bg-white border-2 border-[#1E1E1E] hover:bg-slate-50 rounded-xl transition-all text-xs font-bold text-[#1E1E1E] shadow-[2px_2px_0px_0px_#1E1E1E]"
                          >
                            <span className="truncate">{sm.title}</span>
                            <Download className="w-3.5 h-3.5 text-slate-400" />
                          </a>
                        ))}
                        {nbTab === 'pyqs' && nbSubject.pyqs.map((pq, idx) => (
                          <a 
                            key={idx} 
                            href={pq.url} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="flex items-center justify-between p-3 bg-white border-2 border-[#1E1E1E] hover:bg-slate-50 rounded-xl transition-all text-xs font-bold text-[#1E1E1E] shadow-[2px_2px_0px_0px_#1E1E1E]"
                          >
                            <span className="truncate">{pq.title}</span>
                            <Download className="w-3.5 h-3.5 text-slate-400" />
                          </a>
                        ))}
                        {nbTab === 'yt' && nbSubject.ytResources.map((yt, idx) => (
                          <a 
                            key={idx} 
                            href={yt.url} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="flex items-center justify-between p-3 bg-white border-2 border-[#1E1E1E] hover:bg-slate-50 rounded-xl transition-all text-xs font-bold text-[#1E1E1E] shadow-[2px_2px_0px_0px_#1E1E1E]"
                          >
                            <span className="truncate">{yt.title}</span>
                            <Play className="w-3.5 h-3.5 text-red-500 fill-current" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          </BentoCard>

          {/* Right Column: Master Arena Active Play Interface */}
          {!arenaOpen ? (
            <BentoCard bgColor="white" className="flex flex-col justify-between items-start min-h-[340px] relative overflow-hidden group">
              {/* Crossed Swords background icon */}
              <div className="absolute right-0 bottom-4 opacity-5 text-[#1E1E1E] pointer-events-none group-hover:scale-105 transition-transform duration-500">
                <svg className="w-64 h-64 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3L21 5L8.5 17.5L5.5 18.5L6.5 15.5L19 3Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <path d="M5 19L3 21L15.5 8.5L18.5 5.5L17.5 8.5L5 19Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
              </div>

              <div className="relative z-10 space-y-3">
                <span className="text-[#FF6B6B] text-[10px] font-extrabold uppercase tracking-widest bg-[#FF6B6B]/10 border-2 border-[#FF6B6B] px-2.5 py-1 rounded-full">
                  ⚡ GAMIFIED PREP
                </span>
                <h3 className="text-4xl font-display font-extrabold text-[#1E1E1E] leading-[0.95] uppercase">
                  MASTER<br />ARENA
                </h3>
                <p className="text-slate-500 text-xs font-bold leading-relaxed max-w-[280px]">
                  Take diagnostic test matches. Test your logic block-by-block, not in static PDFs.
                </p>
              </div>

              <button
                onClick={() => {
                  setArenaOpen(true);
                  setArenaStep('course');
                  setArenaCourse('');
                  setArenaYear(0);
                  setArenaSubject(null);
                }}
                className="relative z-10 flex items-center gap-1.5 text-xs font-display font-bold text-[#1E1E1E] tracking-wider hover:gap-3 transition-all bg-transparent border-0 border-b-3 border-[#1E1E1E] pb-1.5 cursor-pointer outline-none uppercase"
              >
                <span>LAUNCH PORTAL</span> <ArrowRight className="w-4 h-4" />
              </button>
            </BentoCard>
          ) : (
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-[#1E1E1E] border-4 border-[#1E1E1E] rounded-3xl p-6 text-white shadow-[6px_6px_0px_0px_#FFB236]"
            >
              {/* Active Arena Workspace */}
              <div className="flex items-center justify-between border-b-2 border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#FFB236] fill-[#FFB236]" />
                  <span className="font-display font-bold text-sm uppercase tracking-wider">MASTER ARENA</span>
                </div>
                <div className="flex items-center gap-3">
                  {arenaStep === 'play' && (
                    <span className="text-[10px] font-extrabold bg-[#FFB236] text-[#1E1E1E] border-2 border-[#1E1E1E] px-2 py-0.5 rounded-full">
                      {arenaScore} XP
                    </span>
                  )}
                  <button 
                    onClick={() => setArenaOpen(false)} 
                    className="text-[10px] font-extrabold text-slate-400 hover:text-white bg-white/10 border-2 border-white/20 hover:border-white px-2.5 py-1 rounded-full cursor-pointer transition-all"
                  >
                    Exit
                  </button>
                </div>
              </div>

              {/* Steps inside Arena Workspace */}
              {arenaStep === 'course' && (
                <div className="space-y-4">
                  <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">Choose Program</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {['B.Tech', 'BBA', 'B.Com', 'LLB'].map(c => (
                      <button
                        key={c}
                        onClick={() => { setArenaCourse(c); setArenaStep('year'); }}
                        className="p-4 bg-white/5 hover:bg-white/10 border-2 border-white/10 hover:border-[#4FA3F7] rounded-2xl text-left text-xs font-bold cursor-pointer transition-all"
                      >
                        {c === 'B.Tech' ? '🎓 ' : c === 'BBA' ? '💼 ' : c === 'B.Com' ? '📈 ' : '⚖️ '}
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {arenaStep === 'year' && (
                <div className="space-y-4">
                  <button onClick={() => setArenaStep('course')} className="flex items-center gap-1 text-[10px] text-slate-400 hover:text-white uppercase font-bold">
                    <ArrowLeft className="w-3.5 h-3.5" /> Back
                  </button>
                  <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">Select Academic Year</h4>
                  <div className="grid grid-cols-3 gap-2.5">
                    {[1, 2, 3, 4].map(y => {
                      if (arenaCourse !== 'B.Tech' && y === 4) return null;
                      return (
                        <button
                          key={y}
                          onClick={() => {
                            setArenaYear(y);
                            if (arenaCourse === 'B.Tech') {
                              setArenaStep('branch');
                            } else {
                              setArenaStep('subject');
                            }
                          }}
                          className="py-3 px-2 bg-white/5 hover:bg-white/10 border-2 border-white/10 hover:border-[#FF7EB9] rounded-2xl text-xs font-bold cursor-pointer text-center transition-all"
                        >
                          Year 0{y}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {arenaStep === 'branch' && (
                <div className="space-y-4">
                  <button onClick={() => setArenaStep('year')} className="flex items-center gap-1 text-[10px] text-slate-400 hover:text-white uppercase font-bold">
                    <ArrowLeft className="w-3.5 h-3.5" /> Back
                  </button>
                  <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">Select Cycle / Branch</h4>
                  <div className="grid grid-cols-2 gap-2.5 max-h-[220px] overflow-y-auto pr-1 scrollbar-thin">
                    {getArenaBranchList().map(b => (
                      <button
                        key={b.id}
                        onClick={() => { setArenaBranchOrCycle(b.id); setArenaStep('subject'); }}
                        className="p-3 bg-white/5 hover:bg-white/10 border-2 border-white/10 hover:border-[#3CD070] rounded-2xl text-left text-xs font-bold cursor-pointer transition-all truncate"
                      >
                        {b.emoji} {b.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {arenaStep === 'subject' && (
                <div className="space-y-4">
                  <button onClick={() => setArenaStep(arenaCourse === 'B.Tech' ? 'branch' : 'year')} className="flex items-center gap-1 text-[10px] text-slate-400 hover:text-white uppercase font-bold">
                    <ArrowLeft className="w-3.5 h-3.5" /> Back
                  </button>
                  <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">Choose Subject</h4>
                  <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1 scrollbar-thin">
                    {getArenaSubjectList().map(s => {
                      const qty = (QUESTIONS_DB[s.id] || []).length;
                      return (
                        <button
                          key={s.id}
                          onClick={() => {
                            setArenaSubject(s);
                            setArenaAnswers({});
                            setArenaSubmitted({});
                            setArenaScore(0);
                            setArenaStep('play');
                          }}
                          className="w-full p-3.5 bg-white/5 hover:bg-white/10 border-2 border-white/10 hover:border-[#FFB236] rounded-2xl text-left flex items-center justify-between cursor-pointer transition-all"
                        >
                          <span className="text-xs font-bold text-slate-200">{s.emoji} {s.name}</span>
                          <span className="text-[9px] bg-white/15 px-2 py-0.5 rounded border border-white/10 text-slate-350">{qty} Qs</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {arenaStep === 'play' && arenaSubject && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <button onClick={() => setArenaStep('subject')} className="flex items-center gap-1 text-[10px] text-slate-400 hover:text-white uppercase font-bold">
                      <ArrowLeft className="w-3.5 h-3.5" /> Back
                    </button>
                    <button
                      onClick={() => { setArenaAnswers({}); setArenaSubmitted({}); setArenaScore(0); }}
                      className="text-[9px] font-extrabold text-red-400 hover:text-red-300 flex items-center gap-1 bg-transparent border-0 cursor-pointer uppercase"
                    >
                      <RefreshCw className="w-3.5 h-3.5 animate-spin-hover" /> Reset Board
                    </button>
                  </div>
                  <h5 className="font-display font-bold text-xs uppercase tracking-wider text-slate-400">{arenaSubject.name}</h5>

                  <div className="space-y-4 max-h-[300px] overflow-y-auto pr-1 scrollbar-thin">
                    {Object.entries(questionsByTopic).map(([topic, qList]) => (
                      <div key={topic} className="border-2 border-white/10 bg-white/2 rounded-2xl p-4 space-y-4">
                        <span className="text-[10px] font-extrabold text-[#4FA3F7] tracking-wider uppercase block">📂 {topic}</span>
                        {qList.map((q, qi) => {
                          const isSubmitted = arenaSubmitted[q.id];
                          const selectedOpt = arenaAnswers[q.id];
                          return (
                            <div key={q.id} className="bg-black/25 border border-white/5 rounded-xl p-3 space-y-3">
                              <div className="flex justify-between text-[9px] font-extrabold text-slate-400">
                                <span>{q.year}</span>
                                <span className="text-[#FFB236]">+{q.marks} Marks</span>
                              </div>
                              <p className="text-xs font-bold leading-relaxed text-slate-100">
                                <span className="text-slate-500 font-bold mr-1">Q{qi + 1}.</span> {q.text}
                              </p>
                              <div className="grid grid-cols-1 gap-2">
                                {q.options.map((opt, oi) => {
                                  const isSelected = selectedOpt === oi;
                                  const isCorrect = q.correct === oi;
                                  
                                  let btnCls = "w-full text-left p-3 rounded-xl text-xs font-bold border-2 transition-all flex items-center bubble-tr-bl-sharp ";
                                  
                                  if (isSubmitted) {
                                    if (isCorrect) {
                                      btnCls += "bg-emerald-500/10 border-emerald-500/50 text-emerald-400";
                                    } else if (isSelected) {
                                      btnCls += "bg-red-500/10 border-red-500/50 text-red-400";
                                    } else {
                                      btnCls += "bg-white/2 border-white/5 text-slate-500 opacity-50";
                                    }
                                  } else {
                                    btnCls += "bg-white/5 border-white/10 hover:border-white hover:bg-white/10 text-slate-300 cursor-pointer shadow-[2px_2px_0px_0px_rgba(255,255,255,0.05)] active:translate-x-[1px] active:translate-y-[1px]";
                                  }
                                  return (
                                    <button
                                      key={oi}
                                      disabled={isSubmitted}
                                      onClick={() => handleArenaAnswer(q.id, oi, q.correct, q.marks)}
                                      className={btnCls}
                                    >
                                      {opt}
                                    </button>
                                  );
                                })}
                              </div>

                              {isSubmitted && (
                                <motion.div 
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  className={`p-3 rounded-xl text-[10px] leading-relaxed border-2 ${
                                    selectedOpt === q.correct
                                      ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                                      : 'bg-red-500/10 text-red-350 border-red-500/30'
                                  }`}
                                >
                                  <p className="font-extrabold uppercase mb-0.5">{selectedOpt === q.correct ? '🎉 Passed' : '❌ Failed'}</p>
                                  <p className="opacity-80 font-medium">{q.explanation}</p>
                                </motion.div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </section>

      {/* Playful Footer */}
      <footer className="border-t-3 border-dashed border-[#1E1E1E]/20 mt-16 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-slate-500 uppercase">
          <span className="font-display font-extrabold text-[#1E1E1E] text-base">MUJSTUDY</span>
          <span>© 2026 MANIPAL UNIVERSITY JAIPUR ARCHIVE</span>
          <div className="flex gap-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#1E1E1E] transition-colors">Instagram</a>
            <a href="https://github.com/MaahiJoshi14/STUDY-MATERIAL" target="_blank" rel="noreferrer" className="hover:text-[#1E1E1E] transition-colors">GitHub</a>
          </div>
        </div>
      </footer>

      {/* Floating Bottom Navigation Pill Dock */}
      <FloatingDock />
    </div>
  );
}
