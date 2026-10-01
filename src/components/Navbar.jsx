import React, { useState } from 'react';
import { 
  Repeat, 
  Search, 
  User, 
  MessageSquare, 
  Calendar, 
  Coins, 
  Award, 
  Briefcase, 
  ShieldCheck, 
  Sun, 
  Moon, 
  Sparkles, 
  Bell, 
  Share2, 
  Menu, 
  X,
  Compass,
  LayoutDashboard,
  CheckCircle2
} from 'lucide-react';

export default function Navbar({ 
  activeTab, 
  setActiveTab, 
  user, 
  theme, 
  setTheme, 
  onOpenAuth, 
  unreadExchangesCount, 
  unreadMessagesCount,
  onStartTour 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const navItems = [
    { id: 'landing', label: 'Home', icon: Compass },
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'matching', label: 'AI Match & Nearby', icon: Search },
    { id: 'multi-way', label: 'Multi-Way Loops', icon: Repeat, highlight: true },
    { id: 'exchanges', label: 'Exchanges', icon: Share2, badge: unreadExchangesCount },
    { id: 'sessions', label: 'Sessions', icon: Calendar },
    { id: 'chat', label: 'Messages', icon: MessageSquare, badge: unreadMessagesCount },
    { id: 'wallet', label: 'Skill Wallet', icon: Coins },
    { id: 'assessment', label: 'AI Test', icon: Sparkles },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'opportunities', label: 'Opportunities', icon: Briefcase },
    { id: 'admin', label: 'Admin', icon: ShieldCheck }
  ];

  return (
    <header className="navbar-wrapper">
      <div className="navbar-container">
        {/* Brand Logo */}
        <div className="navbar-brand" onClick={() => setActiveTab('landing')}>
          <div className="brand-logo-icon">
            <Repeat className="loop-icon" size={22} />
          </div>
          <div className="brand-text">
            <span className="brand-title">Skill<span className="gradient-loop-text">Loop</span></span>
            <span className="brand-tagline">Campus Exchange</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="navbar-links">
          {navItems.slice(0, 7).map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                className={`nav-link-btn ${isActive ? 'active' : ''} ${item.highlight ? 'highlight-nav' : ''}`}
                onClick={() => setActiveTab(item.id)}
              >
                <Icon size={16} />
                <span>{item.label}</span>
                {item.badge > 0 && <span className="nav-badge-pill">{item.badge}</span>}
              </button>
            );
          })}

          {/* More Dropdown for secondary tabs */}
          <div className="nav-dropdown-group">
            <button 
              className={`nav-link-btn ${['wallet', 'assessment', 'certificates', 'opportunities', 'admin'].includes(activeTab) ? 'active' : ''}`}
            >
              <span>More</span>
              <span className="dropdown-arrow">▾</span>
            </button>
            <div className="nav-dropdown-menu">
              {navItems.slice(7).map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    className={`dropdown-item ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveTab(item.id)}
                  >
                    <Icon size={16} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </nav>

        {/* Right Side Actions */}
        <div className="navbar-actions">
          {/* Guided Demo Tour Button */}
          <button 
            className="btn btn-outline-emerald btn-sm demo-tour-btn"
            onClick={onStartTour}
            title="Step-by-step walkthrough of the entire demo flow"
          >
            <Sparkles size={14} />
            <span>Guided Tour</span>
          </button>

          {/* Wallet Balance Pill */}
          <button 
            className="wallet-pill-btn"
            onClick={() => setActiveTab('wallet')}
            title="View Skill Credit Wallet"
          >
            <Coins size={16} className="wallet-coin-icon" />
            <span className="wallet-amount">{user.credits}</span>
            <span className="wallet-unit">Credits</span>
          </button>

          {/* Theme Toggle */}
          <button 
            className="icon-action-btn"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Notifications */}
          <div className="notification-wrapper">
            <button 
              className="icon-action-btn"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <Bell size={18} />
              {(unreadExchangesCount + unreadMessagesCount) > 0 && (
                <span className="notification-dot" />
              )}
            </button>

            {showNotifications && (
              <div className="notifications-dropdown glass-card">
                <div className="notif-header">
                  <h4>Campus Notifications</h4>
                  <span className="badge badge-emerald">Live</span>
                </div>
                <div className="notif-list">
                  <div className="notif-item" onClick={() => { setActiveTab('exchanges'); setShowNotifications(false); }}>
                    <div className="notif-icon-circle emerald">
                      <Repeat size={14} />
                    </div>
                    <div>
                      <p className="notif-text"><strong>Arun Kumar</strong> sent an exchange request for <strong>Photoshop</strong>.</p>
                      <span className="notif-time">5 hours ago</span>
                    </div>
                  </div>
                  <div className="notif-item" onClick={() => { setActiveTab('sessions'); setShowNotifications(false); }}>
                    <div className="notif-icon-circle indigo">
                      <Calendar size={14} />
                    </div>
                    <div>
                      <p className="notif-text">Upcoming session with <strong>Priya Sharma</strong> tomorrow at 5:00 PM.</p>
                      <span className="notif-time">1 day ago</span>
                    </div>
                  </div>
                  <div className="notif-item" onClick={() => { setActiveTab('certificates'); setShowNotifications(false); }}>
                    <div className="notif-icon-circle amber">
                      <Award size={14} />
                    </div>
                    <div>
                      <p className="notif-text">Python Certificate milestone reached! 20 peer hours completed.</p>
                      <span className="notif-time">2 days ago</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* User Profile Pill / Button */}
          {user ? (
            <div className="user-profile-nav" onClick={() => setActiveTab('profile')}>
              <img src={user.avatar} alt={user.name} className="nav-avatar" />
              <div className="nav-user-info">
                <span className="nav-user-name">{user.name.split(' ')[0]}</span>
                <span className="nav-user-status">
                  <CheckCircle2 size={11} className="verified-icon" /> Verified
                </span>
              </div>
            </div>
          ) : (
            <button className="btn btn-primary btn-sm" onClick={onOpenAuth}>
              <User size={14} />
              <span>Sign In</span>
            </button>
          )}

          {/* Mobile Menu Hamburger */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-drawer-links">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                  {item.badge > 0 && <span className="nav-badge-pill">{item.badge}</span>}
                </button>
              );
            })}
            <button 
              className="mobile-nav-link"
              onClick={() => {
                setActiveTab('profile');
                setMobileMenuOpen(false);
              }}
            >
              <User size={18} />
              <span>My Student Profile</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
