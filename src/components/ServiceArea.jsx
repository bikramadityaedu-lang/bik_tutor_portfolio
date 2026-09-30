import React from 'react';
import { motion } from 'framer-motion';
import BhubaneswarMap from './BhubaneswarMap';
import { MapPin, Laptop, ArrowRight, Compass, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function ServiceArea({ onOpenEnquiry }) {
  return (
    <section id="service-area" className="py-20 sm:py-28 relative bg-[#070c1b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>Service Coverage</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-100 tracking-tight">
            Personalized Home Tuition <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">in Bhubaneswar</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Personalized learning right at your doorstep within approximately <strong>10–15 km radius of OUTR, Bhubaneswar</strong>, as well as interactive online classes.
          </p>
        </div>

        {/* Custom Map Component */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <BhubaneswarMap onOpenEnquiry={onOpenEnquiry} />
        </motion.div>

        {/* 3 Option Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all space-y-3">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-slate-100">Home Tuition</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Personalized face-to-face learning at the student's residence in Bhubaneswar within ~10–15 km of OUTR.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-blue-500/40 transition-all space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Laptop className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-slate-100">Online Classes</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Interactive, resource-rich digital sessions tailored for students seeking flexible remote learning.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-indigo-500/40 transition-all space-y-3">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-slate-100">Flexible Discussion</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Discuss your student's class level, subject requirements, specific locality, and preferred schedule directly.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => onOpenEnquiry()}
            className="py-4 px-8 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-white font-heading font-bold text-base shadow-xl shadow-emerald-950/50 hover:shadow-emerald-500/25 transition-all inline-flex items-center gap-3 group border border-emerald-400/30"
          >
            <span>Check Tuition Availability →</span>
          </button>
        </div>

      </div>
    </section>
  );
}
