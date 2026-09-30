import React from 'react';
import { motion } from 'framer-motion';
import { timelineEvents } from '../data/siteData';
import { Award, BookOpen, GraduationCap, Users, Clock } from 'lucide-react';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 sm:py-28 relative bg-[#070c1b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-widest">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>Academic Journey</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-100 tracking-tight">
            Education & <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Teaching Timeline</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            A transparent overview of academic qualifications and teaching journey.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Timeline Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 via-blue-500/30 to-indigo-500/10 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-8 sm:space-y-12">
            {timelineEvents.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={item.period + item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-6 sm:gap-0`}
                >
                  {/* Content Card */}
                  <div className={`w-full sm:w-[calc(50%-2rem)] ${isEven ? 'sm:pl-0 sm:text-right' : 'sm:pr-0 sm:text-left'}`}>
                    <div className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all space-y-2 group">
                      <span className="inline-block px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 font-mono text-xs font-bold border border-cyan-500/30">
                        {item.period}
                      </span>
                      <h3 className="font-heading font-bold text-xl text-slate-100 group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>
                      <h4 className="text-xs font-semibold text-cyan-400">
                        {item.subtitle}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Central Node Badge */}
                  <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/20 z-10 hidden sm:flex">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
