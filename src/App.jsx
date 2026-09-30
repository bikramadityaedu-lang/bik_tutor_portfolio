import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Hero from './components/Hero';
import QuickTrustStrip from './components/QuickTrustStrip';
import About from './components/About';
import TeachingPhilosophy from './components/TeachingPhilosophy';
import ModernMethodology from './components/ModernMethodology';
import Subjects from './components/Subjects';
import WhatToExpect from './components/WhatToExpect';
import ParentSection from './components/ParentSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import EWBSection from './components/EWBSection';
import ServiceArea from './components/ServiceArea';
import FAQ from './components/FAQ';
import FinalQuote from './components/FinalQuote';
import ContactCTA from './components/ContactCTA';
import EnquiryModal from './components/EnquiryModal';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquirySubject, setEnquirySubject] = useState("");

  const handleOpenEnquiry = (subject = "") => {
    setEnquirySubject(subject);
    setIsEnquiryOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#070c1b] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Top Navbar */}
      <Navbar 
        onOpenMenu={() => setIsMenuOpen(true)} 
        onOpenEnquiry={() => handleOpenEnquiry()} 
      />

      {/* Fullscreen Mobile/Desktop Overlay Menu */}
      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        onOpenEnquiry={() => handleOpenEnquiry()} 
      />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenEnquiry={() => handleOpenEnquiry()} />
        <QuickTrustStrip />
        <About onOpenEnquiry={() => handleOpenEnquiry()} />
        <TeachingPhilosophy />
        <ModernMethodology />
        <Subjects onOpenEnquiry={(sub) => handleOpenEnquiry(sub)} />
        <WhatToExpect />
        <ParentSection onOpenEnquiry={() => handleOpenEnquiry()} />
        <ExperienceTimeline />
        <EWBSection onOpenEnquiry={() => handleOpenEnquiry()} />
        <ServiceArea onOpenEnquiry={() => handleOpenEnquiry()} />
        <FAQ onOpenEnquiry={() => handleOpenEnquiry()} />
        <FinalQuote />
        <ContactCTA onOpenEnquiry={() => handleOpenEnquiry()} />
      </main>

      {/* Footer */}
      <Footer onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Central WhatsApp Enquiry Modal */}
      <EnquiryModal 
        isOpen={isEnquiryOpen} 
        onClose={() => setIsEnquiryOpen(false)} 
        initialSubject={enquirySubject} 
      />

      {/* Fixed Floating WhatsApp Button */}
      <WhatsAppButton onOpenEnquiry={() => handleOpenEnquiry()} />

    </div>
  );
}
