import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Star, 
  Sparkles, 
  Repeat, 
  Filter, 
  CheckCircle, 
  ArrowRight, 
  Info, 
  Send, 
  X,
  Sliders,
  Calendar,
  Layers
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/mockData';

export default function SkillMatching({ 
  user, 
  peers, 
  onSendExchangeRequest, 
  onSelectPeer, 
  selectedSkillFromLanding 
}) {
  const [searchTerm, setSearchTerm] = useState(selectedSkillFromLanding || '');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [maxDistance, setMaxDistance] = useState(5.0); // kilometers
  const [minRating, setMinRating] = useState(4.0);
  const [selectedPeerForBreakdown, setSelectedPeerForBreakdown] = useState(null);
  const [requestModalPeer, setRequestModalPeer] = useState(null);

  // Exchange Request form state
  const [offeredSkill, setOfferedSkill] = useState(user.skillsOffered[0]?.name || 'Python');
  const [requestedSkill, setRequestedSkill] = useState('');
  const [requestMessage, setRequestMessage] = useState('');

  // Open exchange modal
  const handleOpenRequestModal = (peer) => {
    setRequestModalPeer(peer);
    const peerFirstSkill = peer.skillsOffered[0]?.name || 'General Mentorship';
    setRequestedSkill(peerFirstSkill);
    const userFirstSkill = user.skillsOffered[0]?.name || 'Python';
    setOfferedSkill(userFirstSkill);
    setRequestMessage(
      `Hi ${peer.name.split(' ')[0]}! I can teach you ${userFirstSkill} and I'd love to learn ${peerFirstSkill} from you. Let's exchange!`
    );
  };

  const handleSubmitExchange = (e) => {
    e.preventDefault();
    if (!requestModalPeer) return;

    onSendExchangeRequest({
      peerId: requestModalPeer.id,
      peerName: requestModalPeer.name,
      offeredSkill,
      requestedSkill,
      message: requestMessage
    });

    setRequestModalPeer(null);
  };

  // Filter peers based on search, category, distance, rating
  const filteredPeers = peers.filter((peer) => {
    // Search query matches peer name or any offered/wanted skill
    const matchesSearch = 
      !searchTerm ||
      peer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      peer.skillsOffered.some(s => s.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      peer.skillsWanted.some(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()));

    // Category match
    const matchesCategory = 
      selectedCategory === 'All' ||
      peer.skillsOffered.some(s => s.category === selectedCategory);

    // Hyperlocal distance match
    const matchesDistance = peer.distanceKm <= maxDistance;

    // Rating match
    const matchesRating = peer.rating >= minRating;

    return matchesSearch && matchesCategory && matchesDistance && matchesRating;
  });

  return (
    <div className="matching-page-container container">
      {/* Top Banner */}
      <div className="matching-header-card glass-card">
        <div className="matching-title-area">
          <div className="matching-badge animate-pulse-glow">
            <Sparkles size={16} />
            <span>AI Hyperlocal Matching Engine</span>
          </div>
          <h2 className="page-heading">Campus Skill Exchanges Near You</h2>
          <p className="page-sub">
            Our multi-parameter matching algorithm identifies students whose teaching strengths align with your learning goals.
          </p>
        </div>

        {/* Algorithm Weights Info Bar */}
        <div className="algo-weights-bar">
          <span className="weights-label">Match Algorithm Weights:</span>
          <div className="weights-pills">
            <span className="weight-pill">Skill Compatibility <strong>40%</strong></span>
            <span className="weight-pill">Skill Level <strong>20%</strong></span>
            <span className="weight-pill">Location Proximity <strong>15%</strong></span>
            <span className="weight-pill">Availability Overlap <strong>15%</strong></span>
            <span className="weight-pill">Peer Rating <strong>10%</strong></span>
          </div>
        </div>
      </div>

      {/* Filter and Hyperlocal Radius Bar */}
      <div className="matching-controls-bar glass-card">
        <div className="controls-row-top">
          {/* Search Input */}
          <div className="search-box-pill">
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search skill (e.g. Python, UI/UX, ML) or student name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button className="clear-search-btn" onClick={() => setSearchTerm('')}>
                <X size={14} />
              </button>
            )}
          </div>

          {/* Category Dropdown */}
          <div className="category-select-wrapper">
            <Filter size={16} className="filter-icon" />
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="category-dropdown"
            >
              {SKILL_CATEGORIES.map(cat => (
                <option key={cat} value={cat}>{cat === 'All' ? 'All Skill Categories' : cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Hyperlocal Radius Controls (Section 7) */}
        <div className="hyperlocal-controls-row">
          <div className="radius-slider-group">
            <div className="slider-label-row">
              <span className="radius-title">
                <MapPin size={16} className="emerald" /> Campus Radius Filter:
              </span>
              <span className="radius-value-highlight">Within {maxDistance} km</span>
            </div>
            <input 
              type="range"
              min="0.5"
              max="10.0"
              step="0.5"
              value={maxDistance}
              onChange={(e) => setMaxDistance(parseFloat(e.target.value))}
              className="slider-input radius-slider"
            />
          </div>

          {/* Quick Radius Presets */}
          <div className="radius-presets">
            <span className="presets-label">Quick Radius:</span>
            {[0.5, 1.0, 2.0, 5.0, 10.0].map(dist => (
              <button
                key={dist}
                className={`radius-preset-btn ${maxDistance === dist ? 'active' : ''}`}
                onClick={() => setMaxDistance(dist)}
              >
                {dist < 1 ? `${dist * 1000}m` : `${dist}km`}
              </button>
            ))}
          </div>

          {/* Min Rating Filter */}
          <div className="min-rating-group">
            <span className="rating-filter-label">Min Rating:</span>
            <select 
              className="rating-select"
              value={minRating}
              onChange={(e) => setMinRating(parseFloat(e.target.value))}
            >
              <option value="4.0">⭐ 4.0 & above</option>
              <option value="4.5">⭐ 4.5 & above</option>
              <option value="4.8">⭐ 4.8 & above</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="matching-results-header">
        <span className="results-count-text">
          Showing <strong>{filteredPeers.length}</strong> compatible student matches near you
        </span>
        <span className="privacy-note">
          🔒 <em>Approximate campus distances displayed for student privacy.</em>
        </span>
      </div>

      {/* Matched Students Cards Grid */}
      <div className="matched-peers-grid">
        {filteredPeers.map((peer) => {
          const score = peer.matchBreakdown?.totalScore || 88;
          return (
            <div key={peer.id} className="matched-peer-card glass-card">
              {/* Card Top: Match Score Badge & Distance */}
              <div className="peer-card-top-row">
                <div 
                  className={`match-score-badge ${score >= 90 ? 'super-match' : 'high-match'}`}
                  onClick={() => setSelectedPeerForBreakdown(peer)}
                  title="Click to view AI Match Score Breakdown"
                >
                  <Sparkles size={14} />
                  <span><strong>{score}%</strong> MATCH</span>
                  <Info size={12} className="info-icon" />
                </div>

                <div className="peer-distance-badge">
                  <MapPin size={13} />
                  <span>{peer.distanceKm} km ({peer.campusZone})</span>
                </div>
              </div>

              {/* Student Header */}
              <div className="peer-header-block">
                <img src={peer.avatar} alt={peer.name} className="peer-avatar" />
                <div className="peer-info-meta">
                  <div className="peer-name-row">
                    <h3 className="peer-name">{peer.name}</h3>
                    <span className="badge badge-emerald">
                      <CheckCircle size={10} /> Verified
                    </span>
                  </div>
                  <p className="peer-dept">{peer.department} • {peer.year}</p>
                  <div className="peer-rating-line">
                    <Star size={14} className="star-icon filled" />
                    <span className="rating-val">{peer.rating}</span>
                    <span className="review-cnt">({peer.reviewCount} sessions conducted)</span>
                  </div>
                </div>
              </div>

              {/* Dual Exchange Visual Flow */}
              <div className="dual-exchange-box">
                <div className="exchange-flow-item">
                  <span className="flow-direction-label peer-teaches">
                    {peer.name.split(' ')[0]} Teaches You:
                  </span>
                  <div className="skills-tags-cluster">
                    {peer.skillsOffered.map(s => (
                      <span key={s.name} className="skill-tag emerald">
                        {s.name} <small>({s.level})</small>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="exchange-arrows-divider">
                  <Repeat size={16} className="repeat-flow-icon" />
                  <span className="reciprocal-text">Reciprocal Swap</span>
                </div>

                <div className="exchange-flow-item">
                  <span className="flow-direction-label peer-learns">
                    {peer.name.split(' ')[0]} Wants to Learn:
                  </span>
                  <div className="skills-tags-cluster">
                    {peer.skillsWanted.map(s => (
                      <span key={s.name} className="skill-tag indigo">
                        {s.name} <small>({s.desiredLevel})</small>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bio & Availability */}
              <p className="peer-bio-snippet">"{peer.bio}"</p>
              
              <div className="peer-avail-line">
                <Calendar size={13} className="avail-calendar-icon" />
                <span>Availability: {peer.availability}</span>
              </div>

              {/* Card Actions */}
              <div className="peer-card-actions">
                <button 
                  className="btn btn-outline btn-sm flex-1"
                  onClick={() => onSelectPeer(peer)}
                >
                  View Profile
                </button>
                <button 
                  className="btn btn-primary btn-sm flex-2"
                  onClick={() => handleOpenRequestModal(peer)}
                >
                  <Send size={14} />
                  <span>Send Exchange Request</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredPeers.length === 0 && (
        <div className="no-matches-card glass-card text-center">
          <Search size={40} className="empty-icon" />
          <h3>No students found within {maxDistance} km</h3>
          <p>Try expanding your radius filter to 5 km or 10 km, or search for a different skill topic.</p>
          <button className="btn btn-primary" onClick={() => { setMaxDistance(10.0); setSearchTerm(''); setSelectedCategory('All'); }}>
            Reset Filters
          </button>
        </div>
      )}

      {/* Modal: Score Breakdown */}
      {selectedPeerForBreakdown && (
        <div className="modal-overlay" onClick={() => setSelectedPeerForBreakdown(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="breakdown-modal-title">
                <Sparkles size={20} className="emerald" />
                <h3>Match Score Breakdown: {selectedPeerForBreakdown.name}</h3>
              </div>
              <button className="tour-close-btn" onClick={() => setSelectedPeerForBreakdown(null)}>
                <X size={18} />
              </button>
            </div>
            <div className="modal-body">
              <div className="total-score-hero">
                <div className="big-score">{selectedPeerForBreakdown.matchBreakdown?.totalScore || 92}%</div>
                <div className="score-verdict">
                  <h4>High Dual Compatibility</h4>
                  <p>Mutual skills, complementary levels, and close campus proximity create an optimal exchange match.</p>
                </div>
              </div>

              <div className="breakdown-factors-list">
                <div className="factor-row">
                  <div className="factor-info">
                    <span className="factor-name">Skill Compatibility (Max 40%)</span>
                    <span className="factor-val">{selectedPeerForBreakdown.matchBreakdown?.skillCompatibility || 38}% / 40%</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill emerald" style={{ width: `${((selectedPeerForBreakdown.matchBreakdown?.skillCompatibility || 38)/40)*100}%` }} />
                  </div>
                </div>

                <div className="factor-row">
                  <div className="factor-info">
                    <span className="factor-name">Skill Level Balance (Max 20%)</span>
                    <span className="factor-val">{selectedPeerForBreakdown.matchBreakdown?.skillLevel || 18}% / 20%</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill indigo" style={{ width: `${((selectedPeerForBreakdown.matchBreakdown?.skillLevel || 18)/20)*100}%` }} />
                  </div>
                </div>

                <div className="factor-row">
                  <div className="factor-info">
                    <span className="factor-name">Location Proximity (Max 15%)</span>
                    <span className="factor-val">{selectedPeerForBreakdown.matchBreakdown?.location || 14}% / 15%</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill cyan" style={{ width: `${((selectedPeerForBreakdown.matchBreakdown?.location || 14)/15)*100}%` }} />
                  </div>
                </div>

                <div className="factor-row">
                  <div className="factor-info">
                    <span className="factor-name">Availability Overlap (Max 15%)</span>
                    <span className="factor-val">{selectedPeerForBreakdown.matchBreakdown?.availability || 13}% / 15%</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill amber" style={{ width: `${((selectedPeerForBreakdown.matchBreakdown?.availability || 13)/15)*100}%` }} />
                  </div>
                </div>

                <div className="factor-row">
                  <div className="factor-info">
                    <span className="factor-name">Peer Rating & Verification (Max 10%)</span>
                    <span className="factor-val">{selectedPeerForBreakdown.matchBreakdown?.rating || 10}% / 10%</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill emerald" style={{ width: '100%' }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-outline" onClick={() => setSelectedPeerForBreakdown(null)}>
                Close
              </button>
              <button 
                className="btn btn-primary" 
                onClick={() => {
                  const p = selectedPeerForBreakdown;
                  setSelectedPeerForBreakdown(null);
                  handleOpenRequestModal(p);
                }}
              >
                <Send size={15} />
                <span>Send Exchange Request</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Send Exchange Request (Section 8) */}
      {requestModalPeer && (
        <div className="modal-overlay" onClick={() => setRequestModalPeer(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title-with-avatar">
                <img src={requestModalPeer.avatar} alt={requestModalPeer.name} className="modal-peer-avatar" />
                <div>
                  <h3>Send Skill Exchange Request</h3>
                  <p>To <strong>{requestModalPeer.name}</strong> ({requestModalPeer.department})</p>
                </div>
              </div>
              <button className="tour-close-btn" onClick={() => setRequestModalPeer(null)}>
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSubmitExchange}>
              <div className="modal-body">
                <div className="form-group">
                  <label className="form-label">Skill You Will Teach {requestModalPeer.name.split(' ')[0]}:</label>
                  <select 
                    className="form-control"
                    value={offeredSkill}
                    onChange={(e) => {
                      setOfferedSkill(e.target.value);
                      setRequestMessage(`Hi ${requestModalPeer.name.split(' ')[0]}! I can teach you ${e.target.value} and I'd love to learn ${requestedSkill} from you. Let's exchange!`);
                    }}
                  >
                    {user.skillsOffered.map(s => (
                      <option key={s.id} value={s.name}>{s.name} ({s.level})</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Skill You Want to Learn From {requestModalPeer.name.split(' ')[0]}:</label>
                  <select 
                    className="form-control"
                    value={requestedSkill}
                    onChange={(e) => {
                      setRequestedSkill(e.target.value);
                      setRequestMessage(`Hi ${requestModalPeer.name.split(' ')[0]}! I can teach you ${offeredSkill} and I'd love to learn ${e.target.value} from you. Let's exchange!`);
                    }}
                  >
                    {requestModalPeer.skillsOffered.map(s => (
                      <option key={s.id} value={s.name}>{s.name} ({s.level})</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Personal Proposal Message:</label>
                  <textarea 
                    className="form-control"
                    rows="3"
                    value={requestMessage}
                    onChange={(e) => setRequestMessage(e.target.value)}
                    required
                  />
                  <small className="form-hint">Tip: Propose a specific topic or preferred day to increase acceptance rate.</small>
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-outline" onClick={() => setRequestModalPeer(null)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  <Send size={15} />
                  <span>Send Request Now</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
