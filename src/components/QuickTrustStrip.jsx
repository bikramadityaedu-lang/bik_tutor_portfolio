import React from 'react';
import { motion } from 'framer-motion';
import { trustStats } from '../data/siteData';

export default function QuickTrustStrip() {
  return (
    <section id="trust-strip" className="relative py-8 bg-[#091024] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {trustStats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card p-5 rounded-2xl flex items-start gap-4 border border-slate-800/90 hover:border-cyan-500/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 group-hover:bg-cyan-500/20 group-hover:scale-105 transition-all">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <span className="font-heading text-xl sm:text-2xl font-bold text-slate-100 block tracking-tight group-hover:text-cyan-300 transition-colors">
                    {item.stat}
                  </span>
                  <h3 className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mt-0.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-snug">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
