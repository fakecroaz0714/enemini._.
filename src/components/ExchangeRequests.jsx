import React, { useState } from 'react';
import { 
  Share2, 
  Check, 
  X, 
  MessageSquare, 
  Calendar, 
  ArrowRight, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  Repeat,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ExchangeRequests({ 
  exchanges, 
  onAcceptExchange, 
  onRejectExchange, 
  peers, 
  user, 
  onOpenChat, 
  onBookSession 
}) {
  const [activeSubTab, setActiveSubTab] = useState('incoming'); // 'incoming', 'sent', 'active'

  const incomingRequests = exchanges.filter(e => e.receiverId === user.id);
  const sentRequests = exchanges.filter(e => e.senderId === user.id);
  const activePartnerships = exchanges.filter(e => e.status === 'accepted');

  const getPeerById = (peerId) => {
    return peers.find(p => p.id === peerId) || {
      name: 'Campus Peer',
      department: 'Engineering',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250',
      college: 'VISTAS',
      rating: 4.8
    };
  };

  const handleAccept = (exchangeId) => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 }
    });
    onAcceptExchange(exchangeId);
  };

  return (
    <div className="exchanges-page-container container">
      {/* Header */}
      <div className="exchanges-header-card glass-card">
        <div className="exchanges-title-area">
          <div className="badge badge-emerald">
            <Share2 size={14} />
            <span>Exchange Proposals</span>
          </div>
          <h2 className="page-heading">Skill Exchange Management</h2>
          <p className="page-sub">
            Review incoming requests from campus peers, track your sent proposals, and launch sessions with accepted partners.
          </p>
        </div>

        {/* Sub-Tabs */}
        <div className="exchanges-subtabs-row">
          <button 
            className={`subtab-btn ${activeSubTab === 'incoming' ? 'active' : ''}`}
            onClick={() => setActiveSubTab('incoming')}
          >
            <span>Incoming Requests</span>
            {incomingRequests.filter(r => r.status === 'pending').length > 0 && (
              <span className="badge badge-rose">{incomingRequests.filter(r => r.status === 'pending').length} New</span>
            )}
          </button>

          <button 
            className={`subtab-btn ${activeSubTab === 'sent' ? 'active' : ''}`}
            onClick={() => setActiveSubTab('sent')}
          >
            <span>Sent Requests</span>
            <span className="subtab-count">({sentRequests.length})</span>
          </button>

          <button 
            className={`subtab-btn ${activeSubTab === 'active' ? 'active' : ''}`}
            onClick={() => setActiveSubTab('active')}
          >
            <span>Active Partnerships</span>
            <span className="badge badge-emerald">{activePartnerships.length} Connected</span>
          </button>
        </div>
      </div>

      {/* Subtab 1: Incoming Requests */}
      {activeSubTab === 'incoming' && (
        <div className="requests-list">
          {incomingRequests.length === 0 ? (
            <div className="empty-state-box glass-card text-center">
              <Share2 size={40} className="empty-icon text-muted" />
              <h3>No Incoming Requests</h3>
              <p>When other students find your profile in AI Matching, their requests will appear here.</p>
            </div>
          ) : (
            incomingRequests.map((req) => {
              const sender = getPeerById(req.senderId);
              return (
                <div key={req.id} className="exchange-request-card glass-card">
                  <div className="request-card-header">
                    <img src={sender.avatar} alt={sender.name} className="request-peer-avatar" />
                    <div className="request-peer-meta">
                      <div className="peer-title-row">
                        <h4>{sender.name}</h4>
                        <span className="badge badge-subtle">{sender.department}</span>
                        <span className="request-time-text">{req.timestamp}</span>
                      </div>
                      <div className="proposed-swap-pill">
                        <span className="offer-tag">They Teach: <strong>{req.offeredSkill}</strong></span>
                        <Repeat size={14} className="swap-arrow" />
                        <span className="request-tag">You Teach: <strong>{req.requestedSkill}</strong></span>
                      </div>
                    </div>
                  </div>

                  <div className="request-message-bubble">
                    <p>"{req.message}"</p>
                  </div>

                  <div className="request-card-actions">
                    {req.status === 'pending' ? (
                      <>
                        <button 
                          className="btn btn-outline btn-sm"
                          onClick={() => onRejectExchange(req.id)}
                        >
                          <X size={14} />
                          <span>Decline</span>
                        </button>
                        <button 
                          className="btn btn-primary btn-sm"
                          onClick={() => handleAccept(req.id)}
                        >
                          <Check size={14} />
                          <span>Accept & Connect</span>
                        </button>
                      </>
                    ) : (
                      <div className="request-status-accepted">
                        <span className="badge badge-emerald">
                          <CheckCircle2 size={12} /> Accepted & Connected
                        </span>
                        <button 
                          className="btn btn-outline-emerald btn-sm ml-auto"
                          onClick={() => onOpenChat(req.senderId)}
                        >
                          <MessageSquare size={14} />
                          <span>Chat Now</span>
                        </button>
                        <button 
                          className="btn btn-secondary btn-sm"
                          onClick={() => onBookSession(sender, req.offeredSkill)}
                        >
                          <Calendar size={14} />
                          <span>Book Session</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}

      {/* Subtab 2: Sent Requests */}
      {activeSubTab === 'sent' && (
        <div className="requests-list">
          {sentRequests.map((req) => {
            const receiver = getPeerById(req.receiverId);
            return (
              <div key={req.id} className="exchange-request-card glass-card">
                <div className="request-card-header">
                  <img src={receiver.avatar} alt={receiver.name} className="request-peer-avatar" />
                  <div className="request-peer-meta">
                    <div className="peer-title-row">
                      <h4>To: {receiver.name}</h4>
                      <span className="badge badge-subtle">{receiver.department}</span>
                      <span className={`badge ${req.status === 'accepted' ? 'badge-emerald' : 'badge-amber'}`}>
                        {req.status === 'accepted' ? 'Accepted' : 'Pending Response'}
                      </span>
                    </div>
                    <div className="proposed-swap-pill">
                      <span className="offer-tag">You Offer: <strong>{req.offeredSkill}</strong></span>
                      <Repeat size={14} className="swap-arrow" />
                      <span className="request-tag">Requested: <strong>{req.requestedSkill}</strong></span>
                    </div>
                  </div>
                </div>

                <div className="request-message-bubble">
                  <p>"{req.message}"</p>
                </div>

                {req.status === 'accepted' && (
                  <div className="request-card-actions">
                    <button 
                      className="btn btn-primary btn-sm"
                      onClick={() => onOpenChat(req.receiverId)}
                    >
                      <MessageSquare size={14} />
                      <span>Open Chat</span>
                    </button>
                    <button 
                      className="btn btn-secondary btn-sm"
                      onClick={() => onBookSession(receiver, req.requestedSkill)}
                    >
                      <Calendar size={14} />
                      <span>Book Session</span>
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Subtab 3: Active Partnerships */}
      {activeSubTab === 'active' && (
        <div className="active-partners-grid">
          {activePartnerships.map((req) => {
            const partnerId = req.senderId === user.id ? req.receiverId : req.senderId;
            const partner = getPeerById(partnerId);
            return (
              <div key={req.id} className="active-partner-card glass-card">
                <div className="partner-card-header">
                  <img src={partner.avatar} alt={partner.name} className="partner-avatar" />
                  <div>
                    <h4>{partner.name}</h4>
                    <p className="partner-sub">{partner.department}</p>
                    <span className="badge badge-emerald">
                      <CheckCircle2 size={11} /> Verified Partner
                    </span>
                  </div>
                </div>

                <div className="partner-skills-exchange">
                  <div className="partner-skill-pair">
                    <span className="label">Exchanging:</span>
                    <span className="val">{req.offeredSkill} ⇄ {req.requestedSkill}</span>
                  </div>
                </div>

                <div className="partner-card-actions">
                  <button 
                    className="btn btn-outline-emerald btn-sm flex-1"
                    onClick={() => onOpenChat(partnerId)}
                  >
                    <MessageSquare size={14} />
                    <span>Chat</span>
                  </button>
                  <button 
                    className="btn btn-primary btn-sm flex-1"
                    onClick={() => onBookSession(partner, req.requestedSkill)}
                  >
                    <Calendar size={14} />
                    <span>Book Session</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
