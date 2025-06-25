'use client';
import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="text-xl font-bold text-cyan-400">
                Cline App
              </a>
            </div>
            <div className="hidden sm:ml-8 sm:flex sm:space-x-8">
              <a href="/" className="text-white hover:text-cyan-300 inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200">
                Home
              </a>
              <a href="/ai-features" className="text-white hover:text-cyan-300 inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200">
                AI Features
              </a>
              <a href="/settings" className="text-white hover:text-cyan-300 inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200">
                Settings
              </a>
              <a href="/contact-us" className="text-white hover:text-cyan-300 inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200">
                Contact Us
              </a>
              <a href="/about-us" className="text-white hover:text-cyan-300 inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200">
                About Us
              </a>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <a href="/login">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Login
              </button>
            </a>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-slate-700 focus:outline-none focus:bg-slate-700 focus:text-white transition-colors duration-200"
            >
              {/* Hamburger icon */}
              <svg className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close icon */}
              <svg className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:hidden bg-slate-700`}>
        <div className="pt-2 pb-3 space-y-1">
          <a href="/" className="block pl-3 pr-4 py-2 text-base font-medium text-white hover:bg-slate-600 hover:text-cyan-300 transition-colors duration-200">
            Home
          </a>
          <a href="/ai-features" className="block pl-3 pr-4 py-2 text-base font-medium text-white hover:bg-slate-600 hover:text-cyan-300 transition-colors duration-200">
            AI Features
          </a>
          <a href="/settings" className="block pl-3 pr-4 py-2 text-base font-medium text-white hover:bg-slate-600 hover:text-cyan-300 transition-colors duration-200">
            Settings
          </a>
          <a href="/contact-us" className="block pl-3 pr-4 py-2 text-base font-medium text-white hover:bg-slate-600 hover:text-cyan-300 transition-colors duration-200">
            Contact Us
          </a>
          <a href="/about-us" className="block pl-3 pr-4 py-2 text-base font-medium text-white hover:bg-slate-600 hover:text-cyan-300 transition-colors duration-200">
            About Us
          </a>
        </div>
        <div className="pt-4 pb-3 border-t border-slate-600">
          <div className="flex items-center px-4">
            <a href="/login">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Login
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;