
import React from 'react';
import { ThumbsUp } from 'lucide-react';
import api from '../utils/api';

const Tiplist = ({ tips, onLike }) => {
  const handleLike = async (id) => {
    try {
      const res = await api.put(`/tips/${id}/like`);
      onLike(res.data);
    } catch (err) {
      console.error('Error liking tip:', err);
    }
  };

  return (
    <div className="space-y-3">
      {tips.map(tip => (
        <div key={tip._id} className="bg-pink-50/50 p-4 rounded-lg flex justify-between items-start">
          <div>
            <p className="text-gray-800 text-sm">{tip.content}</p>
            <p className="text-xs text-gray-400 mt-1">Sarah M.</p>
          </div>
          <button onClick={() => handleLike(tip._id)} className="flex items-center gap-1.5 text-gray-400 hover:text-pink-500 transition-colors shrink-0 ml-4">
            <ThumbsUp size={14} /> 
            <span className="text-sm font-medium">{tip.likes}</span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Tiplist;
