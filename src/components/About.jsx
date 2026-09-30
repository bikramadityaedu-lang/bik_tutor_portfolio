import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Brain, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import educatorPhoto from '../assets/educator_photo.jpg';

export default function About({ onOpenEnquiry }) {
  return (
    <section id="about" className="py-20 sm:py-28 relative bg-[#070c1b] overflow-hidden">
      {/* Soft Background Accents */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-widest">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>About The Educator</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-100 tracking-tight">
            More Than <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">a Tutor.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Combining rigorous academic logic with practical teaching methodology to mentor confident, independent learners.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Educator Photo & Philosophy Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Educator Photo Card */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl group">
              <img 
                src={educatorPhoto} 
                alt="Bikramaditya Sahoo - Modern Educator & Private Tutor in Bhubaneswar" 
                className="w-full h-[320px] sm:h-[360px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070c1b] via-[#070c1b]/20 to-transparent opacity-90" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl glass-panel border border-slate-700/60 bg-[#0d162d]/85 backdrop-blur-md flex items-center justify-between">
                <div>
                  <span className="text-sm font-bold text-slate-100 block">{siteConfig.name}</span>
                  <span className="text-xs text-cyan-400 font-medium">MSc Math & Computing (OUTR)</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold shrink-0">
                  3+ Yrs Exp
                </span>
              </div>
            </div>

            <div className="glass-card p-6 rounded-3xl border border-slate-800 relative space-y-5">
              <blockquote className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed italic border-l-2 border-cyan-400 pl-4">
                "I believe a good teacher does more than explain a chapter. A good teacher helps a student develop the confidence to ask questions and think independently."
              </blockquote>

              <div className="space-y-2.5 pt-3 border-t border-slate-800/80 text-xs sm:text-sm">
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span><strong>3+ Years</strong> active teaching & mentoring</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span><strong>Integrated MSc</strong> in Math & Computing (OUTR)</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span><strong>Mathematics • Science • Computer Science</strong></span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Personal Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <h3 className="font-heading font-bold text-2xl text-slate-100">
                Hi, I'm <span className="text-cyan-300">{siteConfig.name}</span>.
              </h3>
              
              <p>
                As a student pursuing an Integrated MSc in Mathematics and Computing at the Odisha University of Technology and Research (OUTR), Bhubaneswar, I have always had a deep passion for understanding how numbers, logical systems, and natural phenomena work together.
              </p>

              <p>
                Over the past <strong>3+ years</strong> of private tutoring, I have mentored numerous students across Mathematics, Science, and Computer Science. My focus is not just helping students pass their upcoming examinations, but helping them build a strong conceptual foundation that makes learning enjoyable and sustainable.
              </p>

              <p className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 text-slate-200 italic">
                "My academic and technology background also allows me to incorporate modern digital and AI-assisted learning tools where they genuinely improve understanding and problem-solving."
              </p>

              <p>
                Whether it's breaking down complex algebraic proofs into intuitive steps, illustrating physics laws with real-world examples, or teaching fundamental computing logic, my goal is to guide each student at their own comfortable pace while pushing their thinking further.
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={onOpenEnquiry}
                className="py-3.5 px-6 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-heading font-bold text-sm transition-all shadow-lg shadow-cyan-500/20"
              >
                Discuss Tuition Requirements
              </button>
              <a
                href="#subjects"
                className="py-3.5 px-6 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 font-heading font-semibold text-sm border border-slate-700/80 transition-all"
              >
                View Core Subjects
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
