import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Video, 
  Star, 
  CheckCircle2, 
  Plus, 
  Sparkles, 
  X, 
  Play, 
  Award, 
  Coins, 
  FileText, 
  MessageSquare,
  Mic,
  MicOff,
  VideoOff
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SessionManager({ 
  sessions, 
  user, 
  peers, 
  onBookSession, 
  onCompleteSession,
  activeBookingPeer,
  activeBookingSkill,
  onClearBookingIntent
}) {
  const [showBookingModal, setShowBookingModal] = useState(!!activeBookingPeer);
  const [activeLiveSession, setActiveLiveSession] = useState(null);
  const [showRatingModal, setShowRatingModal] = useState(null);

  // Booking Form State
  const [bookingPeerId, setBookingPeerId] = useState(activeBookingPeer?.id || peers[1]?.id);
  const [bookingSkill, setBookingSkill] = useState(activeBookingSkill || 'UI/UX Design');
  const [bookingDate, setBookingDate] = useState('2026-10-03');
  const [bookingTime, setBookingTime] = useState('17:00');
  const [bookingDuration, setBookingDuration] = useState('1 Hour');
  const [bookingMode, setBookingMode] = useState('In-Person');
  const [bookingLocation, setBookingLocation] = useState('Central Library Discussion Pod #4');
  const [bookingNotes, setBookingNotes] = useState('Reviewing foundations and setting up project exercises.');

  // Rating Form State
  const [ratingOverall, setRatingOverall] = useState(5);
  const [ratingCommunication, setRatingCommunication] = useState(5);
  const [ratingKnowledge, setRatingKnowledge] = useState(5);
  const [ratingPunctuality, setRatingPunctuality] = useState(5);
  const [reviewComment, setReviewComment] = useState('Amazing session! Clear explanations and great hands-on examples.');

  // Live session mock state
  const [micOn, setMicOn] = useState(true);
  const [videoOn, setVideoOn] = useState(true);
  const [sessionNotes, setSessionNotes] = useState('Key Learnings:\n1. 8-Point Spatial Grid\n2. Figma Auto-Layout Constraints\n3. Component State Variants');

  const selectedPeerObj = peers.find(p => p.id === bookingPeerId) || peers[0];

  const handleCreateBooking = (e) => {
    e.preventDefault();
    const newSession = {
      id: `sess-${Date.now()}`,
      title: `${bookingSkill} Mentorship Session`,
      skill: bookingSkill,
      teacher: selectedPeerObj.name,
      teacherId: selectedPeerObj.id,
      learner: user.name,
      learnerId: user.id,
      date: bookingDate,
      time: `${bookingTime} (${bookingDuration})`,
      duration: bookingDuration,
      mode: bookingMode,
      location: bookingMode === 'Online' ? 'SkillLoop Virtual Room #942' : bookingLocation,
      status: 'upcoming',
      notes: bookingNotes
    };

    onBookSession(newSession);
    setShowBookingModal(false);
    onClearBookingIntent();
    confetti({
      particleCount: 60,
      spread: 50,
      origin: { y: 0.6 }
    });
  };

  const handleStartLiveSession = (session) => {
    setActiveLiveSession(session);
  };

  const handleFinishLiveSession = () => {
    if (!activeLiveSession) return;
    const finishedSession = activeLiveSession;
    setActiveLiveSession(null);
    setShowRatingModal(finishedSession);
  };

  const handleSubmitRating = (e) => {
    e.preventDefault();
    if (!showRatingModal) return;

    onCompleteSession(showRatingModal.id, {
      rating: ratingOverall,
      review: reviewComment,
      categories: {
        communication: ratingCommunication,
        knowledge: ratingKnowledge,
        punctuality: ratingPunctuality
      }
    });

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.5 }
    });

    setShowRatingModal(null);
  };

  return (
    <div className="sessions-page-container container">
      {/* Header */}
      <div className="sessions-header-card glass-card">
        <div className="sessions-title-area">
          <div className="badge badge-emerald">
            <Calendar size={14} />
            <span>Interactive Sessions</span>
          </div>
          <h2 className="page-heading">Campus Skill Sessions</h2>
          <p className="page-sub">
            Schedule 1-on-1 peer teaching sessions, launch collaborative live study rooms, and exchange Skill Credits automatically.
          </p>
        </div>

        <button 
          className="btn btn-primary"
          onClick={() => setShowBookingModal(true)}
        >
          <Plus size={16} />
          <span>Book New Session</span>
        </button>
      </div>

      {/* Credit Economics Rule Explainer */}
      <div className="credit-economics-banner glass-card">
        <Coins size={18} className="emerald" />
        <div className="banner-content">
          <strong>SkillLoop Peer Economics:</strong>
          <span> 1 Hour Teaching = <strong>+10 Credits</strong> earned • 1 Hour Learning = <strong>-10 Credits</strong> transferred. Zero money involved!</span>
        </div>
      </div>

      {/* Sessions Grid */}
      <div className="sessions-sections-wrapper">
        {/* Section: Upcoming Sessions */}
        <div className="session-category-group">
          <h3 className="section-subtitle-heading">
            <span>Upcoming & Scheduled</span>
            <span className="badge badge-indigo">
              {sessions.filter(s => s.status === 'upcoming').length} Sessions
            </span>
          </h3>

          <div className="sessions-cards-grid">
            {sessions.filter(s => s.status === 'upcoming').map((session) => (
              <div key={session.id} className="session-card glass-card animate-pulse-glow">
                <div className="session-card-header">
                  <div className="session-skill-pill">
                    <span className="badge badge-emerald">{session.skill}</span>
                    <span className="badge badge-subtle">{session.duration}</span>
                  </div>
                  <span className={`badge ${session.mode === 'Online' ? 'badge-cyan' : 'badge-amber'}`}>
                    {session.mode === 'Online' ? <Video size={12} /> : <MapPin size={12} />}
                    {session.mode}
                  </span>
                </div>

                <h4 className="session-card-title">{session.title}</h4>

                <div className="session-roles-row">
                  <div className="role-box">
                    <span className="role-label">Teacher</span>
                    <span className="role-name">{session.teacher}</span>
                  </div>
                  <div className="role-box">
                    <span className="role-label">Learner</span>
                    <span className="role-name">{session.learner}</span>
                  </div>
                </div>

                <div className="session-meta-lines">
                  <div className="meta-line">
                    <Calendar size={14} />
                    <span>{session.date} • {session.time}</span>
                  </div>
                  <div className="meta-line">
                    <MapPin size={14} />
                    <span>{session.location}</span>
                  </div>
                </div>

                {session.notes && (
                  <p className="session-notes-box">
                    <strong>Agenda:</strong> {session.notes}
                  </p>
                )}

                <div className="session-card-actions">
                  <button 
                    className="btn btn-primary w-full"
                    onClick={() => handleStartLiveSession(session)}
                  >
                    <Play size={15} />
                    <span>Join Live Session Room</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Completed Sessions */}
        <div className="session-category-group">
          <h3 className="section-subtitle-heading">
            <span>Completed Sessions & Verified Hours</span>
            <span className="badge badge-emerald">
              {sessions.filter(s => s.status === 'completed').length} Completed
            </span>
          </h3>

          <div className="sessions-cards-grid">
            {sessions.filter(s => s.status === 'completed').map((session) => (
              <div key={session.id} className="session-card completed glass-card">
                <div className="session-card-header">
                  <span className="badge badge-subtle">{session.skill}</span>
                  <span className="badge badge-emerald">
                    <CheckCircle2 size={12} /> Credits Transferred (+10 / -10)
                  </span>
                </div>

                <h4 className="session-card-title">{session.title}</h4>

                <div className="session-roles-row">
                  <div className="role-box">
                    <span className="role-label">Teacher</span>
                    <span className="role-name">{session.teacher}</span>
                  </div>
                  <div className="role-box">
                    <span className="role-label">Learner</span>
                    <span className="role-name">{session.learner}</span>
                  </div>
                </div>

                {session.rating && (
                  <div className="completed-review-box">
                    <div className="stars-line">
                      {[...Array(session.rating)].map((_, i) => (
                        <Star key={i} size={14} className="star-icon filled" />
                      ))}
                      <span className="rating-num">{session.rating}.0 / 5.0</span>
                    </div>
                    {session.review && <p className="review-quote">"{session.review}"</p>}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal: Book Session (Section 10) */}
      {showBookingModal && (
        <div className="modal-overlay" onClick={() => setShowBookingModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Schedule a Skill Session</h3>
              <button className="tour-close-btn" onClick={() => setShowBookingModal(false)}>
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleCreateBooking}>
              <div className="modal-body">
                <div className="form-group">
                  <label className="form-label">Select Peer Partner:</label>
                  <select 
                    className="form-control"
                    value={bookingPeerId}
                    onChange={(e) => setBookingPeerId(e.target.value)}
                  >
                    {peers.map(p => (
                      <option key={p.id} value={p.id}>{p.name} ({p.department})</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Skill Topic:</label>
                  <input 
                    type="text" 
                    className="form-control"
                    value={bookingSkill}
                    onChange={(e) => setBookingSkill(e.target.value)}
                    required
                  />
                </div>

                <div className="grid-2-col">
                  <div className="form-group">
                    <label className="form-label">Date:</label>
                    <input 
                      type="date" 
                      className="form-control"
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Time:</label>
                    <input 
                      type="time" 
                      className="form-control"
                      value={bookingTime}
                      onChange={(e) => setBookingTime(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid-2-col">
                  <div className="form-group">
                    <label className="form-label">Duration:</label>
                    <select 
                      className="form-control"
                      value={bookingDuration}
                      onChange={(e) => setBookingDuration(e.target.value)}
                    >
                      <option value="1 Hour">1 Hour (Standard: 10 Credits)</option>
                      <option value="2 Hours">2 Hours (Deep Dive: 20 Credits)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Meeting Mode:</label>
                    <select 
                      className="form-control"
                      value={bookingMode}
                      onChange={(e) => setBookingMode(e.target.value)}
                    >
                      <option value="In-Person">In-Person (Campus Hub)</option>
                      <option value="Online">Online (SkillLoop Live Room)</option>
                    </select>
                  </div>
                </div>

                {bookingMode === 'In-Person' && (
                  <div className="form-group">
                    <label className="form-label">Campus Location:</label>
                    <input 
                      type="text" 
                      className="form-control"
                      value={bookingLocation}
                      onChange={(e) => setBookingLocation(e.target.value)}
                      placeholder="e.g. Central Library Pod #4 or Tech Lounge"
                    />
                  </div>
                )}

                <div className="form-group">
                  <label className="form-label">Session Agenda / Notes:</label>
                  <textarea 
                    className="form-control"
                    rows="2"
                    value={bookingNotes}
                    onChange={(e) => setBookingNotes(e.target.value)}
                  />
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-outline" onClick={() => setShowBookingModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Interactive Live Session Room */}
      {activeLiveSession && (
        <div className="modal-overlay live-room-overlay">
          <div className="modal-content live-room-modal" onClick={(e) => e.stopPropagation()}>
            <div className="live-room-topbar">
              <div className="live-status">
                <span className="live-pulse-red" />
                <strong>LIVE SESSION: {activeLiveSession.title}</strong>
              </div>
              <div className="live-timer-badge">
                <Clock size={16} />
                <span>Elapsed: 48:12 / 60:00</span>
              </div>
              <button className="tour-close-btn" onClick={() => setActiveLiveSession(null)}>
                <X size={18} />
              </button>
            </div>

            <div className="live-room-body">
              {/* Left: Video / Participant Simulation */}
              <div className="live-video-grid">
                <div className="participant-video-box">
                  <img src={user.avatar} alt={user.name} className="participant-stream-bg" />
                  <div className="participant-tag">You ({user.name})</div>
                  <div className="stream-controls">
                    <button className="icon-btn-micro" onClick={() => setMicOn(!micOn)}>
                      {micOn ? <Mic size={14} /> : <MicOff size={14} className="text-rose" />}
                    </button>
                    <button className="icon-btn-micro" onClick={() => setVideoOn(!videoOn)}>
                      {videoOn ? <Video size={14} /> : <VideoOff size={14} className="text-rose" />}
                    </button>
                  </div>
                </div>

                <div className="participant-video-box">
                  <img 
                    src={activeLiveSession.teacher === user.name 
                      ? 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=250'
                      : 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=250'
                    } 
                    alt="Peer" 
                    className="participant-stream-bg" 
                  />
                  <div className="participant-tag">
                    {activeLiveSession.teacher === user.name ? activeLiveSession.learner : activeLiveSession.teacher} (Peer)
                  </div>
                </div>
              </div>

              {/* Right: Collaborative Notes & Checklist */}
              <div className="live-workspace-panel">
                <div className="panel-tab-title">
                  <FileText size={16} className="emerald" />
                  <h4>Collaborative Live Scratchpad</h4>
                </div>
                <textarea 
                  className="scratchpad-textarea form-control"
                  rows="7"
                  value={sessionNotes}
                  onChange={(e) => setSessionNotes(e.target.value)}
                />

                <div className="agenda-checklist">
                  <h5>Session Checklist:</h5>
                  <label className="check-item"><input type="checkbox" defaultChecked /> Foundations & Concepts</label>
                  <label className="check-item"><input type="checkbox" defaultChecked /> Live Code / Hands-on Demo</label>
                  <label className="check-item"><input type="checkbox" /> Q&A and Resource Sharing</label>
                </div>
              </div>
            </div>

            <div className="live-room-footer">
              <span className="live-credit-notice">
                <Coins size={16} className="emerald" />
                Completing will transfer 10 Skill Credits and unlock peer review.
              </span>
              <button 
                className="btn btn-primary btn-lg"
                onClick={handleFinishLiveSession}
              >
                <CheckCircle2 size={18} />
                <span>Complete Session & Claim Credits</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Rating & Review (Section 14) */}
      {showRatingModal && (
        <div className="modal-overlay" onClick={() => setShowRatingModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="review-title-row">
                <Star size={20} className="amber" />
                <div>
                  <h3>How was your session with {showRatingModal.teacher}?</h3>
                  <p>Your peer rating verifies their hours and contributes to their Digital Certificate.</p>
                </div>
              </div>
              <button className="tour-close-btn" onClick={() => setShowRatingModal(null)}>
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSubmitRating}>
              <div className="modal-body">
                {/* Overall Star Rating */}
                <div className="star-rating-selector text-center">
                  <label className="rating-hero-label">Overall Rating</label>
                  <div className="stars-interactive-row">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star}
                        size={32}
                        className={`star-clickable ${star <= ratingOverall ? 'filled' : ''}`}
                        onClick={() => setRatingOverall(star)}
                      />
                    ))}
                  </div>
                  <span className="star-score-text">{ratingOverall} out of 5 Stars</span>
                </div>

                {/* Sub-Category Ratings (Section 14) */}
                <div className="sub-ratings-grid">
                  <div className="sub-rating-item">
                    <span className="sub-rating-label">Communication:</span>
                    <div className="mini-stars">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          size={18} 
                          className={`star-clickable ${star <= ratingCommunication ? 'filled' : ''}`}
                          onClick={() => setRatingCommunication(star)}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="sub-rating-item">
                    <span className="sub-rating-label">Domain Knowledge:</span>
                    <div className="mini-stars">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          size={18} 
                          className={`star-clickable ${star <= ratingKnowledge ? 'filled' : ''}`}
                          onClick={() => setRatingKnowledge(star)}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="sub-rating-item">
                    <span className="sub-rating-label">Punctuality:</span>
                    <div className="mini-stars">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          size={18} 
                          className={`star-clickable ${star <= ratingPunctuality ? 'filled' : ''}`}
                          onClick={() => setRatingPunctuality(star)}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="form-group mt-3">
                  <label className="form-label">Review Comment:</label>
                  <textarea 
                    className="form-control"
                    rows="3"
                    value={reviewComment}
                    onChange={(e) => setReviewComment(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="modal-footer">
                <button type="submit" className="btn btn-primary w-full btn-lg">
                  Submit Review & Record Verification
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
