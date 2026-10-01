import React, { useState } from 'react';
import { 
  Coins, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Gift, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  History,
  TrendingUp,
  Download
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SkillWallet({ 
  user, 
  transactions, 
  onClaimBonus, 
  onBookSession 
}) {
  const [filterType, setFilterType] = useState('all'); // 'all', 'teaching', 'learning'
  const [claimedBonus, setClaimedBonus] = useState(false);

  const handleClaim = () => {
    setClaimedBonus(true);
    onClaimBonus(20);
    confetti({
      particleCount: 75,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  const filteredTransactions = transactions.filter(t => {
    if (filterType === 'all') return true;
    return t.type === filterType;
  });

  return (
    <div className="wallet-page-container container">
      {/* Wallet Hero Overview */}
      <div className="wallet-hero-card glass-card">
        <div className="wallet-hero-left">
          <div className="wallet-badge">
            <Coins size={16} className="coin-spin" />
            <span>SkillLoop Cashless Campus Economy</span>
          </div>

          <div className="wallet-balance-display">
            <span className="balance-label">Current Skill Credit Balance</span>
            <div className="balance-number-row">
              <span className="balance-amount">{user.credits}</span>
              <span className="balance-currency">SL Credits</span>
            </div>
            <p className="balance-sub">
              Backed 1:1 by peer teaching hours. Zero fiat money required.
            </p>
          </div>

          <div className="wallet-rules-pill">
            <div className="rule-item">
              <span className="rule-tag green">+10 Credits</span>
              <span>Per 1 Hr Taught</span>
            </div>
            <div className="rule-sep">•</div>
            <div className="rule-item">
              <span className="rule-tag red">-10 Credits</span>
              <span>Per 1 Hr Learned</span>
            </div>
          </div>
        </div>

        {/* Wallet Right: Quick Actions & Bonus */}
        <div className="wallet-hero-right">
          <div className="bonus-grant-card glass-card">
            <div className="bonus-header">
              <Gift size={20} className="amber" />
              <div>
                <h4>College Onboarding Grant</h4>
                <p>New verified student welcome allocation</p>
              </div>
            </div>

            {claimedBonus ? (
              <div className="bonus-claimed-badge">
                <CheckCircle2 size={16} className="emerald" />
                <span>+20 Credits Added to Balance!</span>
              </div>
            ) : (
              <button 
                className="btn btn-primary w-full"
                onClick={handleClaim}
              >
                <Sparkles size={16} />
                <span>Claim +20 Campus Credits</span>
              </button>
            )}
          </div>

          {/* Quick Metrics */}
          <div className="wallet-micro-metrics">
            <div className="micro-metric-box">
              <span className="micro-val">{user.teachingHours} hrs</span>
              <span className="micro-label">Teaching Time (+{user.teachingHours * 10} SL)</span>
            </div>
            <div className="micro-metric-box">
              <span className="micro-val">{user.learningHours} hrs</span>
              <span className="micro-label">Learning Time (-{user.learningHours * 10} SL)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Transactions Ledger */}
      <div className="wallet-ledger-card glass-card">
        <div className="ledger-header">
          <div className="ledger-title-area">
            <History size={18} className="emerald" />
            <h3>Credit Ledger & Transaction History</h3>
          </div>

          {/* Filters */}
          <div className="ledger-filters-pills">
            <button 
              className={`pill-btn ${filterType === 'all' ? 'active' : ''}`}
              onClick={() => setFilterType('all')}
            >
              All Transactions ({transactions.length})
            </button>
            <button 
              className={`pill-btn ${filterType === 'teaching' ? 'active' : ''}`}
              onClick={() => setFilterType('teaching')}
            >
              Teaching (+Credits)
            </button>
            <button 
              className={`pill-btn ${filterType === 'learning' ? 'active' : ''}`}
              onClick={() => setFilterType('learning')}
            >
              Learning (-Credits)
            </button>
          </div>
        </div>

        <div className="ledger-table-wrapper">
          <table className="ledger-table">
            <thead>
              <tr>
                <th>Date & Time</th>
                <th>Type</th>
                <th>Skill / Purpose</th>
                <th>Peer Partner</th>
                <th>Amount</th>
                <th>Running Balance</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((tx) => (
                <tr key={tx.id}>
                  <td className="tx-date">{tx.date}</td>
                  <td>
                    {tx.type === 'teaching' && (
                      <span className="badge badge-emerald">
                        <ArrowUpRight size={12} /> Teaching
                      </span>
                    )}
                    {tx.type === 'learning' && (
                      <span className="badge badge-rose">
                        <ArrowDownLeft size={12} /> Learning
                      </span>
                    )}
                    {tx.type === 'bonus' && (
                      <span className="badge badge-amber">
                        <Gift size={12} /> Welcome Bonus
                      </span>
                    )}
                  </td>
                  <td className="tx-skill">
                    <strong>{tx.skill}</strong>
                    <span className="tx-note">{tx.note}</span>
                  </td>
                  <td className="tx-peer">{tx.peer}</td>
                  <td className={`tx-amount ${tx.credits > 0 ? 'text-emerald' : 'text-rose'}`}>
                    {tx.credits > 0 ? `+${tx.credits}` : tx.credits} SL
                  </td>
                  <td className="tx-balance">
                    <strong>{tx.balance} SL</strong>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
