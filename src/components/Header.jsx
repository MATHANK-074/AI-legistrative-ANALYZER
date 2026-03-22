import React from 'react';
import './Header.css';

export default function Header({ searchQuery, setSearchQuery, activeView, setActiveView }) {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-brand">
          <div className="brand-icon">⚖️</div>
          <div className="brand-text">
            <span className="brand-name gradient-text">SansadAI</span>
            <span className="brand-sub">नागरिक डैशबोर्ड · Citizen Dashboard</span>
          </div>
        </div>

        <nav className="header-nav">
          {[
            { id: 'dashboard', label: '📊 Dashboard' },
            { id: 'bills', label: '📜 Bills' },
            { id: 'pipeline', label: '🔬 AI Pipeline' },
          ].map(item => (
            <button
              key={item.id}
              className={`nav-btn ${activeView === item.id ? 'active' : ''}`}
              onClick={() => setActiveView(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="header-search">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="input-field search-input"
            placeholder="Search bills, acts, policies..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="header-badge">
          <span className="live-dot"></span>
          <span className="text-sm text-muted">Live · Sansad.in</span>
        </div>
      </div>
    </header>
  );
}
