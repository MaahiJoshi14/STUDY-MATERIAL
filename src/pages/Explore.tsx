import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, BookOpen, FileText, ExternalLink,
  ChevronRight, Search, Play, Download, Bell, Folder,
  Calendar, Plus, X
} from 'lucide-react';
import { year1Cycles, branches, type Subject, type Cycle, type Branch } from '@/data/studyMaterial';

type Step = 'year' | 'branch' | 'subjects' | 'resources';
type ResourceTab = 'notes' | 'pyqs' | 'yt';

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
function SidebarClock({ timetable, onAddTimetable }: {
  timetable: { subject: string; date: string } | null;
  onAddTimetable: () => void;
}) {
  const nextExam = getNextExam();
  const daysLeft = nextExam ? getDaysLeft(nextExam.startDate) : null;
  const customDays = timetable ? getDaysLeft(new Date(timetable.date)) : null;

  return (
    <div className="space-y-6 pt-2">
      {/* Upcoming Exams - Clean layout */}
      <div className="space-y-4">
        <div className="flex items-center gap-1.5 text-[10px] font-black uppercase text-slate-400 tracking-widest">
          <Calendar className="w-3.5 h-3.5" /> Upcoming Exams
        </div>

        <div className="space-y-3">
          {/* Custom timetable entry */}
          {timetable && customDays !== null && (
            <div className="bg-red-50 border border-red-100 rounded-xl p-3">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-[11px] font-black text-red-900 leading-tight">{timetable.subject}</p>
                  <p className="text-[10px] font-bold text-red-600/80 mt-0.5">Your Timetable</p>
                </div>
                <span className="text-[10px] font-black bg-red-500 text-white px-2 py-0.5 rounded uppercase tracking-wider">{Math.max(0, customDays)} Days</span>
              </div>
            </div>
          )}

          {/* MUJ hardcoded exams */}
          {nextExam && daysLeft !== null && (
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-[11px] font-black text-slate-700 leading-tight">{nextExam.subject}</p>
                  <p className="text-[10px] font-bold text-slate-500 mt-0.5">Academic Calendar</p>
                </div>
                <span className={`text-[10px] font-black text-white px-2 py-0.5 rounded uppercase tracking-wider ${nextExam.label === 'MTE' ? 'bg-orange-500' : 'bg-purple-600'}`}>
                  {nextExam.label}: {Math.max(0, daysLeft)} Days
                </span>
              </div>
            </div>
          )}

          {/* Add timetable button */}
          <button
            onClick={onAddTimetable}
            className="w-full flex items-center justify-center gap-1.5 text-[10px] font-black uppercase text-slate-500 bg-white border-2 border-dashed border-slate-200 rounded-xl py-2.5 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-700 transition-all cursor-pointer"
          >
            <Plus className="w-3 h-3" /> Add Custom Exam
          </button>
        </div>
      </div>
    </div>
  );
}export default function Explore() {
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
  const [timetable, setTimetable] = useState<{ subject: string; date: string } | null>(null);
  const [showTimetableModal, setShowTimetableModal] = useState(false);
  const [timetableForm, setTimetableForm] = useState({ subject: '', date: '' });

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
            <SidebarClock timetable={timetable} onAddTimetable={() => setShowTimetableModal(true)} />
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
                  <span className="text-[10px] font-extrabold uppercase bg-white border border-slate-200 px-3 py-1 rounded-full shadow-sm">
                    MUJ LIBRARY
                  </span>
                  <h1 className="font-display font-extrabold text-4xl md:text-5xl text-[#1E1E1E] uppercase">
                    Select Academic Level
                  </h1>
                  <p className="text-slate-500 font-bold max-w-md mx-auto text-xs leading-relaxed">
                    Choose your level to unlock subject notebooks, previous year papers, and sessional revision folders.
                  </p>
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
                      <div className={`rounded-[24px] border border-slate-200 p-5 shadow-sm hover:translate-y-[-3px] hover:shadow-md transition-all flex flex-col justify-between h-64 ${color}`}>
                        <div className="flex justify-between gap-4">
                          <div className="space-y-1 text-left">
                            <span className="text-[9px] font-extrabold uppercase bg-white border border-slate-200 px-2 py-0.5 rounded-full shadow-sm">Year 0{y}</span>
                            <h3 className="font-display font-extrabold text-lg text-[#1E1E1E] uppercase leading-tight pt-1">{label}</h3>
                            <p className="text-[10px] font-bold text-slate-500">{subtitle}</p>
                          </div>
                          <div
                            className="w-20 h-28 rounded-xl bg-cover bg-center shadow-md group-hover:scale-105 transition-transform shrink-0"
                            style={{ backgroundImage: `url(${cover})` }}
                          />
                        </div>
                        <div className="flex justify-between items-center pt-3 border-t border-black/5">
                          <span className="text-[10px] font-black uppercase text-slate-500">Explore</span>
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#1E1E1E] transition-colors" />
                        </div>
                      </div>
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
                {/* Header */}
                <div className="space-y-2">
                  <span className="text-[10px] font-extrabold uppercase bg-white border border-slate-200 px-3 py-1 rounded-full shadow-sm inline-block">
                    YEAR 0{selectedYear}
                  </span>
                  <h1 className="font-display font-black text-3xl md:text-4xl text-[#1E1E1E] uppercase">
                    {selectedYear === 1 ? 'Select Your Cycle' : 'Select Branch'}
                  </h1>
                  <p className="text-slate-400 font-bold text-xs leading-relaxed max-w-sm">
                    Select the appropriate stream cover to access notes and sessional study cards.
                  </p>
                </div>

                {/* Cards Grid — 3D Book Style */}
                <div className={`grid gap-8 ${selectedYear === 1 ? 'sm:grid-cols-2 max-w-2xl' : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'}`}>
                  {(selectedYear === 1 ? year1Cycles : branches).map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        if (selectedYear === 1) {
                          setSelectedCycle(item as Cycle);
                          setStep('subjects');
                        } else {
                          setSelectedBranch(item as Branch);
                          setStep('subjects');
                        }
                      }}
                      className="text-left w-full cursor-pointer focus:outline-none group flex flex-col items-center"
                    >
                      {/* 3D Book Layout */}
                      <div
                        className={`relative transition-all duration-300 group-hover:scale-[1.06] group-hover:rotate-1 group-hover:translate-y-[-6px] ${selectedYear === 1 ? 'w-52 h-72' : 'w-40 h-56'}`}
                        style={{ perspective: '900px' }}
                      >
                        {/* Page edges */}
                        <div
                          className="absolute right-0 top-1 bottom-1 w-3 bg-gradient-to-r from-slate-200 to-white border-y border-r border-slate-300 rounded-r-md"
                          style={{ transform: 'rotateY(-20deg)', transformOrigin: 'right center' }}
                        />
                        {/* Spine */}
                        <div
                          className="absolute left-0 top-0 bottom-0 w-4 bg-black/20 z-10 rounded-l-md"
                          style={{ backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.12), rgba(255,255,255,0.05) 30%, rgba(0,0,0,0.08) 85%)' }}
                        />
                        {/* Book Cover */}
                        <div
                          className="absolute inset-0 rounded-r-2xl bg-cover bg-center border-l-4 border-black/25"
                          style={{ backgroundImage: `url(${getBookCoverPath(item.id)})` }}
                        />
                        {/* Hover shine overlay */}
                        <div className="absolute inset-0 rounded-r-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 60%)' }}
                        />
                      </div>

                      {/* Label */}
                      <div className="mt-4 text-center space-y-1 w-full px-1">
                        <h3 className={`font-display font-extrabold text-[#1E1E1E] uppercase leading-tight tracking-tight ${selectedYear === 1 ? 'text-base' : 'text-sm'}`}>
                          {'name' in item ? item.name : (item as Branch).shortName}
                        </h3>
                        <p className="text-[10px] font-bold text-slate-400">
                          {selectedYear === 1 ? 'Foundation Cycle' : 'Sessional Syllabus'}
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
                <div className="relative bg-white border border-slate-200 rounded-xl shadow-sm flex items-center">
                  <Search className="absolute left-4 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search subject by name or code..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="w-full h-11 pl-12 pr-4 text-xs font-bold text-[#1E1E1E] bg-transparent focus:outline-none placeholder-slate-400"
                  />
                </div>

                {/* Folder Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5">
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
                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-wide font-mono">
                              {sub.code}
                            </p>
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
                <div>
                  <h1 className="font-display font-extrabold text-3xl md:text-4xl text-[#1E1E1E] uppercase flex items-center gap-2">
                    <span>{selectedSubject.emoji}</span>
                    <span>{selectedSubject.name}</span>
                  </h1>
                  <p className="text-slate-500 font-bold text-xs mt-1">
                    {selectedSubject.code} • {selectedSubject.description}
                  </p>
                </div>

                {/* Tab selectors */}
                <div className="flex gap-2 border-b border-slate-200 pb-2">
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
                        className={`px-4 py-2 rounded-t-2xl font-display font-bold text-xs uppercase border border-b-0 border-slate-200 transition-all cursor-pointer ${
                          isActive ? 'translate-y-[2px] text-[#1E1E1E]' : 'bg-white text-slate-500 hover:bg-slate-50'
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

                {/* YouTube */}
                {activeTab === 'yt' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    {selectedSubject.ytResources.length === 0 ? (
                      <div className="p-8 text-center border border-dashed border-slate-200 rounded-2xl text-xs font-bold text-slate-400">
                        NO YOUTUBE LECTURES LINKED YET.
                      </div>
                    ) : (
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {selectedSubject.ytResources.map((yt, i) => (
                          <a key={i} href={yt.url} target="_blank" rel="noreferrer"
                            className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:translate-y-[-2px] transition-all flex flex-col group"
                          >
                            <div className="aspect-video bg-[#1E1E1E] flex items-center justify-center relative overflow-hidden">
                              <span className="text-3xl">📺</span>
                              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <Play className="w-10 h-10 text-white fill-white" />
                              </div>
                            </div>
                            <div className="p-4 space-y-2 text-left flex-1 flex flex-col justify-between">
                              <div>
                                <span className="text-[8px] font-extrabold bg-[#FF5252] text-white px-2 py-0.5 rounded uppercase">YouTube</span>
                                <h4 className="font-display font-bold text-xs text-[#1E1E1E] mt-2 line-clamp-2 leading-tight uppercase">{yt.title}</h4>
                              </div>
                              <p className="text-[10px] font-black text-slate-400 uppercase pt-2">{yt.channelName}</p>
                            </div>
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

      {/* ── ADD TIMETABLE MODAL ── */}
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
                  <h3 className="font-display font-black text-sm text-[#1E1E1E] uppercase">Add Exam Date</h3>
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
                    placeholder="e.g. Engineering Physics MTE"
                    value={timetableForm.subject}
                    onChange={e => setTimetableForm(f => ({ ...f, subject: e.target.value }))}
                    className="w-full h-11 px-4 border border-slate-200 rounded-xl text-xs font-bold focus:outline-none focus:border-[#5D5FEF] bg-[#FAF9F5]"
                  />
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
                  setTimetable({ subject: timetableForm.subject, date: timetableForm.date });
                  setShowTimetableModal(false);
                  setTimetableForm({ subject: '', date: '' });
                }}
                className="w-full py-3 bg-[#1E1E1E] text-white font-black text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer hover:bg-black transition-all"
              >
                <Calendar className="w-4 h-4" /> Save Exam Date
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
