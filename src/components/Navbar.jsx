import React, { useState, useEffect } from 'react';
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
  const [subnavPinned, setSubnavPinned] = useState(false);

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

  const primaryItems = navItems.slice(0, 7);
  const secondaryItems = navItems.slice(7);
  const activeSecondaryItem = secondaryItems.find(item => item.id === activeTab);
  const isSecondaryActive = !!activeSecondaryItem;

  // Fixed sub-bar is visible if explicitly clicked/pinned OR if a secondary tab is active
  const isSubnavVisible = subnavPinned || isSecondaryActive;

  // Toggle body class so page content moves down gracefully and never gets covered
  useEffect(() => {
    if (isSubnavVisible) {
      document.body.classList.add('has-subnav');
    } else {
      document.body.classList.remove('has-subnav');
    }
    return () => {
      document.body.classList.remove('has-subnav');
    };
  }, [isSubnavVisible]);

  return (
    <>
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
            {primaryItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  className={`nav-link-btn ${isActive ? 'active' : ''} ${item.highlight ? 'highlight-nav' : ''}`}
                  onClick={() => {
                    setActiveTab(item.id);
                  }}
                >
                  <Icon size={16} />
                  <span>{item.label}</span>
                  {item.badge > 0 && <span className="nav-badge-pill">{item.badge}</span>}
                </button>
              );
            })}

            {/* "More" Fixed Toggle Button */}
            <div className="nav-dropdown-group">
              <button 
                type="button"
                className={`nav-link-btn more-tab-btn ${isSubnavVisible ? 'active' : ''}`}
                onClick={() => setSubnavPinned(!subnavPinned)}
                title="Click to keep tabs fixed"
              >
                {activeSecondaryItem ? (
                  <>
                    <activeSecondaryItem.icon size={16} />
                    <span>{activeSecondaryItem.label}</span>
                  </>
                ) : (
                  <span>More</span>
                )}
                <span className="dropdown-arrow">{isSubnavVisible ? '▴' : '▾'}</span>
              </button>
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
              onClick={() => {
                setActiveTab('wallet');
                setSubnavPinned(true);
              }}
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

      {/* Fixed Sub-Nav Shelf: Stays fixed right under navbar on click! Never floats over hero */}
      {isSubnavVisible && (
        <div className="fixed-subnav-strip">
          <div className="fixed-subnav-container">
            <div className="subnav-left">
              <span className="subnav-badge">More Modules:</span>
              <div className="subnav-links-row">
                {secondaryItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      className={`subnav-pill-btn ${isActive ? 'active' : ''}`}
                      onClick={() => {
                        setActiveTab(item.id);
                        setSubnavPinned(true);
                      }}
                    >
                      <Icon size={14} />
                      <span>{item.label}</span>
                      {isActive && <span className="subnav-active-pip" />}
                    </button>
                  );
                })}
              </div>
            </div>
            <button 
              type="button"
              className="subnav-close-icon"
              onClick={() => setSubnavPinned(false)}
              title="Close sub-navigation bar"
            >
              <X size={15} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
