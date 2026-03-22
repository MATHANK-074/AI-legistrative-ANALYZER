import React, { useState } from 'react';
import BillCard from './BillCard';
import BillDetailModal from './BillDetailModal';
import './BillsView.css';
import { mockBills, categories, yearFilters } from '../data/billsData';

export default function BillsView({ searchQuery }) {
  const [selectedBill, setSelectedBill] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('date');
  const [impactFilter, setImpactFilter] = useState('All');
  const [yearFilter, setYearFilter] = useState('All');

  const sorted = [...mockBills].sort((a, b) => {
    if (sortBy === 'date') return new Date(b.dateIntroduced) - new Date(a.dateIntroduced);
    if (sortBy === 'tokens') return b.tokenCount - a.tokenCount;
    if (sortBy === 'efficiency') return b.summary.tokenEfficiency.efficiencyScore - a.summary.tokenEfficiency.efficiencyScore;
    return 0;
  });

  const filtered = sorted.filter(bill => {
    const q = searchQuery.toLowerCase();
    const matchQ = !q || bill.title.toLowerCase().includes(q) || bill.category.toLowerCase().includes(q) || bill.tags.some(t => t.toLowerCase().includes(q));
    const matchCat = selectedCategory === 'All' || bill.category === selectedCategory;
    const matchImpact = impactFilter === 'All' || bill.citizenImpact === impactFilter;
    const matchYear = yearFilter === 'All' || bill.year === Number(yearFilter);
    return matchQ && matchCat && matchImpact && matchYear;
  });

  return (
    <main className="bills-view">
      <div className="bv-header">
        <div>
          <h1 className="bv-title">All Parliamentary Bills</h1>
          <p className="bv-sub text-muted">{filtered.length} bills · Pre-summarized with AI · Cached for efficiency</p>
        </div>
      </div>

      {/* Controls */}
      <div className="bv-controls glass-card">
        <div className="bv-filter-row">
          <div className="filter-group">
            <span className="filter-label">Category</span>
            <div className="filter-chips">
              {categories.map(c => (
                <button key={c} className={`filter-chip ${selectedCategory === c ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(c)}>{c}</button>
              ))}
            </div>
          </div>
          <div className="filter-group">
            <span className="filter-label">Impact</span>
            <div className="filter-chips">
              {['All', 'HIGH', 'MEDIUM', 'LOW'].map(i => (
                <button key={i} className={`filter-chip ${impactFilter === i ? 'active' : ''}`}
                  onClick={() => setImpactFilter(i)}>
                  {i === 'All' ? '✦ All' : i === 'HIGH' ? '🔴 High' : i === 'MEDIUM' ? '🟡 Medium' : '🟢 Low'}
                </button>
              ))}
            </div>
          </div>
          <div className="filter-group">
            <span className="filter-label">Year</span>
            <div className="filter-chips">
              <button className={`filter-chip ${yearFilter === 'All' ? 'active' : ''}`} onClick={() => setYearFilter('All')}>✦ All Years</button>
              {yearFilters.map(y => (
                <button key={y} className={`filter-chip ${yearFilter === y ? 'active' : ''}`}
                  onClick={() => setYearFilter(y)}>
                  {y === 2026 ? '🆕 2026' : y === 2025 ? '🔵 2025' : `${y}`}
                </button>
              ))}
            </div>
          </div>
          <div className="filter-group bv-sort">
            <span className="filter-label">Sort</span>
            <select className="input-field bv-select" value={sortBy} onChange={e => setSortBy(e.target.value)}>
              <option value="date">📅 Date (Newest)</option>
              <option value="tokens">📄 Document Size</option>
              <option value="efficiency">🎯 Efficiency Score</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="bills-grid">
        {filtered.map(bill => (
          <BillCard key={bill.id} bill={bill} onClick={setSelectedBill} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="empty-state">
          <div className="empty-icon">🔍</div>
          <h3>No bills found</h3>
          <p>Adjust your filters or search term.</p>
        </div>
      )}

      {selectedBill && <BillDetailModal bill={selectedBill} onClose={() => setSelectedBill(null)} />}
    </main>
  );
}
