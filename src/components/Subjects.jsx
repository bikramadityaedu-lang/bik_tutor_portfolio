import React from 'react';
import { motion } from 'framer-motion';
import { subjectsData } from '../data/siteData';
import { BookOpen, CheckCircle, ArrowRight, Calculator, Atom, Code2 } from 'lucide-react';

const subjectIcons = {
  mathematics: Calculator,
  science: Atom,
  'computer-science': Code2
};

export default function Subjects({ onOpenEnquiry }) {
  return (
    <section id="subjects" className="py-20 sm:py-28 relative bg-[#091024] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-widest">
            <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
            <span>Core Curriculum</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-100 tracking-tight">
            Core Academic <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Subjects</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Focused tutoring across fundamental STEM subjects to strengthen logical reasoning and academic performance.
          </p>
        </div>

        {/* 3 Subject Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {subjectsData.map((sub, idx) => {
            const Icon = subjectIcons[sub.id] || BookOpen;
            return (
              <motion.div
                key={sub.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className={`glass-card p-8 rounded-3xl border border-slate-800 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${sub.glowColor}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className={`w-7 h-7 ${sub.iconColor}`} />
                    </div>
                    <span className="text-xs font-bold text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-500/30">
                      {sub.badge}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-2xl text-slate-100 mb-2 group-hover:text-cyan-300 transition-colors">
                    {sub.title}
                  </h3>

                  <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                    {sub.tagline}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-slate-800/80">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">Key Focus Areas:</span>
                    {sub.highlights.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-slate-800">
                  <button
                    onClick={() => onOpenEnquiry(sub.title)}
                    className="w-full py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-cyan-500 hover:text-slate-950 text-cyan-300 font-heading font-semibold text-xs sm:text-sm border border-cyan-500/30 hover:border-cyan-400 transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Ask About Your Class & Subject</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Disclaimer / Customization Box */}
        <div className="mt-12 text-center bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-300">
            📌 <em>Classes and subjects are discussed based on the student's academic level, school board curriculum, and individual learning requirements.</em>
          </p>
        </div>

      </div>
    </section>
  );
}
