import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, MapPin, Laptop, Sparkles, CheckCircle2, Phone } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function ContactCTA({ onOpenEnquiry }) {
  return (
    <section id="contact" className="py-20 sm:py-28 relative bg-[#070c1b] border-t border-slate-800/80">
      
      {/* Background Glow FX */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-widest">
          <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
          <span>Get in Touch</span>
        </div>

        <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-100 tracking-tight leading-tight">
          Let's Start the <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">Learning Journey</span>
        </h2>

        <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Have a question about classes, subjects, home tuition or online learning? Tell me what you're looking for and I'll get back to you on WhatsApp.
        </p>

        {/* Quick Highlights Pill Row */}
        <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm text-slate-300">
          <span className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 font-semibold">
            <Phone className="w-4 h-4 text-emerald-400" />
            WhatsApp: {siteConfig.displayPhone}
          </span>
          <span className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-slate-900 border border-slate-800">
            <MapPin className="w-4 h-4 text-cyan-400" />
            Bhubaneswar Home Tuition (10–15 km radius from OUTR)
          </span>
          <span className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-slate-900 border border-slate-800">
            <Laptop className="w-4 h-4 text-blue-400" />
            Online Classes Available
          </span>
        </div>

        {/* Big CTAs */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onOpenEnquiry()}
            className="w-full sm:w-auto py-4 px-10 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-white font-heading font-bold text-lg shadow-2xl shadow-emerald-950/60 hover:shadow-emerald-500/30 transition-all flex items-center justify-center gap-3 border border-emerald-400/30 group"
          >
            <MessageSquare className="w-6 h-6 text-emerald-100 group-hover:scale-110 transition-transform" />
            <span>💬 Contact Me on WhatsApp</span>
          </button>

          <button
            onClick={() => onOpenEnquiry()}
            className="w-full sm:w-auto py-4 px-8 rounded-2xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 font-heading font-semibold text-base border border-slate-700 hover:border-cyan-500/40 transition-all"
          >
            Book a Tuition Enquiry
          </button>
        </div>

      </div>
    </section>
  );
}
