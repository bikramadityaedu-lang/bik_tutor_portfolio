import React from 'react';
import { motion } from 'framer-motion';
import { learningJourney } from '../data/siteData';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function TeachingPhilosophy() {
  return (
    <section id="teaching" className="py-20 sm:py-28 relative bg-[#091024] border-t border-slate-800/80 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Learning Philosophy</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-100 tracking-tight leading-tight">
            "Education is not just about finishing the syllabus. It's about building the ability to <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">understand, think and grow.</span>"
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            An interactive 5-step learning path engineered to transform academic struggle into confident mastery.
          </p>
        </div>

        {/* 5-Step Animated Learning Journey */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {learningJourney.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className={`glass-card p-6 rounded-3xl border ${item.border} hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden`}
              >
                {/* Top Step Pill */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-full border border-cyan-500/30">
                      STEP {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-2xl text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-400 mt-0.5 mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Step Indicator Line */}
                <div className="pt-4 mt-6 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Phase {idx + 1} of 5</span>
                  {idx < 4 && <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
