import React from 'react';
import { 
  Sparkles, 
  ChevronRight, 
  ChevronLeft, 
  Check, 
  X, 
  HelpCircle,
  Play,
  RotateCcw
} from 'lucide-react';

export const TOUR_STEPS = [
  {
    step: 1,
    title: '1. Landing Page',
    tab: 'landing',
    desc: 'Explore the mission: Learn a Skill, Teach a Skill, Zero Money. View the 5-step workflow diagram and featured students.',
    actionHint: 'Review the landing page, then click Next Step.'
  },
  {
    step: 2,
    title: '2. Student Profile & Skills',
    tab: 'profile',
    desc: 'Meet Chandru P (VIT / CSE / 3rd Year). Check "Skills I Can Teach" (Python, React) & "Skills I Want" (UI/UX Design).',
    actionHint: 'Notice the skill levels, proficiency bars, and availability.'
  },
  {
    step: 3,
    title: '3. AI Skill Matching & Hyperlocal',
    tab: 'matching',
    desc: 'Run the AI algorithm. See Arun Kumar with a 94% Match (he teaches Python/ML & wants UI/UX; 1.2km away).',
    actionHint: 'Try the distance radius slider (500m to 10km) and click "Score Breakdown".'
  },
  {
    step: 4,
    title: '4. Send Exchange Request',
    tab: 'matching',
    desc: 'Click "Send Exchange Request" on Arun Kumar or Priya Sharma with a customized proposal message.',
    actionHint: 'Click "Send Request" to simulate a real exchange proposition.'
  },
  {
    step: 5,
    title: '5. Accept Exchange Request',
    tab: 'exchanges',
    desc: 'Switch to Exchanges tab to view Incoming Requests. Click "Accept" on Arun\'s or Sneha\'s request with celebratory confetti!',
    actionHint: 'Clicking Accept instantly connects you and unlocks the direct chat.'
  },
  {
    step: 6,
    title: '6. Direct Student Chat',
    tab: 'chat',
    desc: 'Real-time simulated chat with Priya or Arun. Send a custom message and receive an instant intelligent peer response!',
    actionHint: 'Type a message like "When can we meet?" and watch the instant reply.'
  },
  {
    step: 7,
    title: '7. Session Booking & Live Simulator',
    tab: 'sessions',
    desc: 'View scheduled sessions. Click "Join Live Session Room" to enter the collaborative workspace with timer and notes.',
    actionHint: 'Inside the live room, click "Complete Session" to initiate the credit transfer!'
  },
  {
    step: 8,
    title: '8. Rating, Review & Wallet Credits',
    tab: 'wallet',
    desc: 'Session completed! 10 Skill Credits earned/transferred automatically. Submit 5-star ratings for communication & knowledge.',
    actionHint: 'Inspect the updated Wallet balance and transaction history (+10 credits).'
  },
  {
    step: 9,
    title: '9. Multi-Way Skill Loop Graph',
    tab: 'multi-way',
    desc: 'Explore the advanced graph cycle detection: Arun (ML) ➔ Priya (UI) ➔ Rahul (JS) ➔ Arun circular exchange!',
    actionHint: 'Watch the animated nodes and glowing energy flow.'
  },
  {
    step: 10,
    title: '10. Digital Certificate & Opportunities',
    tab: 'certificates',
    desc: 'Awarded an official SkillLoop Certificate of Skill Achievement with verification code. Ready for company opportunities!',
    actionHint: 'Click "Print / Download PDF" or enter the certificate code to verify!'
  }
];

export default function GuidedTourBanner({ 
  currentStep, 
  setCurrentStep, 
  setActiveTab, 
  isOpen, 
  onClose 
}) {
  if (!isOpen) return null;

  const currentTour = TOUR_STEPS.find(s => s.step === currentStep) || TOUR_STEPS[0];

  const handleNext = () => {
    if (currentStep < TOUR_STEPS.length) {
      const next = currentStep + 1;
      setCurrentStep(next);
      setActiveTab(TOUR_STEPS[next - 1].tab);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      const prev = currentStep - 1;
      setCurrentStep(prev);
      setActiveTab(TOUR_STEPS[prev - 1].tab);
    }
  };

  const handleJump = (stepNum) => {
    setCurrentStep(stepNum);
    setActiveTab(TOUR_STEPS[stepNum - 1].tab);
  };

  return (
    <div className="tour-banner-container">
      <div className="tour-banner glass-card">
        <div className="tour-banner-header">
          <div className="tour-title-area">
            <span className="tour-pulse-badge">
              <Sparkles size={14} className="sparkle-spin" />
              <span>MVP Demo Flow</span>
            </span>
            <h4 className="tour-heading">
              Step {currentStep} of {TOUR_STEPS.length}: {currentTour.title}
            </h4>
          </div>

          <div className="tour-quick-stepper">
            {TOUR_STEPS.map((s) => (
              <button
                key={s.step}
                className={`tour-step-dot ${s.step === currentStep ? 'active' : ''} ${s.step < currentStep ? 'completed' : ''}`}
                onClick={() => handleJump(s.step)}
                title={`Jump to ${s.title}`}
              >
                {s.step < currentStep ? <Check size={10} /> : s.step}
              </button>
            ))}
          </div>

          <button className="tour-close-btn" onClick={onClose} title="Close Tour Banner">
            <X size={16} />
          </button>
        </div>

        <div className="tour-banner-body">
          <p className="tour-desc">{currentTour.desc}</p>
          <div className="tour-hint-box">
            <HelpCircle size={14} className="hint-icon" />
            <span><strong>Suggested Action:</strong> {currentTour.actionHint}</span>
          </div>
        </div>

        <div className="tour-banner-footer">
          <button 
            className="btn btn-ghost btn-sm"
            onClick={handlePrev}
            disabled={currentStep === 1}
          >
            <ChevronLeft size={16} />
            <span>Previous</span>
          </button>

          <div className="tour-status-counter">
            Step {currentStep} / {TOUR_STEPS.length}
          </div>

          {currentStep < TOUR_STEPS.length ? (
            <button 
              className="btn btn-primary btn-sm"
              onClick={handleNext}
            >
              <span>Next Step</span>
              <ChevronRight size={16} />
            </button>
          ) : (
            <button 
              className="btn btn-primary btn-sm"
              onClick={() => {
                setCurrentStep(1);
                setActiveTab('landing');
              }}
            >
              <RotateCcw size={14} />
              <span>Restart Demo Tour</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
