import React from 'react';
import { motion } from 'framer-motion';

export default function FinalQuote() {
  return (
    <section className="py-24 relative bg-gradient-to-b from-[#070c1b] via-[#0b1430] to-[#070c1b] border-t border-slate-800/80 overflow-hidden text-center bg-math-pattern">
      
      {/* Glow FX */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
        
        {/* Mathematical Floating Formula Watermark */}
        <div className="text-[11px] font-mono text-cyan-500/50 uppercase tracking-widest flex flex-wrap justify-center gap-4">
          <span>e^(iπ) + 1 = 0</span>
          <span>•</span>
          <span>F = ma</span>
          <span>•</span>
          <span>∇ · E = ρ / ε₀</span>
          <span>•</span>
          <span>O(1) Conceptual Clarity</span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-100 tracking-tight leading-tight max-w-4xl mx-auto"
        >
          "Don't just learn to pass. <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
            Learn to understand.
          </span>"
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-heading font-bold text-lg sm:text-2xl text-cyan-300 uppercase tracking-widest pt-2"
        >
          Learn. Apply. Grow.
        </motion.p>

      </div>
    </section>
  );
}
