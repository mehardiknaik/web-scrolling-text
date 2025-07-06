'use client'
import React from 'react';
import { IoMoon,IoSunnySharp  } from "react-icons/io5";

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      className={`
        p-2 rounded-full duration-300 transform hover:scale-110 active:scale-95
        ${isDark 
          ? 'bg-blue-400 text-gray-900 hover:bg-blue-300 shadow-lg shadow-blue-400/25' 
          : 'bg-gray-800 text-white hover:bg-gray-700 shadow-lg shadow-gray-800/25'
        }
      `}
      aria-label="Toggle theme"
    >
      {isDark ? <IoSunnySharp className="w-6 h-6" /> : <IoMoon className="w-6 h-6" />}
    </button>
  );
}

export default ThemeToggle;