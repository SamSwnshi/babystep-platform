// components/Navbar.jsx
import React from 'react';
import { LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <span className="text-xl font-semibold">BabySteps</span>
      {user && (
        <div className="flex items-center gap-4">
          <span>{user.username}</span>
          <button onClick={logout} className="hover:text-red-300">
            <LogOut />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
