import React, { useState } from 'react';
import { 
  User, 
  Star, 
  MapPin, 
  Plus, 
  Trash2, 
  Clock, 
  CheckCircle2, 
  Coins, 
  BookOpen, 
  Sparkles, 
  Award, 
  Code2, 
  ExternalLink, 
  Globe, 
  Edit3, 
  X,
  Share2
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/mockData';

export default function StudentProfile({ 
  user, 
  setUser, 
  onNavigateToMatching, 
  onNavigateToAssessment 
}) {
  const [showAddOfferModal, setShowAddOfferModal] = useState(false);
  const [showAddWantedModal, setShowAddWantedModal] = useState(false);
  const [showEditBioModal, setShowEditBioModal] = useState(false);

  // New Offered Skill Form State
  const [newOffer, setNewOffer] = useState({
    name: '',
    category: 'Programming',
    level: 'Intermediate',
    experience: '1 year',
    proficiency: 75
  });

  // New Wanted Skill Form State
  const [newWanted, setNewWanted] = useState({
    name: '',
    category: 'UI/UX',
    desiredLevel: 'Beginner',
    priority: 'High',
    reason: ''
  });

  // Edit Bio state
  const [bioText, setBioText] = useState(user.bio);
  const [availText, setAvailText] = useState(user.availability);

  const handleAddOfferedSkill = (e) => {
    e.preventDefault();
    if (!newOffer.name.trim()) return;

    const skillObj = {
      id: `so-${Date.now()}`,
      name: newOffer.name.trim(),
      category: newOffer.category,
      level: newOffer.level,
      experience: newOffer.experience,
      proficiency: newOffer.proficiency,
      verified: false
    };

    setUser({
      ...user,
      skillsOffered: [...user.skillsOffered, skillObj]
    });

    setNewOffer({
      name: '',
      category: 'Programming',
      level: 'Intermediate',
      experience: '1 year',
      proficiency: 75
    });
    setShowAddOfferModal(false);
  };

  const handleRemoveOfferedSkill = (id) => {
    setUser({
      ...user,
      skillsOffered: user.skillsOffered.filter(s => s.id !== id)
    });
  };

  const handleAddWantedSkill = (e) => {
    e.preventDefault();
    if (!newWanted.name.trim()) return;

    const wantedObj = {
      id: `sw-${Date.now()}`,
      name: newWanted.name.trim(),
      category: newWanted.category,
      desiredLevel: newWanted.desiredLevel,
      priority: newWanted.priority,
      reason: newWanted.reason
    };

    setUser({
      ...user,
      skillsWanted: [...user.skillsWanted, wantedObj]
    });

    setNewWanted({
      name: '',
      category: 'UI/UX',
      desiredLevel: 'Beginner',
      priority: 'High',
      reason: ''
    });
    setShowAddWantedModal(false);
  };

  const handleRemoveWantedSkill = (id) => {
    setUser({
      ...user,
      skillsWanted: user.skillsWanted.filter(s => s.id !== id)
    });
  };

  const handleSaveBio = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      bio: bioText,
      availability: availText
    });
    setShowEditBioModal(false);
  };

  return (
    <div className="profile-page-container container">
      {/* Top Banner & Header Card */}
      <div className="profile-header-card glass-card">
        <div className="profile-header-main">
          <div className="profile-avatar-wrapper">
            <img src={user.avatar} alt={user.name} className="profile-avatar-img" />
            <span className="online-indicator-dot" title="Online on Campus" />
          </div>

          <div className="profile-details">
            <div className="profile-name-row">
              <h2 className="profile-name">{user.name}</h2>
              <span className="badge badge-emerald">
                <CheckCircle2 size={13} /> Campus Verified
              </span>
              <button 
                className="btn btn-ghost btn-sm edit-profile-btn"
                onClick={() => setShowEditBioModal(true)}
              >
                <Edit3 size={14} />
                <span>Edit Bio</span>
              </button>
            </div>

            <p className="profile-college">
              {user.college} • {user.department} • <strong>{user.year}</strong> (Reg: {user.registerNumber})
            </p>

            <div className="profile-rating-row">
              <div className="rating-pill">
                <Star size={16} className="star-icon filled" />
                <span className="rating-score">{user.rating}</span>
                <span className="rating-count">({user.reviewCount} peer reviews)</span>
              </div>
              <div className="location-pill">
                <MapPin size={14} />
                <span>{user.location}</span>
              </div>
            </div>

            <p className="profile-bio-text">{user.bio}</p>

            {/* Social Links */}
            <div className="profile-links-row">
              <a href={user.socials?.github} target="_blank" rel="noreferrer" className="profile-social-link">
                <Code2 size={15} /> <span>GitHub</span>
              </a>
              <a href={user.socials?.linkedin} target="_blank" rel="noreferrer" className="profile-social-link">
                <ExternalLink size={15} /> <span>LinkedIn</span>
              </a>
              <a href={user.socials?.portfolio} target="_blank" rel="noreferrer" className="profile-social-link">
                <Globe size={15} /> <span>Portfolio</span>
              </a>
            </div>
          </div>
        </div>

        {/* Quick Stats Column */}
        <div className="profile-stats-column">
          <div className="profile-stat-box credits">
            <Coins size={22} className="stat-icon emerald" />
            <div>
              <span className="stat-value">{user.credits}</span>
              <span className="stat-title">Skill Credits</span>
            </div>
          </div>

          <div className="profile-stat-box hours">
            <Clock size={22} className="stat-icon indigo" />
            <div>
              <span className="stat-value">{user.teachingHours} hrs taught</span>
              <span className="stat-title">{user.learningHours} hrs learned</span>
            </div>
          </div>

          <button 
            className="btn btn-primary w-full"
            onClick={onNavigateToMatching}
          >
            <Sparkles size={16} />
            <span>Find Skill Matches</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Skills Offered & Skills Wanted */}
      <div className="skills-management-grid">
        {/* SKILLS I CAN TEACH */}
        <div className="skill-category-card glass-card">
          <div className="skill-card-top-bar">
            <div>
              <span className="badge badge-emerald">Teaching Skills</span>
              <h3 className="skill-card-title">Skills I Can Teach (Skills Offered)</h3>
              <p className="skill-card-sub">Juniors & peers can request sessions from you in these areas.</p>
            </div>
            <button 
              className="btn btn-outline-emerald btn-sm"
              onClick={() => setShowAddOfferModal(true)}
            >
              <Plus size={15} />
              <span>+ Add Skill</span>
            </button>
          </div>

          <div className="skills-list">
            {user.skillsOffered.map((skill) => (
              <div key={skill.id} className="skill-item-card">
                <div className="skill-item-info">
                  <div className="skill-title-line">
                    <h4 className="skill-name">{skill.name}</h4>
                    <span className="badge badge-subtle">{skill.category}</span>
                    <span className={`badge ${skill.level === 'Advanced' ? 'badge-emerald' : 'badge-indigo'}`}>
                      {skill.level}
                    </span>
                    {skill.verified ? (
                      <span className="badge badge-cyan" title="AI Assessment Verified">
                        <CheckCircle2 size={11} /> AI Verified
                      </span>
                    ) : (
                      <button 
                        className="badge badge-amber cursor-pointer"
                        onClick={onNavigateToAssessment}
                        title="Take AI Skill Assessment to earn verified badge"
                      >
                        <Sparkles size={11} /> Verify with AI
                      </button>
                    )}
                  </div>
                  <span className="skill-exp-text">Experience: {skill.experience}</span>
                  
                  {/* Proficiency Bar */}
                  <div className="proficiency-bar-wrapper">
                    <div className="proficiency-header">
                      <span>Proficiency Level</span>
                      <span>{skill.proficiency}%</span>
                    </div>
                    <div className="progress-track">
                      <div 
                        className="progress-fill emerald" 
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                  </div>
                </div>

                <button 
                  className="btn-delete-skill"
                  onClick={() => handleRemoveOfferedSkill(skill.id)}
                  title="Remove Skill"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* SKILLS I WANT TO LEARN */}
        <div className="skill-category-card glass-card">
          <div className="skill-card-top-bar">
            <div>
              <span className="badge badge-indigo">Learning Goals</span>
              <h3 className="skill-card-title">Skills I Want to Learn (Skills Wanted)</h3>
              <p className="skill-card-sub">Our AI matches you with campus students who teach these topics.</p>
            </div>
            <button 
              className="btn btn-secondary btn-sm"
              onClick={() => setShowAddWantedModal(true)}
            >
              <Plus size={15} />
              <span>+ Add Skill</span>
            </button>
          </div>

          <div className="skills-list">
            {user.skillsWanted.map((skill) => (
              <div key={skill.id} className="skill-item-card wanted">
                <div className="skill-item-info">
                  <div className="skill-title-line">
                    <h4 className="skill-name">{skill.name}</h4>
                    <span className="badge badge-subtle">{skill.category}</span>
                    <span className="badge badge-cyan">Goal: {skill.desiredLevel}</span>
                    <span className={`badge ${skill.priority === 'High' ? 'badge-rose' : 'badge-amber'}`}>
                      {skill.priority} Priority
                    </span>
                  </div>
                  {skill.reason && <p className="skill-reason-text">"{skill.reason}"</p>}
                </div>

                <button 
                  className="btn-delete-skill"
                  onClick={() => handleRemoveWantedSkill(skill.id)}
                  title="Remove Learning Goal"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Availability Schedule Section */}
      <div className="availability-card glass-card">
        <div className="avail-header">
          <div className="avail-title-row">
            <Clock size={20} className="avail-icon emerald" />
            <div>
              <h3>My Weekly Availability & Slots</h3>
              <p>When you are free for in-person or virtual skill exchanges.</p>
            </div>
          </div>
          <button 
            className="btn btn-outline btn-sm"
            onClick={() => setShowEditBioModal(true)}
          >
            <Edit3 size={14} />
            <span>Update Schedule</span>
          </button>
        </div>

        <div className="avail-schedule-grid">
          <div className="schedule-slot active">
            <span className="slot-day">Weekdays (Mon - Fri)</span>
            <span className="slot-time">6:00 PM - 9:00 PM</span>
            <span className="slot-mode">Virtual Room / Tech Lounge</span>
          </div>
          <div className="schedule-slot active">
            <span className="slot-day">Saturdays</span>
            <span className="slot-time">10:00 AM - 2:00 PM</span>
            <span className="slot-mode">Central Library Discussion Pods</span>
          </div>
          <div className="schedule-slot active">
            <span className="slot-day">Sundays</span>
            <span className="slot-time">Flexible (On Request)</span>
            <span className="slot-mode">Campus Coffee Hub</span>
          </div>
        </div>
      </div>

      {/* Modal: Add Offered Skill */}
      {showAddOfferModal && (
        <div className="modal-overlay" onClick={() => setShowAddOfferModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>+ Add Skill I Can Teach</h3>
              <button className="tour-close-btn" onClick={() => setShowAddOfferModal(false)}>
                <X size={18} />
              </button>
            </div>
            <form onSubmit={handleAddOfferedSkill}>
              <div className="modal-body">
                <div className="form-group">
                  <label className="form-label">Skill Name *</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="e.g. Python, Blender 3D, Public Speaking" 
                    value={newOffer.name}
                    onChange={(e) => setNewOffer({ ...newOffer, name: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Category</label>
                  <select 
                    className="form-control"
                    value={newOffer.category}
                    onChange={(e) => setNewOffer({ ...newOffer, category: e.target.value })}
                  >
                    {SKILL_CATEGORIES.filter(c => c !== 'All').map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Your Skill Level</label>
                  <select 
                    className="form-control"
                    value={newOffer.level}
                    onChange={(e) => setNewOffer({ ...newOffer, level: e.target.value })}
                  >
                    <option value="Beginner">Beginner (Can guide freshers)</option>
                    <option value="Intermediate">Intermediate (Project experience)</option>
                    <option value="Advanced">Advanced (Extensive domain mastery)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Experience</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="e.g. 2 years, Built 4 projects" 
                    value={newOffer.experience}
                    onChange={(e) => setNewOffer({ ...newOffer, experience: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Proficiency Percentage ({newOffer.proficiency}%)</label>
                  <input 
                    type="range" 
                    min="30" 
                    max="100" 
                    className="slider-input w-full"
                    value={newOffer.proficiency}
                    onChange={(e) => setNewOffer({ ...newOffer, proficiency: parseInt(e.target.value) })}
                  />
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-outline" onClick={() => setShowAddOfferModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Save Skill
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Add Wanted Skill */}
      {showAddWantedModal && (
        <div className="modal-overlay" onClick={() => setShowAddWantedModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>+ Add Skill I Want to Learn</h3>
              <button className="tour-close-btn" onClick={() => setShowAddWantedModal(false)}>
                <X size={18} />
              </button>
            </div>
            <form onSubmit={handleAddWantedSkill}>
              <div className="modal-body">
                <div className="form-group">
                  <label className="form-label">Skill Name *</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="e.g. UI/UX Design, Docker, German Language" 
                    value={newWanted.name}
                    onChange={(e) => setNewWanted({ ...newWanted, name: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Category</label>
                  <select 
                    className="form-control"
                    value={newWanted.category}
                    onChange={(e) => setNewWanted({ ...newWanted, category: e.target.value })}
                  >
                    {SKILL_CATEGORIES.filter(c => c !== 'All').map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Desired Level</label>
                  <select 
                    className="form-control"
                    value={newWanted.desiredLevel}
                    onChange={(e) => setNewWanted({ ...newWanted, desiredLevel: e.target.value })}
                  >
                    <option value="Beginner">Beginner (Zero to hero foundations)</option>
                    <option value="Intermediate">Intermediate (Real-world workflow)</option>
                    <option value="Advanced">Advanced (Complex system architecture)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Priority</label>
                  <select 
                    className="form-control"
                    value={newWanted.priority}
                    onChange={(e) => setNewWanted({ ...newWanted, priority: e.target.value })}
                  >
                    <option value="High">High (Immediate Need / Exam / Project)</option>
                    <option value="Medium">Medium (General Interest)</option>
                    <option value="Low">Low (Future Curiosity)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Why do you want to learn this? (Optional)</label>
                  <textarea 
                    className="form-control"
                    placeholder="e.g. Need for semester capstone project or hackathon"
                    value={newWanted.reason}
                    onChange={(e) => setNewWanted({ ...newWanted, reason: e.target.value })}
                  />
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-outline" onClick={() => setShowAddWantedModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-secondary">
                  Add Learning Goal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Edit Bio & Availability */}
      {showEditBioModal && (
        <div className="modal-overlay" onClick={() => setShowEditBioModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Edit Bio & Availability</h3>
              <button className="tour-close-btn" onClick={() => setShowEditBioModal(false)}>
                <X size={18} />
              </button>
            </div>
            <form onSubmit={handleSaveBio}>
              <div className="modal-body">
                <div className="form-group">
                  <label className="form-label">Bio</label>
                  <textarea 
                    className="form-control"
                    rows="3"
                    value={bioText}
                    onChange={(e) => setBioText(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Weekly Availability Summary</label>
                  <input 
                    type="text"
                    className="form-control"
                    value={availText}
                    onChange={(e) => setAvailText(e.target.value)}
                  />
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-outline" onClick={() => setShowEditBioModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
