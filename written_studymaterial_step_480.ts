# MUJ Study Portal — Premium GenZ UI Overhaul

## Vision
Transform the portal into a premium, aesthetic, GenZ-first study platform for college students — clean, hooky, fast, mobile-first. Inspired by Kindle/Readly reading apps and modern dark-mode editorial aesthetics. Every screen should feel like a polished product, not a student project.

---

## Core User Flows

### Flow A — Smart Search (Directed)
1. Hero section: pick Course → Year → Branch → Search
2. Matching folder (e.g. "2ND YEAR CSE") revealed below
3. Click folder → Subject shelf opens
4. Click subject notebook → Modal: **Study Materials** or **PYQs**
5. See files/links in a swipeable, scrollable shelf

### Flow B — Browsing (Undirected)
1. Hero → scroll down
2. **Continue Studying** shelf — overlapping Kindle-style stack of visited folders
3. **Tech Study** section — 4 Year folders displayed as Kindle-style book stacks:
   - 1st Year → Physics Cycle / Chemistry Cycle
   - 2nd–4th Year → Branch tiles (AIML, CSE, CCE, Mechanical, etc.)
4. Click branch/cycle → Subject shelf with book cover cards
5. Click subject → **Study Materials** or **PYQs** modal (clean, minimal)
6. Resources view: swipeable tab shelf of PDFs/PPTs/docs

### Master Arena (Quiz — phase 2)
- Tile in home linking to quiz flow
- Select Branch / Subject / Year
- PYQ weighted questions with recurrence count

---

## UI Design System Changes (`index.css`)

### Fonts
Keep existing: `Playfair Display` (serif headings), `Outfit` (display/bold), `Plus Jakarta Sans` (body)
Add: `Inter` for micro-labels

### Color Tokens — Add:
- `--color-bg-dark: #0d0f14` — deep dark background for dark sections
- `--color-accent-amber: #f59e0b`
- `--color-accent-sky: #0ea5e9`

### New Utility Classes:
- `.kindle-shelf` — horizontal scrollable shelf with snap, no scrollbar, momentum
- `.subject-grid` — responsive 2→3→4 col grid for subject notebooks
- `.glass-card` — frosted glass card with blur/border
- `.pill-tab` — pill-shaped horizontal tab bar
- `.section-divider` — decorative line with label

---

## Proposed Changes

### [MODIFY] `src/index.css`
- Add new color tokens for dark sections and amber
- Add `.kindle-shelf`, `.glass-card`, `.pill-tab`, `.swipe-hint` utility classes
- Add improved mobile-specific responsive rules

---

### [MODIFY] `src/pages/Home.tsx`

#### Section 1: Hero
- **Profile widget** (top): Aryan. | CSE | 2ND YEAR | 🔥 12 DAY STREAK
- **Headline**: Large serif "STUDY SMARTER. SCORE HIGHER." with highlight pill
- **Floating cards**: Absolutely positioned illustrated card tiles (physics, chem, CSE year 2/3, AIML, etc.) framing the text — on mobile they scale down but still float on sides
- **Search bar**: Course → Year → Branch dropdowns in a glass pill row + Search button

#### Section 2: Continue Studying
- **Kindle-style overlapping stack** when folders visited (implemented ✅)
- **Empty state**: dashed border, "Your shelf is empty", Start Exploring button → scrolls to Tech Study

#### Section 3: Tech Study (renamed from "Academic Stacks")
- **4 Year folder cards** in a 2×2 grid or horizontal shelf on mobile
  - Each is a thick book-spine card with label ("1ST YEAR", "2ND YEAR", etc.)
  - Clicking 1st Year → shows Physics Cycle / Chemistry Cycle as 2 wide tiles
  - Clicking 2nd–4th → shows Branch grid: AIML, CSE, CCE, Mechanical, Electrical, Electronics, IoT, IT, EEE
- **Branch/Cycle cards**: vibrant colored tiles with icon + name, responsive 3-col on desktop, 2-col on mobile

#### Section 4: Beyond Tech (coming soon card strip)

#### Section 5: Master Arena
- Dark section with amber accent
- Big CTA card: "Enter Arena" → opens step-by-step flow

#### Subject View (`view === 'subjects'`)
- **Back button** + breadcrumb trail
- **Subject grid**: colorful notebook-style cards (book spines, colors, title)
- **Category filter pills**: All | Core | Labs | Elective
- **Search bar** at top right

#### Resource View (`view === 'resources'`)
- Left: Book cover card + subject info
- Right: **Pill tab switcher** (Study Notes | PYQs)
- Notes shelf: 3-col card grid — clean white cards with file type badge, title, download icon
- PYQs shelf: cards with year badge, marks/difficulty stats

#### Choice Modal (when subject clicked)
- Clean centered white card
- Subject name in large serif
- "select study material" subtitle in muted uppercase
- Two clean boxes: **Study Materials** | **PYQs**
- (Already simplified ✅)

---

## Mobile-First Improvements

- Hero floating cards: `w-24 h-16` on mobile, absolutely positioned, framing text (not in a row)
- All shelves: `overflow-x-auto snap-x snap-mandatory` with `scroll-snap-align: center`
- Subject grid: 2 columns on mobile, 3 on tablet, 4 on desktop
- Bottom floating nav dock: stays fixed, active state highlight
- Swipe gesture support on the Kindle stack (touch events)
- All modals: slide up from bottom on mobile (bottom sheet pattern)

---

## Verification Plan

### Automated
```bash
npx tsc --noEmit
```

### Manual
1. Open `http://localhost:5173/` on desktop + mobile viewport
2. Test Flow A: select B.Tech / 2nd Year / CSE → Search → folder appears → click → subjects → click subject → modal → Study Materials opens
3. Test Flow B: scroll to Tech Study → 1st Year → Physics Cycle → subject → PYQs
4. Test Continue Studying: navigate to a subject and back → folder appears in shelf → overlapping stack works
5. Verify mobile floating hero cards don't overlap the text

---

## Open Questions

> [!IMPORTANT]
> The "Beyond Tech" section — should it appear as a grayed-out "Coming Soon" card, or be hidden entirely for now?

> [!NOTE]
> Master Arena quiz data: for now it will use the existing `QUESTIONS_DB` from `studyMaterial.ts`. The full PYQ import from ImageKit is a future phase.
