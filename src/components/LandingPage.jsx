import React, { useState } from 'react';
import { 
  Repeat, 
  Search, 
  Sparkles, 
  MapPin, 
  Star, 
  ShieldCheck, 
  Coins, 
  Users, 
  Award, 
  Briefcase, 
  ArrowRight, 
  CheckCircle,
  Clock,
  BookOpen,
  Send,
  Zap
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/mockData';

export default function LandingPage({ 
  onFindSkill, 
  onShareSkill, 
  onSelectStudent, 
  featuredStudents, 
  onOpenAuth, 
  onStartTour 
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const popularSkills = [
    'Python', 'UI/UX Design', 'React', 'Machine Learning', 
    'Figma', 'Photography', 'Video Editing', 'German Language', 
    'SolidWorks 3D', 'Data Science', 'JavaScript', 'Public Speaking'
  ];

  const workflowSteps = [
    {
      num: '①',
      title: 'Create Profile',
      desc: 'Sign up with your campus email, specify your college department, year, and get verified.',
      icon: Users,
      badge: 'Step 1'
    },
    {
      num: '②',
      title: 'Add Your Skills',
      desc: 'List skills you can teach juniors or peers, plus skills you urgently want to learn.',
      icon: BookOpen,
      badge: 'Step 2'
    },
    {
      num: '③',
      title: 'AI Skill Matching',
      desc: 'Our algorithm factors compatibility, level balance, campus distance, and availability.',
      icon: Sparkles,
      badge: 'Step 3'
    },
    {
      num: '④',
      title: 'Exchange Skills',
      desc: 'Send requests, coordinate in direct student chat, and conduct in-person or virtual sessions.',
      icon: Repeat,
      badge: 'Step 4'
    },
    {
      num: '⑤',
      title: 'Earn Credits & Certificates',
      desc: 'Gain 10 credits per hour taught. Unlock tamper-proof digital certificates for your resume.',
      icon: Award,
      badge: 'Step 5'
    }
  ];

  const benefits = [
    {
      title: '100% Cashless Economy',
      desc: 'Exchange knowledge directly. 1 hour of teaching earns 10 credits; 1 hour of learning spends 10 credits.',
      icon: Coins,
      color: 'emerald'
    },
    {
      title: 'Hyperlocal Campus Matching',
      desc: 'Filter peers by 500m, 1km, or 5km radius to easily meet in campus libraries or tech lounges.',
      icon: MapPin,
      color: 'indigo'
    },
    {
      title: 'Multi-Way Circular Loops',
      desc: 'Stuck in a deadlock? SkillLoop detects 3-way circular trades: A teaches B, B teaches C, C teaches A.',
      icon: Repeat,
      color: 'cyan'
    },
    {
      title: 'Verifiable Digital Credentials',
      desc: 'Generate official certificates validated by peer reviews and AI assessments for your LinkedIn profile.',
      icon: ShieldCheck,
      color: 'amber'
    }
  ];

  const testimonials = [
    {
      quote: "SkillLoop helped me master Figma UI design from Priya while I mentored her in React hooks. Zero money spent, and we built an award-winning hackathon project together!",
      name: "Chandru P",
      college: "VIT Vellore, CSE 3rd Year",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
      rating: 5
    },
    {
      quote: "The 3-way multi-loop is pure genius. I wanted Machine Learning and taught UI design to Rahul, who taught JS to Arun. Everyone won without waiting for direct bilateral matches.",
      name: "Priya Sharma",
      college: "School of Design, 3rd Year",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
      rating: 5
    },
    {
      quote: "As an engineering student, finding juniors to teach Python allowed me to earn 120 credits, which I used for German language lessons before my study abroad semester!",
      name: "Arun Kumar",
      college: "VIT AI & ML, 4th Year",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=150",
      rating: 5
    }
  ];

  return (
    <div className="landing-page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-content">
          <div className="hero-badge animate-pulse-glow">
            <Sparkles size={15} />
            <span>Peer-to-Peer College Skill Exchange Platform</span>
          </div>

          <h1 className="hero-title">
            Learn a Skill. Teach a Skill.<br />
            <span className="hero-gradient-text">Grow Together.</span>
          </h1>

          <p className="hero-subtitle">
            Exchange your skills without exchanging money. Connect with verified campus students,
            collaborate across departments, earn skill credits, and build your certified portfolio.
          </p>

          {/* Quick Search Bar */}
          <div className="hero-search-wrapper glass-card">
            <div className="search-input-box">
              <Search size={20} className="search-icon" />
              <input 
                type="text" 
                placeholder="Search skills e.g., Python, Figma, Machine Learning, German..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && onFindSkill(searchQuery)}
              />
            </div>
            <button 
              className="btn btn-primary btn-lg hero-search-btn"
              onClick={() => onFindSkill(searchQuery)}
            >
              <span>Find a Skill</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Hero CTAs */}
          <div className="hero-cta-group">
            <button className="btn btn-primary btn-lg" onClick={() => onFindSkill('')}>
              <Search size={18} />
              <span>Find a Skill Match</span>
            </button>
            <button className="btn btn-outline btn-lg" onClick={onShareSkill}>
              <Repeat size={18} />
              <span>Share Your Skill</span>
            </button>
            <button className="btn btn-outline-emerald btn-lg" onClick={onStartTour}>
              <Zap size={18} />
              <span>Interactive MVP Demo</span>
            </button>
          </div>

          {/* Live Campus Counter Pill */}
          <div className="hero-stats-row">
            <div className="hero-stat-pill">
              <span className="stat-number">1,250+</span>
              <span className="stat-label">Verified Students</span>
            </div>
            <div className="stat-divider">•</div>
            <div className="hero-stat-pill">
              <span className="stat-number">640+</span>
              <span className="stat-label">Skill Exchanges</span>
            </div>
            <div className="stat-divider">•</div>
            <div className="hero-stat-pill">
              <span className="stat-number">14,200</span>
              <span className="stat-label">Credits Circulated</span>
            </div>
            <div className="stat-divider">•</div>
            <div className="hero-stat-pill">
              <span className="stat-number">100%</span>
              <span className="stat-label">Cash-Free</span>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Skills Bar */}
      <section className="popular-skills-section">
        <div className="container">
          <div className="popular-skills-header">
            <span className="popular-label">Trending Skills:</span>
            <div className="popular-skills-tags">
              {popularSkills.map((skill) => (
                <button
                  key={skill}
                  className="skill-pill-btn"
                  onClick={() => onFindSkill(skill)}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How SkillLoop Works Section */}
      <section className="workflow-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-emerald">Seamless Workflow</span>
            <h2 className="section-title">How SkillLoop Works</h2>
            <p className="section-subtitle">
              Five simple steps to connect, collaborate, and trade expertise with peers across your college campus.
            </p>
          </div>

          <div className="workflow-steps-grid">
            {workflowSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="workflow-step-card glass-card">
                  <div className="step-card-top">
                    <span className="step-num-badge">{step.num}</span>
                    <div className="step-icon-wrap">
                      <Icon size={22} />
                    </div>
                  </div>
                  <h3 className="step-card-title">{step.title}</h3>
                  <p className="step-card-desc">{step.desc}</p>
                  {idx < workflowSteps.length - 1 && (
                    <div className="step-connector-arrow">➔</div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="workflow-cta-center">
            <button className="btn btn-primary" onClick={onStartTour}>
              <Sparkles size={16} />
              <span>Follow the Guided 10-Step Demo Tour</span>
            </button>
          </div>
        </div>
      </section>

      {/* Featured Students Section */}
      <section className="featured-students-section">
        <div className="container">
          <div className="section-header-split">
            <div>
              <span className="badge badge-indigo">Campus Directory</span>
              <h2 className="section-title">Featured Campus Peers</h2>
              <p className="section-subtitle">Discover top-rated student mentors and skill exchangers ready to collaborate.</p>
            </div>
            <button className="btn btn-outline" onClick={() => onFindSkill('')}>
              <span>View All 1,250+ Peers</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="featured-students-grid">
            {featuredStudents.slice(0, 4).map((student) => (
              <div 
                key={student.id} 
                className="featured-student-card glass-card glass-card-interactive"
                onClick={() => onSelectStudent(student)}
              >
                <div className="student-card-header">
                  <img src={student.avatar} alt={student.name} className="student-card-avatar" />
                  <div className="student-card-meta">
                    <div className="student-name-row">
                      <h4 className="student-name">{student.name}</h4>
                      <span className="badge badge-emerald">
                        <CheckCircle size={10} /> Verified
                      </span>
                    </div>
                    <p className="student-college">{student.department} • {student.year}</p>
                    <div className="student-rating-row">
                      <Star size={14} className="star-icon" />
                      <span className="rating-val">{student.rating}</span>
                      <span className="review-cnt">({student.reviewCount} sessions)</span>
                    </div>
                  </div>
                </div>

                <div className="student-skills-block">
                  <div className="skills-line">
                    <span className="skills-tag-label teach">Can Teach:</span>
                    <div className="skills-badges-wrap">
                      {student.skillsOffered.slice(0, 2).map(s => (
                        <span key={s.name} className="badge badge-subtle">{s.name} ({s.level})</span>
                      ))}
                    </div>
                  </div>

                  <div className="skills-line">
                    <span className="skills-tag-label learn">Wants to Learn:</span>
                    <div className="skills-badges-wrap">
                      {student.skillsWanted.slice(0, 2).map(s => (
                        <span key={s.name} className="badge badge-indigo">{s.name}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="student-card-footer">
                  <div className="student-distance">
                    <MapPin size={13} />
                    <span>{student.distanceKm} km away ({student.campusZone})</span>
                  </div>
                  <button className="btn btn-outline-emerald btn-sm">
                    <span>View Profile</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Benefits Grid */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-cyan">Why Choose SkillLoop</span>
            <h2 className="section-title">Built Specially for Campus Communities</h2>
            <p className="section-subtitle">
              Designed to eliminate financial barriers to learning and foster mutual mentorship across departments.
            </p>
          </div>

          <div className="benefits-grid">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="benefit-card glass-card">
                  <div className={`benefit-icon-box ${b.color}`}>
                    <Icon size={26} />
                  </div>
                  <h3 className="benefit-title">{b.title}</h3>
                  <p className="benefit-desc">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-amber">Success Stories</span>
            <h2 className="section-title">Loved by 1,200+ Students</h2>
            <p className="section-subtitle">Read how campus peers are swapping skills, mastering tools, and building portfolios.</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((t, idx) => (
              <div key={idx} className="testimonial-card glass-card">
                <div className="stars-row">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={15} className="star-icon filled" />
                  ))}
                </div>
                <p className="testimonial-quote">"{t.quote}"</p>
                <div className="testimonial-author">
                  <img src={t.avatar} alt={t.name} className="author-avatar" />
                  <div>
                    <h5 className="author-name">{t.name}</h5>
                    <span className="author-college">{t.college}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action Banner */}
      <section className="cta-banner-section">
        <div className="container">
          <div className="cta-banner-card glass-card">
            <div className="cta-content">
              <span className="badge badge-emerald">Ready to Exchange?</span>
              <h2 className="cta-title">Join SkillLoop Today with Your College Email</h2>
              <p className="cta-desc">
                Receive 20 free onboarding Skill Credits immediately to start booking sessions with top student mentors.
              </p>
              <div className="cta-buttons">
                <button className="btn btn-primary btn-lg" onClick={onOpenAuth}>
                  <Users size={18} />
                  <span>Register Student Account</span>
                </button>
                <button className="btn btn-outline btn-lg" onClick={onStartTour}>
                  <Zap size={18} />
                  <span>Run Interactive Demo Tour</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-wrapper">
        <div className="container footer-content">
          <div className="footer-brand-col">
            <div className="navbar-brand">
              <div className="brand-logo-icon">
                <Repeat className="loop-icon" size={20} />
              </div>
              <span className="brand-title">Skill<span className="gradient-loop-text">Loop</span></span>
            </div>
            <p className="footer-tagline">
              Peer-to-peer campus skill exchange platform. Learn, teach, and exchange skills without exchanging money.
            </p>
            <span className="footer-copy">© 2026 SkillLoop Academic Network. Built for College Students.</span>
          </div>

          <div className="footer-links-col">
            <h5>Platform</h5>
            <ul>
              <li><button onClick={() => onFindSkill('')}>Find Skills</button></li>
              <li><button onClick={() => onFindSkill('Python')}>Python Programming</button></li>
              <li><button onClick={() => onFindSkill('UI/UX')}>UI/UX Design</button></li>
              <li><button onClick={() => onFindSkill('Machine Learning')}>AI & Machine Learning</button></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h5>Features</h5>
            <ul>
              <li><button onClick={onStartTour}>Multi-Way Loops</button></li>
              <li><button onClick={onStartTour}>Skill Credit Wallet</button></li>
              <li><button onClick={onStartTour}>AI Skill Assessment</button></li>
              <li><button onClick={onStartTour}>Digital Certificates</button></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h5>Campus Verification</h5>
            <ul>
              <li><span className="footer-text-link">Student ID Validation</span></li>
              <li><span className="footer-text-link">Campus Partner Colleges</span></li>
              <li><span className="footer-text-link">Safety & Code of Conduct</span></li>
              <li><span className="footer-text-link">Terms & Privacy</span></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
