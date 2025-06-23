// components/Navbar.jsx
import React from 'react';
import { LogOut, UserCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-sm px-8 py-4 flex justify-between items-center tracking-widest">
      <div className="flex items-center gap-3">
        <span className="bg-gradient-to-tr from-pink-400 to-purple-500 rounded-full p-2 text-white text-lg">

          <span role="img" aria-label="logo">👶</span>
        </span>
        <div className='flex flex-col gap-1'>
          <div className="text-xl font-bold text-gray-800 leading-tight">BabySteps</div>
          <div className="text-xs text-gray-500 -mt-1">Milestone Tracker</div>
        </div>
      </div>
      <div className="flex items-center gap-8">

        <div className="flex items-center gap-4">
          {user && (
            <span className="font-semibold text-gray-700 mr-2">{user.username.toUpperCase()}</span>
          )}
         
          {user && (
            <button onClick={logout} className="hover:text-red-400 text-gray-400">
              <LogOut className='hover:scale-110 duration-120'/>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
