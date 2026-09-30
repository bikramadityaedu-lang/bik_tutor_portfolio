import React, { useState, useEffect } from 'react';
import { Menu, MessageSquare, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Navbar({ onOpenMenu, onOpenEnquiry }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 pointer-events-none py-4 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left Branding Pill */}
        <a 
          href="#home"
          className={`pointer-events-auto flex items-center gap-3 px-4 py-2.5 rounded-full transition-all duration-300 ${
            scrolled 
              ? 'glass-panel shadow-lg border-slate-700/60 text-slate-100 bg-[#0d162d]/90' 
              : 'bg-[#0b132b]/60 backdrop-blur-md border border-slate-800 text-slate-100'
          } hover:border-cyan-500/50 group`}
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-heading font-bold text-white text-sm shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            BS
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-sm text-slate-100 tracking-tight leading-none group-hover:text-cyan-300 transition-colors">
              {siteConfig.name}
            </span>
            <span className="text-[10px] text-cyan-400 font-medium tracking-wider uppercase mt-0.5">
              Modern Educator
            </span>
          </div>
        </a>

        {/* Right Floating Controls */}
        <div className="pointer-events-auto flex items-center gap-3">
          {/* Quick WhatsApp Action Button */}
          <button
            onClick={onOpenEnquiry}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-emerald-500/90 to-teal-600/90 hover:from-emerald-400 hover:to-teal-500 text-white font-medium text-xs sm:text-sm shadow-lg shadow-emerald-950/40 hover:shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5 border border-emerald-400/30"
          >
            <MessageSquare className="w-4 h-4 text-emerald-100" />
            <span>Enquire on WhatsApp</span>
          </button>

          {/* Minimal Floating Menu Trigger */}
          <button
            onClick={onOpenMenu}
            aria-label="Open Navigation Menu"
            className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full transition-all duration-300 ${
              scrolled
                ? 'glass-panel bg-[#0d162d]/95 border-cyan-500/40 text-slate-100 shadow-xl shadow-cyan-950/20'
                : 'bg-[#0b132b]/80 backdrop-blur-md border border-slate-700/70 text-slate-100'
            } hover:border-cyan-400 hover:text-cyan-300 group`}
          >
            <span className="font-heading text-xs font-semibold uppercase tracking-widest hidden md:inline">
              Menu
            </span>
            <div className="w-7 h-7 rounded-full bg-slate-800/80 border border-slate-700/80 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:border-cyan-400/40 transition-colors">
              <Menu className="w-4 h-4 text-cyan-400 group-hover:rotate-180 transition-transform duration-300" />
            </div>
          </button>
        </div>

      </div>
    </header>
  );
}
