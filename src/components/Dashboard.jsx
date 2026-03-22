import React, { useState } from 'react';
import StatCard from './StatCard';
import BillCard from './BillCard';
import BillDetailModal from './BillDetailModal';
import './Dashboard.css';
import { mockBills, statsData, categories, yearFilters } from '../data/billsData';

export default function Dashboard({ searchQuery }) {
  const [selectedBill, setSelectedBill] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [yearFilter, setYearFilter] = useState('All');

  const filtered = mockBills.filter(bill => {
    const q = searchQuery.toLowerCase();
    const matchSearch = !q ||
      bill.title.toLowerCase().includes(q) ||
      bill.summary.oneLiner.toLowerCase().includes(q) ||
      bill.tags.some(t => t.toLowerCase().includes(q)) ||
      bill.category.toLowerCase().includes(q) ||
      bill.ministry.toLowerCase().includes(q);
    const matchCat = selectedCategory === 'All' || bill.category === selectedCategory;
    const matchStatus = statusFilter === 'All' || bill.status === statusFilter;
    const matchYear = yearFilter === 'All' || bill.year === Number(yearFilter);
    return matchSearch && matchCat && matchStatus && matchYear;
  });

  return (
    <main className="dashboard">
      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-eyebrow">
            <span className="live-pulse"></span>
            <span>🇮🇳 Indian Parliamentary Dashboard · Winter Session 2024</span>
          </div>
          <h1 className="hero-title">
            Understand India's Laws
            <span className="hero-title-accent"> in Plain Language</span>
          </h1>
          <p className="hero-sub">
            Dense bills. Simple summaries. Zero re-processing — powered by a token-efficient AI that caches every bill once.
          </p>
          <div className="hero-pills">
            <span className="hero-pill">✅ DPDPA 2023 Live</span>
            <span className="hero-pill">⏳ Waqf Amendment Pending</span>
            <span className="hero-pill">🆕 BNSS Active from July 2024</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section">
        <div className="stats-grid">
          <StatCard icon="📜" label="Total Bills" value={statsData.totalBills} sub="Tracked this session" color="indigo" />
          <StatCard icon="✅" label="Bills Passed" value={statsData.passed} sub="Now in effect" color="green" />
          <StatCard icon="⏳" label="Bills Pending" value={statsData.pending} sub="Under review" color="amber" />
          <StatCard icon="💾" label="Tokens Saved" value={statsData.totalTokensSaved} sub="Via caching (vs. re-processing)" color="saffron" />
          <StatCard icon="🌿" label="CO₂ Saved" value={statsData.co2Saved} sub="Equivalent energy cost" color="green" />
        </div>
      </section>

      {/* Filters */}
      <section className="section">
        <div className="filters-bar">
          <div className="filter-group">
            <span className="filter-label">Category</span>
            <div className="filter-chips">
              {categories.map(cat => (
                <button key={cat} className={`filter-chip ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}>
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="filter-group">
            <span className="filter-label">Status</span>
            <div className="filter-chips">
              {['All', 'passed', 'pending', 'rejected'].map(s => (
                <button key={s} className={`filter-chip ${statusFilter === s ? 'active' : ''}`}
                  onClick={() => setStatusFilter(s)}>
                  {s === 'All' ? '✦ All' : s === 'passed' ? '✅ Passed' : s === 'pending' ? '⏳ Pending' : '❌ Rejected'}
                </button>
              ))}
            </div>
          </div>
          <div className="filter-group">
            <span className="filter-label">Year</span>
            <div className="filter-chips">
              <button className={`filter-chip ${yearFilter === 'All' ? 'active' : ''}`} onClick={() => setYearFilter('All')}>✦ All</button>
              {yearFilters.map(y => (
                <button key={y} className={`filter-chip ${yearFilter === y ? 'active' : ''}`}
                  onClick={() => setYearFilter(y)}>
                  {y === 2026 ? '🆕 2026' : y === 2025 ? '🔵 2025' : `${y}`}
                </button>
              ))}
            </div>
          </div>
          <div className="filter-results">
            <span>{filtered.length} of {mockBills.length} bills</span>
          </div>
        </div>
      </section>

      {/* Bills Grid */}
      <section className="section">
        {filtered.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">🔍</div>
            <h3>No bills found</h3>
            <p>Try a different search term or category filter.</p>
          </div>
        ) : (
          <div className="bills-grid">
            {filtered.map((bill, i) => (
              <BillCard key={bill.id} bill={bill} onClick={setSelectedBill} />
            ))}
          </div>
        )}
      </section>

      {/* Efficiency Banner */}
      <section className="section">
        <div className="efficiency-banner glass-card">
          <div className="eff-banner-icon">⚡</div>
          <div className="eff-banner-content">
            <h3 className="eff-banner-title">Token Efficiency First Design</h3>
            <p className="eff-banner-sub">
              Each bill is summarized ONCE using our Map-Reduce + Chain of Density pipeline, then cached permanently.
              Subsequent reads consume <strong>0 extra LLM tokens</strong>. Our avg density: <strong>{statsData.avgEfficiencyScore} facts/token</strong>.
            </p>
          </div>
          <div className="eff-banner-stat">
            <div className="eff-banner-stat-val gradient-text">94%</div>
            <div className="eff-banner-stat-label">Cache Hit Rate</div>
          </div>
        </div>
      </section>

      {selectedBill && <BillDetailModal bill={selectedBill} onClose={() => setSelectedBill(null)} />}
    </main>
  );
}
