import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen, Zap, ArrowRight, ChevronRight, Bell, X, Trophy, Search
} from 'lucide-react';
import {
  year1Cycles, branches, QUESTIONS_DB,
  type Subject
} from '@/data/studyMaterial';

export default function Home() {
  const navigate = useNavigate();

  // Setup form states inside B&W modal (accessible from header/practice arena)
  const [isArenaModalOpen, setIsArenaModalOpen] = useState(false);
  const [setupYear, setSetupYear] = useState<number>(1);
  const [setupBranch, setSetupBranch] = useState<string>('physics-cycle');
  const [setupSubject, setSetupSubject] = useState<Subject | null>(null);
  const [isSubjectDropdownOpen, setIsSubjectDropdownOpen] = useState(false);
  const [subjectSearch, setSubjectSearch] = useState('');

  // Hero Preference selection states
  const [selectedYear, setSelectedYear] = useState<number>(1);
  const [selectedBranch, setSelectedBranch] = useState<string>('physics-cycle');
  const [searchQuery, setSearchQuery] = useState('');

  const handleHeroYearChange = (yr: number) => {
    setSelectedYear(yr);
    if (yr === 1) {
      setSelectedBranch('physics-cycle');
    } else {
      setSelectedBranch('cse');
    }
  };


  // Handle year change in sessional setup modal
  const handleSetupYearChange = (yr: number) => {
    setSetupYear(yr);
    if (yr === 1) {
      setSetupBranch('physics-cycle');
      const list = year1Cycles.find(c => c.id === 'physics-cycle')?.subjects || [];
      setSetupSubject(list[0] || null);
    } else {
      setSetupBranch('cse');
      const list = branches.find(b => b.id === 'cse')?.subjects || [];
      setSetupSubject(list[0] || null);
    }
  };

  const getSetupSubjectList = (): Subject[] => {
    if (setupYear === 1) {
      const cycle = year1Cycles.find(c => c.id === setupBranch);
      return cycle ? cycle.subjects : [];
    }
    const branch = branches.find(b => b.id === setupBranch);
    return branch ? branch.subjects : [];
  };

  const setupSubjectsList = getSetupSubjectList();
  const filteredSetupSubjects = setupSubjectsList.filter(s =>
    s.name.toLowerCase().includes(subjectSearch.toLowerCase()) ||
    s.code.toLowerCase().includes(subjectSearch.toLowerCase())
  );

  const startPractice = () => {
    if (setupSubject) {
      sessionStorage.setItem('setup_year', setupYear.toString());
      sessionStorage.setItem('setup_branch', setupBranch);
      sessionStorage.setItem('setup_subject_id', setupSubject.id);
      setIsArenaModalOpen(false);
      navigate('/quiz');
    }
  };


  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1E1E1E] font-sans antialiased pb-24">
      
      {/* ── HEADER NAVIGATION (Clean, Thin Borders, Soft Shadows) ── */}
      <header className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-8.5 h-8.5 bg-[#FF5252] rounded-xl flex items-center justify-center border border-slate-200 shadow-sm">
            <BookOpen className="w-4 h-4 text-white" />
          </div>
          <span className="font-display font-black text-[#1E1E1E] text-lg tracking-tight uppercase">MUJ SPACE</span>
        </Link>

        {/* Navigation Middle Pill Bar */}
        <div className="flex items-center gap-1 bg-white border border-slate-200/80 px-1.5 py-1 rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.03)]">
          <Link
            to="/"
            className="px-5 py-1.5 rounded-full text-xs font-black bg-[#1E1E1E] text-white shadow-sm transition-all"
          >
            Home
          </Link>
          <Link
            to="/explore"
            className="px-5 py-1.5 rounded-full text-xs font-bold text-slate-500 hover:text-[#1E1E1E] transition-all"
          >
            Library
          </Link>
          <button
            onClick={() => {
              handleSetupYearChange(1);
              setIsArenaModalOpen(true);
            }}
            className="px-5 py-1.5 rounded-full text-xs font-bold text-slate-500 hover:text-[#1E1E1E] transition-all cursor-pointer"
          >
            Practice Arena
          </button>
        </div>

        {/* Profile / Notification Bar */}
        <div className="flex items-center gap-3">
          <button className="w-9 h-9 bg-white border border-slate-200 rounded-xl flex items-center justify-center shadow-sm hover:bg-slate-50 transition-all">
            <Bell className="w-4 h-4 text-[#1E1E1E]" />
          </button>
          <div className="flex items-center gap-2">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120"
              alt="Maahi"
              className="w-9 h-9 rounded-full border border-slate-200 object-cover shadow-sm"
            />
            <span className="hidden lg:inline text-xs font-black text-[#1E1E1E] tracking-tight">Hi, Maahi 👋</span>
          </div>
        </div>
      </header>

      {/* ── HERO SECTION ── */}
      <section className="w-full max-w-[1536px] mx-auto px-6 lg:px-12 py-8 lg:py-14">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-4">
              <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-[72px] text-[#1E1E1E] leading-[0.9] tracking-tight uppercase">
                Study Smarter.<br />
                <span className="text-[#5D5FEF]">Score Higher.</span>
              </h1>
            </div>

            {/* Selection Filters — compact */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-[0_4px_16px_rgb(0,0,0,0.02)] space-y-3.5">
              {/* Row 1: Course & Year Selectors */}
              <div className="flex flex-wrap items-center gap-3 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-1.5">
                  <span className="text-[9px] font-black uppercase text-slate-400">Course:</span>
                  <span className="px-2.5 py-1 bg-[#FAF9F5] border border-slate-200 text-[10px] font-bold rounded-lg text-[#1E1E1E]">B.Tech</span>
                </div>

                <div className="w-px h-4 bg-slate-200 hidden sm:block" />

                {/* Year Selection Pills */}
                <div className="flex items-center gap-1">
                  <span className="text-[9px] font-black uppercase text-slate-400 mr-1.5">Year:</span>
                  {[1, 2, 3, 4].map((y) => (
                    <button
                      key={y}
                      onClick={() => handleHeroYearChange(y)}
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-bold border transition-all cursor-pointer ${
                        selectedYear === y
                          ? 'bg-[#1E1E1E] text-white border-[#1E1E1E] shadow-sm'
                          : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {y === 1 ? '1st' : y === 2 ? '2nd' : y === 3 ? '3rd' : '4th'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 2: Branch/Cycle Selection */}
              <div className="space-y-1.5">
                <span className="text-[9px] font-black uppercase text-slate-400 tracking-wider block">
                  {selectedYear === 1 ? 'Cycle' : 'Branch'}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedYear === 1 ? (
                    year1Cycles.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setSelectedBranch(c.id)}
                        className={`px-3 py-1.5 rounded-lg text-[10px] font-bold border transition-all cursor-pointer ${
                          selectedBranch === c.id
                            ? 'bg-[#5D5FEF] text-white border-[#5D5FEF] shadow-sm'
                            : 'bg-[#FAF9F5] text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {c.name}
                      </button>
                    ))
                  ) : (
                    branches.map((b) => (
                      <button
                        key={b.id}
                        onClick={() => setSelectedBranch(b.id)}
                        className={`px-3 py-1.5 rounded-lg text-[10px] font-bold border transition-all cursor-pointer ${
                          selectedBranch === b.id
                            ? 'bg-[#5D5FEF] text-white border-[#5D5FEF] shadow-sm'
                            : 'bg-[#FAF9F5] text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {b.shortName}
                      </button>
                    ))
                  )}
                </div>
              </div>

              {/* Row 3: Search + Button */}
              <div className="flex gap-2 pt-1">
                <div className="relative flex-1 bg-[#FAF9F5] border border-slate-200 rounded-xl flex items-center">
                  <span className="pl-3 text-slate-400 text-sm shrink-0">🔍</span>
                  <input
                    type="text"
                    placeholder="Search subject..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="w-full h-9 pl-2 pr-3 text-[10px] font-bold text-[#1E1E1E] bg-transparent focus:outline-none placeholder-slate-400"
                  />
                </div>
                <button
                  onClick={() => {
                    const cycleQuery = selectedYear === 1 ? `&cycle=${selectedBranch}` : `&branch=${selectedBranch}`;
                    const searchQueryString = searchQuery ? `&q=${encodeURIComponent(searchQuery)}` : '';
                    navigate(`/explore?year=${selectedYear}${cycleQuery}${searchQueryString}`);
                  }}
                  className="px-4 h-9 bg-[#1E1E1E] text-white font-black text-[10px] uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5 hover:bg-black transition-all shadow-sm cursor-pointer shrink-0"
                >
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Hero Right: 3D Standing Books */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative select-none">
            <div className="relative w-full max-w-[460px] h-[380px] flex items-center justify-center perspective-[1200px]">
              
              {/* Left book: Physics Cycle */}
              <div className="absolute transition-transform duration-500 hover:translate-y-[-10px] z-10" style={{ transform: 'translate3d(-100px, 10px, -80px) rotateY(-25deg) rotateZ(-4deg)' }}>
                <div className="relative w-[160px] h-[230px] preserve-3d rounded-r-lg shadow-[-20px_20px_30px_rgba(0,0,0,0.2)]" style={{ transformStyle: 'preserve-3d' }}>
                  {/* Front Cover */}
                  <div className="absolute inset-0 bg-cover bg-center rounded-r-lg rounded-l-sm z-20 border border-white/20" style={{ backgroundImage: 'url("/bookcovers/physics-cycle.png")', transform: 'translateZ(10px)' }} />
                  {/* Back Cover */}
                  <div className="absolute inset-0 bg-[#E64A79] rounded-r-lg rounded-l-sm z-0 border border-black/10" style={{ transform: 'translateZ(-10px)' }} />
                  {/* Spine (Left side) */}
                  <div className="absolute top-0 left-0 h-full w-[20px] bg-[#C2355F] z-10" style={{ transform: 'rotateY(-90deg) translateZ(10px)', transformOrigin: 'left' }} />
                  {/* Pages (Right, Top, Bottom) - Not really visible from this angle, but adds depth */}
                  <div className="absolute top-[2px] right-0 h-[226px] w-[20px] bg-slate-100 z-10" style={{ transform: 'rotateY(90deg) translateZ(160px)', transformOrigin: 'left' }} />
                  <div className="absolute top-0 left-[2px] w-[156px] h-[20px] bg-slate-200 z-10" style={{ transform: 'rotateX(90deg) translateZ(10px)', transformOrigin: 'top' }} />
                </div>
              </div>

              {/* Right book: CSE Stack */}
              <div className="absolute transition-transform duration-500 hover:translate-y-[-10px] z-10" style={{ transform: 'translate3d(100px, 10px, -80px) rotateY(25deg) rotateZ(4deg)' }}>
                <div className="relative w-[160px] h-[230px] preserve-3d rounded-l-lg shadow-[20px_20px_30px_rgba(0,0,0,0.2)]" style={{ transformStyle: 'preserve-3d' }}>
                  {/* Front Cover */}
                  <div className="absolute inset-0 bg-cover bg-center rounded-l-lg rounded-r-sm z-20 border border-white/20" style={{ backgroundImage: 'url("/bookcovers/cse.png")', transform: 'translateZ(10px)' }} />
                  {/* Back Cover */}
                  <div className="absolute inset-0 bg-[#154AA1] rounded-l-lg rounded-r-sm z-0 border border-black/10" style={{ transform: 'translateZ(-10px)' }} />
                  {/* Spine (Right side because of angle) -> Actually spine is on left, pages are on right. Since it's rotated right, we see the pages side! */}
                  <div className="absolute top-[2px] right-0 h-[226px] w-[20px] bg-gradient-to-r from-slate-200 to-white z-10 border-y border-r border-slate-300" style={{ transform: 'rotateY(90deg) translateZ(160px)', transformOrigin: 'left' }}>
                    {/* Page lines texture */}
                    <div className="w-full h-full opacity-30" style={{ backgroundImage: 'repeating-linear-gradient(to right, transparent, transparent 1px, rgba(0,0,0,0.1) 1px, rgba(0,0,0,0.1) 2px)' }} />
                  </div>
                  {/* Spine (Left side) - Not really visible */}
                  <div className="absolute top-0 left-0 h-full w-[20px] bg-[#113C82] z-10" style={{ transform: 'rotateY(-90deg) translateZ(10px)', transformOrigin: 'left' }} />
                  {/* Top Pages */}
                  <div className="absolute top-0 left-[2px] w-[156px] h-[20px] bg-slate-200 z-10 border-x border-t border-slate-300" style={{ transform: 'rotateX(90deg) translateZ(10px)', transformOrigin: 'top' }} />
                </div>
              </div>

              {/* Center book: Chemistry Cycle */}
              <div className="absolute transition-transform duration-500 hover:translate-y-[-12px] z-20" style={{ transform: 'translate3d(0, -5px, 0) scale(1.05)' }}>
                <div className="relative w-[180px] h-[260px] preserve-3d rounded-r-lg shadow-[0_30px_40px_rgba(0,0,0,0.3)]" style={{ transformStyle: 'preserve-3d' }}>
                  {/* Front Cover */}
                  <div className="absolute inset-0 bg-cover bg-center rounded-r-lg rounded-l-sm z-20 border border-white/30" style={{ backgroundImage: 'url("/bookcovers/chemistry-cycle.png")', transform: 'translateZ(12px)' }} />
                  {/* Back Cover */}
                  <div className="absolute inset-0 bg-[#28923F] rounded-r-lg rounded-l-sm z-0 border border-black/10" style={{ transform: 'translateZ(-12px)' }} />
                  {/* Spine (Left side) */}
                  <div className="absolute top-0 left-0 h-full w-[24px] bg-gradient-to-r from-[#1E7430] to-[#28923F] z-10 border-y border-l border-black/20" style={{ transform: 'rotateY(-90deg) translateZ(12px)', transformOrigin: 'left' }} />
                  {/* Pages (Right side) - Slightly visible if looking straight, mostly bottom shadow */}
                  <div className="absolute top-[2px] right-0 h-[256px] w-[24px] bg-slate-100 z-10" style={{ transform: 'rotateY(90deg) translateZ(180px)', transformOrigin: 'left' }} />
                  {/* Top Pages */}
                  <div className="absolute top-0 left-[2px] w-[176px] h-[24px] bg-slate-200 z-10" style={{ transform: 'rotateX(90deg) translateZ(12px)', transformOrigin: 'top' }} />
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ── CONTINUE STUDYING SECTION ── */}
      <section className="w-full max-w-[1536px] mx-auto px-6 lg:px-12 py-12 border-t border-slate-200/60">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-display font-extrabold text-2xl uppercase text-[#1E1E1E] tracking-tight">Continue Studying</h2>
          <Link to="/explore" className="text-xs font-black uppercase text-[#5D5FEF] hover:underline flex items-center gap-1">
            View all <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: 'Physics Cycle',
              year: 'BTech 1st Year',
              progress: 73,
              cover: '/bookcovers/physics-cycle.png',
              explorePath: '/explore?year=1&cycle=physics-cycle'
            },
            {
              title: 'BTech 2nd Year',
              year: 'All Subjects',
              progress: 42,
              cover: '/bookcovers/second-year.png',
              explorePath: '/explore?year=2'
            },
            {
              title: 'Data Structures',
              year: 'BTech 2nd Year',
              progress: 15,
              cover: '/bookcovers/cse.png',
              explorePath: '/explore?year=2'
            },
            {
              title: 'Chemistry Cycle',
              year: 'BTech 1st Year',
              progress: 65,
              cover: '/bookcovers/chemistry-cycle.png',
              explorePath: '/explore?year=1&cycle=chemistry-cycle'
            }
          ].map((item, idx) => (
            <div 
              key={idx}
              className="bg-white border border-slate-200/80 rounded-[32px] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.015)] flex flex-col justify-between h-[320px] hover:translate-y-[-4px] hover:shadow-md transition-all group text-left"
            >
              <div className="flex gap-5">
                <div 
                  className="w-28 h-40 rounded-2xl bg-cover bg-center shrink-0 shadow-md group-hover:scale-[1.03] transition-transform"
                  style={{ backgroundImage: `url(${item.cover})`, boxShadow: '0 8px 20px rgba(0,0,0,0.18)', border: '2px solid rgba(255,255,255,0.5)', outline: '1px solid rgba(0,0,0,0.1)' }}
                />
                <div className="flex-1 min-w-0 space-y-2 pt-1">
                  <span className="text-[9px] font-extrabold uppercase bg-slate-100 px-2 py-0.5 rounded text-slate-500">{item.year}</span>
                  <h4 className="font-display font-bold text-lg text-[#1E1E1E] leading-tight line-clamp-2">{item.title}</h4>
                </div>
              </div>
              
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex justify-between items-center text-[10px] font-black uppercase text-[#1E1E1E]">
                  <span>Progress</span>
                  <span>{item.progress}%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#5D5FEF] rounded-full transition-all duration-500" style={{ width: `${item.progress}%` }} />
                </div>
                <button
                  onClick={() => navigate(item.explorePath)}
                  className="w-full mt-2 py-2.5 bg-[#FAF9F5] border border-slate-200 text-[#1E1E1E] font-black text-[10px] uppercase rounded-xl flex items-center justify-center gap-1 cursor-pointer hover:bg-[#1E1E1E] hover:text-white hover:border-[#1E1E1E] transition-all"
                >
                  Continue notebook <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TECH STACKS SECTION ── */}
      <section className="w-full max-w-[1536px] mx-auto px-6 lg:px-12 py-10 border-t border-slate-200/60">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-display font-extrabold text-2xl uppercase text-[#1E1E1E] tracking-tight">Tech Stacks</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { y: 1, title: 'First Year',   color: 'bg-[#EDE7F6]', cover: '/bookcovers/first-year.png' },
            { y: 2, title: 'Second Year',  color: 'bg-[#FFF3E0]', cover: '/bookcovers/second-year.png' },
            { y: 3, title: 'Third Year',   color: 'bg-[#E3F2FD]', cover: '/bookcovers/third-year.png' },
            { y: 4, title: 'Fourth Year',  color: 'bg-[#E8F5E9]', cover: '/bookcovers/fourth-year.png' },
          ].map((item) => (
            <div 
              key={item.y}
              onClick={() => navigate(`/explore?year=${item.y}`)}
              className={`group cursor-pointer rounded-3xl border border-slate-200/80 p-5 shadow-[0_6px_20px_rgba(0,0,0,0.02)] hover:translate-y-[-2px] transition-all flex flex-col justify-between h-80 ${item.color}`}
            >
              {/* Book cover — big, centred, takes most of the card */}
              <div className="flex-1 flex items-center justify-center py-2">
                <div 
                  className="w-32 h-44 rounded-2xl bg-cover bg-center group-hover:scale-105 transition-transform"
                  style={{ backgroundImage: `url(${item.cover})`, boxShadow: '0 10px 28px rgba(0,0,0,0.22)', border: '2px solid rgba(255,255,255,0.5)', outline: '1px solid rgba(0,0,0,0.1)' }}
                />
              </div>

              <div className="pt-3 border-t border-slate-200/20 flex justify-between items-center">
                <div className="text-left">
                  <span className="text-[9px] font-extrabold uppercase text-slate-400 tracking-widest">Year 0{item.y}</span>
                  <h3 className="font-display font-extrabold text-base text-[#1E1E1E] uppercase leading-tight">
                    {item.title}
                  </h3>
                </div>
                <span className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:bg-[#1E1E1E] group-hover:border-[#1E1E1E] transition-all">
                  <ChevronRight className="w-4 h-4 text-[#1E1E1E] group-hover:text-white transition-colors" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRACTICE ARENA / NON-BTECH BANNERS ── */}
      <section className="w-full max-w-[1536px] mx-auto px-6 lg:px-12 py-10 border-t border-slate-200/60 grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-[#FF6B6B] to-[#FFB236] rounded-[32px] border border-slate-200 p-6 sm:p-8 shadow-md relative overflow-hidden flex flex-col justify-between h-52 text-left group">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
          <div>
            <span className="text-[9px] font-extrabold uppercase bg-white/20 border border-white/40 px-3 py-1 rounded-full text-white tracking-widest">
              PYQs · Mock Tests
            </span>
            <h3 className="font-display font-black text-3xl text-white uppercase mt-2 tracking-wide leading-none">
              PRACTICE ARENA
            </h3>
            <p className="text-white/80 text-xs font-bold mt-1">
              Test sessional skills with sessional sessional questions.
            </p>
          </div>
          <button
            onClick={() => {
              handleSetupYearChange(1);
              setIsArenaModalOpen(true);
            }}
            className="w-fit bg-white border border-slate-200 text-[#1E1E1E] font-black px-5 py-2.5 rounded-2xl text-xs uppercase tracking-wider shadow-sm hover:bg-slate-50 transition-all cursor-pointer flex items-center gap-1.5"
          >
            Enter Arena <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="bg-gradient-to-br from-[#5D5FEF] to-[#7F00FF] rounded-[32px] border border-slate-200 p-6 sm:p-8 shadow-md relative overflow-hidden flex flex-col justify-between h-52 text-left group cursor-not-allowed">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
          <div>
            <span className="text-[9px] font-extrabold uppercase bg-white/20 border border-white/40 px-3 py-1 rounded-full text-white tracking-widest">
              BBA · BCA · MBA
            </span>
            <h3 className="font-display font-black text-3xl text-white uppercase mt-2 tracking-wide leading-none">
              NON-BTECH STACKS
            </h3>
            <p className="text-white/80 text-xs font-bold mt-1">
              Business, Computer Applications, Law notes archive.
            </p>
          </div>
          <button
            disabled
            className="w-fit bg-white/50 border border-slate-200/50 text-slate-500 font-black px-5 py-2.5 rounded-2xl text-xs uppercase tracking-wider shadow-sm cursor-not-allowed flex items-center gap-1.5"
          >
            Coming Soon <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-[1536px] mx-auto px-6 lg:px-12 py-6 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-bold text-slate-400 uppercase">
        <span className="font-display font-extrabold text-[#1E1E1E] text-base">MUJSTUDY</span>
        <span>© 2026 MANIPAL UNIVERSITY JAIPUR ARCHIVE</span>
      </footer>



      {/* ── SETUP DIALOG MODAL (Clean B&W overlay modal) ── */}
      <AnimatePresence>
        {isArenaModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E1E1E]/40 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              className="bg-white border border-slate-250 rounded-[28px] w-full max-w-md overflow-hidden shadow-xl"
            >
              {/* Header */}
              <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#1E1E1E] rounded-lg flex items-center justify-center">
                    <Trophy className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-sm text-[#1E1E1E] uppercase">Enter sessional arena</h3>
                    <p className="text-[9px] font-black uppercase text-slate-400">Select details to start</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsArenaModalOpen(false)}
                  className="w-8 h-8 rounded-lg border border-slate-200 hover:bg-slate-100 flex items-center justify-center transition-all cursor-pointer"
                >
                  <X className="w-4 h-4 text-[#1E1E1E]" />
                </button>
              </div>

              {/* Form Controls */}
              <div className="p-6 space-y-5 text-left bg-white">
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
                            : 'bg-white border-slate-205 text-slate-350 cursor-not-allowed opacity-50'
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
                        onClick={() => handleSetupYearChange(y)}
                        className={`py-2 rounded-xl text-xs font-black border transition-all cursor-pointer ${
                          setupYear === y
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
                    {setupYear === 1 ? 'Cycle Selection' : 'Branch Specialization'}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {setupYear === 1 ? (
                      year1Cycles.map((c) => (
                        <button
                          key={c.id}
                          onClick={() => {
                            setSetupBranch(c.id);
                            const list = c.subjects;
                            setSetupSubject(list[0] || null);
                          }}
                          className={`px-4 py-2 rounded-full text-xs font-black border transition-all cursor-pointer ${
                            setupBranch === c.id
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
                            setSetupBranch(b.id);
                            const list = b.subjects;
                            setSetupSubject(list[0] || null);
                          }}
                          className={`px-4 py-2 rounded-full text-xs font-black border transition-all cursor-pointer ${
                            setupBranch === b.id
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

                {/* Select Subject searchable dropdown */}
                <div className="space-y-2" ref={subjectDropdownRef => {
                  if (!subjectDropdownRef) return;
                  const handler = (e: MouseEvent) => {
                    if (!subjectDropdownRef.contains(e.target as Node)) {
                      setIsSubjectDropdownOpen(false);
                    }
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
                        {setupSubject ? (
                          <>
                            <span>{setupSubject.emoji}</span>
                            <span>{setupSubject.name} ({setupSubject.code})</span>
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
                          className="absolute z-50 w-full mt-1 bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden max-h-52 flex flex-col"
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
                            {filteredSetupSubjects.length > 0 ? (
                              filteredSetupSubjects.map((s) => {
                                const hasQ = (QUESTIONS_DB[s.id] || []).length > 0;
                                return (
                                  <button
                                    key={s.id}
                                    disabled={!hasQ}
                                    onClick={() => {
                                      setSetupSubject(s);
                                      setIsSubjectDropdownOpen(false);
                                      setSubjectSearch('');
                                    }}
                                    className={`w-full text-left px-4 py-2.5 text-xs font-black transition-colors flex items-center justify-between border-b border-slate-50 last:border-none cursor-pointer ${
                                      !hasQ
                                        ? 'opacity-35 cursor-not-allowed text-slate-450'
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
                                      <span className="text-[9px] font-bold bg-neutral-100 text-neutral-450 px-2 py-0.5 rounded-full">Soon</span>
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

                {/* Submit button */}
                <button
                  disabled={!setupSubject || (QUESTIONS_DB[setupSubject.id] || []).length === 0}
                  onClick={startPractice}
                  className="w-full py-3.5 bg-[#1E1E1E] text-white font-black text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer hover:bg-black transition-all shadow-sm"
                >
                  <Zap className="w-4 h-4 fill-white" />
                  Enter Practice Arena
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
