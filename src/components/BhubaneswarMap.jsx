import React, { useState } from 'react';
import { MapPin, Navigation, Compass, Info } from 'lucide-react';
import { bhubaneswarLocalities } from '../data/siteData';

export default function BhubaneswarMap({ onOpenEnquiry }) {
  const [activeArea, setActiveArea] = useState(null);

  // Geographic SVG map points scaled for 600x500 viewBox
  const landmarks = [
    { id: 'outr', name: 'OUTR (Ghatikia)', x: 180, y: 260, dist: '0 km', type: 'core', desc: 'Base location / University Campus' },
    { id: 'khandagiri', name: 'Khandagiri', x: 230, y: 240, dist: '3 km', type: 'primary', desc: 'Primary Home Tuition Zone' },
    { id: 'pokhariput', name: 'Pokhariput', x: 260, y: 310, dist: '5 km', type: 'primary', desc: 'Primary Home Tuition Zone' },
    { id: 'kalinga', name: 'Kalinga Nagar', x: 160, y: 320, dist: '4 km', type: 'primary', desc: 'Primary Home Tuition Zone' },
    { id: 'nayapalli', name: 'Nayapalli & CRPF', x: 310, y: 210, dist: '7 km', type: 'primary', desc: 'Primary Home Tuition Zone' },
    { id: 'jaydev', name: 'Jaydev Vihar', x: 370, y: 190, dist: '9 km', type: 'extended', desc: 'Extended Tuition Zone' },
    { id: 'saheed', name: 'Saheed Nagar', x: 420, y: 240, dist: '11 km', type: 'extended', desc: 'Extended Tuition Zone' },
    { id: 'patia', name: 'Patia / KIIT', x: 450, y: 120, dist: '14 km', type: 'extended', desc: 'Extended Tuition Zone' },
    { id: 'master', name: 'Master Canteen', x: 390, y: 280, dist: '10 km', type: 'extended', desc: 'Extended Tuition Zone' },
    { id: 'oldtown', name: 'Old Town', x: 340, y: 360, dist: '12 km', type: 'extended', desc: 'Extended Tuition Zone' },
  ];

  return (
    <div className="w-full glass-card rounded-3xl p-4 sm:p-8 border border-cyan-500/20 shadow-2xl relative overflow-hidden space-y-6">
      
      {/* Top Map Header & Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-100">
              Bhubaneswar Home Tuition Map
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Approximate 10–15 km service radius centered around OUTR, Bhubaneswar
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-3 text-[11px] font-medium text-slate-300">
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300">
            <span className="w-2 h-2 rounded-full bg-cyan-400" /> OUTR Base
          </span>
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-700">
            <span className="w-2 h-2 rounded-full bg-blue-400" /> Primary Zone (0–8 km)
          </span>
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-700">
            <span className="w-2 h-2 rounded-full bg-indigo-400" /> Extended Zone (8–15 km)
          </span>
        </div>
      </div>

      {/* SVG Canvas Container */}
      <div className="relative w-full aspect-[16/10] bg-[#070d1e] rounded-2xl border border-slate-800/80 overflow-hidden shadow-inner group">
        
        {/* Subtle Grid Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#38bdf8" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* SVG Vector Roads & Landmarks */}
        <svg viewBox="0 0 600 450" className="w-full h-full relative z-10 select-none">
          <defs>
            {/* Radial Gradient for 10-15km Radius Ring */}
            <radialGradient id="radiusGradient" cx="180" cy="260" r="220" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.25" />
              <stop offset="60%" stopColor="#3b82f6" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* 10-15 km Service Radius Circle */}
          <circle cx="180" cy="260" r="180" fill="url(#radiusGradient)" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="6 4" strokeOpacity="0.4" />
          <circle cx="180" cy="260" r="100" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.3" fill="none" />

          {/* Service Area Label on Radius Circle */}
          <text x="350" y="275" fill="#38bdf8" fontSize="10" fontFamily="sans-serif" opacity="0.6">
            ~10-15 km Radius Limit
          </text>

          {/* Major Roads (Stylized Geography) */}
          {/* NH16 Highway */}
          <path d="M 50 380 Q 220 280 520 180" stroke="#334155" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M 50 380 Q 220 280 520 180" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="8 4" fill="none" opacity="0.6" />
          <text x="80" y="370" fill="#64748b" fontSize="9" fontWeight="bold">NH 16</text>

          {/* Nandan Kanan Road */}
          <path d="M 370 190 Q 420 150 460 80" stroke="#334155" strokeWidth="3" fill="none" />
          <text x="440" y="100" fill="#64748b" fontSize="9">Nandankanan Rd</text>

          {/* Kalinga Nagar Main Rd */}
          <path d="M 120 340 Q 180 260 310 210" stroke="#334155" strokeWidth="3" fill="none" />
          <text x="140" y="300" fill="#64748b" fontSize="9">Kalinga Nagar Rd</text>

          {/* Janpath */}
          <path d="M 390 280 L 420 240 L 450 120" stroke="#334155" strokeWidth="3" fill="none" />
          <text x="420" y="260" fill="#64748b" fontSize="9">Janpath</text>

          {/* OUTR Pulsing Core Signal */}
          <circle cx="180" cy="260" r="28" fill="#06b6d4" fillOpacity="0.15">
            <animate attributeName="r" values="18;36;18" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;0.1;0.6" dur="3s" repeatCount="indefinite" />
          </circle>

          {/* Interactive Landmark Pins */}
          {landmarks.map((lm) => {
            const isOutr = lm.id === 'outr';
            const isHovered = activeArea === lm.id;
            
            return (
              <g 
                key={lm.id}
                transform={`translate(${lm.x}, ${lm.y})`}
                onMouseEnter={() => setActiveArea(lm.id)}
                onMouseLeave={() => setActiveArea(null)}
                className="cursor-pointer transition-transform duration-200"
              >
                {/* Pin Circle */}
                <circle 
                  cx="0" 
                  cy="0" 
                  r={isOutr ? 10 : isHovered ? 8 : 6} 
                  fill={isOutr ? '#00f2fe' : lm.type === 'primary' ? '#38bdf8' : '#818cf8'}
                  stroke="#070d1e"
                  strokeWidth="2"
                  className="transition-all"
                />

                {/* Inner Glow */}
                {isOutr && (
                  <circle cx="0" cy="0" r="4" fill="#ffffff" />
                )}

                {/* Text Label */}
                <text
                  x="12"
                  y="4"
                  fill={isOutr ? '#00f2fe' : isHovered ? '#ffffff' : '#cbd5e1'}
                  fontSize={isOutr ? "12" : "10"}
                  fontWeight={isOutr ? "bold" : "500"}
                  className="pointer-events-none transition-colors"
                >
                  {lm.name} ({lm.dist})
                </text>
              </g>
            );
          })}
        </svg>

        {/* Hover Information Tooltip Overlay */}
        {activeArea && (
          <div className="absolute bottom-4 left-4 p-3 rounded-xl glass-panel border border-cyan-500/40 text-left pointer-events-none max-w-xs shadow-xl animate-fade-in">
            {(() => {
              const lm = landmarks.find(l => l.id === activeArea);
              if (!lm) return null;
              return (
                <div>
                  <span className="font-heading font-bold text-sm text-cyan-300 block">{lm.name}</span>
                  <span className="text-xs text-slate-300 block">Distance: ~{lm.dist} from OUTR</span>
                  <span className="text-[11px] text-slate-400">{lm.desc}</span>
                </div>
              );
            })()}
          </div>
        )}

      </div>

      {/* Localities Chips List */}
      <div className="space-y-3 pt-2">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
          Key Home Tuition Localities in Bhubaneswar:
        </span>
        <div className="flex flex-wrap gap-2">
          {bhubaneswarLocalities.map((loc) => (
            <div 
              key={loc.name}
              className="px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 text-xs flex items-center gap-2 hover:border-cyan-500/40 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span className="font-medium text-slate-200">{loc.name}</span>
              <span className="text-[10px] text-slate-400 font-mono">({loc.distance})</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
