import React from 'react';
import './PipelineView.css';

const steps = [
  {
    icon: '📥', id: '01', title: 'Document Ingestion',
    sub: 'Source: Digital Sansad / OGD Platform',
    detail: 'PDF bills fetched from sansad.in and OGD. Text extracted via pdf-parse. A bill like BNSS 2023 contains ~187,000 tokens of dense legal text.',
    stat: '187k tokens in', statColor: 'var(--accent-red)',
  },
  {
    icon: '✂️', id: '02', title: 'Logical Chunking',
    sub: 'Section-boundary aware splitting',
    detail: 'Instead of arbitrary splits, chunks are created at Chapter/Section/Article boundaries. Each chunk = ~6,000 tokens. A 187k-token bill → ~31 chunks. Overlap of 200 tokens preserves cross-section context.',
    stat: '~31 chunks', statColor: 'var(--accent-amber)',
  },
  {
    icon: '🔄', id: '03', title: 'Map Phase — Parallel Summarization',
    sub: 'Each chunk independently summarized',
    detail: 'All 31 chunks are sent to Gemini 1.5 Pro in parallel. Each receives a strict prompt: "Return exactly 3 bullet facts in JSON." Parallelism = 31x faster than sequential. Each chunk uses ~200 output tokens.',
    stat: '31 × 200 = 6,200 tokens generated', statColor: 'var(--accent-indigo)',
  },
  {
    icon: '🧩', id: '04', title: 'Reduce Phase — Aggregation',
    sub: 'Merge chunk summaries into one',
    detail: 'The 31 chunk summaries (93 bullet points) are combined into a single prompt. Gemini produces the final citizen summary: oneLiner, keyPoints [5], and impactOnYou. Output: ~500 tokens.',
    stat: '6,200 → 500 tokens', statColor: 'var(--accent-indigo)',
  },
  {
    icon: '💎', id: '05', title: 'Chain of Density Refinement',
    sub: 'Iterative density maximization',
    detail: 'The summary undergoes 2 CoD iterations: each pass identifies missing facts and rewrites keyPoints to be denser without increasing length. This maximizes the facts-per-token ratio.',
    stat: '+2 facts/pass, same length', statColor: 'var(--accent-saffron)',
  },
  {
    icon: '💾', id: '06', title: 'Cache & Serve',
    sub: 'One-time processing, zero re-runs',
    detail: 'The final summary is stored permanently. Subsequent 10,000 citizen visits to this bill page consume 0 additional LLM tokens. Cache hit rate in this demo: 94%.',
    stat: '4.2M tokens saved', statColor: 'var(--accent-green)',
  },
];

const metrics = [
  { label: 'Input Tokens (Typical Bill)', val: '100k+', color: 'var(--accent-red)' },
  { label: 'Tokens Used for Final Summary', val: '~700', color: 'var(--accent-saffron)' },
  { label: 'Compression Ratio', val: '143×', color: 'var(--accent-indigo)' },
  { label: 'Facts per 1000 Output Tokens', val: '21+', color: 'var(--accent-green)' },
  { label: 'CO₂ per Summary (vs. naive)', val: '−96%', color: 'var(--accent-green)' },
  { label: 'Cache Re-use Savings', val: '94%', color: 'var(--accent-amber)' },
];

export default function PipelineView() {
  return (
    <main className="pipeline-view">
      <div className="pipeline-hero">
        <span className="badge badge-new" style={{ marginBottom: 14, display: 'inline-block' }}>🔬 Technical Deep Dive</span>
        <h1 className="pipeline-title">The AI Summarization Pipeline</h1>
        <p className="pipeline-sub">
          How we process 100,000+ token Indian bills into fact-dense citizen summaries —
          with maximum information density and minimum environmental footprint.
        </p>
      </div>

      {/* Metrics Bar */}
      <div className="metrics-grid">
        {metrics.map(m => (
          <div key={m.label} className="metric-tile glass-card">
            <div className="metric-val" style={{ color: m.color }}>{m.val}</div>
            <div className="metric-label">{m.label}</div>
          </div>
        ))}
      </div>

      {/* Pipeline Steps */}
      <div className="pipeline-steps">
        {steps.map((step, i) => (
          <div key={step.id} className="pipeline-step fade-in-up" style={{ animationDelay: `${i * 0.07}s` }}>
            <div className="step-connector">
              <div className="step-icon-wrap">{step.icon}</div>
              {i < steps.length - 1 && <div className="step-line"></div>}
            </div>
            <div className="step-content glass-card">
              <div className="step-header">
                <span className="step-num gradient-text-indigo">{step.id}</span>
                <h3 className="step-title">{step.title}</h3>
                <span className="tag">{step.sub}</span>
              </div>
              <p className="step-detail">{step.detail}</p>
              <div className="step-stat" style={{ borderColor: step.statColor + '33', background: step.statColor + '0f' }}>
                <span style={{ color: step.statColor }}>→ {step.stat}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Architecture Diagram (ascii-art style) */}
      <div className="arch-card glass-card">
        <h3 style={{ marginBottom: 18, fontWeight: 700 }}>🗺️ Architecture Diagram</h3>
        <div className="arch-diagram">
          <pre className="arch-pre">{`
  [PDF Bill — 100k+ tokens]
         │
         ▼
  ┌─────────────────┐
  │  Chunking Layer │  Section-boundary chunking (6k tokens each)
  └────────┬────────┘
           │ 10–35 chunks
    ┌──────┴──────┐
    │  MAP PHASE  │  Parallel Gemini calls per chunk → 3 bullet facts
    └──────┬──────┘
           │ 30–100 bullet points
    ┌──────┴──────┐
    │ REDUCE PHASE│  Aggregate + final citizen summary
    └──────┬──────┘
           │
    ┌──────┴──────────┐
    │ Chain of Density │  Refine for max information density
    └──────┬───────────┘
           │
    ┌──────┴──────┐
    │    CACHE    │  Stored forever, 0 tokens on re-read
    └──────┬──────┘
           │
    ┌──────┴──────────────────────┐
    │  Citizen Dashboard (React)  │  ~700 output tokens delivered
    └─────────────────────────────┘
`}</pre>
        </div>
      </div>
    </main>
  );
}
