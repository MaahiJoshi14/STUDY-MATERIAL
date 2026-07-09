import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
  Dimensions,
  Animated,
  PanResponder,
} from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Mock Data matching the main Web app
const year1Cycles = [
  { id: 'physics-cycle', name: 'Physics Cycle', subjects: [{ id: 'engineering-physics', name: 'Engineering Physics', code: 'EP-101', emoji: '⚙️' }, { id: 'computational-mathematics', name: 'Computational Mathematics', code: 'MA-101', emoji: '🔢' }] },
  { id: 'chemistry-cycle', name: 'Chemistry Cycle', subjects: [{ id: 'applied-chemistry', name: 'Applied Chemistry', code: 'CY-101', emoji: '🧪' }] }
];

const branches = [
  { id: 'cse', shortName: 'CSE', name: 'Computer Science', subjects: [{ id: 'data-structures', name: 'Data Structures', code: 'CS-201', emoji: '💻' }] },
  { id: 'aiml', shortName: 'AIML', name: 'Artificial Intelligence', subjects: [{ id: 'machine-learning', name: 'Machine Learning', code: 'CS-302', emoji: '🤖' }] }
];

const QUESTIONS_DB: Record<string, any[]> = {
  'engineering-physics': [
    { id: 'ep1', topic: 'Quantum Mechanics', year: 'End-Term 2024', marks: 6, text: 'Which experiment directly proves the wave nature of electrons?', options: ['Photoelectric Effect', 'Davisson-Germer Experiment', 'Blackbody Radiation', 'Compton Scattering'], correct: 1, explanation: 'The Davisson-Germer Experiment (1927) demonstrated electron diffraction on a Nickel crystal.' },
    { id: 'ep2', topic: 'Laser Technology', year: 'Mid-Term 2023', marks: 4, text: 'What condition is necessary for laser action to occur?', options: ['Thermal Equilibrium', 'Population Inversion', 'High Temperature', 'Ground State Dominance'], correct: 1, explanation: 'Population inversion is essential for stimulated emission to dominate.' }
  ],
  'data-structures': [
    { id: 'ds1', topic: 'Stacks', year: 'End-Term 2024', marks: 6, text: 'Which data structure follows the Last In First Out (LIFO) order?', options: ['Queue', 'Stack', 'Tree', 'Graph'], correct: 1, explanation: 'A stack follows LIFO — elements are pushed and popped from the same end.' }
  ]
};

