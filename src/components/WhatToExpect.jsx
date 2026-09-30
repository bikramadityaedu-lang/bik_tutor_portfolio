import React from 'react';
import { motion } from 'framer-motion';
import { studentExpectations } from '../data/siteData';
import { Sparkles } from 'lucide-react';

export default function WhatToExpect() {
  return (
    <section className="py-20 sm:py-28 relative bg-[#070c1b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Student Benefits</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-100 tracking-tight">
            A Learning Experience <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Built Around the Student</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Every session is designed to foster academic growth, intellectual self-reliance, and personal confidence.
          </p>
        </div>

        {/* 12 Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {studentExpectations.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="glass-card p-5 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-all flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-heading font-semibold text-sm text-slate-200 group-hover:text-cyan-300 transition-colors">
                  {item.text}
                </span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
