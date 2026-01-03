'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence, animate } from 'framer-motion';
import { Lightbulb, Moon, Sun } from 'lucide-react';
import { TbBulb } from 'react-icons/tb';

const PullCord = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isTriggered, setIsTriggered] = useState(false);
  
  useEffect(() => {
    // Check initial preference - default to light theme
    if (localStorage.theme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      // Default to light theme (don't check system preference)
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
      // Set light theme explicitly if not set
      if (!('theme' in localStorage)) {
        localStorage.theme = 'light';
      }
    }
  }, []);
  
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDarkMode(true);
    }
  };
  
  // y represents the pull distance from the initial position
  const y = useMotionValue(0);
  
  // The rope starts at the mount and ends at the handle.
  // We use SVG to draw it to ensure it stays perfectly centered and synced.
  // Initial rope length is 25px.
  const ropeLength = useTransform(y, (value) => 40 + value);

  const handleDragEnd = (_, info) => {
    // Threshold to trigger theme change
    if (info.offset.y > 60) {
      toggleTheme();
      setIsTriggered(true);
      setTimeout(() => setIsTriggered(false), 800);
    }
     // Animate back to initial position with a spring
    animate(y, 0, {
      type: 'spring',
      stiffness: 400,
      damping: 15,
      mass: 0.8
    });
  };

  return (
    <div className="fixed top-0 right-6 z-50 flex flex-col items-center" style={{ width: '40px', height: '100px' }}>
      {/* Attachment Point / Ceiling Mount */}
      <div className="absolute top-0 flex flex-col items-center">
        <div className="w-5 h-1.5 bg-zinc-800 dark:bg-zinc-400 rounded-full z-20 shadow-sm" />
        <div className="w-1.5 h-1.5 bg-zinc-900 dark:bg-zinc-500 rounded-full -mt-0.5 z-20" />
      </div>
      
      {/* The Rope (SVG for perfect alignment) */}
      <svg className="absolute top-0 overflow-visible z-10 pointer-events-none" width="2" height="150">
        <motion.line
          x1="1"
          y1="5"
          x2="1"
          y2={ropeLength}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="text-zinc-600 dark:text-zinc-400"
          style={{ strokeDasharray: '3, 2' }}
        />
      </svg>

      {/* The Draggable Handle */}
      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 20 }}
        dragElastic={0.1}
        onDragEnd={handleDragEnd}
        style={{ y, top: '40px' }} // Initial position matches initial rope length
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95, cursor: 'grabbing' }}
        className="absolute w-10 h-10 rounded-full border-2 border-zinc-600 dark:border-amber-600 flex items-center justify-center cursor-grab z-30 shadow-xl dark:shadow-amber-500/20 group select-none"
      >
        <AnimatePresence mode="wait">
          {isDarkMode ? (
            <motion.div
              key="sun"
            >
              <TbBulb size={18} className="text-amber-600 rotate-180" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
            >
              <Lightbulb size={18} className="text-zinc-600 rotate-180" />
            </motion.div>
          )}
        </AnimatePresence>
       
        {/* Tooltip hint */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <span className="text-[8px] uppercase font-bold tracking-[0.2em] text-zinc-500 whitespace-nowrap">Pull Me</span>
        </div>
      </motion.div>
    </div>
  );
};

export default PullCord;

