# SkillLoop — Campus Peer-to-Peer Skill Exchange Platform

> **"Learn a Skill. Teach a Skill. Grow Together. Exchange your skills without exchanging money."**

SkillLoop is a modern, hyperlocal, peer-to-peer student skill exchange web platform built for campus communities. Students exchange their skills and knowledge on a 1-to-1 or multi-way circular basis without using fiat currency.

---

## 🚀 Key Highlights & Modules

1. **AI-Powered Skill Matching**:
   - Calculates dynamic match scores based on:
     - `Skill Compatibility (40%)`
     - `Skill Level Balance (20%)`
     - `Campus Proximity (15%)`
     - `Availability Overlap (15%)`
     - `Peer Rating (10%)`
2. **Hyperlocal Campus Filter**:
   - Filter peers by distance radius: `500m`, `1 km`, `2 km`, `5 km`, `10 km`.
   - Protects student privacy with campus zone indicators.
3. **Multi-Way Circular Loops (Highlight Feature)**:
   - Resolves bilateral matching deadlocks using graph cycle detection:
     $$\text{Student A teaches B} \longrightarrow \text{Student B teaches C} \longrightarrow \text{Student C teaches A}$$
   - Animated SVG interactive cycle visualizer with real-time cohort initiation.
4. **Direct Student Chat**:
   - Real-time peer messenger with smart suggestion chips (`Propose Time`, `Suggest Campus Spot`, `Ask Prerequisites`).
   - Intelligent auto-replies simulation.
5. **Interactive Session Booking & Live Room Simulator**:
   - Schedule online or in-person sessions.
   - Live room simulator with video/audio controls, elapsed timer, collaborative scratchpad, and agenda checklist.
6. **Cashless Skill Credit Wallet**:
   - `1 Hour Teaching = +10 Credits`
   - `1 Hour Learning = -10 Credits`
   - Claimable +20 campus onboarding grant.
   - Comprehensive audit ledger of all teaching and learning credits.
7. **AI Skill Assessments**:
   - Multiple assessment tracks (Python Programming, UI/UX Design).
   - Instant score calculation, level upgrade (`Intermediate ➔ Advanced`), and recommended next skills.
8. **Digital Certificates & Verification Validator**:
   - Formal Certificate of Skill Achievement with verification ID (e.g. `SL-2026-VIT-8849`).
   - Clean printable/PDF format with `@media print` support.
   - Built-in cryptographic verification lookup module.
9. **Startup & Campus Opportunities**:
   - Internship, project, and fellowship postings matching verified student skills.
   - 1-Click Easy Apply attaching student verified hours, certificates, and peer rating.
10. **Student & Admin Portals**:
    - Centralized student dashboard with time greeting and metric cards.
    - Full admin console with campus KPIs, student ID verification approval queue, and skill taxonomy manager.
11. **Guided 10-Step MVP Demo Tour**:
    - Step-by-step walkthrough covering the entire evaluation story from Landing Page to Digital Certificate generation.

---

## 💻 Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Vanilla CSS Design System with dark & light theme tokens, glassmorphism, responsive grids
- **Icons**: `lucide-react`
- **Celebration Effects**: `canvas-confetti`

---

## 🛠️ Getting Started Locally

```bash
# Clone the repository
git clone https://github.com/fakecroaz0714/enemini._..git
cd enemini._.

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 📄 License

MIT © 2026 SkillLoop
