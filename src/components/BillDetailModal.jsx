import React from 'react';
import './BillDetailModal.css';

export default function BillDetailModal({ bill, onClose }) {
  if (!bill) return null;
  const { summary, tokenEfficiency } = bill.summary;
  const te = bill.summary.tokenEfficiency;
  const compressionRatio = (bill.tokenCount / te.outputTokens).toFixed(0);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-panel glass-card" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        {/* Header */}
        <div className="modal-header">
          <div className="flex gap-2" style={{ flexWrap: 'wrap' }}>
            <span className={`badge badge-${bill.status}`}>
              {bill.status === 'passed' ? '✅' : bill.status === 'pending' ? '⏳' : '❌'} {bill.status}
            </span>
            <span className="badge badge-new">📂 {bill.category}</span>
            <span className="badge badge-active">🏛️ {bill.house}</span>
          </div>
          <h2 className="modal-title">{bill.title}</h2>
          <p className="modal-ministry">Ministry: {bill.ministry}</p>
        </div>

        {/* One-liner */}
        <div className="modal-highlight">
          <span className="modal-highlight-icon">💡</span>
          <p>{bill.summary.oneLiner}</p>
        </div>

        {/* Key Points */}
        <div className="modal-section">
          <h3 className="modal-section-title">📌 Key Points for Citizens</h3>
          <ul className="modal-keypoints">
            {bill.summary.keyPoints.map((pt, i) => (
              <li key={i} className="modal-keypoint">
                <span className="keypoint-num">{i + 1}</span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Impact */}
        <div className="modal-impact">
          <h3 className="modal-section-title">🇮🇳 Impact on You</h3>
          <p className="modal-impact-text">{bill.summary.impactOnYou}</p>
        </div>

        {/* Dates */}
        <div className="modal-dates">
          <div className="date-item">
            <span className="text-muted text-xs">📅 Introduced</span>
            <span className="font-semibold">{new Date(bill.dateIntroduced).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
          </div>
          {bill.datePassed && (
            <div className="date-item">
              <span className="text-muted text-xs">✅ Passed</span>
              <span className="font-semibold">{new Date(bill.datePassed).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            </div>
          )}
          <div className="date-item">
            <span className="text-muted text-xs">⚡ Effective</span>
            <span className="font-semibold">{bill.summary.effectiveDate}</span>
          </div>
        </div>

        {/* Token Efficiency */}
        <div className="modal-efficiency glass-card">
          <h3 className="modal-section-title" style={{ marginBottom: 16 }}>⚡ AI Efficiency Report</h3>
          <div className="efficiency-grid">
            <div className="eff-item">
              <div className="eff-value gradient-text">{(te.inputTokens / 1000).toFixed(0)}k</div>
              <div className="eff-label">Input Tokens (Bill Size)</div>
            </div>
            <div className="eff-item">
              <div className="eff-value gradient-text-indigo">{te.outputTokens}</div>
              <div className="eff-label">Output Tokens Used</div>
            </div>
            <div className="eff-item">
              <div className="eff-value" style={{ color: 'var(--accent-green)' }}>{te.factsExtracted}</div>
              <div className="eff-label">Facts Extracted</div>
            </div>
            <div className="eff-item">
              <div className="eff-value" style={{ color: 'var(--accent-amber)' }}>{compressionRatio}x</div>
              <div className="eff-label">Compression Ratio</div>
            </div>
          </div>
          <div className="eff-bar-wrap">
            <div className="eff-bar-label">
              <span className="text-xs text-muted">Token Efficiency</span>
              <span className="eff-score">{(te.efficiencyScore * 1000).toFixed(1)}</span>
            </div>
            <div className="eff-bar-track">
              <div className="eff-bar-fill" style={{ width: `${Math.min((te.efficiencyScore * 1000) * 4.5, 100)}%` }}></div>
            </div>
            <div className="text-xs text-muted">facts per 1000 output tokens</div>
          </div>
          <p className="eff-note">💾 This summary was served from cache. 0 additional LLM tokens consumed.</p>
        </div>

        {/* Tags & Actions */}
        <div className="modal-footer">
          <div className="flex gap-2" style={{ flexWrap: 'wrap' }}>
            {bill.tags.map(tag => <span key={tag} className="tag">#{tag}</span>)}
          </div>
          <a href={bill.pdfUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            📄 Read Full Bill
          </a>
        </div>
      </div>
    </div>
  );
}
