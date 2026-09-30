import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, ChevronDown, Sparkles, BookOpen, ShieldCheck, MapPin, Compass, Calculator, Atom, Code2, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const subjectHighlights = {
  math: {
    title: "Mathematics Excellence",
    icon: Calculator,
    color: "from-cyan-500 to-blue-600",
    badgeColor: "text-cyan-400 bg-cyan-950/80 border-cyan-500/30",
    formula: "f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}",
    points: [
      "Building deep numerical intuition & logic",
      "Step-by-step problem breakdown method",
      "Algebra, Geometry, Trigonometry & Calculus"
    ]
  },
  science: {
    title: "Science & Physical Laws",
    icon: Atom,
    color: "from-blue-500 to-indigo-600",
    badgeColor: "text-blue-400 bg-blue-950/80 border-blue-500/30",
    formula: "F = m \\cdot a  \\quad | \\quad E = m c^2",
    points: [
      "Connecting formulas with real-world observations",
      "Physics mechanics, energy & wave dynamics",
      "Chemistry reactions & periodic logic"
    ]
  },
  cs: {
    title: "Computer Science & Logic",
    icon: Code2,
    color: "from-indigo-500 to-cyan-500",
    badgeColor: "text-indigo-400 bg-indigo-950/80 border-indigo-500/30",
    formula: "Algorithm: O(n \\log n)  \\quad | \\quad Logic Flow",
    points: [
      "Computational logic & algorithmic thinking",
      "Data fundamentals & coding building blocks",
      "Responsible digital tool usage"
    ]
  }
};

export default function Hero({ onOpenEnquiry }) {
  const [activeTab, setActiveTab] = useState('math');
  const currentSub = subjectHighlights[activeTab];
  const Icon = currentSub.icon;

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 sm:pt-36 sm:pb-24 flex items-center justify-center overflow-hidden bg-math-pattern">
      {/* Background Ambient Glow FX */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/10 to-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Typography & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 sm:space-y-8 text-left"
          >
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>3+ Years Teaching Experience</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300">OUTR Bhubaneswar</span>
            </div>

            {/* Main Hero Headings */}
            <div className="space-y-3">
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-100 tracking-tight leading-[1.1]">
                Learn Beyond <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
                  the Syllabus.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl">
                Modern, personalized tutoring for students who want to <strong className="text-cyan-300 font-semibold">understand</strong>, <strong className="text-blue-300 font-semibold">apply</strong> and <strong className="text-indigo-300 font-semibold">grow</strong>.
              </p>
            </div>

            {/* Educator Profile Summary Card */}
            <div className="glass-panel p-5 rounded-2xl border-l-4 border-l-cyan-400 border-slate-800/80 max-w-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h2 className="font-heading font-bold text-xl text-slate-100">{siteConfig.name}</h2>
                  <p className="text-xs text-cyan-400 font-medium tracking-wide mt-0.5">{siteConfig.role}</p>
                </div>
                <div className="text-xs text-slate-400 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-200 border border-slate-700/60">Mathematics</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-200 border border-slate-700/60">Science</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-200 border border-slate-700/60">Computer Science</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-3 pt-3 border-t border-slate-800/80 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Home Tuition in Bhubaneswar (10–15 km radius from OUTR) & Online Classes</span>
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenEnquiry}
                className="py-4 px-8 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-white font-heading font-bold text-base shadow-xl shadow-emerald-950/50 hover:shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 group border border-emerald-400/30"
              >
                <MessageSquare className="w-5 h-5 text-emerald-100 group-hover:scale-110 transition-transform" />
                <span>Book / Enquire on WhatsApp</span>
              </button>

              <a
                href="#teaching"
                className="py-4 px-8 rounded-xl bg-slate-800/70 hover:bg-slate-800 text-slate-200 hover:text-white font-heading font-semibold text-base border border-slate-700/80 hover:border-cyan-500/40 transition-all flex items-center justify-center gap-2 text-center"
              >
                <span>Explore My Teaching</span>
              </a>
            </div>

            {/* Trust Micro-Bullets */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-400 font-medium">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                Integrated MSc Math & Computing (OUTR)
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-blue-400" />
                Concept-Based Learning
              </span>
            </div>

          </motion.div>

          {/* Right Column: Premium Interactive Academic Feature Dashboard (No DP) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            {/* Orbital Decorative Graphics */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] rounded-full stroke-cyan-500/10 border border-cyan-500/20 animate-[spin_60s_linear_infinite]" />
              <div className="w-[260px] sm:w-[340px] h-[260px] sm:h-[340px] rounded-full border border-dashed border-blue-500/20 animate-[spin_45s_linear_infinite_reverse]" />
            </div>

            {/* Academic Dashboard Container */}
            <div className="relative w-full max-w-[420px] glass-card rounded-3xl p-6 sm:p-7 border border-slate-700/80 shadow-2xl space-y-6">
              
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-heading font-bold text-sm text-slate-100 block">Tutoring Methodology</span>
                    <span className="text-[11px] text-cyan-400 font-medium">Interactive Subject Explorer</span>
                  </div>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              {/* Subject Tabs Switcher */}
              <div className="grid grid-cols-3 gap-2 bg-slate-900/90 p-1.5 rounded-xl border border-slate-800">
                {[
                  { id: 'math', label: 'Maths', icon: Calculator },
                  { id: 'science', label: 'Science', icon: Atom },
                  { id: 'cs', label: 'CS', icon: Code2 }
                ].map(tab => {
                  const TabIcon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-heading font-semibold transition-all ${
                        isActive
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <TabIcon className="w-3.5 h-3.5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Content Display */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  {/* Subject Title & Pill */}
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading font-bold text-lg text-slate-100 flex items-center gap-2">
                      <Icon className="w-5 h-5 text-cyan-400" />
                      <span>{currentSub.title}</span>
                    </h3>
                    <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${currentSub.badgeColor}`}>
                      Core Focus
                    </span>
                  </div>

                  {/* Formula / Visual Graphic Snippet */}
                  <div className="p-3.5 rounded-xl bg-[#060c1e] border border-slate-800 font-mono text-xs text-cyan-300 flex items-center justify-between">
                    <span>{currentSub.formula}</span>
                    <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
                  </div>

                  {/* Key Highlights */}
                  <div className="space-y-2.5 pt-1">
                    {currentSub.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>

                </motion.div>
              </AnimatePresence>

              {/* Service Area & OUTR Footer Badge inside Dashboard */}
              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-200 block leading-tight">Bhubaneswar Home Tuition</span>
                      <span className="text-[11px] text-slate-400">10–15 km radius from OUTR</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onOpenEnquiry(currentSub.title)}
                  className="w-full py-3 px-4 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 font-heading font-semibold text-xs border border-cyan-500/30 hover:border-cyan-400 transition-all flex items-center justify-center gap-2 group/b"
                >
                  <span>Enquire for {currentSub.title}</span>
                  <ArrowRight className="w-4 h-4 group-hover/b:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex flex-col items-center justify-center space-y-2 text-slate-400 text-xs">
          <span>Scroll to explore</span>
          <a href="#trust-strip" className="animate-bounce p-1.5 rounded-full bg-slate-800/80 hover:bg-slate-700 text-cyan-400 transition-colors">
            <ChevronDown className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
