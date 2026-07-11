import { useState, useEffect } from 'react';
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

  // Dynamic display name from localStorage
  const [displayName, setDisplayName] = useState<string>(() => {
    return localStorage.getItem('muj_username') || 'Student';
  });
  const [isEditingName, setIsEditingName] = useState(false);
  const [nameInput, setNameInput] = useState('');

  useEffect(() => {
    localStorage.setItem('muj_username', displayName);
  }, [displayName]);

  // Non-BTech coming soon modal
  const [isNonBTechModalOpen, setIsNonBTechModalOpen] = useState(false);
  
  // Attendance and Exam Timetable modal states
  const [isAttendanceModalOpen, setIsAttendanceModalOpen] = useState(false);
  const [isExamTimetableModalOpen, setIsExamTimetableModalOpen] = useState(false);
  
  interface ExamEntry {
    id: string;
    subject: string;
    type: 'MTE' | 'ETE' | 'Other';
    date: string;
  }
  const [examEntries, setExamEntries] = useState<ExamEntry[]>(() => {
    const saved = localStorage.getItem('examEntries');
    return saved ? JSON.parse(saved) : [];
  });
  const [showAddExam, setShowAddExam] = useState(false);
  const [newExamSubject, setNewExamSubject] = useState('');
  const [newExamType, setNewExamType] = useState<'MTE'|'ETE'|'Other'>('MTE');
  const [newExamDate, setNewExamDate] = useState('');

  useEffect(() => {
    localStorage.setItem('examEntries', JSON.stringify(examEntries));
  }, [examEntries]);
  
  // Attendance Tracker state
  interface AttendanceSubject {
    id: string;
    name: string;
    credits: 3 | 4;
    missedLectures: number;
  }
  const [subjects, setSubjects] = useState<AttendanceSubject[]>(() => {
    const saved = localStorage.getItem('attendanceSubjects');
    return saved ? JSON.parse(saved) : [];
  });
  const [selectedSubjectId, setSelectedSubjectId] = useState<string | null>(null);
  const [showAddSubject, setShowAddSubject] = useState(false);
  const [newSubjectName, setNewSubjectName] = useState('');
  const [newSubjectCredits, setNewSubjectCredits] = useState<3 | 4>(3);
  
  // Save subjects to localStorage on change
  useEffect(() => {
    localStorage.setItem('attendanceSubjects', JSON.stringify(subjects));
  }, [subjects]);

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
    <div className="min-h-screen bg-[#F8F9FB] text-[#1E1E1E] font-sans antialiased pb-24">
      
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
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#5D5FEF] to-[#FF5252] flex items-center justify-center text-white text-xs font-black shadow-sm border border-white">
              {displayName.charAt(0).toUpperCase()}
            </div>
            {isEditingName ? (
              <form onSubmit={(e) => { e.preventDefault(); if (nameInput.trim()) setDisplayName(nameInput.trim()); setIsEditingName(false); }} className="flex items-center gap-1">
                <input
                  autoFocus
                  value={nameInput}
                  onChange={e => setNameInput(e.target.value)}
                  className="hidden lg:inline w-24 text-xs font-black text-[#1E1E1E] bg-white border border-[#5D5FEF] rounded-lg px-2 py-1 focus:outline-none"
                  placeholder="Your name"
                />
                <button type="submit" className="hidden lg:inline text-[9px] font-black text-[#5D5FEF] hover:underline cursor-pointer">Save</button>
              </form>
            ) : (
              <button
                onClick={() => { setNameInput(displayName); setIsEditingName(true); }}
                className="hidden lg:inline text-xs font-black text-[#1E1E1E] tracking-tight hover:text-[#5D5FEF] transition-colors cursor-pointer"
              >Hi, {displayName} 👋</button>
            )}
          </div>
        </div>
      </header>

      {/* ── HERO SECTION ── */}
      <section className="w-full max-w-[1536px] mx-auto px-6 lg:px-12 pt-4 pb-8 lg:pt-8 lg:pb-12 relative">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center relative">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8 text-center lg:text-left">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#5D5FEF]/10 border border-[#5D5FEF]/20 text-[#5D5FEF] px-3.5 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5D5FEF] animate-pulse" />
            </div>

            <div className="space-y-3">
              <h1 className="font-display font-extrabold text-[42px] sm:text-5xl lg:text-[76px] text-[#1E1E1E] leading-[0.9] tracking-tight uppercase">
                Study Smarter.<br />
                <span className="bg-gradient-to-r from-[#5D5FEF] to-[#7B7DFF] bg-clip-text text-transparent">Score Higher.</span>
              </h1>
              <p className="text-slate-500 font-bold text-sm leading-relaxed mx-auto lg:mx-0 max-w-sm">
                Notes, PYQs, and practice for every MUJ subject — all in one place.
              </p>
            </div>

          {/* Selection Filters — compact */}
          <div
         className="
