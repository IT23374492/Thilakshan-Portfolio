import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Initial check for dark mode
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
      setIsDarkMode(true);
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const menuItems = [
    { label: 'Home',       href: '#home'       },
    { label: 'About',      href: '#about'      },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects',   href: '#projects'   },
    { label: 'Skills',     href: '#skills'     },
    { label: 'Contact',    href: '#contact'    },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg'
          : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            aria-label="Kanagarajah Thilakshan — Home"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shadow-md">
              <span className="text-white font-black text-sm leading-none">KT</span>
            </div>
            <span className="text-base font-bold text-gray-900 dark:text-white hidden sm:block">
              Kanagarajah
            </span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300
                           hover:text-red-500 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20
                           transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors flex items-center justify-center"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
            <a
              href="/Kanagarajah_Thilakshan_CV.docx"
              download="Kanagarajah_Thilakshan_CV.docx"
              className="px-5 py-2 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600
                         text-white rounded-lg font-semibold text-sm shadow-md btn-3d
                         transition-all duration-200 flex items-center gap-2"
              aria-label="Download Resume (DOCX)"
            >
              <span>📥</span>
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 dark:text-white
                       hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden pb-4 pt-2 border-t border-gray-100 dark:border-gray-800 space-y-1"
          >
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300
                           hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-red-500
                           transition-all duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <div className="flex gap-2 pt-2 px-4">
              <button
                onClick={toggleDarkMode}
                className="flex items-center justify-center p-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors w-12"
                aria-label="Toggle Dark Mode"
              >
                {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
              </button>
              <a
                href="/Kanagarajah_Thilakshan_CV.docx"
                download
                className="flex-1 py-2 rounded-lg bg-gradient-to-r from-red-500 to-orange-500
                           text-white text-center font-semibold text-sm flex items-center justify-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <span>📥</span> Resume
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
