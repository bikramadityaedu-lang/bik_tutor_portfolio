import React from 'react';
import { motion } from 'framer-motion';
import { ewbMission } from '../data/siteData';
import { Heart, Users, CheckCircle, Sparkles, HandHeart } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import educatorPhoto from '../assets/educator_photo.jpg';

export default function EWBSection({ onOpenEnquiry }) {
  return (
    <section id="ewb" className="py-20 sm:py-28 relative bg-[#091024] border-t border-slate-800/80 overflow-hidden">
      
      {/* Soft Ambient Glow */}
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-rose-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Authentic Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-950/60 border border-rose-500/30 text-rose-300 text-xs font-semibold uppercase tracking-widest">
              <HandHeart className="w-3.5 h-3.5 text-rose-400" />
              <span>Social Education Mission</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-100 tracking-tight">
              Learning Should Be <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">Accessible to Everyone</span>
            </h2>

            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-rose-500/20 bg-gradient-to-br from-slate-900/90 to-[#0c142c]/90 space-y-4">
              <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block">
                {ewbMission.organization}
              </span>

              <blockquote className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed italic border-l-2 border-rose-400 pl-4">
                "{ewbMission.quote}"
              </blockquote>

              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                {ewbMission.points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenEnquiry}
                className="py-3.5 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-heading font-semibold text-sm border border-slate-700 transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Education With Purpose</span>
              </button>
            </div>

          </motion.div>

          {/* Right Column: Classroom Teaching Photo Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="w-full relative rounded-3xl overflow-hidden border border-rose-500/30 shadow-2xl group">
              <img 
                src={educatorPhoto} 
                alt="Bikramaditya Sahoo with students - EWB Social Education Mission" 
                className="w-full h-[360px] sm:h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#091024] via-[#091024]/30 to-transparent opacity-85" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl glass-panel border border-rose-500/30 bg-[#0c142c]/90 backdrop-blur-md">
                <span className="font-heading font-bold text-sm text-slate-100 block">Social Education Mission</span>
                <span className="text-xs text-rose-300 font-medium block mt-0.5">Voluntary weekend teaching with EWB OUTR</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
