import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, MessageSquare, MapPin, BookOpen, GraduationCap, Heart, HelpCircle, PhoneCall, Home, Info } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const navItems = [
  { label: 'Home', href: '#home', tag: '01' },
  { label: 'About', href: '#about', tag: '02' },
  { label: 'Teaching Philosophy', href: '#teaching', tag: '03' },
  { label: 'Subjects', href: '#subjects', tag: '04' },
  { label: 'Experience & Timeline', href: '#experience', tag: '05' },
  { label: 'Service Area (Bhubaneswar)', href: '#service-area', tag: '06' },
  { label: 'EWB / Community Mission', href: '#ewb', tag: '07' },
  { label: 'FAQ', href: '#faq', tag: '08' },
  { label: 'Contact', href: '#contact', tag: '09' },
];

export default function MobileMenu({ isOpen, onClose, onOpenEnquiry }) {
  // ESC key listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex flex-col bg-[#070c1b]/98 backdrop-blur-2xl text-slate-100 overflow-y-auto"
        >
          {/* Top Header */}
          <div className="max-w-7xl w-full mx-auto p-4 sm:p-8 flex items-center justify-between border-b border-slate-800/80">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-heading font-bold text-white text-sm">
                BS
              </div>
              <div>
                <span className="font-heading font-bold text-base block leading-tight">{siteConfig.name}</span>
                <span className="text-xs text-cyan-400 font-medium">Bhubaneswar Home & Online Tuition</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-3 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700/80 transition-colors flex items-center gap-2 group"
              aria-label="Close Menu"
            >
              <span className="text-xs font-medium uppercase tracking-wider hidden sm:inline">Close</span>
              <X className="w-5 h-5 text-cyan-400 group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>

          {/* Menu Content */}
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-8 py-8 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Nav Links Column */}
            <div className="lg:col-span-7 space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400/80 block mb-4">
                Navigation & Sections
              </span>
              <nav className="flex flex-col space-y-1">
                {navItems.map((item, idx) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04, duration: 0.3 }}
                    className="group flex items-center justify-between py-3 px-4 rounded-xl hover:bg-slate-800/50 border border-transparent hover:border-cyan-500/20 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-mono text-cyan-500/60 group-hover:text-cyan-400 transition-colors">
                        {item.tag}
                      </span>
                      <span className="font-heading text-lg sm:text-2xl font-medium text-slate-200 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all">
                        {item.label}
                      </span>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all opacity-0 group-hover:opacity-100" />
                  </motion.a>
                ))}
              </nav>
            </div>

            {/* Right Quick Info & CTA Box */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-6 lg:border-l lg:border-slate-800 lg:pl-10">
              <div className="glass-panel p-6 rounded-2xl border border-slate-700/60 space-y-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 block">
                  Quick Tuition Summary
                </span>
                
                <div className="space-y-3 text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-medium">Home Tuition Service Area</strong>
                      <span>10–15 km radius from OUTR, Bhubaneswar</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-medium">Core Subjects</strong>
                      <span>Mathematics • Science • Computer Science</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-medium">Educator Background</strong>
                      <span>Integrated MSc in Math & Computing, OUTR</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800/80">
                  <button
                    onClick={() => {
                      onClose();
                      onOpenEnquiry();
                    }}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-heading font-semibold text-sm shadow-lg shadow-emerald-950/50 flex items-center justify-center gap-2 group transition-all"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-100 group-hover:scale-110 transition-transform" />
                    <span>Enquire & Book via WhatsApp</span>
                  </button>
                </div>
              </div>

              <div className="text-center text-xs text-slate-500">
                © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
