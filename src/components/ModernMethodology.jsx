import React from 'react';
import { motion } from 'framer-motion';
import { methodologyPillars } from '../data/siteData';
import { Cpu, Check } from 'lucide-react';

export default function ModernMethodology() {
  return (
    <section id="methodology" className="py-20 sm:py-28 relative bg-[#070c1b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-widest">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Pedagogy & Methodology</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-100 tracking-tight">
            Traditional Teaching + <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Modern Learning</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Technology and digital aids enrich the learning process, but human mentoring and conceptual clarity remain at the center of every session.
          </p>
        </div>

        {/* Highlight Quote Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-cyan-950/80 via-blue-950/60 to-indigo-950/80 border border-cyan-500/30 shadow-2xl text-center relative overflow-hidden"
        >
          <div className="relative z-10 space-y-2">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block">Core Methodology Motto</span>
            <p className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
              "Technology is a tool. Understanding remains the goal."
            </p>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto pt-2">
              We leverage AI tools, visual simulations, and digital problem sets where helpful, while keeping core human explanation and student effort paramount.
            </p>
          </div>
        </motion.div>

        {/* 6 Methodology Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {methodologyPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 space-y-4 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:bg-cyan-500/20 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold text-cyan-300 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
                    {pillar.tag}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-slate-100 group-hover:text-cyan-300 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
