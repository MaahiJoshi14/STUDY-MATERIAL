# Walkthrough: Sessional Practice Arena & Library Redesign

We have reconstructed the main pages (`Home.tsx`, `Explore.tsx`, and `Quiz.tsx`) of the portal to match the new sessional design aesthetic, layout flow, and mobile/desktop adaptability.

---

## 1. Main Page Mockup Replicated (`Home.tsx`)
- **Header Navigation**:
  - Restructured to display only the three options: **Home**, **Library**, and **Practice Arena** in a clean pill container.
  - Added the notification bell and Maahi profile avatar with greeting on the right.
- **Hero Section**:
  - Left: Greeting "Good evening, Maahi 👋", bold Outfit header "Study Smarter. Score Higher.", descriptive subtitle, and search bar with built-in filter controls.
  - Right: Realistic 3D angled book stack containing *Physics Cycle*, *Chemistry Cycle*, and *Second Year CSE* covers.
  - Displays a pill badge: `10,000+ Students are studying smarter with MUJ Study`.
- **Continue Studying**:
  - A horizontal slider of subjects displaying the actual PNG book covers on the left, subject metadata, progress bar, progress percentage, and "Continue ->" button.
- **Tech Stacks**:
  - Displays first, second, third, and fourth-year cards containing their corresponding cover illustrations (`first-year.png`, `second-year.png`, `third-year.png`, `fourth-year.png`).
- **Practice Arena Dialog Modal**:
  - Clicking "Enter Arena" or "Practice Arena" on Home opens a clean **black-and-white sessional setup dialog overlay**.
  - Default B.Tech selection with Year selection, Cycle/Branch specialization tabs, and a searchable Subject dropdown showing active sessional questions.
  - Automatically redirects to the sessional category view inside `/quiz` upon submission.

---

## 2. Library Book Covers & Folder Structure (`Explore.tsx`)
- **Book Covers for Year selection**:
  - Clicking on First, Second, Third, or Fourth Year displays the corresponding Cycles or Branches as realistic **illustrated Book Covers** (Physics Cycle, Chemistry Cycle, CSE, IT, Data Science, etc.) using their corresponding PNG images.
- **macOS Subject Folder Structure**:
  - Selecting a Cycle/Branch renders the subjects as macOS-style pastel folder cards, each displaying a folder icon, subject code, and title, matching the mockup layout.

---

## 3. Practice Arena Category Deck & Mobile Swipe Layout (`Quiz.tsx`)
- **Black-and-White Setup Screen**:
  - If navigated directly, it shows the same clean, structured B&W setup dialog box.
  - Retrieves form details from Home session storage seamlessly if launched from the main dashboard.
- **Colourful Sessional Category Selection**:
  - Displays colorful cards:
    - **Most Asked** (Orange/Red)
    - **Moderately Asked** (Black/Charcoal)
    - **Can Be Asked** (Yellow)
  - Layout is optimized: wide cards on desktop, stacked with peeking headers on mobile.
- **Adaptive Practice Layout**:
  - **Desktop**: Grid/list of sessional question cards. Shows metadata tags, formulas/explanation tables (for numericals), theory keywords, solution textarea, AI check grades, and model answers.
  - **Mobile**: A swipeable card stack deck allowing users to swipe through cards, check answers with AI, view feedback, and see a persistent **points counter at the very top** of the sessional page.

---

## 4. Deploying to Expo Go (Mobile App)
To run this application as a native mobile app via Expo Go:
1. Initialize a new Expo project:
   ```bash
   npx create-expo-app mobile --template blank-typescript
   ```
2. Copy over the data model (`src/data/studyMaterial.ts`) and book cover images to the assets directory of the Expo app.
3. Install dependencies:
   ```bash
   npx expo install react-native-svg lucide-react-native @react-navigation/native @react-navigation/stack
   ```
4. Build the stack navigators for `Home`, `Explore`, and `Quiz` views matching the sessional flow.
5. Launch the development server:
   ```bash
   npx expo start
   ```
6. Open the Expo Go app on your iOS or Android device and scan the QR code to run it!
