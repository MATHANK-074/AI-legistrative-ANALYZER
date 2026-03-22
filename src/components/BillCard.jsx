import React from 'react';
import './BillCard.css';

const impactColor = { HIGH: 'red', MEDIUM: 'amber', LOW: 'green' };
const impactLabel = { HIGH: '🔴 High Impact', MEDIUM: '🟡 Medium Impact', LOW: '🟢 Low Impact' };

export default function BillCard({ bill, onClick }) {
  const statusClass = `badge badge-${bill.status}`;
  const impactCl = impactColor[bill.citizenImpact] || 'indigo';
  const tokensIn = (bill.tokenCount / 1000).toFixed(0);

  return (
    <div className="bill-card glass-card fade-in-up" onClick={() => onClick(bill)} role="button" tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onClick(bill)}>

      <div className="bill-card-header">
        <div className="flex gap-2" style={{ flexWrap: 'wrap' }}>
          <span className={statusClass}>
            {bill.status === 'passed' ? '✅' : bill.status === 'pending' ? '⏳' : '❌'} {bill.status}
          </span>
          <span className={`badge badge-${impactCl}`}>{impactLabel[bill.citizenImpact]}</span>
        </div>
        <span className="bill-house">{bill.house}</span>
      </div>

      <h3 className="bill-title">{bill.title}</h3>

      <p className="bill-one-liner">{bill.summary.oneLiner}</p>

      <div className="bill-meta">
        <span className="tag">🏛️ {bill.ministry}</span>
        <span className="tag">📂 {bill.category}</span>
      </div>

      <div className="bill-footer">
        <div className="bill-token-info">
          <span className="token-icon">⚡</span>
          <span className="text-xs text-muted">{tokensIn}k tokens → {bill.summary.tokenEfficiency.outputTokens} out</span>
        </div>
        <div className="efficiency-pill">
          <span>🎯</span>
          <span>{(bill.summary.tokenEfficiency.efficiencyScore * 1000).toFixed(1)}x density</span>
        </div>
      </div>
    </div>
  );
}
