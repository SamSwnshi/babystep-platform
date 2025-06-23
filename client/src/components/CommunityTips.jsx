import React, { useEffect, useState } from 'react';
import api from '../utils/api';
import { ThumbsUp } from 'lucide-react';
import { toast } from 'react-hot-toast';

const CommunityTips = () => {
    const [tips, setTips] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAllTips = async () => {
            try {
                setLoading(true);
                const res = await api.get('/tips');
                setTips(res.data);
            } catch (error) {
                toast.error('Failed to load community tips.');
            } finally {
                setLoading(false);
            }
        };

        fetchAllTips();
    }, []);

    const handleLike = async (id) => {
        try {
            const res = await api.put(`/tips/${id}/like`);
            setTips(prevTips => 
                prevTips.map(tip => tip._id === id ? res.data : tip)
            );
        } catch (error) {
            toast.error('Error liking tip');
        }
    };

    if (loading) {
        return <div className="text-center p-8">Loading tips...</div>;
    }

    return (
        <div className="space-y-4">
            {tips.map(tip => (
                <div key={tip._id} className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-gray-800">{tip.content}</p>
                    <div className="flex justify-between items-center mt-3 text-xs text-gray-400">
                        <div>
                            <span>by <b>{tip.userId?.username || 'Anonymous'}</b> on </span>
                            <span className="font-semibold text-gray-500">{tip.milestoneId?.title || 'a milestone'}</span>
                        </div>
                        <button 
                            onClick={() => handleLike(tip._id)} 
                            className="flex items-center gap-1.5 text-gray-400 hover:text-pink-500 transition-colors"
                        >
                            <ThumbsUp size={14} /> 
                            <span className="text-sm font-medium">{tip.likes}</span>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CommunityTips; 