rounded-3xl
border border-white/70
bg-gradient-to-br
from-white
via-white
to-[#F7F8FF]
backdrop-blur-xl
p-6
space-y-5
shadow-[0_18px_50px_rgba(93,95,239,0.08)]
"
>
              {/* Row 1: Course & Year Selectors */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-1.5">
                  <span className="text-[9px] font-black uppercase text-slate-400">Course:</span>
                  <span className="px-2.5 py-1 bg-[#1E1E1E] text-white text-[10px] font-black rounded-lg">B.Tech</span>
                </div>

                <div className="w-px h-4 bg-slate-200 hidden sm:block" />

                {/* Year Selection Pills */}
                <div className="flex items-center gap-1.5">
                  <span className="text-[9px] font-black uppercase text-slate-400 mr-1">Year:</span>
                  {[1, 2, 3, 4].map((y) => (
                    <button
                      key={y}
                      onClick={() => handleHeroYearChange(y)}
                      className={`px-3 py-1 rounded-lg text-[10px] font-black border transition-all duration-200 cursor-pointer ${
                        selectedYear === y
                          ? 'bg-gradient-to-r from-[#5D5FEF] to-[#7B7DFF] text-white border-transparent shadow-[0_2px_8px_rgba(93,95,239,0.3)]'
                          : 'bg-slate-50 text-slate-500 border-slate-200 hover:border-[#5D5FEF]/40 hover:text-[#5D5FEF]'
                      }`}
                    >
                      {y === 1 ? '1st' : y === 2 ? '2nd' : y === 3 ? '3rd' : '4th'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 2: Branch/Cycle Selection */}
              <div className="space-y-2">
                <span className="text-[9px] font-black uppercase text-slate-400 tracking-wider block">
                  {selectedYear === 1 ? 'Cycle' : 'Branch'}
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedYear === 1 ? (
                    year1Cycles.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setSelectedBranch(c.id)}
                        className={`px-3.5 py-1.5 rounded-xl text-[10px] font-bold border transition-all duration-200 cursor-pointer ${
                          selectedBranch === c.id
                            ? 'bg-[#5D5FEF] text-white border-[#5D5FEF] shadow-sm'
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-[#5D5FEF]/40'
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
                        className={`px-3.5 py-1.5 rounded-xl text-[10px] font-bold border transition-all duration-200 cursor-pointer ${
                          selectedBranch === b.id
                            ? 'bg-[#5D5FEF] text-white border-[#5D5FEF] shadow-sm'
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-[#5D5FEF]/40'
                        }`}
                      >
                        {b.shortName}
                      </button>
                    ))
                  )}
                </div>
              </div>

              {/* Row 3: Search + Button */}
              <div className="flex gap-2">
                <div className="relative flex-1 bg-slate-50 border border-slate-200 rounded-xl flex items-center focus-within:border-[#5D5FEF]/50 focus-within:ring-2 focus-within:ring-[#5D5FEF]/10 transition-all">
                  <span className="pl-3 text-slate-400 text-sm shrink-0">🔍</span>
                  <input
                    type="text"
                    placeholder="Search subject..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="w-full h-10 pl-2 pr-3 text-[11px] font-bold text-[#1E1E1E] bg-transparent focus:outline-none placeholder-slate-400"
                  />
                </div>
                <button
                  onClick={() => {
                    const cycleQuery = selectedYear === 1 ? `&cycle=${selectedBranch}` : `&branch=${selectedBranch}`;
                    const searchQueryString = searchQuery ? `&q=${encodeURIComponent(searchQuery)}` : '';
                    navigate(`/explore?year=${selectedYear}${cycleQuery}${searchQueryString}`);
                  }}
                  className="px-5 h-10 bg-gradient-to-r from-[#5D5FEF] to-[#7B7DFF] text-white font-black text-[10px] uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5 hover:shadow-[0_4px_12px_rgba(93,95,239,0.4)] transition-all duration-300 shadow-sm cursor-pointer shrink-0"
                >
                  Explore
                </button>
              </div>
            </div>
          </div>

          {/* Hero Right: 5-Book 3D Shelf */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative select-none py-4 lg:py-0">
            <style>{`
              @keyframes bookFloat1 { 0%,100%{transform:translateY(0) rotateY(22deg) rotateZ(-9deg);} 50%{transform:translateY(-4px) rotateY(22deg) rotateZ(-9deg);} }
              @keyframes bookFloat2 { 0%,100%{transform:translateY(-2px) rotateY(10deg) rotateZ(-4deg);} 50%{transform:translateY(2px) rotateY(10deg) rotateZ(-4deg);} }
              @keyframes bookFloat3 { 0%,100%{transform:translateY(0) rotateY(0deg) rotateZ(-1deg);} 50%{transform:translateY(-5px) rotateY(0deg) rotateZ(-1deg);} }
              @keyframes bookFloat4 { 0%,100%{transform:translateY(-3px) rotateY(-10deg) rotateZ(4deg);} 50%{transform:translateY(1px) rotateY(-10deg) rotateZ(4deg);} }
              @keyframes bookFloat5 { 0%,100%{transform:translateY(0) rotateY(-22deg) rotateZ(8deg);} 50%{transform:translateY(-3px) rotateY(-22deg) rotateZ(8deg);} }
              .book3d { 
                position:absolute; 
                border-radius:4px 10px 10px 4px; 
                box-shadow: 0 8px 20px rgba(0,0,0,0.08); 
                transition: transform 0.3s ease-out, box-shadow 0.3s ease-out; 
              }
              .book3d:hover { 
                cursor:pointer; 
                transform: scale(1.05) translateY(-10px) rotate(2deg) !important; 
                box-shadow: 0 12px 24px rgba(0,0,0,0.12);
              }
              .bspine { 
                position:absolute; 
                left:-10px; 
                top:0; 
                bottom:0; 
                width:10px; 
                border-radius:4px 0 0 4px; 
                filter:brightness(0.6); 
                box-shadow: inset -2px 0 6px rgba(0,0,0,0.3);
              }
              .bpages { 
                position:absolute; 
                right:-4px; 
                top:2px; 
                bottom:2px; 
                width:5px; 
                background:linear-gradient(to right,#d4ccb8,#e8e3d7,#d4ccb8); 
                border-radius:0 2px 2px 0;
                box-shadow: inset 0 0 3px rgba(0,0,0,0.15);
              }
              @media (min-width: 768px) {
                .books-container { width: 440px; height: 320px; }
                .book-1 { width:100px; height:150px; bottom:50px; }
                .book-2 { width:115px; height:170px; left:95px; bottom:50px; }
                .book-3 { width:130px; height:195px; left:205px; bottom:50px; }
                .book-4 { width:115px; height:165px; right:90px; bottom:50px; }
                .book-5 { width:100px; height:148px; bottom:50px; }
                .book-shelf { bottom:36px; left:12px; right:12px; height:16px; }
                .book-shadow { bottom:12px; left:40px; right:40px; }
                .book-padding { padding:8px 6px; }
                .book-padding-3 { padding:10px 8px; }
                .book-icon { font-size:18px; margin-bottom:4px; }
                .book-icon-3 { font-size:22px; margin-bottom:4px; }
                .book-title { font-size:7px; }
                .book-title-3 { font-size:8px; }
                .book-subtitle { font-size:6px; margin-top:3px; }
                .book-divider { width:24px; margin:5px 0; }
              }
              @media (max-width: 767px) {
                .books-container { width: 240px; height: 180px; margin: 0 auto; }
                .book-1 { width:55px; height:80px; bottom:28px; }
                .book-2 { width:62px; height:92px; left:50px; bottom:28px; }
                .book-3 { width:68px; height:105px; left:108px; bottom:28px; }
                .book-4 { width:62px; height:88px; right:48px; bottom:28px; }
                .book-5 { width:55px; height:78px; bottom:28px; }
                .book-shelf { bottom:20px; left:6px; right:6px; height:10px; }
                .book-shadow { bottom:9px; left:30px; right:30px; }
                .book-padding { padding:5px 4px; }
                .book-padding-3 { padding:7px 5px; }
                .book-icon { font-size:14px; margin-bottom:2px; }
                .book-icon-3 { font-size:16px; margin-bottom:2px; }
                .book-title { font-size:5px; }
                .book-title-3 { font-size:5.5px; }
                .book-subtitle { font-size:4.5px; margin-top:2px; }
                .book-divider { width:16px; margin:3px 0; }
              }
            `}</style>

            <div className="relative books-container">


              {/* Book 1 – far left (Engineering Physics, red) */}
              <div className="book3d book-1" style={{left:0,background:'linear-gradient(145deg,#e53935,#b71c1c)',animation:'bookFloat1 5.5s ease-in-out infinite',zIndex:1}}>
                <div className="bspine" style={{background:'#b71c1c'}} />
                <div className="bpages" />
                <div className="book-padding" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',borderRadius:'0 10px 10px 0'}}>
                  <div className="book-icon">⚛️</div>
                  <p className="book-title" style={{color:'#fff',fontWeight:900,textAlign:'center',textTransform:'uppercase',lineHeight:1.2,letterSpacing:'0.05em'}}>Engineering Physics</p>
                  <p className="book-subtitle" style={{color:'rgba(255,255,255,0.5)',fontWeight:700,textTransform:'uppercase'}}>MUJ Space</p>
                </div>
              </div>

              {/* Book 2 – mid-left (Comp Math, orange-amber) */}
              <div className="book3d book-2" style={{background:'linear-gradient(145deg,#f9a825,#e65100)',animation:'bookFloat2 6s ease-in-out infinite',zIndex:2}}>
                <div className="bspine" style={{background:'#e65100'}} />
                <div className="bpages" />
                <div className="book-padding" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',borderRadius:'0 10px 10px 0'}}>
                  <div className="book-icon">📐</div>
                  <p className="book-title" style={{color:'#fff',fontWeight:900,textAlign:'center',textTransform:'uppercase',lineHeight:1.2,letterSpacing:'0.05em'}}>Comp. Mathematics</p>
                  <p className="book-subtitle" style={{color:'rgba(255,255,255,0.5)',fontWeight:700,textTransform:'uppercase'}}>MUJ Space</p>
                </div>
              </div>

              {/* Book 3 – center/tallest (Physics Cycle, deep indigo) */}
              <div className="book3d book-3" style={{background:'linear-gradient(145deg,#5D5FEF,#3730a3)',animation:'bookFloat3 5s ease-in-out infinite',zIndex:5}}>
                <div className="bspine" style={{background:'#3730a3'}} />
                <div className="bpages" />
                <div className="book-padding-3" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',borderRadius:'0 10px 10px 0'}}>
                  <div className="book-icon-3">🔬</div>
                  <p className="book-title-3" style={{color:'#fff',fontWeight:900,textAlign:'center',textTransform:'uppercase',lineHeight:1.2,letterSpacing:'0.05em'}}>Physics Cycle</p>
                  <div className="book-divider" style={{height:1,background:'rgba(255,255,255,0.3)'}} />
                  <p className="book-subtitle" style={{color:'rgba(255,255,255,0.5)',fontWeight:700,textTransform:'uppercase'}}>MUJ Space</p>
                </div>
              </div>

              {/* Book 4 – mid-right (Chemistry Cycle, teal) */}
              <div className="book3d book-4" style={{background:'linear-gradient(145deg,#00acc1,#00695c)',animation:'bookFloat4 6.5s ease-in-out infinite',zIndex:3}}>
                <div className="bspine" style={{background:'#00695c'}} />
                <div className="bpages" />
                <div className="book-padding" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',borderRadius:'0 10px 10px 0'}}>
                  <div className="book-icon">🧪</div>
                  <p className="book-title" style={{color:'#fff',fontWeight:900,textAlign:'center',textTransform:'uppercase',lineHeight:1.2,letterSpacing:'0.05em'}}>Chemistry Cycle</p>
                  <p className="book-subtitle" style={{color:'rgba(255,255,255,0.5)',fontWeight:700,textTransform:'uppercase'}}>MUJ Space</p>
                </div>
              </div>

              {/* Book 5 – far right (PSUC, emerald-green) */}
              <div className="book3d book-5" style={{right:0,background:'linear-gradient(145deg,#43a047,#1b5e20)',animation:'bookFloat5 5.8s ease-in-out infinite',zIndex:2}}>
                <div className="bspine" style={{background:'#1b5e20'}} />
                <div className="bpages" />
                <div className="book-padding" style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',borderRadius:'0 10px 10px 0'}}>
                  <div className="book-icon">💻</div>
                  <p className="book-title" style={{color:'#fff',fontWeight:900,textAlign:'center',textTransform:'uppercase',lineHeight:1.2,letterSpacing:'0.05em'}}>PSUC</p>
                  <p className="book-subtitle" style={{color:'rgba(255,255,255,0.5)',fontWeight:700,textTransform:'uppercase'}}>MUJ Space</p>
                </div>
                </div>
            
            {/* Wooden Shelf */}
<div
  style={{
    position: "absolute",
    width: "300px",
    height: "12px",
    left: "50%",
    transform: "translateX(-50%)",
    bottom: "32px",
    zIndex: 0,

    borderRadius: "999px",

    background:
      "linear-gradient(180deg,#D8B188 0%,#C48952 40%,#A86839 70%,#844C27 100%)",

    boxShadow:
      "0 8px 18px rgba(0,0,0,.18), inset 0 1px 1px rgba(255,255,255,.45)",
  }}
/>

{/* Shelf Shadow */}
<div
  style={{
    position: "absolute",
    width: "260px",
    height: "16px",
    left: "50%",
    transform: "translateX(-50%)",
    bottom: "18px",

    borderRadius: "999px",
    background: "rgba(0,0,0,.18)",
    filter: "blur(12px)",
    zIndex: -1,
  }}
/>
</div>



            {/* NEW MINI CARDS UNDER BOOKS */}
            <div className="flex gap-3 w-full max-w-[440px] mt-6 z-10 justify-center lg:justify-start">
              {/* Attendance Calculator box */}
              <button 
                onClick={() => setIsAttendanceModalOpen(true)}
                className="flex-1 bg-white hover:bg-[#F4F4FF] border-2 border-[#5D5FEF]/20 hover:border-[#5D5FEF] hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300 p-4 rounded-2xl shadow-[0_8px_24px_rgba(93,95,239,0.15)] text-left relative overflow-hidden group cursor-pointer"
              >
                <div className="font-display font-black text-sm text-[#5D5FEF] uppercase tracking-wide flex items-center gap-1.5">
                   Attendance
                </div>
                <div className="text-[10px] text-slate-500 font-bold leading-tight mt-1 ml-0">Calculate & track</div>
              </button>
              {/* Exam Timetable box */}
              <button 
                onClick={() => setIsExamTimetableModalOpen(true)}
                className="flex-1 bg-white hover:bg-[#FFF5F5] border-2 border-[#FF6B6B]/20 hover:border-[#FF6B6B] hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300 p-4 rounded-2xl shadow-[0_8px_24px_rgba(255,107,107,0.15)] text-left relative overflow-hidden group cursor-pointer"
              >
                <div className="font-display font-black text-sm text-[#FF6B6B] uppercase tracking-wide flex items-center gap-1.5">
                   Add Exam Timetable
                </div>
                <div className="text-[10px] text-slate-500 font-bold leading-tight mt-1 ml-0">View schedule</div>
              </button>
            </div>
            
          </div>

        </div>
      </section>

      {/* ── CONTINUE STUDYING SECTION ── */}
      <section className="w-full max-w-[1536px] mx-auto px-6 lg:px-12 py-8 border-t border-slate-200/60">
        <div className="flex justify-between items-center mb-5">
          <h2 className="font-display font-extrabold text-2xl uppercase text-[#1E1E1E] tracking-tight">Continue Studying</h2>
          <Link to="/explore" className="text-xs font-black uppercase text-[#5D5FEF] hover:underline flex items-center gap-1">
            View all <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* MOBILE: Horizontal slider */}
        <div className="md:hidden flex gap-4 overflow-x-auto no-scrollbar pb-6 pt-2 px-2 snap-x snap-mandatory">
          {[
            {
              title: 'Physics Cycle',
              year: 'BTech 1st Year',
              cover: '/bookcovers/physics-cycle.png',
              explorePath: '/explore?year=1&cycle=physics-cycle'
            },
            {
              title: 'BTech 2nd Year',
              year: 'All Subjects',
              cover: '/bookcovers/second-year.png',
              explorePath: '/explore?year=2'
            },
            {
              title: 'Data Structures',
              year: 'BTech 2nd Year',
              cover: '/bookcovers/cse.png',
              explorePath: '/explore?year=2'
            },
            {
              title: 'Chemistry Cycle',
              year: 'BTech 1st Year',
              cover: '/bookcovers/chemistry-cycle.png',
              explorePath: '/explore?year=1&cycle=chemistry-cycle'
            }
          ].map((item, idx) => (
            <Link
              key={idx}
              to={item.explorePath}
              className="min-w-[280px] snap-center shrink-0 bg-white border border-slate-100 rounded-3xl p-4 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:scale-[1.02] transition-all duration-300 ease-out group flex items-center gap-5 cursor-pointer text-left"
            >
              <div className="relative w-28 h-40 shrink-0 transition-transform duration-300 ease-out group-hover:translate-y-[-4px]" style={{ perspective: '800px' }}>
                <div className="absolute right-0 top-0.5 bottom-0.5 w-1.5 bg-gradient-to-r from-slate-100 to-white border-y border-r border-slate-200 rounded-r-sm" style={{ transform: 'rotateY(-20deg)', transformOrigin: 'right center' }} />
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-black/5 z-10 rounded-l-sm" style={{ backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.08), rgba(255,255,255,0.1) 30%, rgba(0,0,0,0.04) 85%)' }} />
                <div className="absolute inset-0 rounded-r-lg bg-cover bg-center" style={{ backgroundImage: `url(${item.cover})`, boxShadow: '0 8px 20px rgba(0,0,0,0.08)' }} />
              </div>
              <div className="flex-1 flex flex-col justify-center h-40 py-1">
                <div className="space-y-0.5">
                  <span className="text-[8px] font-black uppercase text-slate-400 tracking-wider block">{item.year}</span>
                  <h3 className="font-display font-bold text-xs text-[#1E1E1E] leading-tight uppercase group-hover:text-[#5D5FEF] transition-colors break-words whitespace-normal">{item.title}</h3>
                </div>
                <div className="space-y-0.5 mt-3">
                  <span className="text-[8px] font-black uppercase text-slate-400 tracking-wider block">Recently Opened</span>
                  <span className="text-[9px] font-bold text-slate-600 block">2 hours ago</span>
                </div>
                <div className="mt-3 font-display font-black text-[9px] text-[#5D5FEF] uppercase tracking-wider group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Continue <ArrowRight className="w-2.5 h-2.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* DESKTOP: Grid view */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Physics Cycle',
              year: 'BTech 1st Year',
              cover: '/bookcovers/physics-cycle.png',
              explorePath: '/explore?year=1&cycle=physics-cycle'
            },
            {
              title: 'BTech 2nd Year',
              year: 'All Subjects',
              cover: '/bookcovers/second-year.png',
              explorePath: '/explore?year=2'
            },
            {
              title: 'Data Structures',
              year: 'BTech 2nd Year',
              cover: '/bookcovers/cse.png',
              explorePath: '/explore?year=2'
            },
            {
              title: 'Chemistry Cycle',
              year: 'BTech 1st Year',
              cover: '/bookcovers/chemistry-cycle.png',
              explorePath: '/explore?year=1&cycle=chemistry-cycle'
            }
          ].map((item, idx) => (
            <div 
              key={idx}
              onClick={() => navigate(item.explorePath)}
              className="bg-white border border-slate-100 rounded-[32px] px-5 py-4 hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:scale-[1.02] transition-all duration-300 ease-out group flex flex-row items-center gap-5 cursor-pointer text-left"
            >
              <div className="relative w-40 h-56 shrink-0 transition-transform duration-300 ease-out group-hover:translate-y-[-6px]" style={{ perspective: '800px' }}>
                {/* Book cover image */}
                <div className="absolute inset-0 rounded-r-xl bg-cover bg-center" style={{ backgroundImage: `url(${item.cover})` }} />
              </div>

              {/* Right Side: Details */}
              <div className="flex-1 flex flex-col justify-center h-56 py-2 w-full">
                <div className="space-y-1">
                  <span className="text-[9px] font-black uppercase text-slate-400 tracking-wider block">{item.year}</span>
                  <h3 className="font-display font-extrabold text-base xl:text-lg text-[#1E1E1E] leading-tight uppercase group-hover:text-[#5D5FEF] transition-colors break-words whitespace-normal">{item.title}</h3>
                </div>

                <div className="space-y-1 mt-4">
                  <span className="text-[9px] font-black uppercase text-slate-400 tracking-wider block">Recently Opened</span>
                  <span className="text-[11px] font-bold text-slate-600 block">2 hours ago</span>
                </div>

                <div className="mt-5 font-display font-black text-[11px] text-[#5D5FEF] uppercase tracking-wider group-hover:translate-x-1 transition-transform flex items-center gap-1.5">
                  Continue <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

     {/* ── TECH STACKS SECTION ── */}
<section className="w-full max-w-[1536px] mx-auto px-6 lg:px-12 py-10 border-t border-slate-200/60">
  <div className="flex justify-between items-center mb-8">
    <h2 className="font-display font-extrabold text-2xl uppercase text-[#1E1E1E] tracking-tight">
      Tech Stacks
    </h2>
  </div>

  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
    {[
      {
        y: 1,
        title: "First Year",
        cover: "/bookcovers/first-year.png",
        bg: "bg-[#F7F2FF]",
      },
      {
        y: 2,
        title: "Second Year",
        cover: "/bookcovers/second-year.png",
        bg: "bg-[#FFF6EC]",
      },
      {
        y: 3,
        title: "Third Year",
        cover: "/bookcovers/third-year.png",
        bg: "bg-[#EEF7FF]",
      },
      {
        y: 4,
        title: "Fourth Year",
        cover: "/bookcovers/fourth-year.png",
        bg: "bg-[#EFFAF2]",
      },
    ].map((item) => (
      <div
        key={item.y}
        onClick={() => navigate(`/explore?year=${item.y}`)}
        className={`
          ${item.bg}
          group
          cursor-pointer
          rounded-2xl
          border border-slate-200
          p-6
          flex flex-col
          items-center
          transition-all
          duration-300
          hover:-translate-y-2
          hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]
        `}
      >
        {/* Book */}
        <div
          className="relative w-52 h-72 transition-all duration-300 group-hover:scale-105"
          style={{ perspective: "900px" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center rounded-r-xl"
            style={{
              backgroundImage: `url(${item.cover})`,
            }}
          />
        </div>

        {/* Label */}
        <div className="mt-6 text-center">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
            Year {item.y}
          </span>

          <h3 className="mt-1 font-display font-extrabold text-xl uppercase text-[#1E1E1E]">
            {item.title}
          </h3>
        </div>
      </div>
    ))}
  </div>
</section>      {/* ── PRACTICE ARENA / NON-BTECH BANNERS ── */}
      <section className="w-full max-w-[1536px] mx-auto px-6 lg:px-12 py-8 border-t border-slate-200/60 grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-[#FF7EB9] to-[#FF5252] rounded-[32px] p-8 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-56 text-left group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl group-hover:bg-white/30 transition-colors duration-500" />
          <div className="relative z-10">
            <span className="text-[9px] font-extrabold uppercase bg-white/20 border border-white/40 px-3 py-1.5 rounded-full text-white tracking-widest">
              PYQs · Mock Tests
            </span>
            <h3 className="font-display font-black text-3xl text-white uppercase mt-4 tracking-wide leading-none">
              Practice Arena
            </h3>
            <p className="text-white/90 text-xs font-bold mt-2 max-w-[240px] leading-relaxed">
              Test your skills with past sessional and university questions.
            </p>
          </div>
          <button
            onClick={() => {
              handleSetupYearChange(1);
              setIsArenaModalOpen(true);
            }}
            className="w-fit bg-white text-[#FF5252] font-black px-6 py-3 rounded-2xl text-xs uppercase tracking-wider shadow-sm hover:bg-white/90 transition-all duration-300 cursor-pointer flex items-center gap-2 relative z-10"
          >
            Enter Arena <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div
          className="bg-gradient-to-br from-[#5D5FEF] to-[#7F00FF] rounded-[32px] border border-slate-200 p-6 sm:p-8 shadow-md relative overflow-hidden flex flex-col justify-between h-52 text-left group cursor-pointer hover:scale-[1.01] transition-transform"
          onClick={() => setIsNonBTechModalOpen(true)}
        >
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
            className="w-fit bg-white border border-white/50 text-[#5D5FEF] font-black px-5 py-2.5 rounded-2xl text-xs uppercase tracking-wider shadow-sm flex items-center gap-1.5 group-hover:bg-white/90 transition-all"
          >
            Explore Courses <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-[1536px] mx-auto px-6 lg:px-12 py-6 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-bold text-slate-400 uppercase">
        <span className="font-display font-extrabold text-[#1E1E1E] text-base">MUJ SPACE</span>
        <span>© 2026 MANIPAL UNIVERSITY JAIPUR ARCHIVE</span>
      </footer>

      {/* ── NON-BTECH COMING SOON MODAL ── */}
      <AnimatePresence>
        {isNonBTechModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E1E1E]/50 backdrop-blur-sm"
            onClick={() => setIsNonBTechModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.93, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.93, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-[#5D5FEF] to-[#7F00FF] rounded-[32px] w-full max-w-sm overflow-hidden shadow-2xl p-8 text-center relative"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl">
                  🚀
                </div>
                <h3 className="font-display font-black text-2xl text-white uppercase tracking-wide mb-2">Coming Soon!</h3>
                <p className="text-white/80 text-sm font-bold leading-relaxed mb-6">
                  We are adding more courses very soon!<br />
                  <span className="text-white/60 text-xs">BBA · BCA · MBA · B.Sc and more.</span>
                </p>
                <button
                  onClick={() => setIsNonBTechModalOpen(false)}
                  className="w-full py-3 bg-white text-[#5D5FEF] font-black text-xs uppercase tracking-wider rounded-2xl hover:bg-white/90 transition-all cursor-pointer shadow-sm"
                >
                  Got it, stay tuned! 🎯
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

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

      {/* ── ATTENDANCE CALCULATOR MODAL ── */}
      <AnimatePresence>
        {isAttendanceModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm"
            onClick={() => setIsAttendanceModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.93, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.93, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white/90 backdrop-blur-xl rounded-[24px] w-full max-w-lg overflow-hidden shadow-2xl border border-white/50 relative"
            >
              {/* Header */}
              <div className="px-6 py-4 border-b border-slate-200/50 flex items-center justify-between bg-white/70">
                <div>
                  <h3 className="font-display font-black text-xl text-[#1E1E1E] uppercase tracking-tight">Attendance Tracker</h3>
                </div>
                <button
                  onClick={() => setIsAttendanceModalOpen(false)}
                  className="w-10 h-10 rounded-xl border border-slate-200 hover:bg-slate-100 flex items-center justify-center transition-all cursor-pointer"
                >
                  <X className="w-5 h-5 text-[#1E1E1E]" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 space-y-6">
                {subjects.length === 0 && !showAddSubject ? (
                  /* Empty state: add subject */
                  <div className="text-center py-6 space-y-4">
                    <div className="text-5xl">📚</div>
                    <h4 className="font-bold text-lg text-[#1E1E1E]">Add your first subject!</h4>
                    <p className="text-sm text-slate-500">Track your attendance and missed lectures.</p>
                    <button
                      onClick={() => setShowAddSubject(true)}
                      className="px-6 py-2.5 bg-[#1E1E1E] text-white font-black text-xs uppercase rounded-xl shadow-sm hover:bg-black transition-all cursor-pointer"
                    >
                      Add Subject
                    </button>
                  </div>
                ) : showAddSubject ? (
                  /* Add subject form */
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-wider text-slate-500">Subject Name</label>
                      <input
                        type="text"
                        value={newSubjectName}
                        onChange={(e) => setNewSubjectName(e.target.value)}
                        placeholder="e.g., Engineering Physics"
                        className="w-full h-12 px-4 bg-white border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#5D5FEF]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-wider text-slate-500">Credits</label>
                      <div className="flex gap-3">
                        <button
                          onClick={() => setNewSubjectCredits(3)}
                          className={`flex-1 h-12 rounded-xl text-sm font-bold border transition-all cursor-pointer ${
                            newSubjectCredits === 3 ? 'bg-[#1E1E1E] text-white border-[#1E1E1E]' : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          3 Credits
                        </button>
                        <button
                          onClick={() => setNewSubjectCredits(4)}
                          className={`flex-1 h-12 rounded-xl text-sm font-bold border transition-all cursor-pointer ${
                            newSubjectCredits === 4 ? 'bg-[#1E1E1E] text-white border-[#1E1E1E]' : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          4 Credits
                        </button>
                      </div>
                    </div>
                    <div className="flex gap-3 pt-2">
                      <button
                        onClick={() => setShowAddSubject(false)}
                        className="flex-1 h-12 rounded-xl text-sm font-bold border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 transition-all cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => {
                          if (newSubjectName.trim()) {
                            const newSubject: AttendanceSubject = {
                              id: Date.now().toString(),
                              name: newSubjectName.trim(),
                              credits: newSubjectCredits,
                              missedLectures: 0
                            };
                            setSubjects([...subjects, newSubject]);
                            setSelectedSubjectId(newSubject.id);
                            setNewSubjectName('');
                            setShowAddSubject(false);
                          }
                        }}
                        disabled={!newSubjectName.trim()}
                        className="flex-1 h-12 rounded-xl text-sm font-black bg-[#1E1E1E] text-white hover:bg-black transition-all cursor-pointer disabled:opacity-40"
                      >
                        Save Subject
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Attendance tracker view */
                  <div className="space-y-6">
                    {/* Subject selector + Add subject button */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex-1 space-y-1">
                        <label className="text-[10px] font-black uppercase tracking-wider text-slate-500">Select Subject</label>
                        <select
                          value={selectedSubjectId || ''}
                          onChange={(e) => setSelectedSubjectId(e.target.value)}
                          className="w-full h-12 px-4 bg-white border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#5D5FEF] cursor-pointer"
                        >
                          {subjects.map((s) => (
                            <option key={s.id} value={s.id}>{s.name}</option>
                          ))}
                        </select>
                      </div>
                      <button
                        onClick={() => setShowAddSubject(true)}
                        className="mt-5 h-12 px-5 bg-slate-100 border border-slate-200 text-slate-700 font-bold text-xs uppercase rounded-xl hover:bg-slate-200 transition-all cursor-pointer flex items-center gap-2"
                      >
                        + Add
                      </button>
                    </div>

                    {/* Current subject info */}
                    {selectedSubjectId && (
                      (() => {
                        const subject = subjects.find(s => s.id === selectedSubjectId);
                        if (!subject) return null;
                        const totalLectures = subject.credits === 3 ? 45 : 60;
                        const maxMissed = subject.credits === 3 ? 9 : 12;
                        const attended = totalLectures - subject.missedLectures;
                        const percentage = Math.max(0, Math.min(100, (attended / totalLectures) * 100));
                        const isSafe = percentage >= 75;

                        return (
                          <div className="space-y-6">
                            {/* Attendance percentage */}
                            <div className="text-center">
                              <div className={`text-6xl font-black ${isSafe ? 'text-green-600' : 'text-red-600'}`}>
                                {Math.round(percentage)}%
                              </div>
                              <div className="text-sm font-bold text-slate-500 mt-1">
                                {isSafe ? 'Attendance is safe! 🎉' : 'Need more attendance! ⚠️'}
                              </div>
                              <div className="text-xs text-slate-400 mt-2">
                                {attended}/{totalLectures} lectures attended
                              </div>
                            </div>

                            {/* Missed lectures grid */}
                            <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                <span className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                                  Missed Lectures ({subject.missedLectures}/{maxMissed})
                                </span>
                              </div>
                              <div className="grid grid-cols-9 gap-2">
                                {Array.from({ length: maxMissed }).map((_, idx) => (
                                  <motion.button
                                    key={idx}
                                    onClick={() => {
                                      const newSubjects = subjects.map(s => {
                                        if (s.id === selectedSubjectId) {
                                          const newMissed = idx < s.missedLectures 
                                            ? s.missedLectures - 1 
                                            : s.missedLectures + 1;
                                          return { ...s, missedLectures: newMissed };
                                        }
                                        return s;
                                      });
                                      setSubjects(newSubjects);
                                    }}
                                    initial={{ scale: 1 }}
                                    animate={{ scale: idx < subject.missedLectures ? [1, 1.1, 1] : 1 }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`aspect-square rounded-xl flex items-center justify-center text-lg shadow-sm transition-all cursor-pointer ${
                                      idx < subject.missedLectures
                                        ? 'bg-red-500 text-white shadow-red-200'
                                        : 'bg-slate-100 text-slate-400 border border-slate-200 hover:bg-slate-200'
                                    }`}
                                  >
                                    {idx < subject.missedLectures ? '❌' : '⚪'}
                                  </motion.button>
                                ))}
                              </div>
                            </div>
                          </div>
                        );
                      })()
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── EXAM TIMETABLE MODAL ── */}
      <AnimatePresence>
        {isExamTimetableModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm"
            onClick={() => setIsExamTimetableModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.93, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.93, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white/90 backdrop-blur-xl rounded-[24px] w-full max-w-2xl overflow-hidden shadow-2xl border border-white/50 relative"
            >
              {/* Header */}
              <div className="px-6 py-4 border-b border-slate-200/50 flex items-center justify-between bg-white/70">
                <div>
                  <h3 className="font-display font-black text-xl text-[#1E1E1E] uppercase tracking-tight">Exam Timetable</h3>
                </div>
                <button
                  onClick={() => setIsExamTimetableModalOpen(false)}
                  className="w-10 h-10 rounded-xl border border-slate-200 hover:bg-slate-100 flex items-center justify-center transition-all cursor-pointer"
                >
                  <X className="w-5 h-5 text-[#1E1E1E]" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 text-center">
                <div className="text-5xl mb-4">📅</div>
                <h4 className="font-bold text-lg text-[#1E1E1E] mb-2">Coming Soon!</h4>
                <p className="text-sm text-slate-500">Add your exams to track countdowns.</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Attendance Calculator Modal */}
      <AnimatePresence>
        {isAttendanceModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E1E1E]/40 backdrop-blur-sm"
            onClick={() => setIsAttendanceModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.93, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.93, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white/90 backdrop-blur-xl border border-slate-200/60 rounded-3xl w-full max-w-md overflow-hidden shadow-2xl"
            >
              {/* Modal Header */}
              <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-white/50">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#5D5FEF] rounded-lg flex items-center justify-center">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="font-display font-black text-sm text-[#1E1E1E] uppercase">
                    Attendance Tracker
                  </h3>
                </div>
                <button
                  onClick={() => setIsAttendanceModalOpen(false)}
                  className="w-8 h-8 rounded-lg border border-slate-200 hover:bg-slate-100 flex items-center justify-center transition-all cursor-pointer"
                >
                  <X className="w-4 h-4 text-[#1E1E1E]" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-5">
                {subjects.length === 0 && !showAddSubject ? (
                  // No subjects yet, show add subject form first
                  <div className="text-center space-y-5">
                    <div className="w-16 h-16 bg-[#EDE7F6] rounded-2xl flex items-center justify-center mx-auto">
                      <div className="text-3xl">📚</div>
                    </div>
                    <div>
                      <h4 className="font-display font-extrabold text-lg text-[#1E1E1E] uppercase">
                        Add Your First Subject
                      </h4>
                      <p className="text-xs font-bold text-slate-400 mt-2">
                        Start tracking attendance by adding a subject!
                      </p>
                    </div>
                    <button
                      onClick={() => setShowAddSubject(true)}
                      className="w-full py-3 bg-[#1E1E1E] text-white font-black text-xs uppercase tracking-wider rounded-xl hover:bg-black transition-all cursor-pointer"
                    >
                      Add Subject
                    </button>
                  </div>
                ) : (
                  <>
                    {showAddSubject ? (
                      // Add Subject Form
                      <div className="space-y-4">
                        <h4 className="font-display font-bold text-base text-[#1E1E1E]">Add New Subject</h4>
                        <div className="space-y-3">
                          <div className="space-y-1">
                            <label className="text-[10px] font-black uppercase tracking-wider text-slate-400">Subject Name</label>
                            <input
                              type="text"
                              value={newSubjectName}
                              onChange={(e) => setNewSubjectName(e.target.value)}
                              placeholder="e.g., Engineering Physics"
                              className="w-full h-11 px-4 bg-white border border-slate-200 rounded-xl text-xs font-bold text-[#1E1E1E] focus:outline-none focus:border-[#5D5FEF]"
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] font-black uppercase tracking-wider text-slate-400">Credits</label>
                            <div className="grid grid-cols-2 gap-2">
                              {[3, 4].map((cred) => (
                                <button
                                  key={cred}
                                  onClick={() => setNewSubjectCredits(cred as 3 | 4)}
                                  className={`py-2 rounded-xl text-xs font-black border transition-all cursor-pointer ${
                                    newSubjectCredits === cred
                                      ? 'bg-[#1E1E1E] text-white border-[#1E1E1E]'
                                      : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300'
                                  }`}
                                >
                                  {cred} Credits
                                </button>
                              ))}
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={() => { setShowAddSubject(false); setNewSubjectName(''); }}
                              className="flex-1 py-2.5 bg-white border border-slate-200 text-[#1E1E1E] font-black text-xs uppercase rounded-xl hover:bg-slate-50 transition-all cursor-pointer"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={() => {
                                if (newSubjectName.trim()) {
                                  setSubjects([...subjects, {
                                    id: Date.now().toString(),
                                    name: newSubjectName.trim(),
                                    credits: newSubjectCredits,
                                    missedLectures: 0
                                  }]);
                                  setShowAddSubject(false);
                                  setNewSubjectName('');
                                }
                              }}
                              disabled={!newSubjectName.trim()}
                              className="flex-1 py-2.5 bg-[#1E1E1E] text-white font-black text-xs uppercase rounded-xl hover:bg-black transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                            >
                              Save Subject
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      // Attendance Tracker Interface
                      <>
                        {/* Subject Selector */}
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-wider text-slate-400">Select Subject</label>
                          <div className="grid grid-cols-2 gap-2">
                            {subjects.map((subj) => (
                              <button
                                key={subj.id}
                                onClick={() => setSelectedSubjectId(subj.id)}
                                className={`py-2.5 rounded-xl text-xs font-black border transition-all cursor-pointer ${
                                  selectedSubjectId === subj.id
                                    ? 'bg-[#5D5FEF] text-white border-[#5D5FEF] shadow-sm'
                                    : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300'
                                }`}
                              >
                                {subj.name}
                              </button>
                            ))}
                          </div>
                          <button
                            onClick={() => setShowAddSubject(true)}
                            className="w-full py-2.5 bg-[#FAF9F5] border border-slate-200 text-[#1E1E1E] font-black text-[10px] uppercase rounded-xl hover:bg-white transition-all cursor-pointer"
                          >
                            + Add Subject
                          </button>
                        </div>

                        {/* Selected Subject Details */}
                        {selectedSubjectId && (() => {
                          const subject = subjects.find(s => s.id === selectedSubjectId);
                          if (!subject) return null;
                          const totalLectures = subject.credits === 3 ? 45 : 60;
                          const maxMissed = subject.credits === 3 ? 9 : 12;
                          const attended = totalLectures - subject.missedLectures;
                          const percentage = Math.round((attended / totalLectures) * 100);
                          const isSafe = percentage >= 75;

                          return (
                            <div className="space-y-5">
                              {/* Attendance Percentage */}
                              <div className="text-center space-y-2">
                                <div className={`text-6xl font-display font-black ${isSafe ? 'text-[#22C55E]' : 'text-[#EF4444]'}`}>
                                  {percentage}%
                                </div>
                                <div className={`text-xs font-extrabold uppercase tracking-wider ${isSafe ? 'text-[#22C55E]' : 'text-[#EF4444]'}`}>
                                  {isSafe ? 'SAFE' : 'NEED MORE ATTENDANCE'}
                                </div>
                                <div className="text-xs font-bold text-slate-500">
                                  {attended} / {totalLectures} Lectures Attended
                                </div>
                              </div>

                              {/* Missed Lectures Circles */}
                              <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                  <label className="text-[10px] font-black uppercase tracking-wider text-slate-400">Missed Lectures</label>
                                  <span className="text-xs font-extrabold text-slate-600">
                                    {subject.missedLectures} / {maxMissed}
                                  </span>
                                </div>
                                <div className="flex flex-wrap gap-2 justify-center">
                                  {Array.from({ length: maxMissed }, (_, i) => (
                                    <motion.button
                                      key={i}
                                      whileTap={{ scale: 0.85 }}
                                      onClick={() => {
                                        setSubjects(subjects.map(s => {
                                          if (s.id === subject.id) {
                                            if (i < s.missedLectures) {
                                              return { ...s, missedLectures: s.missedLectures - 1 };
                                            } else {
                                              return { ...s, missedLectures: s.missedLectures + 1 };
                                            }
                                          }
                                          return s;
                                        }));
                                      }}
                                      className={`w-10 h-10 rounded-xl transition-all cursor-pointer flex items-center justify-center ${
                                        i < subject.missedLectures
                                          ? 'bg-gradient-to-br from-[#EF4444] to-[#DC2626] shadow-lg'
                                          : 'bg-slate-100 border border-slate-200 hover:border-slate-300'
                                      }`}
                                    >
                                      {i < subject.missedLectures && <X className="w-5 h-5 text-white" />}
                                    </motion.button>
                                  ))}
                                </div>
                              </div>
                            </div>
                          );
                        })()}
                      </>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Exam Timetable Modal */}
      <AnimatePresence>
        {isExamTimetableModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E1E1E]/40 backdrop-blur-sm"
            onClick={() => setIsExamTimetableModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.93, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.93, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white/90 backdrop-blur-xl border border-slate-200/60 rounded-3xl w-full max-w-md overflow-hidden shadow-2xl text-left"
            >
              {/* Modal Header */}
              <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-white/50">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#FF6B6B] rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">📅</span>
                  </div>
                  <h3 className="font-display font-black text-sm text-[#1E1E1E] uppercase">
                    Exam Timetable
                  </h3>
                </div>
                <button
                  onClick={() => setIsExamTimetableModalOpen(false)}
                  className="w-8 h-8 rounded-lg border border-slate-200 hover:bg-slate-100 flex items-center justify-center transition-all cursor-pointer"
                >
                  <X className="w-4 h-4 text-[#1E1E1E]" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-5">
                {examEntries.length === 0 && !showAddExam ? (
                  // No exams yet, show add exam prompt
                  <div className="text-center space-y-5">
                    <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto">
                      <div className="text-3xl">🗓️</div>
                    </div>
                    <div>
                      <h4 className="font-display font-extrabold text-lg text-[#1E1E1E] uppercase">
                        No Exams Added
                      </h4>
                      <p className="text-xs font-bold text-slate-400 mt-2">
                        Keep track of your MTEs and ETEs easily.
                      </p>
                    </div>
                    <button
                      onClick={() => setShowAddExam(true)}
                      className="w-full py-3 bg-[#1E1E1E] text-white font-black text-xs uppercase tracking-wider rounded-xl hover:bg-black transition-all cursor-pointer"
                    >
                      Add Exam Date
                    </button>
                  </div>
                ) : (
                  <>
                    {showAddExam ? (
                      // Add Exam Form
                      <div className="space-y-4">
                        <h4 className="font-display font-bold text-base text-[#1E1E1E]">Add New Exam</h4>
                        <div className="space-y-3">
                          <div className="space-y-1">
                            <label className="text-[10px] font-black uppercase tracking-wider text-slate-400">Subject / Course</label>
                            <input
                              type="text"
                              value={newExamSubject}
                              onChange={(e) => setNewExamSubject(e.target.value)}
                              placeholder="e.g., Engineering Mathematics"
                              className="w-full h-11 px-4 bg-white border border-slate-200 rounded-xl text-xs font-bold text-[#1E1E1E] focus:outline-none focus:border-[#FF6B6B]"
                            />
                          </div>
                          
                          <div className="space-y-1">
                            <label className="text-[10px] font-black uppercase tracking-wider text-slate-400">Exam Type</label>
                            <div className="grid grid-cols-3 gap-2">
                              {['MTE', 'ETE', 'Other'].map((type) => (
                                <button
                                  key={type}
                                  onClick={() => setNewExamType(type as any)}
                                  className={`py-2 rounded-xl text-xs font-black border transition-all cursor-pointer ${
                                    newExamType === type
                                      ? 'bg-[#1E1E1E] text-white border-[#1E1E1E]'
                                      : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300'
                                  }`}
                                >
                                  {type}
                                </button>
                              ))}
                            </div>
                          </div>
                          
                          <div className="space-y-1">
                            <label className="text-[10px] font-black uppercase tracking-wider text-slate-400">Date</label>
                            <input
                              type="date"
                              value={newExamDate}
                              onChange={(e) => setNewExamDate(e.target.value)}
                              className="w-full h-11 px-4 bg-white border border-slate-200 rounded-xl text-xs font-bold text-[#1E1E1E] focus:outline-none focus:border-[#FF6B6B]"
                            />
                          </div>
                          
                          <div className="flex gap-2 pt-2">
                            <button
                              onClick={() => { setShowAddExam(false); setNewExamSubject(''); setNewExamDate(''); }}
                              className="flex-1 py-2.5 bg-white border border-slate-200 text-[#1E1E1E] font-black text-xs uppercase rounded-xl hover:bg-slate-50 transition-all cursor-pointer"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={() => {
                                if (newExamSubject.trim() && newExamDate) {
                                  setExamEntries([...examEntries, {
                                    id: Date.now().toString(),
                                    subject: newExamSubject.trim(),
                                    type: newExamType,
                                    date: newExamDate
                                  }].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()));
                                  setShowAddExam(false);
                                  setNewExamSubject('');
                                  setNewExamDate('');
                                }
                              }}
                              disabled={!newExamSubject.trim() || !newExamDate}
                              className="flex-1 py-2.5 bg-[#FF6B6B] text-white font-black text-xs uppercase rounded-xl hover:bg-[#ff5252] transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                            >
                              Save Exam
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      // Exam List Interface
                      <div className="space-y-4">
                        <div className="space-y-2">
                          {examEntries.map((exam) => (
                            <div key={exam.id} className="p-3 border border-slate-200 rounded-xl bg-white flex justify-between items-center group">
                              <div>
                                <h4 className="font-display font-bold text-sm text-[#1E1E1E] uppercase">{exam.subject}</h4>
                                <div className="flex items-center gap-2 mt-1">
                                  <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded ${
                                    exam.type === 'MTE' ? 'bg-orange-100 text-orange-600' :
                                    exam.type === 'ETE' ? 'bg-red-100 text-red-600' :
                                    'bg-slate-100 text-slate-600'
                                  }`}>
                                    {exam.type}
                                  </span>
                                  <span className="text-[10px] font-bold text-slate-400">
                                    {new Date(exam.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                  </span>
                                </div>
                              </div>
                              <button
                                onClick={() => {
                                  setExamEntries(examEntries.filter(e => e.id !== exam.id));
                                }}
                                className="w-8 h-8 flex flex-shrink-0 items-center justify-center rounded-lg hover:bg-red-50 text-slate-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 cursor-pointer"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                        <button
                          onClick={() => setShowAddExam(true)}
                          className="w-full py-2.5 bg-[#FAF9F5] border border-slate-200 text-[#1E1E1E] font-black text-[10px] uppercase rounded-xl hover:bg-white transition-all cursor-pointer"
                        >
                          + Add More Subjects
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
