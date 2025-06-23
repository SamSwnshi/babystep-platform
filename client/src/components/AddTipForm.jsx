// components/AddTipForm.jsx
import React, { useState } from 'react';
import api from '../utils/api';
import { toast } from 'react-hot-toast';

const AddTipForm = ({ milestoneId, onNewTip }) => {
  const [content, setContent] = useState('');

  const handleAddTip = async (e) => {
    e.preventDefault();
    if (!content.trim()) {
      toast.error("You can't share an empty tip!");
      return;
    }
    try {
      const res = await api.post(`/milestone/${milestoneId}/tips`, { content });
      onNewTip(res.data);
      setContent('');
      toast.success('Your tip has been shared!');
    } catch (err) {
      toast.error('Failed to share your tip. Please try again.');
      console.error('Failed to add tip', err);
    }
  };

  return (
    <form onSubmit={handleAddTip} className="mt-4 flex items-center gap-2">
      <input
        placeholder="Share a helpful tip..."
        className="w-full border-gray-200 border rounded-lg p-2.5 text-sm focus:ring-pink-300 focus:border-pink-300"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit" className="bg-pink-500 text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-pink-600 transition-colors">Share</button>
    </form>
  );
};

export default AddTipForm;
