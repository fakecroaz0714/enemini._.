import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import GuidedTourBanner, { TOUR_STEPS } from './components/GuidedTourBanner';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import SkillMatching from './components/SkillMatching';
import MultiWayLoop from './components/MultiWayLoop';
import ExchangeRequests from './components/ExchangeRequests';
import ChatSystem from './components/ChatSystem';
import SessionManager from './components/SessionManager';
import SkillWallet from './components/SkillWallet';
import SkillAssessment from './components/SkillAssessment';
import Certificates from './components/Certificates';
import Opportunities from './components/Opportunities';
import StudentProfile from './components/StudentProfile';
import AdminDashboard from './components/AdminDashboard';
import AuthModal from './components/AuthModal';

import { 
  INITIAL_USER, 
  INITIAL_PEERS, 
  INITIAL_EXCHANGES, 
  INITIAL_CHATS, 
  INITIAL_SESSIONS, 
  INITIAL_TRANSACTIONS, 
  INITIAL_CERTIFICATES 
} from './data/mockData';

export default function App() {
  // Theme state: dark default
  const [theme, setTheme] = useState('dark');

  // Active navigation tab
  const [activeTab, setActiveTab] = useState('landing');

  // Core user & mock states
  const [user, setUser] = useState(INITIAL_USER);
  const [peers, setPeers] = useState(INITIAL_PEERS);
  const [exchanges, setExchanges] = useState(INITIAL_EXCHANGES);
  const [chats, setChats] = useState(INITIAL_CHATS);
  const [sessions, setSessions] = useState(INITIAL_SESSIONS);
  const [transactions, setTransactions] = useState(INITIAL_TRANSACTIONS);
  const [certificates, setCertificates] = useState(INITIAL_CERTIFICATES);

  // Modals & Navigation intents
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [currentTourStep, setCurrentTourStep] = useState(1);
  const [activeChatPeerId, setActiveChatPeerId] = useState('peer-priya');
  const [activeBookingPeer, setActiveBookingPeer] = useState(null);
  const [activeBookingSkill, setActiveBookingSkill] = useState('');
  const [selectedSkillFromLanding, setSelectedSkillFromLanding] = useState('');

  // Sync theme attribute to HTML tag
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Handler: Find Skill from Landing Search
  const handleFindSkill = (skillQuery) => {
    setSelectedSkillFromLanding(skillQuery);
    setActiveTab('matching');
  };

  // Handler: Select Student from Featured
  const handleSelectStudent = (student) => {
    setActiveTab('matching');
    setSelectedSkillFromLanding(student.name);
  };

  // Handler: Send Exchange Request (Section 8)
  const handleSendExchangeRequest = ({ peerId, peerName, offeredSkill, requestedSkill, message }) => {
    const newReq = {
      id: `exc-${Date.now()}`,
      senderId: user.id,
      receiverId: peerId,
      offeredSkill,
      requestedSkill,
      message,
      status: 'pending',
      timestamp: 'Just now',
      unread: false
    };

    setExchanges([newReq, ...exchanges]);
    setActiveTab('exchanges');
  };

  // Handler: Accept Exchange Request
  const handleAcceptExchange = (exchangeId) => {
    setExchanges(exchanges.map(e => e.id === exchangeId ? { ...e, status: 'accepted' } : e));
    const target = exchanges.find(e => e.id === exchangeId);
    if (target) {
      setActiveChatPeerId(target.senderId === user.id ? target.receiverId : target.senderId);
    }
  };

  // Handler: Reject Exchange
  const handleRejectExchange = (exchangeId) => {
    setExchanges(exchanges.filter(e => e.id !== exchangeId));
  };

  // Handler: Send Message in Chat
  const handleSendMessage = (peerId, messageObj) => {
    const existing = chats[peerId] || [];
    setChats({
      ...chats,
      [peerId]: [...existing, messageObj]
    });
  };

  // Handler: Book New Session (Section 10)
  const handleBookSession = (sessionObj) => {
    setSessions([sessionObj, ...sessions]);
    setActiveTab('sessions');
  };

  // Handler: Complete Live Session (Section 11 & 14)
  const handleCompleteSession = (sessionId, reviewData) => {
    const target = sessions.find(s => s.id === sessionId);
    if (!target) return;

    // Determine if current user was teacher or learner
    const isTeacher = target.teacherId === user.id;
    const creditChange = isTeacher ? +10 : -10;
    const newBalance = user.credits + creditChange;

    // Update session record with rating
    setSessions(sessions.map(s => s.id === sessionId ? {
      ...s,
      status: 'completed',
      rating: reviewData.rating,
      review: reviewData.review
    } : s));

    // Update user stats
    setUser(prev => ({
      ...prev,
      credits: newBalance,
      teachingHours: isTeacher ? prev.teachingHours + 1 : prev.teachingHours,
      learningHours: !isTeacher ? prev.learningHours + 1 : prev.learningHours
    }));

    // Record Transaction
    const newTx = {
      id: `tx-${Date.now()}`,
      date: new Date().toLocaleString([], { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
      type: isTeacher ? 'teaching' : 'learning',
      credits: creditChange,
      peer: isTeacher ? target.learner : target.teacher,
      skill: target.skill,
      note: `1 hr peer ${isTeacher ? 'teaching' : 'learning'} session completed`,
      balance: newBalance
    };

    setTransactions([newTx, ...transactions]);
    setActiveTab('wallet');
  };

  // Handler: Claim Onboarding Bonus
  const handleClaimBonus = (amount = 20) => {
    const newBalance = user.credits + amount;
    setUser(prev => ({
      ...prev,
      credits: newBalance
    }));

    const newTx = {
      id: `tx-${Date.now()}`,
      date: new Date().toLocaleString([], { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
      type: 'bonus',
      credits: amount,
      peer: 'SkillLoop Campus Council',
      skill: 'Onboarding Welcome Grant',
      note: 'Verified student welcome grant credited',
      balance: newBalance
    };

    setTransactions([newTx, ...transactions]);
  };

  // Handler: Upgrade Skill Level after AI Assessment (Section 13)
  const handleUpgradeSkillLevel = (skillName, newLevel = 'Advanced') => {
    const updatedSkills = user.skillsOffered.map(s => {
      if (s.name.toLowerCase() === skillName.toLowerCase()) {
        return { ...s, level: newLevel, verified: true, proficiency: 95 };
      }
      return s;
    });

    setUser(prev => ({
      ...prev,
      skillsOffered: updatedSkills
    }));
  };

  // Navigation shortcuts
  const handleOpenChatWithPeer = (peerId) => {
    setActiveChatPeerId(peerId);
    setActiveTab('chat');
  };

  const handleOpenBookingWithPeer = (peer, skill) => {
    setActiveBookingPeer(peer);
    setActiveBookingSkill(skill || peer?.skillsOffered[0]?.name || 'Mentorship');
    setActiveTab('sessions');
  };

  // Counts for badges
  const unreadExchanges = exchanges.filter(e => e.receiverId === user.id && e.status === 'pending').length;
  const unreadMessages = 1; // subtle demo unread indicator

  return (
    <div className="app-container">
      {/* Top Navbar */}
      <Navbar 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        user={user}
        theme={theme}
        setTheme={setTheme}
        onOpenAuth={() => setIsAuthOpen(true)}
        unreadExchangesCount={unreadExchanges}
        unreadMessagesCount={unreadMessages}
        onStartTour={() => {
          setIsTourOpen(true);
          setCurrentTourStep(1);
          setActiveTab('landing');
        }}
      />

      {/* Guided Tour Banner (Section 22 MVP Demo Flow) */}
      <GuidedTourBanner 
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
        currentStep={currentTourStep}
        setCurrentStep={setCurrentTourStep}
        setActiveTab={setActiveTab}
      />

      {/* Main Routed Page Content */}
      <main className="main-content">
        {activeTab === 'landing' && (
          <LandingPage 
            onFindSkill={handleFindSkill}
            onShareSkill={() => setActiveTab('profile')}
            onSelectStudent={handleSelectStudent}
            featuredStudents={peers}
            onOpenAuth={() => setIsAuthOpen(true)}
            onStartTour={() => {
              setIsTourOpen(true);
              setCurrentTourStep(1);
              setActiveTab('landing');
            }}
          />
        )}

        {activeTab === 'dashboard' && (
          <Dashboard 
            user={user}
            peers={peers}
            sessions={sessions}
            exchanges={exchanges}
            onNavigateTab={setActiveTab}
            onSelectPeer={(p) => {
              setActiveChatPeerId(p.id);
              setActiveTab('matching');
            }}
            onStartLiveSession={() => setActiveTab('sessions')}
          />
        )}

        {activeTab === 'matching' && (
          <SkillMatching 
            user={user}
            peers={peers}
            onSendExchangeRequest={handleSendExchangeRequest}
            onSelectPeer={(peer) => handleOpenChatWithPeer(peer.id)}
            selectedSkillFromLanding={selectedSkillFromLanding}
          />
        )}

        {activeTab === 'multi-way' && (
          <MultiWayLoop 
            onOpenChat={handleOpenChatWithPeer}
            onStartSession={() => setActiveTab('sessions')}
          />
        )}

        {activeTab === 'exchanges' && (
          <ExchangeRequests 
            exchanges={exchanges}
            onAcceptExchange={handleAcceptExchange}
            onRejectExchange={handleRejectExchange}
            peers={peers}
            user={user}
            onOpenChat={handleOpenChatWithPeer}
            onBookSession={handleOpenBookingWithPeer}
          />
        )}

        {activeTab === 'sessions' && (
          <SessionManager 
            sessions={sessions}
            user={user}
            peers={peers}
            onBookSession={handleBookSession}
            onCompleteSession={handleCompleteSession}
            activeBookingPeer={activeBookingPeer}
            activeBookingSkill={activeBookingSkill}
            onClearBookingIntent={() => {
              setActiveBookingPeer(null);
              setActiveBookingSkill('');
            }}
          />
        )}

        {activeTab === 'chat' && (
          <ChatSystem 
            user={user}
            peers={peers}
            activeChatPeerId={activeChatPeerId}
            setActiveChatPeerId={setActiveChatPeerId}
            chats={chats}
            onSendMessage={handleSendMessage}
            onBookSession={handleOpenBookingWithPeer}
          />
        )}

        {activeTab === 'wallet' && (
          <SkillWallet 
            user={user}
            transactions={transactions}
            onClaimBonus={handleClaimBonus}
            onBookSession={() => setActiveTab('sessions')}
          />
        )}

        {activeTab === 'assessment' && (
          <SkillAssessment 
            user={user}
            onUpgradeSkillLevel={handleUpgradeSkillLevel}
          />
        )}

        {activeTab === 'certificates' && (
          <Certificates 
            user={user}
            certificates={certificates}
          />
        )}

        {activeTab === 'opportunities' && (
          <Opportunities 
            user={user}
          />
        )}

        {activeTab === 'profile' && (
          <StudentProfile 
            user={user}
            setUser={setUser}
            onNavigateToMatching={() => setActiveTab('matching')}
            onNavigateToAssessment={() => setActiveTab('assessment')}
          />
        )}

        {activeTab === 'admin' && (
          <AdminDashboard />
        )}
      </main>

      {/* Auth Modal (Login / Register) */}
      <AuthModal 
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onLoginUser={(loggedInUser) => {
          setUser(loggedInUser);
          setActiveTab('dashboard');
        }}
      />
    </div>
  );
}
