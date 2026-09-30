import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function WhatsAppButton({ onOpenEnquiry }) {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={onOpenEnquiry}
        aria-label="Enquire on WhatsApp"
        className="flex items-center gap-2.5 py-3 px-5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-heading font-semibold text-sm shadow-2xl shadow-emerald-950/80 hover:shadow-emerald-500/40 border border-emerald-400/40 transition-all transform hover:-translate-y-1 group"
      >
        <div className="relative">
          <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-200 animate-ping" />
        </div>
        <span className="inline">WhatsApp</span>
      </button>
    </div>
  );
}
