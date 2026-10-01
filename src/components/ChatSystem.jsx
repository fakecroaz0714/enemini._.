import React, { useState, useEffect, useRef } from 'react';
import { 
  Send, 
  MessageSquare, 
  Calendar, 
  User, 
  Check, 
  CheckCheck, 
  Clock, 
  Sparkles, 
  Paperclip, 
  Smile, 
  Phone, 
  Video, 
  MoreVertical,
  Circle
} from 'lucide-react';

export default function ChatSystem({ 
  user, 
  peers, 
  activeChatPeerId, 
  setActiveChatPeerId, 
  chats, 
  onSendMessage, 
  onBookSession 
}) {
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Default to first chat partner if none selected
  const activePeer = peers.find(p => p.id === activeChatPeerId) || peers[1]; // default Priya or Arun
  const currentMessages = chats[activePeer.id] || [];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [currentMessages, isTyping]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const messageText = inputText.trim();
    setInputText('');

    // Send user message
    onSendMessage(activePeer.id, {
      id: `msg-${Date.now()}`,
      senderId: user.id,
      text: messageText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });

    // Simulate realistic intelligent peer reply after 1.5 seconds!
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      let replyText = "Sounds like a plan! Let's book a 1-hour session on SkillLoop to confirm our calendar.";
      if (messageText.toLowerCase().includes('time') || messageText.toLowerCase().includes('when') || messageText.toLowerCase().includes('meet')) {
        replyText = `How about Saturday at 5:00 PM? The Central Library discussion pod is usually super quiet then!`;
      } else if (messageText.toLowerCase().includes('python') || messageText.toLowerCase().includes('code')) {
        replyText = `Awesome! I've prepped a GitHub repo with starter exercises for our session.`;
      } else if (messageText.toLowerCase().includes('figma') || messageText.toLowerCase().includes('ui') || messageText.toLowerCase().includes('design')) {
        replyText = `Great! I'll walk you through component variants, auto-layout, and responsive tokens.`;
      }

      onSendMessage(activePeer.id, {
        id: `msg-reply-${Date.now()}`,
        senderId: activePeer.id,
        text: replyText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
    }, 1400);
  };

  return (
    <div className="chat-page-container container">
      <div className="chat-layout-wrapper glass-card">
        {/* Left Sidebar: Conversations List */}
        <div className="chat-sidebar">
          <div className="chat-sidebar-header">
            <h3>Direct Messages</h3>
            <span className="badge badge-emerald">Online</span>
          </div>

          <div className="chat-conversations-list">
            {peers.slice(0, 4).map((peer) => {
              const isActive = peer.id === activePeer.id;
              const peerMsgs = chats[peer.id] || [];
              const lastMsg = peerMsgs[peerMsgs.length - 1];

              return (
                <div 
                  key={peer.id}
                  className={`chat-peer-item ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveChatPeerId(peer.id)}
                >
                  <div className="avatar-with-badge">
                    <img src={peer.avatar} alt={peer.name} className="chat-list-avatar" />
                    <span className="chat-online-dot" />
                  </div>

                  <div className="chat-item-content">
                    <div className="chat-item-row-top">
                      <span className="chat-peer-name">{peer.name}</span>
                      <span className="chat-timestamp">{lastMsg?.time || 'Active'}</span>
                    </div>
                    <p className="chat-preview-text">
                      {lastMsg ? lastMsg.text : `Matched for ${peer.skillsOffered[0]?.name}`}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Main Area: Chat Window */}
        <div className="chat-main-window">
          {/* Chat Header */}
          <div className="chat-window-header">
            <div className="chat-header-user">
              <img src={activePeer.avatar} alt={activePeer.name} className="chat-header-avatar" />
              <div>
                <h4>{activePeer.name}</h4>
                <div className="chat-header-meta">
                  <span className="online-text">
                    <Circle size={8} className="online-fill-dot" /> Campus Peer • {activePeer.department}
                  </span>
                  <span className="separator">•</span>
                  <span>⭐ {activePeer.rating}</span>
                </div>
              </div>
            </div>

            {/* Header Actions */}
            <div className="chat-header-actions">
              <button 
                className="btn btn-secondary btn-sm"
                onClick={() => onBookSession(activePeer, activePeer.skillsOffered[0]?.name)}
              >
                <Calendar size={14} />
                <span>Book Session (1 hr)</span>
              </button>
            </div>
          </div>

          {/* Quick Action Suggestion Chips */}
          <div className="chat-quick-actions-bar">
            <span className="quick-label">Quick Prompts:</span>
            <button 
              className="quick-chip"
              onClick={() => setInputText("Hi! When would you be free for a 1-hour skill swap session?")}
            >
              📅 Propose Time
            </button>
            <button 
              className="quick-chip"
              onClick={() => setInputText("Can we meet at the Central Library discussion pods?")}
            >
              📍 Suggest Campus Spot
            </button>
            <button 
              className="quick-chip"
              onClick={() => setInputText("What prerequisites should I review before our session?")}
            >
              📚 Ask Prerequisites
            </button>
          </div>

          {/* Messages Thread */}
          <div className="chat-messages-thread">
            {currentMessages.map((msg) => {
              const isMe = msg.senderId === user.id;
              return (
                <div key={msg.id} className={`chat-bubble-row ${isMe ? 'me' : 'peer'}`}>
                  {!isMe && (
                    <img src={activePeer.avatar} alt={activePeer.name} className="msg-avatar-tiny" />
                  )}
                  <div className={`chat-bubble ${isMe ? 'bubble-me' : 'bubble-peer'}`}>
                    <p className="msg-text">{msg.text}</p>
                    <div className="msg-meta-row">
                      <span className="msg-time">{msg.time}</span>
                      {isMe && <CheckCheck size={13} className="read-receipt" />}
                    </div>
                  </div>
                </div>
              );
            })}

            {isTyping && (
              <div className="chat-bubble-row peer">
                <img src={activePeer.avatar} alt={activePeer.name} className="msg-avatar-tiny" />
                <div className="typing-indicator-bubble">
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input Bar */}
          <form className="chat-input-bar" onSubmit={handleSend}>
            <input 
              type="text" 
              placeholder={`Message ${activePeer.name.split(' ')[0]}...`}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="chat-text-input"
            />
            <button 
              type="submit" 
              className="btn btn-primary chat-send-btn"
              disabled={!inputText.trim()}
            >
              <Send size={16} />
              <span>Send</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
