import React from 'react';
import { MessageSquare, MapPin, GraduationCap, ArrowUp } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Footer({ onOpenEnquiry }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040814] text-slate-400 text-sm border-t border-slate-800/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-heading font-bold text-white text-base">
                BS
              </div>
              <div>
                <span className="font-heading font-bold text-lg text-slate-100 block">{siteConfig.name}</span>
                <span className="text-xs text-cyan-400 font-medium">{siteConfig.role}</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {siteConfig.shortSupportingLine} Modern, personalized tutoring in Mathematics, Science and Computer Science across Bhubaneswar & Online.
            </p>

            <div className="text-xs text-slate-400 space-y-1">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Bhubaneswar (10–15 km radius from OUTR)</span>
              </p>
              <p className="flex items-center gap-2">
                <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                <span>Integrated MSc Math & Computing, OUTR</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-heading font-bold text-slate-200 text-xs uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              <li><a href="#home" className="hover:text-cyan-300 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-cyan-300 transition-colors">About</a></li>
              <li><a href="#teaching" className="hover:text-cyan-300 transition-colors">Teaching Philosophy</a></li>
              <li><a href="#subjects" className="hover:text-cyan-300 transition-colors">Subjects</a></li>
              <li><a href="#experience" className="hover:text-cyan-300 transition-colors">Experience & Timeline</a></li>
              <li><a href="#service-area" className="hover:text-cyan-300 transition-colors">Service Area</a></li>
              <li><a href="#ewb" className="hover:text-cyan-300 transition-colors">EWB Mission</a></li>
              <li><a href="#faq" className="hover:text-cyan-300 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Action */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-slate-200 text-xs uppercase tracking-wider">
              Tuition Enquiry
            </h4>
            <button
              onClick={() => onOpenEnquiry()}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-heading font-bold text-xs shadow-lg flex items-center justify-center gap-2 hover:from-emerald-400 hover:to-teal-500 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Enquire on WhatsApp</span>
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 {siteConfig.name}. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
