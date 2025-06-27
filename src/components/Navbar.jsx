import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonial', href: '#testimonial' }, // Corrected typo from HTML
    { name: 'Connect', href: '#contact' }, // Changed from 'Connect' to match HTML section ID
  ];

  if (!mounted) {
    // Avoid hydration mismatch by rendering a placeholder or null on the server.
    // Or render the button disabled state.
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md px-4 py-3 transition-colors duration-300">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#home" className="text-xl font-bold text-gray-800 dark:text-white">Peter Bawuah</a>
          {/* Placeholder for theme toggle to avoid layout shift */}
          <button className="p-2 rounded-md bg-gray-200 dark:bg-gray-700" aria-label="Toggle theme">
            <Sun className="h-5 w-5 text-gray-800 dark:text-white" />
          </button>
          {/* Placeholder for menu toggle */}
          <div className="md:hidden">
             <button className="p-2 rounded-md text-gray-800 dark:text-white">
                <Menu className="h-6 w-6" />
             </button>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f1f5f9] dark:bg-[#0d0d0d] shadow-md px-4 py-3 transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Name */}
        <a href="#home" className="text-xl font-bold text-gray-800 dark:text-white">Peter Bawuah</a>

        {/* Desktop Menu & Theme Toggle */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a href={item.href} className="text-[#1e293b] dark:text-[#facc15] hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5 text-[#facc15]" />
            ) : (
              <Moon className="h-5 w-5 text-[#7c3aed]" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button & Theme Toggle */}
        <div className="md:hidden flex items-center space-x-2">
           {/* Theme Toggle Button (Mobile) */}
           <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-gray-700" />
            )}
          </button>
          {/* Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 relative z-50"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">Open main menu</span>
            <div className="w-6 h-6 relative">
               {/* Animated Hamburger/X Icon */}
               <span className={`block absolute h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 top-1/2 -translate-y-1/2' : '-translate-y-1.5'}`}></span>
               <span className={`block absolute h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}></span>
               <span className={`block absolute h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45 top-1/2 -translate-y-1/2' : 'translate-y-1.5'}`}></span>
            </div>
            {/* Fallback icons (optional, if CSS animation fails) */}
            {/* {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />} */}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {/* Use transition classes for smooth animation */}
      <div
        id="mobile-menu"
        className={`md:hidden absolute top-full left-0 right-0 bg-[#f1f5f9] dark:bg-[#0d0d0d] shadow-lg transition-transform transform duration-300 ease-in-out ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}`}
      >
        <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)} // Close menu on link click
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-blue-400 transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

