import React from 'react';
import { motion } from 'framer-motion';
import { parentAssurances } from '../data/siteData';
import { HeartHandshake, ShieldCheck, ArrowRight } from 'lucide-react';

export default function ParentSection({ onOpenEnquiry }) {
  return (
    <section id="parents" className="py-20 sm:py-28 relative bg-[#091024] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-widest">
            <HeartHandshake className="w-3.5 h-3.5 text-cyan-400" />
            <span>Parent Partnerships</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-100 tracking-tight">
            For Parents, Learning Should Be <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">More Than Marks</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            "Parents want their children to perform academically, but meaningful education also develops confidence, discipline, curiosity and the ability to think independently."
          </p>
        </div>

        {/* Parent Assurances Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {parentAssurances.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:bg-cyan-500/20 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Parent Callout Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-heading font-bold text-xl text-slate-100">Would you like to discuss your child's academic requirements?</h3>
            <p className="text-xs sm:text-sm text-slate-400">Feel free to reach out for a direct consultation regarding subjects, schedule, and home tuition location.</p>
          </div>
          <button
            onClick={onOpenEnquiry}
            className="py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-heading font-bold text-sm shadow-lg shrink-0 flex items-center gap-2"
          >
            <span>Connect as a Parent</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
