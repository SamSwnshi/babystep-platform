// components/MilestoneList.jsx
import React, { useEffect, useState } from 'react';
import api from '../utils/api';
import AddTipForm from './AddTipForm';
import TipList from './TipList';
import { Calendar, MessageSquare, Link as LinkIcon, Stethoscope, Baby, Share2 } from 'lucide-react';

const MilestoneList = () => {
  const [milestones, setMilestones] = useState([]);

  const fetchMilestones = async () => {
    try {
      const res = await api.get('/milestone');
      // Add dummy tags for styling
      const milestonesWithTags = res.data.map(m => ({
        ...m,
        tags: [
          {  icon: <Stethoscope size={14} />, color: 'blue' },
          { name: `Week ${Math.floor(Math.random() * 20 + 8)}`, icon: <Baby size={14} />, color: 'pink' },
          { name: 'Shared', icon: <Share2 size={14} />, color: 'green' }
        ]
      }));
      setMilestones(milestonesWithTags);
    } catch (err) {
      console.error("Failed to fetch milestones", err);
    }
  };

  useEffect(() => {
    fetchMilestones();
  }, []);

  const addTipToMilestone = (milestoneId, newTip) => {
    setMilestones((prev) =>
      prev.map((m) =>
        m._id === milestoneId
          ? { ...m, tips: [...(m.tips || []), newTip] }
          : m
      )
    );
  };

  const updateTipLikes = (updatedTip) => {
    setMilestones((prev) =>
      prev.map((m) => ({
        ...m,
        tips: (m.tips || []).map((tip) =>
          tip._id === updatedTip._id ? updatedTip : tip
        ),
      }))
    );
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Your Milestones</h2>
      {milestones.map((m) => (
        <div key={m._id} className="bg-white rounded-xl shadow-sm p-6 mb-6">
          {/* Tags */}
          <div className="flex items-center gap-2 mb-4">
            {m.tags.map(tag => (
              <span key={tag.name} className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-${tag.color}-100 text-${tag.color}-700`}>
                {tag.icon} {tag.name}
              </span>
            ))}
          </div>

          {/* Title and Date */}
          <h3 className="text-xl font-bold text-gray-800">{m.title}</h3>
          <div className="flex items-center gap-2 text-sm text-gray-500 mt-1 mb-3">
            <Calendar size={14} />
            <span>{new Date(m.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>

          {/* Note */}
          {m.note && <p className="text-gray-700 mb-4">{m.note}</p>}

          <hr className="my-4" />

          {/* Community Tips Section */}
          <div className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-4">
            <MessageSquare size={20} /> Community Tips ({m.tips?.length || 0})
          </div>
          <TipList tips={m.tips || []} onLike={updateTipLikes} />
          <AddTipForm milestoneId={m._id} onNewTip={(tip) => addTipToMilestone(m._id, tip)} />
        </div>
      ))}
    </div>
  );
};

export default MilestoneList;
