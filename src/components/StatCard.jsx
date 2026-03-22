import React from 'react';
import './StatCard.css';

export default function StatCard({ icon, label, value, sub, color = 'indigo' }) {
  return (
    <div className={`stat-card glass-card stat-card--${color}`}>
      <div className="stat-icon">{icon}</div>
      <div className="stat-content">
        <div className="stat-value">{value}</div>
        <div className="stat-label">{label}</div>
        {sub && <div className="stat-sub">{sub}</div>}
      </div>
    </div>
  );
}
