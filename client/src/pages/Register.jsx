import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../utils/api';
import { UserCircle2 } from 'lucide-react';
import { toast } from 'react-hot-toast';

const Register = () => {
   const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/register', { username, email, password });
      toast.success('Signup successful! You can login now.');
      navigate('/login');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-tr from-pink-50 via-purple-50 to-white px-4">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md flex flex-col items-center">
        <div className="bg-gradient-to-tr from-pink-400 to-purple-500 rounded-full p-3 mb-4">
          <UserCircle2 className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-3xl font-extrabold mb-2 text-gray-800">Create Account</h2>
        <p className="text-sm text-gray-400 mb-6">Sign up to get started</p>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-3 p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-300 focus:outline-none transition"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-300 focus:outline-none transition"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-300 focus:outline-none transition"
        />
        <button type="submit" className="w-full bg-gradient-to-tr from-pink-500 to-purple-500 text-white p-3 rounded-lg font-bold text-lg shadow hover:opacity-90 transition mb-2">
          Sign Up
        </button>
        <p className="text-sm mt-2 text-center text-gray-500">
          Already have an account?{' '}
          <Link to="/login" className="text-pink-600 hover:underline font-semibold">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register
