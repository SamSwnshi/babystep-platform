// components/MilestoneForm.jsx
import React, { useState } from 'react';
import api from '../utils/api';
import { toast } from 'react-hot-toast';

const MilestoneForm = ({ onAdd, onClose }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !date) {
      toast.error('Please fill in the title and date.');
      return;
    }
    try {
      const res = await api.post('/milestone/create', { title, date, note });
      onAdd(res.data);
      toast.success('Milestone added!');
      setTitle('');
      setDate('');
      setNote('');
      onClose(); // Close modal on success
    } catch (err) {
      toast.error(err.response?.data?.message || 'Error adding milestone');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <input 
            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-300 focus:outline-none transition" 
            placeholder="Title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
        />
        <input 
            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-300 focus:outline-none transition" 
            type="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
        />
        <textarea 
            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-300 focus:outline-none transition" 
            placeholder="Note (optional)" 
            value={note} 
            onChange={(e) => setNote(e.target.value)} 
            rows="3"
        />
      </div>
      <div className="mt-6 flex justify-end gap-3">
        <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 font-semibold">
            Cancel
        </button>
        <button type="submit" className="px-6 py-2 bg-gradient-to-tr from-pink-500 to-purple-500 text-white rounded-lg font-semibold shadow hover:opacity-90">
            Add Milestone
        </button>
      </div>
    </form>
  );
};

export default MilestoneForm;
