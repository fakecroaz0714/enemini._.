import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Users, 
  Check, 
  X, 
  Search, 
  Plus, 
  Repeat, 
  Calendar, 
  Award, 
  Coins, 
  AlertTriangle,
  Layers,
  CheckCircle2,
  Sliders
} from 'lucide-react';
import { ADMIN_STATS, SKILL_CATEGORIES } from '../data/mockData';

export default function AdminDashboard() {
  const [verifications, setVerifications] = useState(ADMIN_STATS.pendingVerifications);
  const [categories, setCategories] = useState(SKILL_CATEGORIES.filter(c => c !== 'All'));
  const [newSkillInput, setNewSkillInput] = useState('');
  const [newCatInput, setNewCatInput] = useState('');

  const handleApprove = (id) => {
    setVerifications(verifications.map(v => v.id === id ? { ...v, status: 'Approved' } : v));
  };

  const handleReject = (id) => {
    setVerifications(verifications.map(v => v.id === id ? { ...v, status: 'Rejected' } : v));
  };

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (!newCatInput.trim()) return;
    setCategories([...categories, newCatInput.trim()]);
    setNewCatInput('');
  };

  return (
    <div className="admin-page-container container">
      {/* Header */}
      <div className="admin-header-card glass-card">
        <div className="admin-title-area">
          <div className="badge badge-rose animate-pulse-glow">
            <ShieldCheck size={16} />
            <span>Campus Administration & Moderation</span>
          </div>
          <h2 className="page-heading">SkillLoop Campus Admin Portal</h2>
          <p className="page-sub">
            Monitor platform metrics, authenticate student college verification requests,
            moderate reported sessions, and expand campus skill categories.
          </p>
        </div>
      </div>

      {/* Admin KPIs Grid (Section 18 spec) */}
      <div className="admin-kpis-grid">
        <div className="admin-kpi-card glass-card">
          <div className="kpi-top">
            <span className="kpi-title">Total Students</span>
            <Users size={18} className="emerald" />
          </div>
          <span className="kpi-number">{ADMIN_STATS.totalStudents.toLocaleString()}</span>
          <span className="kpi-meta text-emerald">+124 this month</span>
        </div>

        <div className="admin-kpi-card glass-card">
          <div className="kpi-top">
            <span className="kpi-title">Active Users</span>
            <Users size={18} className="cyan" />
          </div>
          <span className="kpi-number">{ADMIN_STATS.activeUsers.toLocaleString()}</span>
          <span className="kpi-meta text-cyan">65% campus engagement</span>
        </div>

        <div className="admin-kpi-card glass-card">
          <div className="kpi-top">
            <span className="kpi-title">Skill Exchanges</span>
            <Repeat size={18} className="indigo" />
          </div>
          <span className="kpi-number">{ADMIN_STATS.skillExchanges.toLocaleString()}</span>
          <span className="kpi-meta text-indigo">Bilateral & 3-way loops</span>
        </div>

        <div className="admin-kpi-card glass-card">
          <div className="kpi-top">
            <span className="kpi-title">Sessions Completed</span>
            <Calendar size={18} className="amber" />
          </div>
          <span className="kpi-number">{ADMIN_STATS.sessionsCompleted.toLocaleString()}</span>
          <span className="kpi-meta text-amber">430 verified teaching hours</span>
        </div>

        <div className="admin-kpi-card glass-card">
          <div className="kpi-top">
            <span className="kpi-title">Certificates Issued</span>
            <Award size={18} className="emerald" />
          </div>
          <span className="kpi-number">{ADMIN_STATS.certificatesIssued.toLocaleString()}</span>
          <span className="kpi-meta text-emerald">Cryptographically signed</span>
        </div>

        <div className="admin-kpi-card glass-card">
          <div className="kpi-top">
            <span className="kpi-title">Total Credits Flow</span>
            <Coins size={18} className="amber" />
          </div>
          <span className="kpi-number">{ADMIN_STATS.totalCreditsCirculating.toLocaleString()} SL</span>
          <span className="kpi-meta text-emerald">Zero fiat debt</span>
        </div>
      </div>

      {/* Main Admin Section: Student Verification Approvals */}
      <div className="admin-verifications-card glass-card">
        <div className="verifications-header">
          <div>
            <h3>Pending Student Verification Approvals</h3>
            <p>Verify official university email domains and register numbers before conferring the Verified Campus badge.</p>
          </div>
          <span className="badge badge-amber">
            {verifications.filter(v => v.status === 'Pending').length} Pending Review
          </span>
        </div>

        <div className="verifications-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Institution</th>
                <th>Register No.</th>
                <th>Campus Email</th>
                <th>Submitted</th>
                <th>Verification Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {verifications.map((v) => (
                <tr key={v.id}>
                  <td><strong>{v.name}</strong></td>
                  <td>{v.college}</td>
                  <td><code>{v.regNo}</code></td>
                  <td>{v.email}</td>
                  <td className="text-muted">{v.submittedAt}</td>
                  <td>
                    <span className={`badge ${
                      v.status === 'Approved' ? 'badge-emerald' : 
                      v.status === 'Rejected' ? 'badge-rose' : 'badge-amber'
                    }`}>
                      {v.status}
                    </span>
                  </td>
                  <td>
                    {v.status === 'Pending' ? (
                      <div className="admin-action-btns">
                        <button 
                          className="btn btn-primary btn-sm"
                          onClick={() => handleApprove(v.id)}
                          title="Approve Student ID"
                        >
                          <Check size={14} />
                          <span>Approve</span>
                        </button>
                        <button 
                          className="btn btn-outline btn-sm text-rose"
                          onClick={() => handleReject(v.id)}
                          title="Reject Application"
                        >
                          <X size={14} />
                          <span>Reject</span>
                        </button>
                      </div>
                    ) : (
                      <span className="text-muted text-sm">Reviewed</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Skill Taxonomy Management */}
      <div className="admin-taxonomy-card glass-card">
        <div className="taxonomy-header">
          <div>
            <h3>Campus Skill Categories & Taxonomy</h3>
            <p>Add trending technical or creative categories across university departments.</p>
          </div>
        </div>

        <div className="taxonomy-categories-wrap">
          {categories.map((cat, idx) => (
            <span key={idx} className="badge badge-indigo py-2 px-3">
              {cat}
            </span>
          ))}
        </div>

        <form onSubmit={handleAddCategory} className="taxonomy-form">
          <input 
            type="text" 
            placeholder="Add new category (e.g. Quantum Computing, Public Policy, Bio-Informatics)..."
            value={newCatInput}
            onChange={(e) => setNewCatInput(e.target.value)}
            className="form-control"
          />
          <button type="submit" className="btn btn-primary">
            <Plus size={15} />
            <span>Add Category</span>
          </button>
        </form>
      </div>
    </div>
  );
}
