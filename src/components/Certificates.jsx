import React, { useState } from 'react';
import { 
  Award, 
  Printer, 
  Share2, 
  CheckCircle2, 
  ShieldCheck, 
  Search, 
  QrCode, 
  Download, 
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { INITIAL_CERTIFICATES } from '../data/mockData';

export default function Certificates({ user, certificates = INITIAL_CERTIFICATES }) {
  const [selectedCert, setSelectedCert] = useState(certificates[0]);
  const [verifyInput, setVerifyInput] = useState('');
  const [verifyResult, setVerifyResult] = useState(null);

  const handlePrint = () => {
    window.print();
  };

  const handleVerify = (e) => {
    e.preventDefault();
    const found = certificates.find(c => c.certificateId.toLowerCase() === verifyInput.trim().toLowerCase());
    if (found) {
      setVerifyResult({
        valid: true,
        cert: found
      });
    } else {
      setVerifyResult({
        valid: false,
        msg: 'No certificate found with ID ' + verifyInput + '. Please check the alphanumeric code.'
      });
    }
  };

  return (
    <div className="certificates-page-container container">
      {/* Header */}
      <div className="certificates-header-card glass-card">
        <div className="cert-title-area">
          <div className="badge badge-amber animate-pulse-glow">
            <Award size={16} />
            <span>Verifiable Peer Credentials</span>
          </div>
          <h2 className="page-heading">Digital Skill Certificates</h2>
          <p className="page-sub">
            Tamper-proof academic certificates earned through authenticated peer teaching & learning sessions.
            Ready for your LinkedIn profile, campus placement portfolio, and internship applications.
          </p>
        </div>

        {/* Certificate Selector Buttons */}
        <div className="cert-selector-row">
          {certificates.map(cert => (
            <button
              key={cert.id}
              className={`cert-btn-tab ${selectedCert.id === cert.id ? 'active' : ''}`}
              onClick={() => setSelectedCert(cert)}
            >
              <Award size={15} />
              <span>{cert.skill}</span>
              <span className="cert-id-tag">{cert.certificateId}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Certificate Display Frame (Section 15) */}
      <div className="certificate-outer glass-card">
        <div className="certificate-inner-border">
          {/* Certificate Corner Ornaments */}
          <div className="cert-corner top-left">✦</div>
          <div className="cert-corner top-right">✦</div>
          <div className="cert-corner bottom-left">✦</div>
          <div className="cert-corner bottom-right">✦</div>

          <div className="certificate-content text-center">
            {/* Logo Badge */}
            <div className="cert-seal-badge">
              <ShieldCheck size={36} className="cert-gold-shield" />
            </div>

            <span className="cert-brand-subtitle">SKILLLOOP ACADEMIC PEER NETWORK</span>
            <h1 className="cert-main-title">Certificate of Skill Achievement</h1>
            <p className="cert-statement">This is officially presented and accredited to</p>

            {/* Recipient Student Name */}
            <h2 className="cert-recipient-name">{selectedCert.studentName || user.name.toUpperCase()}</h2>

            <p className="cert-description-text">
              for successfully demonstrating mastery and completing certified peer instruction in
            </p>

            {/* Skill Name */}
            <div className="cert-skill-highlight">
              {selectedCert.skill}
            </div>

            {/* Hours and Level Badges */}
            <div className="cert-metrics-row">
              <div className="cert-metric-item">
                <span className="metric-lbl">Completed Volume</span>
                <strong className="metric-val">{selectedCert.hoursCompleted} Hours</strong>
              </div>
              <div className="metric-separator">•</div>
              <div className="cert-metric-item">
                <span className="metric-lbl">Validated Level</span>
                <strong className="metric-val">{selectedCert.level}</strong>
              </div>
              <div className="metric-separator">•</div>
              <div className="cert-metric-item">
                <span className="metric-lbl">Status</span>
                <strong className="metric-val text-emerald">SkillLoop Verified ✓</strong>
              </div>
            </div>

            {/* Bottom Row: Signatures, ID, QR */}
            <div className="cert-bottom-signatures">
              <div className="signature-col">
                <div className="sign-line cursive-sign">Dr. K. Swaminathan</div>
                <span className="sign-label">Academic Dean of Innovation</span>
                <span className="sign-inst">VIT Campus Council</span>
              </div>

              <div className="qr-col">
                <div className="qr-box">
                  <QrCode size={48} className="qr-icon" />
                  <span className="qr-tag">ID: {selectedCert.certificateId}</span>
                </div>
              </div>

              <div className="signature-col">
                <div className="sign-line cursive-sign">SkillLoop Protocol</div>
                <span className="sign-label">Peer Verification Authority</span>
                <span className="sign-inst">Issued: {selectedCert.issuedDate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Actions Bar */}
      <div className="cert-actions-bar glass-card">
        <button className="btn btn-primary" onClick={handlePrint}>
          <Printer size={16} />
          <span>Print / Save as PDF</span>
        </button>

        <a 
          href={`https://www.linkedin.com/sharing/share-offsite/?url=https://skillloop.org/verify/${selectedCert.certificateId}`}
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline"
        >
          <Share2 size={16} />
          <span>Add to LinkedIn Profile</span>
        </a>

        <div className="cert-hash-copy">
          <span>Certificate ID: <code>{selectedCert.certificateId}</code></span>
        </div>
      </div>

      {/* Verification Lookup Module (Section 15 spec) */}
      <div className="cert-verifier-card glass-card">
        <div className="verifier-header">
          <Search size={18} className="emerald" />
          <div>
            <h3>Verify Certificate Authenticity</h3>
            <p>Employers, recruiters, and campus admissions can validate the authenticity of any SkillLoop credential.</p>
          </div>
        </div>

        <form onSubmit={handleVerify} className="verifier-form">
          <input 
            type="text" 
            placeholder="Enter Certificate ID e.g. SL-2026-VIT-8849"
            value={verifyInput}
            onChange={(e) => setVerifyInput(e.target.value)}
            className="form-control"
            required
          />
          <button type="submit" className="btn btn-secondary">
            Verify Now
          </button>
        </form>

        {verifyResult && (
          <div className={`verification-result-box ${verifyResult.valid ? 'valid' : 'invalid'}`}>
            {verifyResult.valid ? (
              <div className="valid-content">
                <CheckCircle2 size={24} className="emerald" />
                <div>
                  <h4>Verified Credential Found</h4>
                  <p>
                    Awarded to <strong>{verifyResult.cert.studentName}</strong> for <strong>{verifyResult.cert.skill}</strong> ({verifyResult.cert.hoursCompleted} Hours completed).
                  </p>
                  <small>Cryptographically logged on SkillLoop Campus Network.</small>
                </div>
              </div>
            ) : (
              <p className="invalid-msg">{verifyResult.msg}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
