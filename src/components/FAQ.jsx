import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqItems } from '../data/faqData';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';

export default function FAQ({ onOpenEnquiry }) {
  const [openIdx, setOpenIdx] = useState(0); // First open by default

  const toggleIdx = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 relative bg-[#091024] border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-100 tracking-tight">
            Have Questions? <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Get Quick Answers</span>
          </h2>

          <p className="text-slate-400 text-base">
            Clear information about subjects, home tuition availability, online classes, and enquiry process.
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-4">
          {faqItems.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-slate-800/80 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleIdx(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-heading font-semibold text-base sm:text-lg text-slate-100 hover:text-cyan-300 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-cyan-400/70 bg-cyan-950/80 px-2.5 py-1 rounded-md">
                      Q{idx + 1}
                    </span>
                    <span>{item.question}</span>
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center shrink-0 text-cyan-400 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-cyan-500/20' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Help */}
        <div className="mt-12 text-center pt-8 border-t border-slate-800/60">
          <p className="text-xs sm:text-sm text-slate-400 mb-4">
            Have a question that isn't answered here?
          </p>
          <button
            onClick={() => onOpenEnquiry()}
            className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs sm:text-sm font-heading font-semibold border border-slate-700 transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Ask Me Directly on WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
}