export default function App() {
  const [screen, setScreen] = useState<'setup' | 'categories' | 'practice'>('setup');
  const [year, setYear] = useState<number>(1);
  const [branchOrCycle, setBranchOrCycle] = useState<string>('physics-cycle');
  const [subject, setSubject] = useState<any>(year1Cycles[0].subjects[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Category Selection
  const [selectedCategory, setSelectedCategory] = useState<'most' | 'moderate' | 'can-be'>('most');
  const [mobileCatIndex, setMobileCatIndex] = useState(0);

  // Score Points Counter
  const [score, setScore] = useState(0);

  // Swipeable practice states
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState<Record<string, boolean>>({});

  const handleYearChange = (yr: number) => {
    setYear(yr);
    if (yr === 1) {
      setBranchOrCycle('physics-cycle');
      setSubject(year1Cycles[0].subjects[0]);
    } else {
      setBranchOrCycle('cse');
      setSubject(branches[0].subjects[0]);
    }
  };

  const getSubjectsList = () => {
    if (year === 1) {
      return year1Cycles.find(c => c.id === branchOrCycle)?.subjects || [];
    }
    return branches.find(b => b.id === branchOrCycle)?.subjects || [];
  };

  const activeSubjects = getSubjectsList();
  const filteredSubjects = activeSubjects.filter(s =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getQuestions = () => {
    const list = QUESTIONS_DB[subject?.id] || [];
    if (selectedCategory === 'most') return list.filter(q => q.marks >= 6);
    if (selectedCategory === 'moderate') return list.filter(q => q.marks === 4 || q.marks === 5);
    return list.filter(q => q.marks <= 3);
  };

  const currentQuestions = getQuestions();

  return (
    <SafeAreaView style={styles.container}>
      {/* ── HEADER ── */}
      <View style={styles.header}>
        <Text style={styles.logoText}>MUJ STUDY</Text>
        <View style={styles.xpPill}>
          <Text style={styles.xpText}>🏆 {score} XP</Text>
        </View>
      </View>

      {/* ── SETUP SCREEN (B&W) ── */}
      {screen === 'setup' && (
        <View style={styles.centerWrapper}>
          <View style={styles.setupCard}>
            <Text style={styles.setupTitle}>ENTER SESSIONAL ARENA</Text>
            <Text style={styles.setupSubtitle}>Select details to start sessional prep</Text>

            {/* Academic Year Selection */}
            <Text style={styles.label}>ACADEMIC YEAR</Text>
            <View style={styles.row}>
              {[1, 2, 3, 4].map(y => (
                <TouchableOpacity
                  key={y}
                  onPress={() => handleYearChange(y)}
                  style={[styles.selectorPill, year === y && styles.selectorPillActive]}
                >
                  <Text style={[styles.selectorText, year === y && styles.selectorTextActive]}>
                    {y}st Yr
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Cycle / Branch */}
            <Text style={styles.label}>{year === 1 ? 'CYCLE SELECTION' : 'BRANCH'}</Text>
            <View style={styles.row}>
              {year === 1 ? (
                year1Cycles.map(c => (
                  <TouchableOpacity
                    key={c.id}
                    onPress={() => {
                      setBranchOrCycle(c.id);
                      setSubject(c.subjects[0]);
                    }}
                    style={[styles.selectorPill, branchOrCycle === c.id && styles.selectorPillActive]}
                  >
                    <Text style={[styles.selectorText, branchOrCycle === c.id && styles.selectorTextActive]}>
                      {c.name}
                    </Text>
                  </TouchableOpacity>
                ))
              ) : (
                branches.map(b => (
                  <TouchableOpacity
                    key={b.id}
                    onPress={() => {
                      setBranchOrCycle(b.id);
                      setSubject(b.subjects[0]);
                    }}
                    style={[styles.selectorPill, branchOrCycle === b.id && styles.selectorPillActive]}
                  >
                    <Text style={[styles.selectorText, branchOrCycle === b.id && styles.selectorTextActive]}>
                      {b.shortName}
                    </Text>
                  </TouchableOpacity>
                ))
              )}
            </View>

            {/* Subject Dropdown */}
            <Text style={styles.label}>SELECT SUBJECT</Text>
            <TouchableOpacity
              onPress={() => setIsDropdownOpen(!isDropdownOpen)}
              style={styles.dropdownBtn}
            >
              <Text style={styles.dropdownBtnText}>
                {subject ? `${subject.emoji} ${subject.name}` : 'Select Subject...'}
              </Text>
            </TouchableOpacity>

            {isDropdownOpen && (
              <View style={styles.dropdownList}>
                <TextInput
                  style={styles.dropdownSearch}
                  placeholder="Search subject..."
                  value={searchQuery}
                  onChangeText={setSearchQuery}
                />
                {filteredSubjects.map(s => (
                  <TouchableOpacity
                    key={s.id}
                    onPress={() => {
                      setSubject(s);
                      setIsDropdownOpen(false);
                      setSearchQuery('');
                    }}
                    style={styles.dropdownItem}
                  >
                    <Text style={styles.dropdownItemText}>{s.emoji} {s.name}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}

            {/* Enter Button */}
            <TouchableOpacity
              onPress={() => setScreen('categories')}
              style={styles.enterBtn}
            >
              <Text style={styles.enterBtnText}>⚡ ENTER PRACTICE ARENA</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* ── CATEGORIES SCREEN (Mobile Peeking Stack Layout matching mockup 5) ── */}
      {screen === 'categories' && (
        <View style={styles.categoriesWrapper}>
          <Text style={styles.subjectHeader}>{subject?.emoji} {subject?.name}</Text>
          <Text style={styles.categoriesTitle}>SELECT CATEGORY</Text>
          
          <View style={styles.stackedDeck}>
            {[
              {
                badge: 'HIGH-VOLUME',
                label: 'MOST ASKED',
                desc: 'High weightage questions asked repeatedly',
                count: '120+ Questions',
                cat: 'most',
                bg: '#C4EBD0',
                text: '#1B5E20',
                offset: 0
              },
              {
                badge: 'LOCAL SPOT',
                label: 'MODERATELY ASKED',
                desc: 'Important questions with moderate probability',
                count: '200+ Questions',
                cat: 'moderate',
                bg: '#FFE5A3',
                text: '#E65100',
                offset: -120
              },
              {
                badge: 'SMALL EATERY',
                label: 'CAN BE ASKED',
                desc: 'Possible questions from the entire syllabus',
                count: '180+ Questions',
                cat: 'can-be',
                bg: '#D2C2F9',
                text: '#4A148C',
                offset: -120
              }
            ].map((card, idx) => (
              <TouchableOpacity
                key={card.cat}
                onPress={() => {
                  setSelectedCategory(card.cat as any);
                  setScreen('practice');
                  setCurrentQuestionIndex(0);
                }}
                style={[
                  styles.peekingCard,
                  {
                    backgroundColor: card.bg,
                    marginTop: idx > 0 ? card.offset : 0,
                    zIndex: 10 + idx
                  }
                ]}
              >
                <View style={styles.peekingHeader}>
                  <Text style={[styles.badgeText, { color: card.text }]}>{card.badge}</Text>
                  <Text style={[styles.arrowText, { color: card.text }]}>➔</Text>
                </View>
                <Text style={[styles.peekingTitle, { color: card.text }]}>{card.label}</Text>
                <Text style={[styles.peekingDesc, { color: card.text }]}>{card.desc}</Text>
                <View style={styles.peekingFooter}>
                  <Text style={[styles.peekingCount, { color: card.text }]}>{card.count}</Text>
                  <Text style={[styles.levelText, { color: card.text }]}>Level • Active</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity style={styles.backBtn} onPress={() => setScreen('setup')}>
            <Text style={styles.backBtnText}>⬅ BACK TO SETUP</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* ── PRACTICE ARENA SCREEN (Mobile Swipe layout) ── */}
      {screen === 'practice' && (
        <View style={styles.practiceWrapper}>
          <Text style={styles.practiceTopic}>{selectedCategory.toUpperCase()} ASKED QUESTIONS</Text>
          
          {currentQuestions.length > 0 ? (
            <View style={styles.deckContainer}>
              {currentQuestions.map((q, idx) => {
                if (idx !== currentQuestionIndex) return null;
                const isSub = submitted[q.id];
                const selectedOpt = answers[q.id];

                return (
                  <View key={q.id} style={styles.questionCard}>
                    <View style={styles.cardHeader}>
                      <Text style={styles.qIndex}>Question {idx + 1} of {currentQuestions.length}</Text>
                      <Text style={styles.qMarks}>+{q.marks} XP</Text>
                    </View>

                    <ScrollView style={styles.cardScroll} showsVerticalScrollIndicator={false}>
                      <Text style={styles.qText}>{q.text}</Text>

                      {/* Options */}
                      <View style={styles.optionsWrapper}>
                        {q.options.map((opt: string, oi: number) => {
                          const isSelected = selectedOpt === oi;
                          const isCorrect = q.correct === oi;
                          let optStyle = [styles.optionBtn];
                          let textStyle = [styles.optionText];

                          if (isSub) {
                            if (isCorrect) {
                              optStyle.push(styles.optionCorrect);
                              textStyle.push(styles.optionCorrectText);
                            } else if (isSelected) {
                              optStyle.push(styles.optionWrong);
                              textStyle.push(styles.optionWrongText);
                            } else {
                              optStyle.push(styles.optionMuted);
                            }
                          } else if (isSelected) {
                            optStyle.push(styles.optionSelected);
                          }

                          return (
                            <TouchableOpacity
                              key={oi}
                              disabled={isSub}
                              onPress={() => setAnswers({ ...answers, [q.id]: oi })}
                              style={optStyle}
                            >
                              <Text style={textStyle}>{opt}</Text>
                            </TouchableOpacity>
                          );
                        })}
                      </View>

                      {isSub && (
                        <View style={styles.explanationBox}>
                          <Text style={styles.expTitle}>
                            {selectedOpt === q.correct ? '🎉 CORRECT ANSWER' : '❌ INCORRECT'}
                          </Text>
                          <Text style={styles.expText}>{q.explanation}</Text>
                        </View>
                      )}
                    </ScrollView>

                    {/* Bottom Action Button */}
                    {!isSub ? (
                      <TouchableOpacity
                        disabled={selectedOpt === undefined}
                        onPress={() => {
                          setSubmitted({ ...submitted, [q.id]: true });
                          if (selectedOpt === q.correct) {
                            setScore(score + q.marks);
                          }
                        }}
                        style={[styles.checkBtn, selectedOpt === undefined && styles.disabledBtn]}
                      >
                        <Text style={styles.checkBtnText}>CHECK WITH AI EVALUATOR</Text>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        onPress={() => {
                          if (currentQuestionIndex < currentQuestions.length - 1) {
                            setCurrentQuestionIndex(currentQuestionIndex + 1);
                          } else {
                            setScreen('categories');
                          }
                        }}
                        style={styles.checkBtn}
                      >
                        <Text style={styles.checkBtnText}>
                          {currentQuestionIndex < currentQuestions.length - 1 ? 'NEXT QUESTION ➔' : 'BACK TO CATEGORIES'}
                        </Text>
                      </TouchableOpacity>
                    )}
                  </View>
                );
              })}
            </View>
          ) : (
            <View style={styles.noQuestionsBox}>
              <Text style={styles.noQuestionsText}>No sessional questions configured for this category yet.</Text>
            </View>
          )}

          <TouchableOpacity style={styles.backBtn} onPress={() => setScreen('categories')}>
            <Text style={styles.backBtnText}>⬅ BACK TO CATEGORIES</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E0',
  },
  logoText: {
    fontSize: 18,
    fontWeight: '900',
    color: '#1E1E1E',
    letterSpacing: -0.5,
  },
  xpPill: {
    backgroundColor: '#FFB236',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  xpText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#1E1E1E',
  },
  centerWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  setupCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E5E0',
    borderRadius: 28,
    width: '100%',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.02,
    shadowRadius: 10,
    elevation: 2,
  },
  setupTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#1E1E1E',
    letterSpacing: 0.5,
  },
  setupSubtitle: {
    fontSize: 10,
    fontWeight: '800',
    color: '#A3A39F',
    textTransform: 'uppercase',
    marginTop: 2,
    marginBottom: 20,
  },
  label: {
    fontSize: 9,
    fontWeight: '800',
    color: '#A3A39F',
    letterSpacing: 1,
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  selectorPill: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E5E0',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  selectorPillActive: {
    backgroundColor: '#1E1E1E',
    borderColor: '#1E1E1E',
  },
  selectorText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1E1E1E',
  },
  selectorTextActive: {
    color: '#FFFFFF',
  },
  dropdownBtn: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E5E0',
    borderRadius: 12,
    height: 48,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  dropdownBtnText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1E1E1E',
  },
  dropdownList: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E5E0',
    borderRadius: 12,
    maxHeight: 180,
    padding: 10,
    marginBottom: 16,
  },
  dropdownSearch: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E0',
    fontSize: 12,
    fontWeight: '700',
    paddingVertical: 6,
    marginBottom: 8,
  },
  dropdownItem: {
    paddingVertical: 10,
  },
  dropdownItemText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1E1E1E',
  },
  enterBtn: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  enterBtnText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 1,
  },
  categoriesWrapper: {
    flex: 1,
    padding: 20,
  },
  subjectHeader: {
    fontSize: 12,
    fontWeight: '800',
    color: '#5D5FEF',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  categoriesTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#1E1E1E',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 25,
  },
  stackedDeck: {
    flex: 1,
    justifyContent: 'center',
  },
  peekingCard: {
    borderRadius: 36,
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,0.06)',
    padding: 24,
    height: 220,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 15,
    elevation: 4,
  },
  peekingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  badgeText: {
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1,
    backgroundColor: 'rgba(255,255,255,0.4)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  arrowText: {
    fontSize: 16,
    fontWeight: '900',
  },
  peekingTitle: {
    fontSize: 20,
    fontWeight: '900',
    marginTop: 8,
  },
  peekingDesc: {
    fontSize: 11,
    fontWeight: '700',
    opacity: 0.8,
    lineHeight: 16,
  },
  peekingFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.05)',
    paddingTop: 10,
  },
  peekingCount: {
    fontSize: 12,
    fontWeight: '900',
  },
  levelText: {
    fontSize: 10,
    fontWeight: '700',
  },
  backBtn: {
    alignItems: 'center',
    paddingVertical: 15,
  },
  backBtnText: {
    fontSize: 10,
    fontWeight: '900',
    color: '#A3A39F',
    letterSpacing: 1,
  },
  practiceWrapper: {
    flex: 1,
    padding: 20,
  },
  practiceTopic: {
    fontSize: 10,
    fontWeight: '900',
    color: '#5D5FEF',
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: 15,
  },
  deckContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  questionCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E5E0',
    borderRadius: 28,
    flex: 1,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.02,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F0',
    paddingBottom: 12,
    marginBottom: 16,
  },
  qIndex: {
    fontSize: 10,
    fontWeight: '800',
    color: '#A3A39F',
  },
  qMarks: {
    fontSize: 10,
    fontWeight: '900',
    color: '#1E1E1E',
  },
  cardScroll: {
    flex: 1,
  },
  qText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#1E1E1E',
    lineHeight: 22,
    marginBottom: 20,
  },
  optionsWrapper: {
    gap: 10,
    marginBottom: 20,
  },
  optionBtn: {
    backgroundColor: '#FAF9F5',
    borderWidth: 1,
    borderColor: '#E5E5E0',
    borderRadius: 12,
    padding: 16,
  },
  optionSelected: {
    backgroundColor: '#FFB236',
    borderColor: '#FFB236',
  },
  optionCorrect: {
    backgroundColor: '#3CD070',
    borderColor: '#3CD070',
  },
  optionWrong: {
    backgroundColor: '#FF6B6B',
    borderColor: '#FF6B6B',
  },
  optionMuted: {
    opacity: 0.4,
  },
  optionText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1E1E1E',
  },
  optionCorrectText: {
    color: '#FFFFFF',
  },
  optionWrongText: {
    color: '#FFFFFF',
  },
  explanationBox: {
    backgroundColor: '#F5F5F0',
    borderRadius: 12,
    padding: 15,
    marginTop: 10,
    marginBottom: 20,
  },
  expTitle: {
    fontSize: 10,
    fontWeight: '900',
    color: '#1E1E1E',
    marginBottom: 4,
  },
  expText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#555550',
    lineHeight: 16,
  },
  checkBtn: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  disabledBtn: {
    opacity: 0.4,
  },
  checkBtnText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1,
  },
  noQuestionsBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noQuestionsText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#A3A39F',
    textAlign: 'center',
  },
});
