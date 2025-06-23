import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import MilestoneForm from '../components/MilestoneForm';
import MilestoneList from '../components/MilestoneList';
import Modal from '../components/Modal';
import CommunityTips from '../components/CommunityTips';

const Dashboard = () => {
  const [tab, setTab] = useState('timeline');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddSuccess = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-100 tracking-wide">
      <Navbar />
      <main className="w-full px-4">

        <div className="rounded-2xl bg-gradient-to-tr from-pink-400 to-purple-500 p-6 mb-6 mt-4 text-white shadow-md w-full">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">&#10084;&#65039;</span>
            <span className="font-semibold text-lg">Just for You - Week 20</span>
          </div>
          <div className="space-y-2">
            <div className="bg-white/10 rounded-lg px-4 py-2">At 20 weeks, consider scheduling your anatomy scan if you haven't already!</div>
            <div className="bg-white/10 rounded-lg px-4 py-2">This is a great time to start thinking about baby names and nursery planning.</div>
          </div>
        </div>

        <div className="flex items-center bg-white rounded-lg shadow-sm mb-6 overflow-hidden w-full">
          <button
            className={`flex-1 py-2 px-4 flex items-center justify-center gap-2 text-sm font-medium transition-colors ${tab === 'timeline' ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:bg-gray-50'}`}
            onClick={() => setTab('timeline')}
          >
            <span className="material-icons text-base">schedule</span> My Timeline
          </button>
          <button
            className={`flex-1 py-2 px-4 flex items-center justify-center gap-2 text-sm font-medium transition-colors border-l ${tab === 'community' ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:bg-gray-50'}`}
            onClick={() => setTab('community')}
          >
            <span className="material-icons text-base">forum</span> Community Tips
          </button>
        </div>

        {tab === 'timeline' && (
          <>
            <div className="mb-6">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-gradient-to-tr from-pink-400 to-purple-500 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <span className="text-2xl font-light">+</span> Add New Milestone
              </button>
            </div>
            <MilestoneList />
          </>
        )}
        {tab === 'community' && <CommunityTips />}
      </main>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add New Milestone">
        <MilestoneForm 
          onAdd={handleAddSuccess}
          onClose={() => setIsModalOpen(false)} 
        />
      </Modal>
    </div>
  );
};

export default Dashboard;
