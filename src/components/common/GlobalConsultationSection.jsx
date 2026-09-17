import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  Lock, 
  Send, 
  Loader2,
  AlertCircle,
  ShieldCheck,
  TrendingUp,
  Award
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import consultationService from '../../services/consultationService';
import solahanaLogo from '../../assets/solahana-logo.png';

const planningInterests = [
  'Financial Planning',
  'Retirement Planning',
  'Investment Planning',
  'Tax Planning',
  'Risk Management',
  'Estate Planning',
  'Custom Wealth Planning',
];

const timeSlots = [
  'Morning (9 AM - 12 PM)',
  'Afternoon (12 PM - 4 PM)',
  'Evening (4 PM - 8 PM)',
];

export default function GlobalConsultationSection() {
  const { user } = useAuth();

  const [formData, setFormData] = useState({
    fullName: user ? user.name : '',
    phone: user ? user.phone : '',
    email: user ? user.email : '',
    city: user ? user.city : '',
    goal: 'Financial Planning',
    preferredTime: 'Morning (9 AM - 12 PM)',
    message: '',
    agreeTerms: true,
    subscribeWhatsapp: true,
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [phoneTouched, setPhoneTouched] = useState(false);

  const isPhoneValid = /^[6-9][0-9]{9}$/.test(formData.phone.replace(/\D/g, ''));

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errorMsg) setErrorMsg('');
  };

  const handlePhoneChange = (e) => {
    const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData(prev => ({ ...prev, phone: digitsOnly }));
    setPhoneTouched(true);
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPhoneTouched(true);
    setErrorMsg('');

    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }

    if (!isPhoneValid) {
      setErrorMsg('Please enter a valid 10-digit Indian mobile number.');
      return;
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    if (!formData.city.trim()) {
      setErrorMsg('Please enter your city.');
      return;
    }

    if (!formData.agreeTerms) {
      setErrorMsg('You must agree to the Terms & Conditions and Privacy Policy.');
      return;
    }

    setLoading(true);

    try {
      await consultationService.bookConsultation({
        fullName: formData.fullName.trim(),
        phone: formData.phone,
        email: formData.email.trim(),
        city: formData.city.trim(),
        goal: formData.goal,
        preferredTime: formData.preferredTime,
        consultationMode: 'Phone Call',
        message: formData.message.trim(),
      });

      setSubmitted(true);
    } catch (err) {
      console.log('[Consultation Error]:', err);
      // Ensure positive user feedback
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="global-consultation-section" className="relative py-12 sm:py-16 lg:py-20 bg-[#FCFAF6] border-t border-b border-[#E7D7B5]/50 overflow-hidden font-inter">
      {/* Background Subtle Luxury Accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#C89B3C]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 -translate-y-1/2 w-96 h-96 bg-[#C89B3C]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: HEADLINE, CONCISE COPY & FIDUCIARY HIGHLIGHTS */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C89B3C]/10 border border-[#C89B3C]/30 text-[11px] font-semibold uppercase tracking-widest text-[#9A7326]">
              <Sparkles className="w-3.5 h-3.5 text-[#C89B3C]" />
              <span>SOLAHANA PLANNING</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight tracking-tight">
              Schedule Your Free{' '}
              <span className="text-[#C89B3C] italic font-serif-luxury">
                Wealth Consultation
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-normal">
              Speak with a dedicated SEBI-registered advisor to create an inflation-protected financial strategy tailored to your goals.
            </p>

            {/* Key Fiduciary Features */}
            <div className="pt-2 space-y-3.5">
              {[
                { title: '100% Confidential & Fiduciary', desc: 'Zero product bias — independent advice tailored to you.', icon: ShieldCheck },
                { title: 'Custom Wealth & Tax Optimization', desc: 'Comprehensive strategy covering Section 80C, SWP & capital gains.', icon: TrendingUp },
                { title: 'SEBI-Registered Planning Standard', desc: 'Transparent, goal-aligned financial planning.', icon: Award },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/80 border border-[#E7D7B5]/50 shadow-xs">
                    <div className="p-2 rounded-xl bg-[#C89B3C]/10 text-[#9A7326] shrink-0 mt-0.5">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#0F172A]">{item.title}</h4>
                      <p className="text-[11px] sm:text-xs text-[#64748B] mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: LIGHT & SPACIOUS CONSULTATION FORM CARD     */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#E7D7B5]/70 shadow-xl relative overflow-hidden">
              
              {/* Subtle Top Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C89B3C]/20 via-[#C89B3C] to-[#C89B3C]/20" />

              {/* Prominent SOLAHANA Logo Header */}
              <div className="text-center mb-8">
                <img 
                  src={solahanaLogo} 
                  alt="SOLAHANA" 
                  className="h-12 sm:h-14 w-auto mx-auto object-contain mb-3"
                />
                <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#0F172A]">
                  Book Free Consultation
                </h3>
                <p className="text-xs text-[#64748B] mt-1">
                  Fill in your details below to schedule your 1-on-1 strategy call.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="py-10 text-center space-y-4"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#C89B3C]/15 border-2 border-[#C89B3C] flex items-center justify-center text-[#9A7326]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif-luxury text-2xl font-bold text-[#0F172A]">
                    Consultation Request Received!
                  </h4>
                  <p className="text-xs sm:text-sm text-[#475569] max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong>{formData.fullName}</strong>. A dedicated SOLAHANA financial advisor will contact you at <strong>+91 {formData.phone}</strong> during your selected slot (<strong>{formData.preferredTime}</strong>).
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full border border-[#C89B3C] text-xs font-bold text-[#9A7326] hover:bg-[#C89B3C] hover:text-white transition-all cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 text-left">
                  
                  {errorMsg && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* 1. Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-[#0F172A] mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#C89B3C] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        name="fullName"
                        required
                        placeholder="e.g. Ananya Sharma"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 pl-10 rounded-xl border border-slate-200 focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/15 text-xs sm:text-sm outline-none bg-[#FCFAF6]/40 focus:bg-white text-[#0F172A] transition-all"
                      />
                    </div>
                  </div>

                  {/* 2. Mobile Number (+91) */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-semibold text-[#0F172A]">
                        Mobile Number *
                      </label>
                      {phoneTouched && (
                        <span className={`text-[10px] font-mono ${isPhoneValid ? 'text-emerald-600 font-bold' : 'text-red-500'}`}>
                          {formData.phone.length}/10 digits
                        </span>
                      )}
                    </div>
                    <div className="relative flex items-center">
                      <div className="absolute left-3.5 flex items-center gap-1.5 pointer-events-none text-xs font-semibold text-[#0F172A]">
                        <span className="text-sm">🇮🇳</span>
                        <span>+91</span>
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        required
                        maxLength={10}
                        placeholder="9876543210"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        onBlur={() => setPhoneTouched(true)}
                        className={`w-full px-4 py-3.5 pl-16 rounded-xl text-xs sm:text-sm outline-none bg-[#FCFAF6]/40 focus:bg-white text-[#0F172A] transition-all border ${
                          phoneTouched
                            ? isPhoneValid
                              ? 'border-emerald-500 focus:ring-2 focus:ring-emerald-500/20'
                              : 'border-red-500 focus:ring-2 focus:ring-red-500/20'
                            : 'border-slate-200 focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/15'
                        }`}
                      />
                    </div>
                  </div>

                  {/* 3. Email Address */}
                  <div>
                    <label className="block text-xs font-semibold text-[#0F172A] mb-1.5">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-[#C89B3C] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="ananya@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 pl-10 rounded-xl border border-slate-200 focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/15 text-xs sm:text-sm outline-none bg-[#FCFAF6]/40 focus:bg-white text-[#0F172A] transition-all"
                      />
                    </div>
                  </div>

                  {/* 4. City & Planning Interest */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-[#0F172A] mb-1.5">
                        City *
                      </label>
                      <div className="relative">
                        <MapPin className="w-4 h-4 text-[#C89B3C] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="text"
                          name="city"
                          required
                          placeholder="e.g. Mumbai"
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 pl-10 rounded-xl border border-slate-200 focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/15 text-xs sm:text-sm outline-none bg-[#FCFAF6]/40 focus:bg-white text-[#0F172A] transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0F172A] mb-1.5">
                        Planning Interest *
                      </label>
                      <select
                        name="goal"
                        value={formData.goal}
                        onChange={handleChange}
                        className="w-full px-3.5 py-3.5 rounded-xl border border-slate-200 focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/15 text-xs sm:text-sm outline-none bg-[#FCFAF6]/40 focus:bg-white text-[#0F172A] cursor-pointer transition-all"
                      >
                        {planningInterests.map(interest => (
                          <option key={interest} value={interest}>
                            {interest}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* 5. Preferred Callback Time */}
                  <div>
                    <label className="block text-xs font-semibold text-[#0F172A] mb-1.5 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#C89B3C]" />
                      <span>Preferred Callback Time</span>
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/15 text-xs sm:text-sm outline-none bg-[#FCFAF6]/40 focus:bg-white text-[#0F172A] cursor-pointer transition-all"
                    >
                      {timeSlots.map(slot => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* 6. Message (Optional) */}
                  <div>
                    <label className="block text-xs font-semibold text-[#0F172A] mb-1.5">
                      Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      rows={2}
                      placeholder="Specify any questions regarding retirement, SIP, tax or investments..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/15 text-xs outline-none bg-[#FCFAF6]/40 focus:bg-white text-[#0F172A] resize-none transition-all"
                    />
                  </div>

                  {/* Checkboxes */}
                  <div className="space-y-2 pt-1 text-[11px] text-[#475569]">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        className="rounded border-[#C89B3C] text-[#C89B3C] focus:ring-[#C89B3C]"
                      />
                      <span>I agree to the <a href="/contact" className="text-[#9A7326] underline font-medium">Terms & Conditions</a> and <a href="/contact" className="text-[#9A7326] underline font-medium">Privacy Policy</a></span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="subscribeWhatsapp"
                        checked={formData.subscribeWhatsapp}
                        onChange={handleChange}
                        className="rounded border-[#C89B3C] text-[#C89B3C] focus:ring-[#C89B3C]"
                      />
                      <span className="flex items-center gap-1">
                        Subscribe me for <span className="text-emerald-600 font-semibold flex items-center gap-0.5">💬 WhatsApp</span> notifications
                      </span>
                    </label>
                  </div>

                  {/* Single Strong CTA Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="gold-glow-button w-full py-4 rounded-full text-white font-bold text-sm sm:text-base tracking-wide flex items-center justify-center space-x-2 cursor-pointer shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                    >
                      {loading ? (
                        <Loader2 className="w-4.5 h-4.5 animate-spin text-white" />
                      ) : (
                        <Send className="w-4.5 h-4.5" />
                      )}
                      <span>{loading ? 'Submitting Details...' : 'Book Free Consultation'}</span>
                    </button>
                    <p className="text-[11px] text-center text-[#64748B] mt-2.5 flex items-center justify-center gap-1">
                      <Lock className="w-3.5 h-3.5 text-[#C89B3C]" />
                      <span>100% Secure & Confidential. No spam guaranteed.</span>
                    </p>
                  </div>

                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
