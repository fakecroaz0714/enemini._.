import React from 'react';
import { 
  Coins, 
  Calendar, 
  Star, 
  Repeat, 
  Sparkles, 
  ArrowRight, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  Award, 
  Briefcase,
  Play,
  Send,
  Zap,
  Users
} from 'lucide-react';

export default function Dashboard({ 
  user, 
  peers, 
  sessions, 
  exchanges, 
  onNavigateTab, 
  onSelectPeer, 
  onStartLiveSession 
}) {
  const upcomingSessions = sessions.filter(s => s.status === 'upcoming');
  const activeExchanges = exchanges.filter(e => e.status === 'accepted');

  // Greeting based on time
  const hour = new Date().getHours();
  let timeGreeting = "Good Day";
  if (hour < 12) timeGreeting = "Good Morning";
  else if (hour < 18) timeGreeting = "Good Afternoon";
  else timeGreeting = "Good Evening";

  return (
    <div className="dashboard-page-container container">
      {/* Welcome Banner */}
      <div className="dashboard-welcome-banner glass-card">
        <div className="welcome-text-col">
          <div className="welcome-badge">
            <span className="live-pulse-dot" />
            <span>Campus Active: {user.college}</span>
          </div>
          <h2 className="welcome-title">{timeGreeting}, {user.name.split(' ')[0]} 👋</h2>
          <p className="welcome-sub">
            You have <strong>{upcomingSessions.length} upcoming sessions</strong> scheduled this week and 
            <strong> {peers.length} students</strong> nearby ready to exchange skills.
          </p>
        </div>

        {/* Quick Action Buttons */}
        <div className="welcome-actions-row">
          <button className="btn btn-primary" onClick={() => onNavigateTab('matching')}>
            <Sparkles size={16} />
            <span>Find Skill Matches</span>
          </button>
          <button className="btn btn-outline" onClick={() => onNavigateTab('multi-way')}>
            <Repeat size={16} />
            <span>Explore Multi-Way Loops</span>
          </button>
        </div>
      </div>

      {/* Top 4 Metrics Row (Section 17) */}
      <div className="dashboard-metrics-grid">
        <div className="metric-stat-card glass-card" onClick={() => onNavigateTab('wallet')}>
          <div className="metric-card-top">
            <span className="metric-label">Skill Wallet</span>
            <div className="metric-icon-wrap emerald">
              <Coins size={20} />
            </div>
          </div>
          <div className="metric-number-row">
            <span className="metric-number">{user.credits}</span>
            <span className="metric-unit">Credits</span>
          </div>
          <span className="metric-trend text-emerald">+10 credits / hr taught</span>
        </div>

        <div className="metric-stat-card glass-card" onClick={() => onNavigateTab('sessions')}>
          <div className="metric-card-top">
            <span className="metric-label">Completed Sessions</span>
            <div className="metric-icon-wrap indigo">
              <Calendar size={20} />
            </div>
          </div>
          <div className="metric-number-row">
            <span className="metric-number">{sessions.filter(s => s.status === 'completed').length + 6}</span>
            <span className="metric-unit">Sessions</span>
          </div>
          <span className="metric-trend text-indigo">{user.teachingHours} hrs taught • {user.learningHours} hrs learned</span>
        </div>

        <div className="metric-stat-card glass-card" onClick={() => onNavigateTab('profile')}>
          <div className="metric-card-top">
            <span className="metric-label">Campus Rating</span>
            <div className="metric-icon-wrap amber">
              <Star size={20} />
            </div>
          </div>
          <div className="metric-number-row">
            <span className="metric-number">{user.rating}</span>
            <span className="metric-unit">/ 5.0</span>
          </div>
          <span className="metric-trend text-amber">⭐ Top 5% Student Mentor</span>
        </div>

        <div className="metric-stat-card glass-card" onClick={() => onNavigateTab('exchanges')}>
          <div className="metric-card-top">
            <span className="metric-label">Active Loops</span>
            <div className="metric-icon-wrap cyan">
              <Repeat size={20} />
            </div>
          </div>
          <div className="metric-number-row">
            <span className="metric-number">{activeExchanges.length + 1}</span>
            <span className="metric-unit">Partners</span>
          </div>
          <span className="metric-trend text-cyan">Circular & bilateral swaps</span>
        </div>
      </div>

      {/* Main Split Grid: Upcoming Sessions & Recommended Matches */}
      <div className="dashboard-content-split">
        {/* Left Column: Upcoming Sessions Alert */}
        <div className="dashboard-left-col">
          <div className="dash-section-header">
            <div className="section-title-wrap">
              <Calendar size={18} className="emerald" />
              <h3>Upcoming Campus Sessions</h3>
            </div>
            <button className="btn btn-ghost btn-sm" onClick={() => onNavigateTab('sessions')}>
              <span>View All</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="dash-upcoming-list">
            {upcomingSessions.map((session) => (
              <div key={session.id} className="dash-session-card glass-card">
                <div className="dash-session-top">
                  <span className="badge badge-emerald">{session.skill}</span>
                  <span className="badge badge-subtle">{session.mode}</span>
                </div>
                <h4 className="dash-session-title">{session.title}</h4>
                <div className="dash-session-details">
                  <div className="detail-item">
                    <Clock size={13} />
                    <span>{session.date} • {session.time}</span>
                  </div>
                  <div className="detail-item">
                    <MapPin size={13} />
                    <span>{session.location}</span>
                  </div>
                </div>

                <div className="dash-session-footer">
                  <span className="teacher-info">
                    Teacher: <strong>{session.teacher}</strong>
                  </span>
                  <button 
                    className="btn btn-primary btn-sm"
                    onClick={() => onNavigateTab('sessions')}
                  >
                    <Play size={13} />
                    <span>Join Room</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Multi-Way Exchange Callout Banner */}
          <div className="dash-multiway-banner glass-card" onClick={() => onNavigateTab('multi-way')}>
            <div className="multiway-banner-icon">
              <Repeat size={24} className="cyan" />
            </div>
            <div className="multiway-banner-text">
              <h4>Triangular Loop Detected: Arun ➔ Priya ➔ Rahul</h4>
              <p>Solve 3 skill requests simultaneously in a cashless circular exchange.</p>
            </div>
            <ArrowRight size={18} className="arrow-nav" />
          </div>
        </div>

        {/* Right Column: AI Recommended Matches Carousel */}
        <div className="dashboard-right-col">
          <div className="dash-section-header">
            <div className="section-title-wrap">
              <Sparkles size={18} className="indigo" />
              <h3>AI Recommended Matches</h3>
            </div>
            <button className="btn btn-ghost btn-sm" onClick={() => onNavigateTab('matching')}>
              <span>See All</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="dash-recommended-list">
            {peers.slice(0, 3).map((peer) => {
              const score = peer.matchBreakdown?.totalScore || 92;
              return (
                <div key={peer.id} className="dash-peer-card glass-card">
                  <div className="dash-peer-header">
                    <img src={peer.avatar} alt={peer.name} className="dash-peer-avatar" />
                    <div className="dash-peer-meta">
                      <div className="name-score-line">
                        <h4>{peer.name}</h4>
                        <span className="badge badge-emerald">
                          <Sparkles size={11} /> {score}% Match
                        </span>
                      </div>
                      <p className="dash-peer-dept">{peer.department} • {peer.year}</p>
                      <div className="dash-peer-dist">
                        <MapPin size={12} />
                        <span>{peer.distanceKm} km away ({peer.campusZone})</span>
                      </div>
                    </div>
                  </div>

                  <div className="dash-peer-skills">
                    <div className="mini-skill-row">
                      <span className="tag-lbl">Teaches:</span>
                      <span className="tag-val text-emerald">{peer.skillsOffered.map(s => s.name).join(', ')}</span>
                    </div>
                    <div className="mini-skill-row">
                      <span className="tag-lbl">Wants:</span>
                      <span className="tag-val text-indigo">{peer.skillsWanted.map(s => s.name).join(', ')}</span>
                    </div>
                  </div>

                  <div className="dash-peer-actions">
                    <button 
                      className="btn btn-outline btn-sm flex-1"
                      onClick={() => onSelectPeer(peer)}
                    >
                      View Profile
                    </button>
                    <button 
                      className="btn btn-primary btn-sm flex-1"
                      onClick={() => onNavigateTab('matching')}
                    >
                      <Send size={13} />
                      <span>Send Request</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
