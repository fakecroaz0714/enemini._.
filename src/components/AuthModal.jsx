import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Lock, 
  Building, 
  Hash, 
  MapPin, 
  CheckCircle2, 
  X, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  Zap
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { INITIAL_USER, INITIAL_PEERS } from '../data/mockData';

export default function AuthModal({ isOpen, onClose, onLoginUser }) {
  if (!isOpen) return null;

  const [isRegister, setIsRegister] = useState(false);
  const [step, setStep] = useState(1); // 1 = Details, 2 = College Email Verification OTP

  // Form Fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [college, setCollege] = useState('Vellore Institute of Technology (VIT)');
  const [department, setDepartment] = useState('Computer Science & Engineering');
  const [regNo, setRegNo] = useState('');
  const [location, setLocation] = useState('Technology Tower, North Campus');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState(['4', '8', '2', '1']);

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setStep(2); // move to email verification OTP simulation
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    const newUser = {
      ...INITIAL_USER,
      name: name || 'Aditya Sharma',
      email: email || 'aditya.s2023@vitstudent.ac.in',
      college: college,
      department: department,
      registerNumber: regNo || '23BCE1092',
      location: location,
      verified: true
    };
    onLoginUser(newUser);
    onClose();
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  const handleQuickLogin = (role) => {
    if (role === 'chandru') {
      onLoginUser(INITIAL_USER);
    } else if (role === 'priya') {
      onLoginUser({
        ...INITIAL_USER,
        id: 'peer-priya',
        name: 'Priya Sharma',
        email: 'priya.s2022@vitstudent.ac.in',
        department: 'School of Design (V-SIGN)',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=250',
        skillsOffered: INITIAL_PEERS[1].skillsOffered,
        skillsWanted: INITIAL_PEERS[1].skillsWanted
      });
    } else if (role === 'arun') {
      onLoginUser({
        ...INITIAL_USER,
        id: 'peer-arun',
        name: 'Arun Kumar',
        email: 'arun.k2021@vitstudent.ac.in',
        department: 'Computer Science (AI & ML)',
        avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=250',
        skillsOffered: INITIAL_PEERS[0].skillsOffered,
        skillsWanted: INITIAL_PEERS[0].skillsWanted
      });
    }
    onClose();
    confetti({
      particleCount: 50,
      spread: 50,
      origin: { y: 0.5 }
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content auth-modal-box" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="auth-header-title">
            <span className="badge badge-emerald">
              <ShieldCheck size={12} /> Campus Authentication
            </span>
            <h3>{isRegister ? 'Join Campus SkillLoop' : 'Sign in to SkillLoop'}</h3>
          </div>
          <button className="tour-close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* Quick Demo Login Switcher */}
        <div className="quick-demo-accounts-bar">
          <span className="demo-accounts-label">
            <Zap size={14} className="amber" /> 1-Click Demo Profiles:
          </span>
          <div className="demo-account-pills">
            <button 
              type="button" 
              className="demo-btn-pill"
              onClick={() => handleQuickLogin('chandru')}
            >
              Chandru P (3rd Year CSE)
            </button>
            <button 
              type="button" 
              className="demo-btn-pill"
              onClick={() => handleQuickLogin('priya')}
            >
              Priya Sharma (UI/UX)
            </button>
            <button 
              type="button" 
              className="demo-btn-pill"
              onClick={() => handleQuickLogin('arun')}
            >
              Arun Kumar (AI/ML)
            </button>
          </div>
        </div>

        {/* Form Body */}
        <div className="modal-body">
          {!isRegister ? (
            /* Login Form */
            <form onSubmit={(e) => { e.preventDefault(); handleQuickLogin('chandru'); }}>
              <div className="form-group">
                <label className="form-label">College Email Address</label>
                <div className="input-with-icon">
                  <Mail size={16} className="field-icon" />
                  <input 
                    type="email" 
                    className="form-control" 
                    defaultValue="chandru.p2022@vitstudent.ac.in" 
                    placeholder="yourname@vitstudent.ac.in"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Password</label>
                <div className="input-with-icon">
                  <Lock size={16} className="field-icon" />
                  <input 
                    type="password" 
                    className="form-control" 
                    defaultValue="••••••••••••" 
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary w-full btn-lg">
                <span>Sign In to Student Account</span>
                <ArrowRight size={16} />
              </button>

              <div className="auth-footer-toggle text-center mt-3">
                <span className="text-muted">New to campus exchange? </span>
                <button 
                  type="button" 
                  className="link-button"
                  onClick={() => { setIsRegister(true); setStep(1); }}
                >
                  Create Student Account
                </button>
              </div>
            </form>
          ) : step === 1 ? (
            /* Registration Step 1 */
            <form onSubmit={handleRegisterSubmit}>
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="e.g. Aditya Sharma" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">College Email (.ac.in or .edu) *</label>
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="e.g. aditya.s2023@vitstudent.ac.in" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <small className="form-hint">Must end with .edu or .ac.in for instant student verification</small>
              </div>

              <div className="grid-2-col">
                <div className="form-group">
                  <label className="form-label">College / University</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Register Number</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="e.g. 23BCE1092"
                    value={regNo}
                    onChange={(e) => setRegNo(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid-2-col">
                <div className="form-group">
                  <label className="form-label">Department & Year</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Campus Zone / Area</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Password</label>
                <input 
                  type="password" 
                  className="form-control" 
                  placeholder="Choose a secure password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-full btn-lg">
                <span>Continue to Campus Email Verification</span>
                <ArrowRight size={16} />
              </button>

              <div className="auth-footer-toggle text-center mt-3">
                <span className="text-muted">Already registered? </span>
                <button 
                  type="button" 
                  className="link-button"
                  onClick={() => setIsRegister(false)}
                >
                  Sign In
                </button>
              </div>
            </form>
          ) : (
            /* Registration Step 2: Simulated College Email Verification OTP */
            <form onSubmit={handleVerifyOtp} className="text-center">
              <div className="otp-icon-wrap">
                <Mail size={32} className="emerald" />
              </div>

              <h4>Verify Your Campus Email</h4>
              <p className="otp-subtext">
                We sent a 4-digit verification code to <strong>{email || 'aditya.s2023@vitstudent.ac.in'}</strong> to confirm your student status.
              </p>

              <div className="otp-inputs-row">
                <input type="text" className="otp-digit" defaultValue="4" readOnly />
                <input type="text" className="otp-digit" defaultValue="8" readOnly />
                <input type="text" className="otp-digit" defaultValue="2" readOnly />
                <input type="text" className="otp-digit" defaultValue="1" readOnly />
              </div>

              <div className="grant-onboarding-callout glass-card">
                <Sparkles size={16} className="emerald" />
                <span>Verifying unlocks <strong>+20 Free Skill Credits</strong> on your account!</span>
              </div>

              <button type="submit" className="btn btn-primary w-full btn-lg mt-3">
                <span>Verify & Activate Account</span>
                <CheckCircle2 size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
