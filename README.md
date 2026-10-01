# 🎓 SkillLoop — Campus Peer-to-Peer Skill Exchange Platform

<div align="center">

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)](https://enemini.vercel.app/)
[![React 19](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Supabase](https://img.shields.io/badge/Supabase-Database%20%26%20Auth-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

**"Learn a Skill. Teach a Skill. Grow Together. Exchange your skills without exchanging money."**

[**🌐 Live Application**](https://enemini.vercel.app/) • [**📦 GitHub Repository**](https://github.com/fakecroaz0714/enemini._..git) • [**📑 Supabase Project**](https://supabase.com/dashboard/project/cwjyaikfbazouznmwuyh)

</div>

---

## 📌 Table of Contents

- [Overview & Problem Statement](#-overview--problem-statement)
- [Key Features & Modules](#-key-features--modules)
- [Multi-Way Circular Loops (Signature Innovation)](#-multi-way-circular-loops-signature-innovation)
- [Cashless Time-Banking Economy](#-cashless-time-banking-economy)
- [AI Match Engine Formula](#-ai-match-engine-formula)
- [Architecture & Tech Stack](#-architecture--tech-stack)
- [Repository & File Structure](#-repository--file-structure)
- [Supabase Setup & Environment Variables](#-supabase-setup--environment-variables)
- [Database Schema (PostgreSQL)](#-database-schema-postgresql)
- [Getting Started Locally](#-getting-started-locally)
- [Interactive Evaluation Guide](#-interactive-evaluation-guide)
- [License & Acknowledgments](#-license--acknowledgments)

---

## 💡 Overview & Problem Statement

University students possess immense diverse talents—from full-stack web development and UI/UX design to calculus, foreign languages, and video editing. However, learning outside the syllabus is hindered by:
1. **Expensive tutoring fees** that students cannot afford.
2. **Impersonal MOOCs** with low completion and zero accountability.
3. **Bilateral Barter Deadlocks**: Student A can teach Python to Student B, but Student B teaches Figma which Student A does not need.

**SkillLoop** is a hyperlocal, campus-verified skill-swapping network that eliminates cash transactions through a **Time-Banking Skill Credit Wallet** and resolves barter deadlocks with **Multi-Way Circular Graph Matching ($A \rightarrow B \rightarrow C \rightarrow A$)**.

---

## 🚀 Key Features & Modules

| Module | Description | Key Capabilities |
| :--- | :--- | :--- |
| **🏠 Landing Page** | High-conversion entry point | Live skill search preview, dynamic statistics counter, interactive loop explainer, and campus radar simulation. |
| **🔐 Student Verification & Auth** | Trust & safety gatekeeper | Institutional email verification (`.edu`, `.ac.in`), campus ID upload simulator, and role-based access. |
| **👤 Student Profile Matrix** | Comprehensive talent passport | Skills offered (with proficiency & tags), skills wanted, campus zone, schedule availability, and verified badge. |
| **🤖 AI Skill Match Engine** | Weighted pairing algorithm | Dynamic match scores ($0-100\%$) with category filters, search, and instant exchange proposal modal. |
| **📡 Hyperlocal Campus Radar** | Geofenced proximity filter | Filter peers within `500m`, `1 km`, `2 km`, `5 km`, or `10 km` with campus zone tags (e.g., Tech Tower, Hostels, Library). |
| **🔄 Multi-Way Circular Loops** | 3-way & 4-way barter cycles | Graph cycle detector that pairs 3 or more students to resolve trade deadlocks with an interactive animated SVG loop visualizer. |
| **💬 Direct Real-Time Messenger** | Peer-to-peer communication | Instant messaging with smart contextual suggestion chips (*"Propose Time"*, *"Suggest Campus Spot"*, *"Ask Prerequisites"*). |
| **📅 Session Scheduler & Live Room** | End-to-end learning execution | Virtual or In-Person session booking; interactive live room simulator with video/mic toggles, elapsed timer, checklist, and collaborative scratchpad. |
| **💰 Cashless Skill Wallet** | Micro-economy time banking | `1 Hour Teaching = +10 Credits`, `1 Hour Learning = -10 Credits`, +20 welcome grant, and complete audit ledger. |
| **📝 AI Skill Assessments** | Objective skill validation | Interactive quiz & coding challenge tracks (Python, UI/UX, etc.) with instant scoring and automatic proficiency level promotion. |
| **📜 Cryptographic Certificates** | Verifiable credentials | Formal SkillLoop Certificate of Achievement with QR/UUID validation code (`SL-2026-VIT-XXXX`), `@media print` PDF support, and public verification lookup. |
| **💼 Campus & Startup Opportunities**| Talent-to-work pipeline | Project, internship, and research postings with 1-Click Easy Apply embedding verified hours, ratings, and skill certificates. |
| **🛡️ Campus Admin Dashboard** | Operational management | Live platform metrics (active users, exchange volume, hours taught), student ID verification approval queue, and taxonomy manager. |
| **🧭 10-Step Guided Tour** | Interactive judge/demo mode | Floating walkthrough bar that guides evaluators step-by-step across all features with automatic step tracking. |

---

## 🔄 Multi-Way Circular Loops (Signature Innovation)

Traditional exchange systems break when two users don't have complementary needs. SkillLoop's graph engine resolves this by assembling circular cohorts:

```
                  ┌────────────────────────┐
                  │       Student A        │
                  │  Teaches: Python       │
                  │  Wants:   UI/UX        │
                  └───────────┬────────────┘
                              │
               Teaches Python │ (10 Credits / 1 hr)
                              ▼
┌────────────────────────┐         ┌────────────────────────┐
│       Student C        │         │       Student B        │
│  Teaches: UI/UX        │◀────────┤  Teaches: Spanish      │
│  Wants:   Spanish      │ Teaches │  Wants:   Python       │
└────────────────────────┘ Spanish └────────────────────────┘
```

- **Algorithm**: Directed cycle detection identifies closed loops where each student gives 1 hour and receives 1 hour.
- **Visualizer**: Real-time animated SVG circle with rotating orbital particles, node avatars, and a 1-click **"Initiate Loop Cohort"** trigger.

---

## 💰 Cashless Time-Banking Economy

SkillLoop operates on an egalitarian time-banking model to ensure equal access regardless of financial background:

```
  [ New Student Onboarding ] ──> Claims +20 Welcome Credit Grant
                                           │
         ┌─────────────────────────────────┴─────────────────────────────────┐
         ▼                                                                   ▼
  Teach 1 Hour to Peer                                              Learn 1 Hour from Peer
  • +10 Skill Credits earned                                        • -10 Skill Credits deducted
  • Verified Teaching Hours logged                                  • Rate & Review your peer mentor
  • Unlocks higher Trust Score                                      • Certificate eligibility updated
```

---

## 🤖 AI Match Engine Formula

The compatibility algorithm computes an overall match score ($0-100\%$) using 5 weighted dimensions:

$$\text{Match Score} = (S_c \times 0.40) + (S_l \times 0.20) + (P \times 0.15) + (A \times 0.15) + (R \times 0.10)$$

Where:
- **$S_c$ (Skill Compatibility - 40%)**: Overlap between User A's offered skills and User B's wanted skills.
- **$S_l$ (Level Balance - 20%)**: Ensures the teacher possesses a higher or equal skill level (e.g. Advanced teaching Beginner).
- **$P$ (Campus Proximity - 15%)**: Geofenced proximity score between campus zones or physical GPS distance.
- **$A$ (Availability Overlap - 15%)**: Intersection of preferred learning times (e.g., Weekdays, Evenings, Weekends).
- **$R$ (Peer Rating & Trust - 10%)**: Star rating average, verified sessions count, and ID badge standing.

---

## 💻 Architecture & Tech Stack

```
┌─────────────────────────────────────────────────────────────┐
│                 SkillLoop Frontend (SPA)                    │
│   React 19 • Vite 8 • Design System CSS • Lucide Icons      │
└──────────────┬───────────────────────────────┬──────────────┘
               │                               │
               ▼                               ▼
┌───────────────────────────────┐ ┌───────────────────────────┐
│     Client State / Router     │ │   Vite Supabase Client    │
│  Tab Navigation • Light Theme │ │  src/lib/supabaseClient.js│
└───────────────────────────────┘ └─────────────┬─────────────┘
                                                │
                                                ▼
┌─────────────────────────────────────────────────────────────┐
│                   Supabase Cloud Platform                   │
│   • PostgreSQL Database   • SSR Helpers (@supabase/ssr)     │
│   • Supabase Auth         • Realtime Websockets             │
│   • Row Level Security    • Storage Buckets (ID Uploads)    │
└─────────────────────────────────────────────────────────────┘
```

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **CSS Architecture**: Vanilla CSS Design System with theme tokens, CSS variables, glassmorphism, responsive grid layouts, and high-contrast Light Theme default.
- **Backend / Database**: [Supabase](https://supabase.com/) (`@supabase/supabase-js`, `@supabase/ssr`)
- **Icons**: [lucide-react](https://lucide.dev/)
- **Animation & Effects**: `canvas-confetti`, custom CSS keyframes, SVG path animation
- **Deployment**: [Vercel](https://vercel.com/) with continuous deployment on `git push main`

---

## 📂 Repository & File Structure

```text
eneiya-project/
├── .agents/skills/              # Supabase Agent Skills
│   ├── supabase/                # Supabase development skill set
│   └── supabase-postgres-best-practices/ # DB performance & security rules
├── public/                      # Static assets & favicon
├── src/
│   ├── assets/                  # Brand imagery & graphics
│   ├── components/
│   │   ├── AdminDashboard.jsx   # Campus analytics & ID verification queue
│   │   ├── AuthModal.jsx        # Login, Register & College ID uploader
│   │   ├── Certificates.jsx     # Digital certificate generator & validator
│   │   ├── ChatSystem.jsx       # Peer chat with contextual suggestion chips
│   │   ├── Dashboard.jsx        # Student home with greetings & metric cards
│   │   ├── ExchangeRequests.jsx # Active & pending barter requests manager
│   │   ├── GuidedTourBanner.jsx # 10-step interactive platform demo tour
│   │   ├── LandingPage.jsx      # High-impact hero, stats & feature showcase
│   │   ├── MultiWayLoop.jsx     # 3-Way circular loop detector & visualizer
│   │   ├── Navbar.jsx           # Sticky nav with fixed secondary sub-strip
│   │   ├── Opportunities.jsx    # Campus gigs & internships with 1-click apply
│   │   ├── SessionManager.jsx   # Booking calendar & live session room simulator
│   │   ├── SkillAssessment.jsx  # AI tests & dynamic level promotion engine
│   │   ├── SkillMatching.jsx    # AI matching with proximity radius radar
│   │   ├── SkillWallet.jsx      # Cashless credit wallet & transaction ledger
│   │   └── StudentProfile.jsx   # Public/Private profile & skill matrices
│   ├── data/
│   │   └── mockData.js          # Complete seed data (students, loops, gigs)
│   ├── lib/
│   │   └── supabaseClient.js    # Browser Supabase client instance
│   ├── styles/
│   │   └── design-system.css    # Full theme tokens, colors, typography
│   ├── utils/
│   │   └── supabase/client.js   # Client utility export
│   ├── App.css                  # Component styling & layouts
│   ├── App.jsx                  # Main application orchestrator & state
│   ├── index.css                # Base reset & font configurations
│   └── main.jsx                 # React root mount
├── utils/
│   └── supabase/
│       ├── client.ts            # Browser client helper (@supabase/ssr)
│       ├── middleware.ts        # Session refresh middleware helper
│       └── server.ts            # Server component client helper
├── .env.example                 # Template for environment variables
├── .env.local                   # Local environment credentials
├── index.html                   # HTML entry point with Light Theme default
├── package.json                 # Project dependencies & scripts
├── README.md                    # Platform documentation
├── vercel.json                  # Single-page application rewrite config
└── vite.config.js               # Vite config with NEXT_PUBLIC_ env bridge
```

---

## 🔑 Supabase Setup & Environment Variables

Create a `.env.local` or `.env` file in the root directory:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://cwjyaikfbazouznmwuyh.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_CgSx4T_EldEPNwyy96MDHQ_4AiSf3dy

# Vite-Compatible Aliases (loaded automatically via vite.config.js)
VITE_SUPABASE_URL=https://cwjyaikfbazouznmwuyh.supabase.co
VITE_SUPABASE_ANON_KEY=sb_publishable_CgSx4T_EldEPNwyy96MDHQ_4AiSf3dy
```

### Using Supabase in Components:

```javascript
import { supabase } from '@/lib/supabaseClient';

// Query student profiles
const { data: profiles, error } = await supabase
  .from('profiles')
  .select('id, full_name, college, karma_points, campus_zone');
```

---

## 🗄️ Database Schema (PostgreSQL)

If provisioning tables in your Supabase SQL Editor:

```sql
-- 1. Profiles Table
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  full_name TEXT NOT NULL,
  college TEXT NOT NULL,
  student_id_verified BOOLEAN DEFAULT FALSE,
  campus_zone TEXT,
  bio TEXT,
  avatar_url TEXT,
  wallet_balance INT DEFAULT 20,
  teaching_hours NUMERIC DEFAULT 0,
  learning_hours NUMERIC DEFAULT 0,
  peer_rating NUMERIC DEFAULT 5.0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Skills Table
CREATE TABLE public.skills (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  skill_name TEXT NOT NULL,
  category TEXT NOT NULL,
  type TEXT CHECK (type IN ('offered', 'wanted')),
  proficiency TEXT CHECK (proficiency IN ('Beginner', 'Intermediate', 'Advanced', 'Expert')),
  verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Sessions Table
CREATE TABLE public.sessions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  teacher_id UUID REFERENCES public.profiles(id),
  learner_id UUID REFERENCES public.profiles(id),
  skill_name TEXT NOT NULL,
  scheduled_time TIMESTAMP WITH TIME ZONE NOT NULL,
  duration_minutes INT DEFAULT 60,
  mode TEXT CHECK (mode IN ('Virtual', 'In-Person')),
  location_or_link TEXT,
  status TEXT CHECK (status IN ('scheduled', 'in_progress', 'completed', 'cancelled')) DEFAULT 'scheduled',
  credits_transferred INT DEFAULT 10,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Wallet Transactions Ledger
CREATE TABLE public.wallet_transactions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  amount INT NOT NULL,
  transaction_type TEXT CHECK (transaction_type IN ('grant', 'earned', 'spent', 'refund')),
  description TEXT NOT NULL,
  session_id UUID REFERENCES public.sessions(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. Certificates Table
CREATE TABLE public.certificates (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  recipient_id UUID REFERENCES public.profiles(id),
  skill_name TEXT NOT NULL,
  verification_code TEXT UNIQUE NOT NULL,
  issued_date DATE DEFAULT CURRENT_DATE,
  grade_or_score TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

---

## 🛠️ Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18.0.0 or higher)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Installation Steps

```bash
# 1. Clone the repository
git clone https://github.com/fakecroaz0714/enemini._..git

# 2. Enter the project directory
cd enemini._.

# 3. Install required packages
npm install

# 4. Start local development server
npm run dev
```

The Vite dev server will launch at: `http://localhost:5173/`

### Build for Production

```bash
# Compile and optimize for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🎯 Interactive Evaluation Guide

For evaluators, hackathon judges, or demo reviews, activate the **Guided 10-Step Tour** via the banner at the top of the app:

1. **Step 1 — Landing Page**: Experience the value proposition, live stats, and student testimonials.
2. **Step 2 — Student Profile**: View verified ID badges, skills offered, skills wanted, and schedule availability.
3. **Step 3 — AI Skill Matching**: Inspect dynamic match percentages and toggle the **500m to 10km proximity filter**.
4. **Step 4 — Circular Loops**: View the animated 3-Way SVG cycle visualizer and trigger an **Initiate Loop Cohort** action.
5. **Step 5 — Exchange Requests**: Review incoming/outgoing swap requests with 1-click accept.
6. **Step 6 — Peer Chat**: Test instant suggestion chips (*"Suggest Campus Spot"*) and see simulated peer responses.
7. **Step 7 — Live Session Simulator**: Enter a scheduled session with camera/mic controls, elapsed timer, interactive agenda checklist, and shared scratchpad.
8. **Step 8 — Skill Credit Wallet**: Review time-banking balance (+20 grant, +10 earned, -10 spent) and ledger entries.
9. **Step 9 — AI Skill Assessment & Certificates**: Complete the assessment challenge, trigger skill promotion, and generate a verified certificate with verification ID lookup.
10. **Step 10 — Campus Opportunities & Admin Console**: Explore project postings with 1-click apply, plus the moderator verification queue.

---

## 🎨 Theme & Accessibility

- **Default Theme**: High-contrast, clean **Light Theme** configured via `data-theme="light"` for optimal campus readability in daylight.
- **Dark Theme Toggle**: Accessible in 1 click from the header navigation bar.
- **Fixed Sub-Navigation**: Selecting extended tabs ("More") smoothly docks a secondary sticky strip directly below the header bar, avoiding obstructive floating popovers.

---

## 📜 License & Acknowledgments

This project is licensed under the **MIT License** — feel free to adapt, extend, and deploy it for your campus community.

- Developed for **Campus Peer-to-Peer Learning & Skill Democratization**.
- Live at: [**enemini.vercel.app**](https://enemini.vercel.app/)
- Repository: [**github.com/fakecroaz0714/enemini._.**](https://github.com/fakecroaz0714/enemini._..git)
