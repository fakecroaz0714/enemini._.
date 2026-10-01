import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Coins, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Filter, 
  Send, 
  X,
  FileCheck,
  Building
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { OPPORTUNITIES } from '../data/mockData';

export default function Opportunities({ user }) {
  const [filterType, setFilterType] = useState('All');
  const [selectedOpp, setSelectedOpp] = useState(null);
  const [appliedOpps, setAppliedOpps] = useState({});

  const handleApply = (opp) => {
    setAppliedOpps({
      ...appliedOpps,
      [opp.id]: true
    });
    setSelectedOpp(null);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  const filtered = OPPORTUNITIES.filter(o => {
    if (filterType === 'All') return true;
    return o.type.toLowerCase().includes(filterType.toLowerCase());
  });

  return (
    <div className="opportunities-page-container container">
      {/* Header */}
      <div className="opportunities-header-card glass-card">
        <div className="opp-title-area">
          <div className="badge badge-indigo animate-pulse-glow">
            <Briefcase size={16} />
            <span>Campus & Industry Placement</span>
          </div>
          <h2 className="page-heading">Startup & Campus Opportunities</h2>
          <p className="page-sub">
            Fast-track your applications using verified SkillLoop peer teaching hours and AI assessments.
            Companies prioritize candidates with demonstrated cross-disciplinary exchange experience.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="opp-filters-row">
          {['All', 'Internship', 'Project', 'Fellowship', 'Hackathon'].map(type => (
            <button
              key={type}
              className={`opp-filter-pill ${filterType === type ? 'active' : ''}`}
              onClick={() => setFilterType(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Opportunities Grid */}
      <div className="opportunities-grid">
        {filtered.map((opp) => {
          const isApplied = !!appliedOpps[opp.id];
          return (
            <div key={opp.id} className="opportunity-card glass-card">
              <div className="opp-card-top">
                <div className="company-logo-badge">
                  <Building size={20} className="indigo" />
                </div>
                <div className="opp-meta-header">
                  <div className="opp-title-row">
                    <h4>{opp.title}</h4>
                    <span className="badge badge-subtle">{opp.type}</span>
                  </div>
                  <span className="company-name">{opp.company}</span>
                </div>
              </div>

              {/* Match Percentage Pill */}
              <div className="opp-match-meter">
                <div className="match-pill-emerald">
                  <Sparkles size={13} />
                  <span>{opp.matchPercentage}% Skill Match with your Profile</span>
                </div>
                <span className="opp-stipend">{opp.stipend}</span>
              </div>

              <p className="opp-desc-text">{opp.description}</p>

              {/* Required Skills */}
              <div className="required-skills-block">
                <span className="req-label">Required Skills:</span>
                <div className="req-pills-wrap">
                  {opp.skillsRequired.map(skill => {
                    const isMatched = user.skillsOffered.some(s => s.name.toLowerCase() === skill.toLowerCase());
                    return (
                      <span 
                        key={skill} 
                        className={`badge ${isMatched ? 'badge-emerald' : 'badge-subtle'}`}
                      >
                        {isMatched ? '✓ ' : ''}{skill}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="opp-card-footer">
                <div className="opp-location-date">
                  <span className="loc-item"><MapPin size={12} /> {opp.location}</span>
                  <span className="date-item"><Clock size={12} /> Deadline: {opp.deadline}</span>
                </div>

                {isApplied ? (
                  <span className="badge badge-emerald py-1 px-3">
                    <CheckCircle2 size={13} /> Application Submitted
                  </span>
                ) : (
                  <button 
                    className="btn btn-primary btn-sm"
                    onClick={() => setSelectedOpp(opp)}
                  >
                    <span>Easy Apply with Profile</span>
                    <ArrowRight size={13} />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal: Easy Apply */}
      {selectedOpp && (
        <div className="modal-overlay" onClick={() => setSelectedOpp(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <h3>Apply to {selectedOpp.company}</h3>
                <p>{selectedOpp.title} • {selectedOpp.location}</p>
              </div>
              <button className="tour-close-btn" onClick={() => setSelectedOpp(null)}>
                <X size={18} />
              </button>
            </div>

            <div className="modal-body">
              <div className="apply-verified-attestation glass-card">
                <div className="attest-header">
                  <FileCheck size={20} className="emerald" />
                  <h4>Auto-Attached SkillLoop Credential Package</h4>
                </div>
                <ul className="attest-list">
                  <li>✓ <strong>Student Name:</strong> {user.name} ({user.college})</li>
                  <li>✓ <strong>Verified Teaching Hours:</strong> {user.teachingHours} Hours</li>
                  <li>✓ <strong>Skill Credits Earned:</strong> {user.credits} SL</li>
                  <li>✓ <strong>Campus Peer Rating:</strong> {user.rating} / 5.0 (19 Peer Reviews)</li>
                  <li>✓ <strong>Digital Certificates:</strong> Python Programming (ID: SL-2026-VISTAS-8849)</li>
                </ul>
              </div>

              <div className="form-group mt-3">
                <label className="form-label">Note to Hiring Lead / Team:</label>
                <textarea 
                  className="form-control"
                  rows="3"
                  defaultValue={`I am applying with my verified SkillLoop credentials. I have completed ${user.teachingHours} hours of peer instruction in Python/React, demonstrating technical foundations and collaborative mentorship.`}
                />
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn btn-outline" onClick={() => setSelectedOpp(null)}>
                Cancel
              </button>
              <button className="btn btn-primary" onClick={() => handleApply(selectedOpp)}>
                <Send size={15} />
                <span>Submit 1-Click Application</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
