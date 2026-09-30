import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageSquare, Send, CheckCircle2, MapPin, User, BookOpen, AlertCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function EnquiryModal({ isOpen, onClose, initialSubject = "" }) {
  const [formData, setFormData] = useState({
    name: '',
    role: 'Parent', // Parent or Student
    studentClass: 'Class 10',
    subject: initialSubject || 'Mathematics',
    tuitionType: 'Home Tuition', // Home Tuition, Online Class, Either / Discuss
    location: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialSubject) {
      setFormData(prev => ({ ...prev, subject: initialSubject }));
    }
  }, [initialSubject]);

  // ESC key handler
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.studentClass) newErrors.studentClass = 'Please select class';
    if (!formData.subject) newErrors.subject = 'Please select subject';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Construct WhatsApp message text
    const messageLines = [
      `Hello Bikramaditya,`,
      ``,
      `I would like to enquire about tuition classes.`,
      ``,
      `• Name: ${formData.name.trim()}`,
      `• I am a: ${formData.role}`,
      `• Student's Class: ${formData.studentClass}`,
      `• Subject: ${formData.subject}`,
      `• Tuition Type: ${formData.tuitionType}`,
      formData.location.trim() ? `• Location: ${formData.location.trim()}` : null,
      formData.message.trim() ? `\nAdditional Message:\n${formData.message.trim()}` : null,
      ``,
      `I would like to discuss availability and further details.`,
      `Thank you.`
    ].filter(line => line !== null).join('\n');

    const encodedText = encodeURIComponent(messageLines);
    const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodedText}`;

    // Open WhatsApp in new tab/app
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    // Reset & Close
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#040814]/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-xl bg-[#0b142d] border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden z-10 my-auto text-slate-100"
          >
            {/* Modal Header */}
            <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 to-[#0c1836] border-b border-slate-800 flex items-start justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-[11px] font-semibold uppercase tracking-wider mb-2">
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Tuition Enquiry • WhatsApp {siteConfig.displayPhone}</span>
                </div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-100">
                  Book / Enquire via WhatsApp
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Fill in your details below. Clicking continue will open WhatsApp with your pre-filled inquiry.
                </p>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
              
              {/* Name Input */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Your Full Name <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter parent or student name"
                    className={`w-full pl-10 pr-4 py-3 bg-slate-900/90 border ${
                      errors.name ? 'border-rose-500' : 'border-slate-700/80 focus:border-cyan-400'
                    } rounded-xl text-slate-100 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all`}
                  />
                </div>
                {errors.name && <p className="text-xs text-rose-400 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.name}</p>}
              </div>

              {/* Role Radio Select */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  I am a <span className="text-rose-400">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {['Parent', 'Student'].map((r) => (
                    <label
                      key={r}
                      className={`flex items-center justify-center gap-2 p-3 rounded-xl border cursor-pointer text-sm font-medium transition-all ${
                        formData.role === r
                          ? 'bg-cyan-500/10 border-cyan-400 text-cyan-300'
                          : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <input
                        type="radio"
                        name="role"
                        value={r}
                        checked={formData.role === r}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <span>{r === 'Parent' ? '👨‍👩‍👧 Parent' : '🎓 Student'}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Class & Subject Dropdowns Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Student's Class */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Student's Class <span className="text-rose-400">*</span>
                  </label>
                  <select
                    name="studentClass"
                    value={formData.studentClass}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/90 border border-slate-700/80 focus:border-cyan-400 rounded-xl text-slate-100 text-sm focus:outline-none transition-all"
                  >
                    {['Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12', 'Other'].map(cls => (
                      <option key={cls} value={cls} className="bg-slate-900 text-slate-100">{cls}</option>
                    ))}
                  </select>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Primary Subject <span className="text-rose-400">*</span>
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/90 border border-slate-700/80 focus:border-cyan-400 rounded-xl text-slate-100 text-sm focus:outline-none transition-all"
                  >
                    {['Mathematics', 'Science', 'Computer Science', 'Multiple Subjects', 'Other'].map(sub => (
                      <option key={sub} value={sub} className="bg-slate-900 text-slate-100">{sub}</option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Tuition Type Select */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Preferred Tuition Mode
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'Home Tuition', label: '🏠 Home Tuition' },
                    { id: 'Online Class', label: '💻 Online Class' },
                    { id: 'Either / Discuss', label: '💬 Either / Discuss' }
                  ].map((mode) => (
                    <button
                      type="button"
                      key={mode.id}
                      onClick={() => setFormData(prev => ({ ...prev, tuitionType: mode.id }))}
                      className={`py-2.5 px-2 rounded-xl border text-xs font-medium transition-all ${
                        formData.tuitionType === mode.id
                          ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {mode.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Location Input */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Location / Locality in Bhubaneswar
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Ghatikia, Pokhariput, Khandagiri, Nayapalli"
                    className="w-full pl-10 pr-4 py-3 bg-slate-900/90 border border-slate-700/80 focus:border-cyan-400 rounded-xl text-slate-100 text-sm focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Additional Message (Optional)
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Mention specific learning goals, board (CBSE/ICSE/State), or timing preferences..."
                  className="w-full p-3 bg-slate-900/90 border border-slate-700/80 focus:border-cyan-400 rounded-xl text-slate-100 text-sm focus:outline-none transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-white font-heading font-bold text-base shadow-lg shadow-emerald-950/50 flex items-center justify-center gap-2 group transition-all"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <span>Continue to WhatsApp →</span>
                </button>
                <p className="text-[11px] text-center text-slate-500 mt-2">
                  🔒 Opens WhatsApp with your pre-filled inquiry. You can review before sending.
                </p>
              </div>

            </form>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
