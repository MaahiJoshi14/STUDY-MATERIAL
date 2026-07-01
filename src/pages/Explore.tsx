import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, BookOpen, FileText, Youtube, ExternalLink,
  ChevronRight, Search, Play, Download, Sparkles
} from 'lucide-react';
import { year1Cycles, branches, type Subject, type Cycle, type Branch } from '@/data/studyMaterial';

import FloatingDock from '@/components/ui/FloatingDock';
import BentoCard from '@/components/ui/BentoCard';
import FolderTab from '@/components/ui/FolderTab';

type Step = 'year' | 'branch' | 'subjects' | 'resources';
type ResourceTab = 'notes' | 'pyqs' | 'yt';

export default function Explore() {
  const queryParams = new URLSearchParams(window.location.search);
  const initialYear = parseInt(queryParams.get('year') || '0', 10);

  const [step, setStep] = useState<Step>(initialYear > 0 ? 'branch' : 'year');
  const [selectedYear, setSelectedYear] = useState<number>(initialYear);
  const [selectedCycle, setSelectedCycle] = useState<Cycle | null>(null);
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [activeTab, setActiveTab] = useState<ResourceTab>('notes');
  const [searchQuery, setSearchQuery] = useState('');

  const subjectList: Subject[] = selectedCycle?.subjects || selectedBranch?.subjects || [];
  const filteredSubjects = subjectList.filter(s =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const stepLabel = () => {
    if (step === 'year') return { num: '01 / 03', name: 'Level' };
    if (step === 'branch') return { num: '02 / 03', name: 'Specialization' };
    return { num: '03 / 03', name: 'Library' };
  };

  const goBack = () => {
    if (step === 'resources') { setSelectedSubject(null); setStep('subjects'); return; }
    if (step === 'subjects') { setSelectedCycle(null); setSelectedBranch(null); setStep('branch'); return; }
    if (step === 'branch') { setSelectedYear(0); setStep('year'); return; }
  };

  const { num: stepNum, name: stepName } = stepLabel();

  return (
    <div className="min-h-screen bg-graph-paper text-[#1E1E1E] antialiased pb-28">
      {/* Decorative dots/stars */}
      <div className="absolute top-20 right-10 w-8 h-8 border-2 border-[#1E1E1E] bg-[#FFB236] rounded rotate-12 animate-float pointer-events-none hidden md:block" />
      <div className="absolute top-96 left-6 w-10 h-10 border-2 border-[#1E1E1E] bg-[#FF7EB9] rounded-full animate-float-delayed pointer-events-none hidden md:block" />

      {/* Nav */}
      <nav className="max-w-6xl mx-auto px-5 pt-6 flex items-center justify-between">
        {step !== 'year' ? (
          <button 
            onClick={goBack} 
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
          <div className="w-6 h-6 bg-[#3CD070] border-2 border-[#1E1E1E] rounded-lg flex items-center justify-center">
            <BookOpen className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="font-display font-bold text-[#1E1E1E] text-base tracking-tight">MUJSTUDY</span>
        </div>

        <div className="flex items-center gap-2 bg-white border-2 border-[#1E1E1E] px-3 py-1.5 rounded-xl shadow-[2px_2px_0px_0px_#1E1E1E] text-xs font-bold uppercase">
          <span className="text-slate-400">STEP {stepNum}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B6B]" />
          <span>{stepName}</span>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-5 py-10">
        <AnimatePresence mode="wait">
          {/* ── STEP: YEAR ── */}
          {step === 'year' && (
            <motion.div
              key="year"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-10"
            >
              <div className="text-center space-y-4">
                <span className="text-[10px] font-extrabold uppercase bg-white border-2 border-[#1E1E1E] px-3 py-1 rounded-full shadow-[2px_2px_0px_0px_#1E1E1E]">
                  YEAR 01 FOUNDATION
                </span>
                <h1 className="font-display font-extrabold text-4xl md:text-5xl text-[#1E1E1E] uppercase">
                  Select Academic Level
                </h1>
                <p className="text-slate-500 font-bold max-w-md mx-auto text-xs leading-relaxed">
                  Choose your level to unlock subject notebooks, previous year papers, and specialized course folders.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { y: 1, label: 'Year 01', tag: 'FOUNDATION', icon: '🔬', desc: 'Common for all engineering branches. Divided into two core cycles.', bullets: ['Physics Cycle', 'Chemistry Cycle'], color: 'blue' as const },
                  { y: 2, label: 'Year 02', tag: 'SPECIALIZATION', icon: '🚀', desc: 'Branch-specific core subjects and introductory professional electives.', bullets: ['Core Engineering', 'Lab Work'], color: 'purple' as const },
                  { y: 3, label: 'Year 03', tag: 'ADVANCED', icon: '⚡', desc: 'Deep dive into your major with specialized technical electives and projects.', bullets: ['Technical Focus', 'Mini Projects'], color: 'pink' as const },
                  { y: 4, label: 'Year 04', tag: 'GRADUATION', icon: '🎓', desc: 'Final year project (Capstone), internships, and placement prep.', bullets: ['Major Project', 'Internship'], color: 'mint' as const },
                ].map(({ y, label, tag, icon, desc, bullets, color }) => (
                  <button
                    key={y}
                    onClick={() => { setSelectedYear(y); setStep('branch'); }}
                    className="text-left cursor-pointer"
                  >
                    <FolderTab title={label} subtitle={tag} emoji={icon} color={color}>
                      <div className="w-[85%] h-36 bg-white border-2 border-[#1E1E1E] rounded-xl shadow-[3px_3px_0px_0px_#1E1E1E] p-4 flex flex-col justify-between">
                        <p className="text-[10px] font-bold text-slate-400">{desc.slice(0, 50)}...</p>
                        <div className="space-y-1">
                          {bullets.map(b => (
                            <div key={b} className="flex items-center gap-1.5 text-[9px] font-extrabold text-slate-500">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#1E1E1E]" />
                              {b}
                            </div>
                          ))}
                        </div>
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
              className="space-y-10"
            >
              <div className="text-center space-y-4">
                <span className="text-[10px] font-extrabold uppercase bg-white border-2 border-[#1E1E1E] px-3 py-1 rounded-full shadow-[2px_2px_0px_0px_#1E1E1E]">
                  YEAR 0{selectedYear} {selectedYear === 1 ? 'FOUNDATION' : 'SPECIALIZATION'}
                </span>
                <h1 className="font-display font-extrabold text-4xl md:text-5xl text-[#1E1E1E] uppercase">
                  {selectedYear === 1 ? 'Select Your Cycle' : 'Select Specialization'}
                </h1>
                <p className="text-slate-500 font-bold max-w-md mx-auto text-xs leading-relaxed">
                  {selectedYear === 1
                    ? 'Foundation courses are split into two cycles. Select the one you are currently enrolled in.'
                    : 'Choose your engineering specialization to access senior study resources.'}
                </p>
              </div>

              {selectedYear === 1 ? (
                <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
                  {year1Cycles.map((cycle, i) => (
                    <BentoCard
                      key={cycle.id}
                      bgColor={i === 0 ? 'coral' : 'blue'}
                      onClick={() => { setSelectedCycle(cycle); setStep('subjects'); }}
                    >
                      <div className="flex flex-col justify-between h-48">
                        <div className="flex justify-between items-start">
                          <span className="text-[9px] font-extrabold uppercase bg-white border-2 border-[#1E1E1E] px-2 py-0.5 rounded-full shadow-[1.5px_1.5px_0px_0px_#1E1E1E]">
                            {cycle.subjectPreview}
                          </span>
                          <span className="text-3xl">{cycle.emoji}</span>
                        </div>
                        <div>
                          <h3 className="font-display font-extrabold text-2xl text-[#1E1E1E] uppercase leading-tight">
                            {cycle.name}
                          </h3>
                          <p className="text-[10px] font-bold text-[#1E1E1E] opacity-75 mt-1 leading-normal">
                            {cycle.description}
                          </p>
                        </div>
                        <span className="text-[10px] font-extrabold uppercase bg-white border-2 border-[#1E1E1E] px-3 py-1 rounded-full shadow-[2px_2px_0px_0px_#1E1E1E] w-fit flex items-center gap-1">
                          Browse Stacks <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </BentoCard>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="border-b-3 border-dashed border-[#1E1E1E]/20 pb-3 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#FFB236] fill-[#FFB236]" />
                    <h2 className="font-display font-extrabold text-lg uppercase tracking-wider">Senior Engineering Branches</h2>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {branches.map((b, i) => (
                      <BentoCard
                        key={b.id}
                        bgColor={['yellow', 'purple', 'pink', 'mint'][i % 4] as any}
                        onClick={() => { setSelectedBranch(b); setStep('subjects'); }}
                      >
                        <div className="flex flex-col justify-between h-40">
                          <div className="flex justify-between items-start">
                            <span className="text-[9px] font-extrabold uppercase bg-white border-2 border-[#1E1E1E] px-1.5 py-0.5 rounded-full shadow-[1px_1px_0px_0px_#1E1E1E]">
                              {b.subjects.length} Subjects
                            </span>
                            <span className="text-2xl">{b.emoji}</span>
                          </div>
                          <div>
                            <h4 className="font-display font-bold text-base text-[#1E1E1E] uppercase tracking-wide truncate">
                              {b.shortName}
                            </h4>
                            <p className="text-[9.5px] font-bold text-[#1E1E1E] opacity-75 line-clamp-2 leading-tight mt-0.5">
                              {b.description}
                            </p>
                          </div>
                          <span className="text-[9px] font-extrabold uppercase bg-white border-2 border-[#1E1E1E] px-2 py-0.5 rounded-full shadow-[1.5px_1.5px_0px_0px_#1E1E1E] w-fit">
                            Open Branch
                          </span>
                        </div>
                      </BentoCard>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* ── STEP: SUBJECTS ── */}
          {step === 'subjects' && (
            <motion.div
              key="subjects"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-8"
            >
              {/* Breadcrumb */}
              <div className="flex items-center gap-1.5 text-[9px] font-extrabold text-slate-400 uppercase tracking-widest bg-white border-2 border-[#1E1E1E] px-3 py-1 rounded-full shadow-[1.5px_1.5px_0px_0px_#1E1E1E] w-fit">
                <span>Year 0{selectedYear}</span>
                <ChevronRight className="w-3 h-3 text-[#1E1E1E]" />
                <span className="text-[#FF6B6B]">{selectedCycle?.name || selectedBranch?.shortName}</span>
                <ChevronRight className="w-3 h-3 text-[#1E1E1E]" />
                <span className="text-slate-800">SUBJECTS</span>
              </div>

              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h1 className="font-display font-extrabold text-3xl md:text-4xl text-[#1E1E1E] uppercase flex items-center gap-2">
                    <span>{selectedCycle?.emoji || selectedBranch?.emoji}</span>
                    <span>{selectedCycle?.name || selectedBranch?.name}</span>
                  </h1>
                  <p className="text-slate-500 font-bold text-xs mt-1 max-w-lg">
                    Select a subject stack to access study blueprints, handwritten revision cards, and playlists.
                  </p>
                </div>

                <div className="bg-white border-3 border-[#1E1E1E] px-4 py-3 rounded-2xl shadow-[3px_3px_0px_0px_#1E1E1E] text-center min-w-[130px]">
                  <p className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">AVAILABLE</p>
                  <p className="text-xl font-display font-bold text-[#1E1E1E]">{subjectList.length} Subjects</p>
                </div>
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1E1E1E]" />
                <input
                  type="text"
                  placeholder="SEARCH SUBJECT BY NAME OR CODE..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full h-12 pl-11 pr-4 bg-white border-3 border-[#1E1E1E] rounded-2xl focus:outline-none focus:ring-0 focus:border-[#4FA3F7] text-xs font-display font-bold text-[#1E1E1E] shadow-[3.5px_3.5px_0px_0px_#1E1E1E] placeholder-slate-400 transition-all"
                />
              </div>

              {/* Subject Grid - Folder Style */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredSubjects.map((sub, i) => (
                  <button
                    key={sub.id}
                    onClick={() => { setSelectedSubject(sub); setActiveTab('notes'); setStep('resources'); }}
                    className="text-left cursor-pointer"
                  >
                    <FolderTab
                      title={sub.shortName}
                      subtitle={sub.code}
                      emoji={sub.emoji}
                      color={['yellow', 'blue', 'pink', 'mint'][i % 4] as any}
                    >
                      <div className="w-[85%] h-36 bg-white border-2 border-[#1E1E1E] rounded-xl shadow-[3px_3px_0px_0px_#1E1E1E] p-4 flex flex-col justify-between">
                        <span className="text-[8px] font-extrabold bg-[#1E1E1E] text-white px-2 py-0.5 rounded w-fit uppercase">
                          {sub.resourceCount} STACKS
                        </span>
                        <p className="text-[9px] font-bold text-slate-500 line-clamp-3 leading-normal mt-2">
                          {sub.description}
                        </p>
                      </div>
                    </FolderTab>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── STEP: RESOURCES ── */}
          {step === 'resources' && selectedSubject && (
            <motion.div
              key="resources"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-8"
            >
              {/* Breadcrumb */}
              <div className="flex items-center gap-1.5 text-[9px] font-extrabold text-slate-400 uppercase tracking-widest bg-white border-2 border-[#1E1E1E] px-3 py-1 rounded-full shadow-[1.5px_1.5px_0px_0px_#1E1E1E] w-fit">
                <span>Year 0{selectedYear}</span>
                <ChevronRight className="w-3 h-3 text-[#1E1E1E]" />
                <span className="text-[#B39DDB]">{selectedCycle?.name || selectedBranch?.shortName}</span>
                <ChevronRight className="w-3 h-3 text-[#1E1E1E]" />
                <span className="text-slate-800">{selectedSubject.shortName}</span>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h1 className="font-display font-extrabold text-3xl md:text-4xl text-[#1E1E1E] uppercase flex items-center gap-2">
                    <span>{selectedSubject.emoji}</span>
                    <span>{selectedSubject.name}</span>
                  </h1>
                  <p className="text-slate-500 font-bold text-xs mt-1">
                    {selectedSubject.code} • {selectedSubject.description}
                  </p>
                </div>
              </div>

              {/* Manila folder index tab style selectors */}
              <div className="flex gap-2 border-b-3 border-[#1E1E1E] pb-2">
                {[
                  { key: 'notes', label: 'Study Materials', color: '#FFB236' },
                  { key: 'pyqs',  label: 'Previous Papers', color: '#FF7EB9' },
                  { key: 'yt',    label: 'YouTube Lectures', color: '#4FA3F7' },
                ].map(({ key, label, color }) => {
                  const isActive = activeTab === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveTab(key as ResourceTab)}
                      style={{ backgroundColor: isActive ? color : '' }}
                      className={`px-4 py-2 rounded-t-2xl font-display font-bold text-xs uppercase border-3 border-b-0 border-[#1E1E1E] transition-all cursor-pointer ${
                        isActive 
                          ? 'translate-y-[5px] text-[#1E1E1E]' 
                          : 'bg-white text-slate-500 hover:bg-slate-100'
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>

              {/* Notes Folder Layout */}
              {activeTab === 'notes' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                  {selectedSubject.studyMaterials.length === 0 ? (
                    <EmptyState label="NO STUDY MATERIALS LINKED YET." />
                  ) : (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {selectedSubject.studyMaterials.map((m, i) => (
                        <a 
                          key={i} 
                          href={m.url} 
                          target="_blank" 
                          rel="noreferrer"
                          className="group bg-white border-3 border-[#1E1E1E] rounded-3xl p-5 shadow-[4px_4px_0px_0px_#1E1E1E] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#1E1E1E] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#1E1E1E] transition-all flex flex-col justify-between h-44"
                        >
                          <div>
                            <div className="w-10 h-10 bg-[#4FA3F7]/10 border-2 border-[#1E1E1E] rounded-xl flex items-center justify-center mb-3">
                              <FileText className="w-5 h-5 text-[#4FA3F7]" />
                            </div>
                            <h4 className="font-display font-bold text-[#1E1E1E] text-xs line-clamp-2 leading-tight uppercase">
                              {m.title}
                            </h4>
                          </div>
                          <span className="text-[10px] font-extrabold uppercase text-[#1E1E1E] flex items-center gap-1.5">
                            Open Paper <ExternalLink className="w-3.5 h-3.5" />
                          </span>
                        </a>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}

              {/* PYQs Folder Layout */}
              {activeTab === 'pyqs' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                  {selectedSubject.pyqs.length === 0 ? (
                    <EmptyState label="NO PYQS UPLOADED YET." />
                  ) : (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {selectedSubject.pyqs.map((p, i) => (
                        <a 
                          key={i} 
                          href={p.url} 
                          target="_blank" 
                          rel="noreferrer"
                          className="group bg-white border-3 border-[#1E1E1E] rounded-3xl p-5 shadow-[4px_4px_0px_0px_#1E1E1E] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#1E1E1E] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#1E1E1E] transition-all flex flex-col justify-between h-44"
                        >
                          <div>
                            <div className="w-10 h-10 bg-[#FF7EB9]/10 border-2 border-[#1E1E1E] rounded-xl flex items-center justify-center mb-3">
                              <Download className="w-5 h-5 text-[#FF7EB9]" />
                            </div>
                            <h4 className="font-display font-bold text-[#1E1E1E] text-xs line-clamp-2 leading-tight uppercase">
                              {p.title}
                            </h4>
                          </div>
                          <span className="text-[10px] font-extrabold uppercase text-[#1E1E1E] flex items-center gap-1.5">
                            Download PDF <ExternalLink className="w-3.5 h-3.5" />
                          </span>
                        </a>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}

              {/* YouTube Lectures Slider (Retro Cartridges/TV screens look) */}
              {activeTab === 'yt' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                  {selectedSubject.ytResources.length === 0 ? (
                    <EmptyState label="NO YOUTUBE LECTURES LINKED YET." />
                  ) : (
                    <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar">
                      {selectedSubject.ytResources.map((yt, i) => (
                        <a 
                          key={i} 
                          href={yt.url} 
                          target="_blank" 
                          rel="noreferrer"
                          className="flex-shrink-0 w-80 bg-white border-3 border-[#1E1E1E] rounded-3xl overflow-hidden shadow-[4px_4px_0px_0px_#1E1E1E] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#1E1E1E] transition-all group"
                        >
                          <div className="relative aspect-video bg-[#1E1E1E] border-b-3 border-[#1E1E1E] flex items-center justify-center overflow-hidden">
                            {yt.thumbnailId ? (
                              <img
                                src={`https://img.youtube.com/vi/${yt.thumbnailId}/mqdefault.jpg`}
                                alt={yt.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            ) : (
                              <Youtube className="w-12 h-12 text-[#FF6B6B]" />
                            )}
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                              <div className="w-12 h-12 bg-white border-2 border-[#1E1E1E] rounded-full flex items-center justify-center shadow-[3px_3px_0px_0px_#1E1E1E] group-hover:scale-110 transition-transform">
                                <Play className="w-5 h-5 text-[#FF6B6B] fill-[#FF6B6B] ml-0.5" />
                              </div>
                            </div>
                          </div>
                          <div className="p-4">
                            <h4 className="font-display font-bold text-[#1E1E1E] text-xs line-clamp-2 leading-tight uppercase">
                              {yt.title}
                            </h4>
                            <p className="text-[9px] font-extrabold text-[#4FA3F7] uppercase tracking-wider mt-1.5 bg-[#4FA3F7]/10 border-2 border-[#4FA3F7] px-2 py-0.5 rounded-full w-fit">
                              📺 {yt.channelName}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}

              {/* Interactive Quiz CTA */}
              <div className="bg-[#1E1E1E] text-white border-4 border-[#1E1E1E] rounded-3xl p-6 shadow-[6px_6px_0px_0px_#FFB236] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mt-12">
                <div>
                  <h3 className="font-display font-extrabold text-xl uppercase text-[#FFB236]">Ready to test match?</h3>
                  <p className="text-xs font-bold text-slate-400 mt-1 max-w-md">
                    Skip static question sheets. Attempt diagnostic practice matches directly inside our interface.
                  </p>
                </div>
                <Link
                  to="/quiz"
                  className="px-5 py-3 bg-[#FF7EB9] border-3 border-[#1E1E1E] text-[#1E1E1E] rounded-2xl font-display font-bold text-xs shadow-[3px_3px_0px_0px_#1E1E1E] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_#1E1E1E] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1.5px_1.5px_0px_0px_#1E1E1E] transition-all flex items-center gap-1.5 uppercase"
                >
                  Start Quiz <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <FloatingDock />
    </div>
  );
}

function EmptyState({ label }: { label: string }) {
  return (
    <div className="py-16 text-center bg-white border-3 border-[#1E1E1E] rounded-3xl shadow-[4px_4px_0px_0px_#1E1E1E]">
      <p className="text-xs font-display font-bold text-slate-400">{label}</p>
    </div>
  );
}
