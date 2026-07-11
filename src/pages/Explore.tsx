import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, BookOpen, FileText, ExternalLink,
  ChevronRight, Search, Download, Bell, Folder,
  Calendar, Plus, X
} from 'lucide-react';
import { year1Cycles, branches, type Subject, type Cycle, type Branch } from '@/data/studyMaterial';

type Step = 'year' | 'branch' | 'subjects' | 'resources';
type ResourceTab = 'notes' | 'pyqs';

// ── MUJ Academic Calendar (hardcoded MTE / ETE windows) ──
const MUJ_EXAMS = [
  { label: 'MTE', subject: 'Mid Term Exam', startDate: new Date('2025-09-15'), endDate: new Date('2025-09-25') },
  { label: 'ETE', subject: 'End Term Exam', startDate: new Date('2025-11-20'), endDate: new Date('2025-12-05') },
  { label: 'MTE', subject: 'Mid Term Exam', startDate: new Date('2026-02-10'), endDate: new Date('2026-02-20') },
  { label: 'ETE', subject: 'End Term Exam', startDate: new Date('2026-04-15'), endDate: new Date('2026-04-30') },
];

function getDaysLeft(target: Date) {
  const now = new Date();
  const diff = target.getTime() - now.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

function getNextExam() {
  const now = new Date();
  return MUJ_EXAMS.find(e => e.startDate > now) || null;
}

// ── Sidebar Clock ──
// ── Shared ExamEntry type (same as Home.tsx) ──
interface ExamEntry {
  id: string;
  subject: string;
  type: 'MTE' | 'ETE' | 'Other';
  date: string;
}

function SidebarClock({ examEntries, onAddTimetable }: {
  examEntries: ExamEntry[];
  onAddTimetable: () => void;
}) {
  const nextExam = getNextExam();
  const daysLeft = nextExam ? getDaysLeft(nextExam.startDate) : null;

  // Sort user entries by date ascending
  const sortedEntries = [...examEntries].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const upcomingEntries = sortedEntries.filter(e => getDaysLeft(new Date(e.date)) >= 0);

  return (
    <div className="space-y-6 pt-2">
      <div className="space-y-4">
        <div className="flex items-center gap-1.5 text-[10px] font-black uppercase text-slate-400 tracking-widest">
          <Calendar className="w-3.5 h-3.5" /> Upcoming Exams
        </div>

        <div className="space-y-3">
          {/* User exam entries */}
          {upcomingEntries.map(entry => {
            const days = getDaysLeft(new Date(entry.date));
            return (
              <div key={entry.id} className="bg-red-50 border border-red-100 rounded-xl p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[11px] font-black text-red-900 leading-tight">{entry.subject}</p>
                    <p className="text-[9px] font-bold text-red-600/70 mt-0.5 uppercase tracking-wider">{entry.type}</p>
                  </div>
                  <span className="text-[10px] font-black bg-red-500 text-white px-2 py-0.5 rounded uppercase">{Math.max(0, days)}d</span>
                </div>
              </div>
            );
          })}

          {/* MUJ hardcoded exams */}
          {nextExam && daysLeft !== null && (
            <div className="bg-white border border-slate-100 rounded-xl p-4 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-[11px] font-black text-[#1E1E1E] leading-tight">{nextExam.subject}</p>
                  <p className="text-[9px] font-bold text-slate-400 mt-1 uppercase tracking-wider">Academic Calendar</p>
                </div>
                <span className={`text-[9px] font-black text-white px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm ${nextExam.label === 'MTE' ? 'bg-[#FFB236]' : 'bg-[#5D5FEF]'}`}>
                  {Math.max(0, daysLeft)} Days
                </span>
              </div>
              <div className="mt-3 pt-3 border-t border-slate-50 flex items-center justify-between text-[10px]">
                 <span className="font-bold text-slate-400">Type</span>
                 <span className="font-black text-slate-600 uppercase">{nextExam.label}</span>
              </div>
            </div>
          )}

          {/* Add timetable button */}
          <button
            onClick={onAddTimetable}
            className="w-full flex items-center justify-center gap-1.5 text-[10px] font-black uppercase text-slate-500 bg-white border-2 border-dashed border-slate-200 rounded-xl py-2.5 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-700 transition-all cursor-pointer"
          >
            <Plus className="w-3 h-3" /> Add Exam
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Explore() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialYear = parseInt(queryParams.get('year') || '0', 10);
  const displayName = localStorage.getItem('muj_username') || 'Student';

  const [step, setStep] = useState<Step>(initialYear > 0 ? 'branch' : 'year');
  const [selectedYear, setSelectedYear] = useState<number>(initialYear);
  const [selectedCycle, setSelectedCycle] = useState<Cycle | null>(null);
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [activeTab, setActiveTab] = useState<ResourceTab>('notes');
  const [searchQuery, setSearchQuery] = useState('');
  // Sync with the same localStorage key as Home.tsx
  const [examEntries, setExamEntries] = useState<ExamEntry[]>(() => {
    const saved = localStorage.getItem('examEntries');
    return saved ? JSON.parse(saved) : [];
  });
  const [showTimetableModal, setShowTimetableModal] = useState(false);
  const [timetableForm, setTimetableForm] = useState({ subject: '', type: 'MTE' as 'MTE'|'ETE'|'Other', date: '' });

  // Persist exam entries to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('examEntries', JSON.stringify(examEntries));
  }, [examEntries]);

  // Update step/year when query parameter changes
  useEffect(() => {
    const yr = parseInt(queryParams.get('year') || '0', 10);
    const branchOrCycleId = queryParams.get('branch') || queryParams.get('cycle') || '';
    const q = queryParams.get('q') || '';

    if (q) setSearchQuery(q);
    else setSearchQuery('');

    if (yr > 0) {
      setSelectedYear(yr);
      if (branchOrCycleId) {
        if (yr === 1) {
          const cy = year1Cycles.find(c => c.id === branchOrCycleId);
          if (cy) { setSelectedCycle(cy); setSelectedBranch(null); setStep('subjects'); return; }
        } else {
          const br = branches.find(b => b.id === branchOrCycleId);
          if (br) { setSelectedBranch(br); setSelectedCycle(null); setStep('subjects'); return; }
        }
      }
      setStep('branch');
    } else {
      setSelectedYear(0);
      setStep('year');
    }
    setSelectedCycle(null);
    setSelectedBranch(null);
    setSelectedSubject(null);
  }, [location.search]);
  const subjectList: Subject[] = selectedCycle?.subjects || selectedBranch?.subjects || [];
  const filteredSubjects = subjectList.filter(s =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const goBack = () => {
    if (step === 'resources') { setSelectedSubject(null); setStep('subjects'); return; }
    if (step === 'subjects') { setSelectedCycle(null); setSelectedBranch(null); setStep('branch'); return; }
    if (step === 'branch') { setSelectedYear(0); setStep('year'); navigate('/explore'); return; }
  };

  const getBookCoverPath = (id: string) => {
    const map: Record<string, string> = {
      'physics-cycle': '/bookcovers/physics-cycle.png',
      'chemistry-cycle': '/bookcovers/chemistry-cycle.png',
      'cse': '/bookcovers/cse.png',
      'aiml': '/bookcovers/aiml.png',
      'it': '/bookcovers/it.png',
      'data-science': '/bookcovers/data-science.png',
      'mechanical-engineering': '/bookcovers/mechanical-engineering.png',
      'mechanical': '/bookcovers/mechanical-engineering.png',
      'civil-engineering': '/bookcovers/civil-engineering.png',
      'chemical-engineering': '/bookcovers/chemical-engineering.png',
      'electronics-communication-engineering': '/bookcovers/electronics-communication-engineering.png',
      'ece': '/bookcovers/electronics-communication-engineering.png',
      'electronics-engineering': '/bookcovers/electronics-engineering.png',
      'iot': '/bookcovers/iot.png',
      'dse': '/bookcovers/data-science.png',
      'cyber-security': '/bookcovers/cyber-security.png',
      'cce': '/bookcovers/cce.png',
      'mechatronics': '/bookcovers/mechatronics.png',
      'automobile': '/bookcovers/automobile.png',
      'first-year': '/bookcovers/first-year.png',
      'second-year': '/bookcovers/second-year.png',
      'third-year': '/bookcovers/third-year.png',
      'fourth-year': '/bookcovers/fourth-year.png',
    };
    return map[id] || '/bookcovers/cse.png';
  };

  const getFolderColors = (index: number) => {
    const sets = [
      { bg: 'bg-[#FFF8F0]', border: 'border-amber-100', folderColor: 'text-[#FFB236]' },
      { bg: 'bg-[#F0F7FF]', border: 'border-blue-100', folderColor: 'text-[#4FA3F7]' },
      { bg: 'bg-[#FCF0F7]', border: 'border-pink-100', folderColor: 'text-[#FF7EB9]' },
      { bg: 'bg-[#F0FDF4]', border: 'border-emerald-100', folderColor: 'text-[#3CD070]' },
      { bg: 'bg-[#F3E8FF]', border: 'border-purple-100', folderColor: 'text-[#B39DDB]' },
    ];
    return sets[index % sets.length];
  };

  // Layout: sidebar on left (desktop), hidden on mobile; main content on right
  const showSidebar = selectedYear > 0;

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-[#1E1E1E] font-sans antialiased pb-28">

      {/* ── HEADER NAVIGATION ── */}
      <header className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-[#FF5252] rounded-xl flex items-center justify-center shadow-sm">
            <BookOpen className="w-4 h-4 text-white" />
          </div>
          <span className="font-display font-black text-[#1E1E1E] text-lg tracking-tight uppercase">MUJ SPACE</span>
        </Link>

        {/* Navigation Middle Pill Bar */}
        <div className="flex items-center gap-1 bg-white border border-slate-200/80 px-1.5 py-1 rounded-full shadow-sm">
          <Link to="/" className="px-5 py-1.5 rounded-full text-xs font-bold text-slate-500 hover:text-[#1E1E1E] transition-all">Home</Link>
          <Link to="/explore" className="px-5 py-1.5 rounded-full text-xs font-black bg-[#1E1E1E] text-white shadow-sm transition-all">Library</Link>
          <Link to="/quiz" className="px-5 py-1.5 rounded-full text-xs font-bold text-slate-500 hover:text-[#1E1E1E] transition-all">Practice Arena</Link>
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
            <span className="hidden lg:inline text-xs font-black text-[#1E1E1E] tracking-tight">Hi, {displayName} 👋</span>
          </div>
        </div>
      </header>

      {/* ── MAIN LAYOUT ── */}
      <div className={`w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 ${showSidebar ? 'flex flex-col-reverse lg:flex-row gap-6' : ''}`}>

        {/* ── LEFT SIDEBAR (only on branch/subjects steps) ── */}
        {showSidebar && (
          <aside className="w-full lg:w-52 shrink-0 space-y-4">
            {/* Nav links */}
            <nav className="hidden lg:block space-y-1">
              {[
                { label: 'Home', icon: '🏠', to: '/' },
                { label: 'Tech Stack', icon: '📚', to: '/explore' },
                { label: 'Practice Arena', icon: '💛', to: '/quiz' },
              ].map(({ label, icon, to }) => (
                <Link
                  key={label}
                  to={to}
                  className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    label === 'Tech Stack'
                      ? 'bg-[#5D5FEF]/10 text-[#5D5FEF]'
                      : 'text-slate-500 hover:bg-white hover:text-[#1E1E1E]'
                  }`}
                >
                  <span>{icon}</span>
                  <span>{label}</span>
                </Link>
              ))}
            </nav>

            <div className="border-t border-slate-200" />

            {/* Clock + exam countdown */}
            <SidebarClock examEntries={examEntries} onAddTimetable={() => setShowTimetableModal(true)} />
          </aside>
        )}

        {/* ── RIGHT MAIN CONTENT ── */}
        <div className="flex-1 min-w-0">
          {/* Back button */}
          {step !== 'year' && (
            <button
              onClick={goBack}
              className="mb-6 inline-flex items-center gap-1.5 text-xs font-black uppercase text-slate-500 hover:text-[#1E1E1E] cursor-pointer transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
          )}

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
                <div className="text-center space-y-3">
                  <h1 className="font-display font-extrabold text-4xl md:text-5xl text-[#1E1E1E] uppercase">
                    Select Academic Level
                  </h1>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { y: 1, label: 'First Year', subtitle: 'Foundation', color: 'bg-[#EDE7F6]', cover: '/bookcovers/first-year.png' },
                    { y: 2, label: 'Second Year', subtitle: 'Core Concepts', color: 'bg-[#FFF3E0]', cover: '/bookcovers/second-year.png' },
                    { y: 3, label: 'Third Year', subtitle: 'Specialized', color: 'bg-[#E3F2FD]', cover: '/bookcovers/third-year.png' },
                    { y: 4, label: 'Fourth Year', subtitle: 'Advanced Topics', color: 'bg-[#E8F5E9]', cover: '/bookcovers/fourth-year.png' },
                  ].map(({ y, label, subtitle, color, cover }) => (
                    <button
                      key={y}
                      onClick={() => { setSelectedYear(y); setStep('branch'); }}
                      className="text-left w-full cursor-pointer focus:outline-none group"
                    >
                      <div className={`relative rounded-[24px] border border-slate-200 pt-6 px-6 shadow-[0_8px_20px_rgba(0,0,0,0.03)] hover:translate-y-[-4px] hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] transition-all flex flex-col items-center h-[340px] overflow-hidden ${color}`}>
                        <div className="w-full space-y-1 text-left z-10">
                          <span className="text-[9px] font-extrabold uppercase bg-white/60 backdrop-blur-md border border-slate-200/50 px-2 py-0.5 rounded-full shadow-sm">Year 0{y}</span>
                          <h3 className="font-display font-extrabold text-xl text-[#1E1E1E] uppercase leading-tight pt-1">{label}</h3>
                          <p className="text-[10px] font-bold text-slate-500">{subtitle}</p>
                        </div>
                        <div
                          className="absolute bottom-[-20px] w-48 h-64 rounded-xl bg-cover bg-center shadow-[0_8px_20px_rgba(0,0,0,0.12)] group-hover:scale-[1.03] transition-transform duration-500 z-0"
                          style={{ backgroundImage: `url(${cover})` }}
                        />
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          {/* ── STEP: BRANCH / CYCLE ── */}
{step === "branch" && (
  <motion.div
    key="branch"
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    className="space-y-8"
  >
    {/* Header */}
    <div className="space-y-2">
      <span className="text-[10px] font-extrabold uppercase bg-white border border-slate-200 px-3 py-1 rounded-full shadow-sm inline-block">
        YEAR 0{selectedYear}
      </span>

      <h1 className="font-display font-black text-3xl md:text-4xl text-[#1E1E1E] uppercase">
        {selectedYear === 1 ? "Select Your Cycle" : "Select Branch"}
      </h1>

      <p className="text-slate-400 font-bold text-xs leading-relaxed max-w-sm">
        Select the appropriate stream cover to access notes and sessional study
        cards.
      </p>
    </div>

    {/* Books Grid */}
    <div
      className={`grid justify-center gap-x-16 gap-y-24 mx-auto mt-12 ${
        selectedYear === 1
          ? "grid-cols-2 max-w-3xl"
          : "grid-cols-2 md:grid-cols-3 xl:grid-cols-4 max-w-6xl"
      }`}
    >
      {(selectedYear === 1 ? year1Cycles : branches).map((item) => (
        <button
          key={item.id}
          onClick={() => {
            if (selectedYear === 1) {
              setSelectedCycle(item as Cycle);
              setStep("subjects");
            } else {
              setSelectedBranch(item as Branch);
              setStep("subjects");
            }
          }}
          className="group flex flex-col items-center justify-start h-[430px] cursor-pointer bg-transparent border-none outline-none"
        >
          {/* Book Area */}
          <div className="h-72 w-full flex items-end justify-center">
            <img
              src={getBookCoverPath(item.id)}
              alt={"name" in item ? item.name : (item as Branch).shortName}
              draggable={false}
              className={`
                max-h-full
                max-w-full
                object-contain
                transition-all
                duration-300
                ease-out
                group-hover:scale-105
                group-hover:-translate-y-2
                drop-shadow-2xl
                ${
                  selectedYear === 1
                    ? "w-64"
                    : "w-56"
                }
              `}
            />
          </div>

          {/* Title Area */}
          <div className="mt-6 h-28 flex flex-col items-center justify-start text-center px-3">
            <h3
              className={`
                font-display
                font-extrabold
                uppercase
                leading-tight
                tracking-tight
                text-[#1E1E1E]
                transition-colors
                duration-300
                group-hover:text-[#5D5FEF]
                ${
                  selectedYear === 1
                    ? "text-xl"
                    : "text-[19px]"
                }
              `}
            >
              {"name" in item ? item.name : (item as Branch).shortName}
            </h3>

            <p className="mt-2 text-xs font-medium text-slate-400">
              {selectedYear === 1
                ? "Foundation Cycle"
                : "Sessional Syllabus"}
            </p>
          </div>
        </button>
      ))}
    </div>
  </motion.div>
)}

            {/* ── STEP: SUBJECTS ── */}
            {step === 'subjects' && (
              <motion.div
                key="subjects"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="space-y-6 text-left"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-1.5 text-[9px] font-extrabold text-slate-450 uppercase tracking-widest bg-white border border-slate-200 px-3 py-1 rounded-full shadow-sm w-fit mb-3">
                      <span>Year 0{selectedYear}</span>
                      <ChevronRight className="w-2.5 h-2.5" />
                      <span className="text-[#5D5FEF]">{selectedCycle?.name || selectedBranch?.shortName}</span>
                    </div>
                    <h1 className="font-display font-extrabold text-3xl md:text-4xl text-[#1E1E1E] uppercase">
                      Subject Notebooks
                    </h1>
                  </div>
                  <div className="text-center">
                    <p className="text-[9px] font-extrabold text-slate-400 uppercase">Available</p>
                    <p className="text-lg font-display font-bold text-[#1E1E1E]">{subjectList.length} Folders</p>
                  </div>
                </div>

                {/* Search */}
                <div className="relative bg-white border border-slate-200 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex items-center focus-within:ring-2 focus-within:ring-[#5D5FEF]/20 focus-within:border-[#5D5FEF]/50 transition-all duration-300">
                  <Search className="absolute left-4 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search subjects, notes, PYQs, PPTs..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="w-full h-12 pl-12 pr-4 text-xs font-bold text-[#1E1E1E] bg-transparent focus:outline-none placeholder-slate-400"
                  />
                </div>

                {/* Folder Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 mt-6">
                  {filteredSubjects.map((sub, i) => {
                    const style = getFolderColors(i);
                    return (
                      <button
                        key={sub.id}
                        onClick={() => { setSelectedSubject(sub); setActiveTab('notes'); setStep('resources'); }}
                        className="text-left w-full focus:outline-none cursor-pointer group"
                      >
                        <div className={`rounded-2xl border ${style.border} ${style.bg} p-4 shadow-md flex flex-col justify-between h-40 hover:scale-[1.02] transition-transform`}>
                          <div className="flex justify-between items-start">
                            <Folder className={`w-8 h-8 fill-current ${style.folderColor}`} />
                            <span className="text-[8px] font-extrabold bg-[#1E1E1E] text-white px-2 py-0.5 rounded uppercase">
                              {sub.resourceCount} Files
                            </span>
                          </div>
                          <div className="space-y-0.5 pt-3">
                            <h4 className="font-display font-extrabold text-xs text-[#1E1E1E] uppercase leading-tight line-clamp-2">
                              {sub.name}
                            </h4>
                          </div>
                        </div>
                      </button>
                    );
                  })}
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
                className="space-y-8 text-left"
              >
                <div className="flex items-center gap-3 flex-wrap">
                  <h1 className="font-display font-extrabold text-3xl md:text-4xl text-[#1E1E1E] uppercase flex items-center gap-2">
                    <span>{selectedSubject.emoji}</span>
                    <span>{selectedSubject.name}</span>
                  </h1>
                </div>

                {/* Tab selectors */}
                <div className="flex gap-2 pt-2">
                  {[
                    { key: 'notes', label: 'Study Materials', color: '#FFB236' },
                    { key: 'pyqs',  label: 'Previous Papers', color: '#FF7EB9' },
                  ].map(({ key, label, color }) => {
                    const isActive = activeTab === key;
                    return (
                      <button
                        key={key}
                        onClick={() => setActiveTab(key as ResourceTab)}
                        style={{ backgroundColor: isActive ? color : '' }}
                        className={`px-4 py-2 rounded-xl font-display font-bold text-xs uppercase border border-slate-200 transition-all cursor-pointer ${
                          isActive ? 'text-[#1E1E1E] shadow-sm border-transparent' : 'bg-white text-slate-500 hover:bg-slate-50'
                        }`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>

                {/* Notes */}
                {activeTab === 'notes' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    {selectedSubject.studyMaterials.length === 0 ? (
                      <div className="p-8 text-center border border-dashed border-slate-200 rounded-2xl text-xs font-bold text-slate-400">
                        NO STUDY MATERIALS LINKED YET.
                      </div>
                    ) : (
                      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                        {selectedSubject.studyMaterials.map((m, i) => (
                          <a key={i} href={m.url} target="_blank" rel="noreferrer"
                            className="group bg-white border border-slate-200 rounded-2xl p-5 shadow-lg hover:shadow-xl hover:translate-y-[-4px] transition-all flex flex-col justify-between h-44"
                          >
                            <div>
                              <div className="w-9 h-9 bg-[#4FA3F7]/10 border border-slate-200 rounded-xl flex items-center justify-center mb-3">
                                <FileText className="w-4.5 h-4.5 text-[#4FA3F7]" />
                              </div>
                              <h4 className="font-display font-bold text-[#1E1E1E] text-xs line-clamp-2 leading-tight uppercase">{m.title}</h4>
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

                {/* PYQs */}
                {activeTab === 'pyqs' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    {selectedSubject.pyqs.length === 0 ? (
                      <div className="p-8 text-center border border-dashed border-slate-200 rounded-2xl text-xs font-bold text-slate-400">
                        NO PYQS UPLOADED YET.
                      </div>
                    ) : (
                      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                        {selectedSubject.pyqs.map((p, i) => (
                          <a key={i} href={p.url} target="_blank" rel="noreferrer"
                            className="group bg-white border border-slate-200 rounded-2xl p-5 shadow-lg hover:shadow-xl hover:translate-y-[-4px] transition-all flex flex-col justify-between h-44"
                          >
                            <div>
                              <div className="w-9 h-9 bg-[#FF7EB9]/10 border border-slate-200 rounded-xl flex items-center justify-center mb-3">
                                <Download className="w-4.5 h-4.5 text-[#FF7EB9]" />
                              </div>
                              <h4 className="font-display font-bold text-[#1E1E1E] text-xs line-clamp-2 leading-tight uppercase">{p.title}</h4>
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


              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>

      {/* ── ADD EXAM TIMETABLE MODAL ── */}
      <AnimatePresence>
        {showTimetableModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E1E1E]/40 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              className="bg-white border border-slate-200 rounded-[24px] w-full max-w-sm p-6 shadow-xl space-y-5"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display font-black text-sm text-[#1E1E1E] uppercase">Add Exam Timetable</h3>
                  <p className="text-[9px] font-black uppercase text-slate-400 mt-0.5">Set your personal exam reminder</p>
                </div>
                <button
                  onClick={() => setShowTimetableModal(false)}
                  className="w-8 h-8 rounded-lg border border-slate-200 hover:bg-slate-100 flex items-center justify-center cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3">
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Subject / Exam Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Engineering Physics"
                    value={timetableForm.subject}
                    onChange={e => setTimetableForm(f => ({ ...f, subject: e.target.value }))}
                    className="w-full h-11 px-4 border border-slate-200 rounded-xl text-xs font-bold focus:outline-none focus:border-[#5D5FEF] bg-[#FAF9F5]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Exam Type</label>
                  <div className="flex gap-2">
                    {(['MTE', 'ETE', 'Other'] as const).map(t => (
                      <button
                        key={t}
                        onClick={() => setTimetableForm(f => ({ ...f, type: t }))}
                        className={`flex-1 py-2 text-[10px] font-black uppercase rounded-xl border transition-all cursor-pointer ${
                          timetableForm.type === t
                            ? 'bg-[#1E1E1E] text-white border-[#1E1E1E]'
                            : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300'
                        }`}
                      >{t}</button>
                    ))}
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Exam Date</label>
                  <input
                    type="date"
                    value={timetableForm.date}
                    onChange={e => setTimetableForm(f => ({ ...f, date: e.target.value }))}
                    className="w-full h-11 px-4 border border-slate-200 rounded-xl text-xs font-bold focus:outline-none focus:border-[#5D5FEF] bg-[#FAF9F5]"
                  />
                </div>
              </div>

              <button
                disabled={!timetableForm.subject || !timetableForm.date}
                onClick={() => {
                  const entry: ExamEntry = {
                    id: Date.now().toString(),
                    subject: timetableForm.subject,
                    type: timetableForm.type,
                    date: timetableForm.date,
                  };
                  setExamEntries(prev => [...prev, entry]);
                  setShowTimetableModal(false);
                  setTimetableForm({ subject: '', type: 'MTE', date: '' });
                }}
                className="w-full py-3 bg-[#1E1E1E] text-white font-black text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer hover:bg-black transition-all"
              >
                <Calendar className="w-4 h-4" /> Save Exam
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}