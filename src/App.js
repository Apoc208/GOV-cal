import React, { useState } from 'react';
import './App.css';

const tabs = ['Dominance', 'XP Planner', 'Growth', 'Child Stats', 'Catacombs', 'Talent Tracker'];

function App() {
  const [tab, setTab] = useState('Dominance');

  return (
    <div className='min-h-screen bg-black text-white p-6 font-sans'>
      <h1 className='text-3xl mb-4 text-red-500'>🩸 Blood Moon Coven Calculator</h1>
      <div className='flex space-x-4 mb-4'>
        {tabs.map((t) => (
          <button key={t} onClick={() => setTab(t)} className={`px-3 py-1 rounded ${tab === t ? 'bg-red-700' : 'bg-gray-800'}`}>
            {t}
          </button>
        ))}
      </div>
      <div className='p-4 border border-red-500 bg-gray-900'>
        <h2 className='text-xl mb-2'>{tab} Tool Coming Soon</h2>
        <p>This will contain logic for {tab.toLowerCase()} calculation.</p>
      </div>
    </div>
  );
}

export default App;