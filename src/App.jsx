import React, { useState } from 'react';
import './index.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import BillsView from './components/BillsView';
import PipelineView from './components/PipelineView';

export default function App() {
  const [activeView, setActiveView] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeView={activeView}
        setActiveView={setActiveView}
      />
      {activeView === 'dashboard' && <Dashboard searchQuery={searchQuery} />}
      {activeView === 'bills' && <BillsView searchQuery={searchQuery} />}
      {activeView === 'pipeline' && <PipelineView />}
    </>
  );
}
