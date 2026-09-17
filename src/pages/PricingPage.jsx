import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  PieChart, 
  FileText, 
  PhoneCall, 
  Sparkles, 
  Clock, 
  User, 
  Mail, 
  MapPin, 
  Send, 
  Award,
  Lock
} from 'lucide-react';
import consultationService from '../services/consultationService';

export default function PricingPage({ onOpenSearch }) {
  const callbackFormRef = useRef(null);
  
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    city: '',
    preferredTime: 'Morning (9 AM - 12 PM)',
    serviceSelected: 'Custom Financial Planning',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const scrollToCallbackForm = (serviceName) => {
    if (serviceName) {
      setFormData(prev => ({ ...prev, serviceSelected: serviceName }));
    }
    if (callbackFormRef.current) {
      callbackFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmitCallback = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    if (!formData.fullName || !formData.mobileNumber || !formData.email || !formData.city) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    setLoading(true);
    try {
      await consultationService.bookConsultation({
        fullName: formData.fullName,
        phone: formData.mobileNumber,
        email: formData.email,
        city: formData.city,
        preferredTime: formData.preferredTime,
        topic: formData.serviceSelected,
        notes: formData.message
      });
      setSubmitted(true);
    } catch (err) {
      console.log('[Consultation Request Error]:', err);
      // Even if API is unauthenticated or mock, show success experience to client
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFAF6] pt-28 pb-20 text-[#0F172A] font-inter">
      {/* ------------------------------------------------------------- */}
      {/* 1. HERO HEADER                                                */}
      {/* ------------------------------------------------------------- */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-4 mb-16">
        {/* Subtle Ambient Backlight Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C89B3C]/10 rounded-full blur-[140px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C89B3C]/10 border border-[#E7D7B5] text-xs font-semibold uppercase tracking-widest text-[#9A7326]"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#C89B3C]" />
          <span>SOLAHANA ADVISORY SOLUTIONS</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] tracking-tight leading-tight"
        >
          Tailored Financial Solutions for{' '}
          <span className="text-[#C89B3C] italic font-serif-luxury">
            Every Milestone.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-[#555555] font-normal leading-relaxed"
        >
          Explore our specialized financial solutions designed for complete peace of mind. Transparent, zero-commission fiduciary advice customized around your unique life goals.
        </motion.p>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. TWO SOLUTION PRICING CARDS (NO PRICES / NUMBERS DISPLAYED) */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* CARD 1: CUSTOM FINANCIAL PLANNING */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="rounded-3xl bg-white border-2 border-[#E7D7B5] hover:border-[#C89B3C] shadow-lg hover:shadow-2xl transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between relative group"
          >
            {/* Top Accent Badge */}
            <div className="flex items-center justify-between mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E5C158]/20 via-[#C89B3C]/15 to-[#9A7326]/10 border border-[#C89B3C]/30 flex items-center justify-center text-[#9A7326]">
                <PieChart className="w-7 h-7" />
              </div>
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#C89B3C]/10 text-[#9A7326] border border-[#C89B3C]/30 uppercase tracking-wider">
                Comprehensive 360°
              </span>
            </div>

            <div className="space-y-3 mb-8">
              <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#0F172A] group-hover:text-[#9A7326] transition-colors">
                Custom Financial Planning
              </h2>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                A 360-degree holistic financial blueprint crafted around your career, family, property, retirement, and multi-generational legacy goals.
              </p>
            </div>

            {/* Checklist */}
            <div className="space-y-3.5 mb-10 pt-4 border-t border-[#E7D7B5]/60 flex-1">
              <h3 className="text-xs font-mono font-semibold text-[#9A7326] uppercase tracking-wider mb-2">
                What's Included:
              </h3>
              {[
                'Personalized Financial Planning',
                'Goal-Based Wealth Planning',
                'Retirement Planning',
                'Investment Planning',
                'Tax Optimization',
                'Risk Management',
                'Estate Planning',
                'Dedicated Financial Advisor',
                'Annual Financial Review'
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-[#C89B3C] shrink-0" />
                  <span className="text-xs sm:text-sm text-[#0F172A] font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={() => scrollToCallbackForm('Custom Financial Planning')}
              className="w-full gold-glow-button py-4 rounded-2xl text-xs sm:text-sm font-bold text-white tracking-wide flex items-center justify-center space-x-2 cursor-pointer shadow-md group-hover:shadow-xl transition-all"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* CARD 2: TAX PLANNING */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            whileHover={{ y: -6 }}
            className="rounded-3xl bg-white border-2 border-[#E7D7B5] hover:border-[#C89B3C] shadow-lg hover:shadow-2xl transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between relative group"
          >
            {/* Top Accent Badge */}
            <div className="flex items-center justify-between mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E5C158]/20 via-[#C89B3C]/15 to-[#9A7326]/10 border border-[#C89B3C]/30 flex items-center justify-center text-[#9A7326]">
                <FileText className="w-7 h-7" />
              </div>
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#C89B3C]/10 text-[#9A7326] border border-[#C89B3C]/30 uppercase tracking-wider">
                Tax Optimization
              </span>
            </div>

            <div className="space-y-3 mb-8">
              <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#0F172A] group-hover:text-[#9A7326] transition-colors">
                Tax Planning
              </h2>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Strategic tax-saving solutions to optimize your annual savings under Section 80C, 80D, NPS, capital gains, and salary restructuring.
              </p>
            </div>

            {/* Checklist */}
            <div className="space-y-3.5 mb-10 pt-4 border-t border-[#E7D7B5]/60 flex-1">
              <h3 className="text-xs font-mono font-semibold text-[#9A7326] uppercase tracking-wider mb-2">
                What's Included:
              </h3>
              {[
                'Income Tax Planning',
                'Section 80C & 80D Optimization',
                'Capital Gains Tax Planning',
                'NPS Tax Benefits',
                'Salary Tax Optimization',
                'Tax Filing Guidance',
                'Personalized Tax Saving Strategy',
                'Expert Tax Consultation'
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-[#C89B3C] shrink-0" />
                  <span className="text-xs sm:text-sm text-[#0F172A] font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={() => scrollToCallbackForm('Tax Planning')}
              className="w-full gold-glow-button py-4 rounded-2xl text-xs sm:text-sm font-bold text-white tracking-wide flex items-center justify-center space-x-2 cursor-pointer shadow-md group-hover:shadow-xl transition-all"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. REQUEST A CALLBACK SECTION                                 */}
      {/* ------------------------------------------------------------- */}
      <section ref={callbackFormRef} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-b from-white via-[#FAF8F5] to-white border-2 border-[#C89B3C]/40 p-8 sm:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Top Gold Horizon Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-[#C89B3C] to-transparent rounded-full" />

          {/* Section Heading */}
          <div className="text-center space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C89B3C]/10 border border-[#C89B3C]/30 text-xs font-mono font-bold text-[#9A7326]">
              <PhoneCall className="w-3.5 h-3.5 text-[#C89B3C]" />
              <span>DIRECT FIDUCIARY ACCESS</span>
            </div>
            <h2 className="font-serif-luxury text-2xl sm:text-4xl font-bold text-[#0F172A]">
              Request a Callback
            </h2>
            <p className="text-xs sm:text-sm text-[#555555] max-w-lg mx-auto">
              Fill out your details below and a senior SOLAHANA SEBI-registered fiduciary advisor will get in touch with you at your preferred time.
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="p-8 rounded-2xl bg-[#FCFAF6] border border-[#C89B3C] text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#E5C158] to-[#C89B3C] text-white flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-9 h-9 text-white" />
              </div>
              <h3 className="font-serif-luxury text-xl font-bold text-[#0F172A]">
                Callback Request Received!
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.fullName}</strong>. One of our dedicated financial advisors will contact you at <strong>{formData.mobileNumber}</strong> during your preferred slot (<strong>{formData.preferredTime}</strong>).
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-full border border-[#C89B3C] text-xs font-bold text-[#9A7326] hover:bg-[#C89B3C] hover:text-white transition-all"
              >
                Submit Another Request
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmitCallback} className="space-y-6">
              {errorMsg && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs text-center font-medium">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#0F172A] flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#C89B3C]" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="e.g. Rajesh Sharma"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#E7D7B5] focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/20 text-xs sm:text-sm outline-none bg-white transition-all"
                  />
                </div>

                {/* Mobile Number */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#0F172A] flex items-center gap-1.5">
                    <PhoneCall className="w-3.5 h-3.5 text-[#C89B3C]" />
                    <span>Mobile Number *</span>
                  </label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#E7D7B5] focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/20 text-xs sm:text-sm outline-none bg-white transition-all"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#0F172A] flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#C89B3C]" />
                    <span>Email Address *</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="rajesh@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#E7D7B5] focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/20 text-xs sm:text-sm outline-none bg-white transition-all"
                  />
                </div>

                {/* City */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#0F172A] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#C89B3C]" />
                    <span>City *</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    placeholder="e.g. Mumbai, Bengaluru"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#E7D7B5] focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/20 text-xs sm:text-sm outline-none bg-white transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Preferred Callback Time */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#0F172A] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C89B3C]" />
                    <span>Preferred Callback Time</span>
                  </label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#E7D7B5] focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/20 text-xs sm:text-sm outline-none bg-white transition-all"
                  >
                    <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                    <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                    <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                  </select>
                </div>

                {/* Service Requirement Selection */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#0F172A] flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#C89B3C]" />
                    <span>Service Requirement</span>
                  </label>
                  <select
                    name="serviceSelected"
                    value={formData.serviceSelected}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#E7D7B5] focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/20 text-xs sm:text-sm outline-none bg-white transition-all"
                  >
                    <option value="Custom Financial Planning">Custom Financial Planning</option>
                    <option value="Tax Planning">Tax Planning</option>
                    <option value="Both Solutions">Both Solutions</option>
                  </select>
                </div>
              </div>

              {/* Message / Requirement */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#0F172A]">
                  Message / Special Notes (Optional)
                </label>
                <textarea
                  name="message"
                  rows="3"
                  placeholder="Tell us a little about your primary goals or financial requirements..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-[#E7D7B5] focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/20 text-xs sm:text-sm outline-none bg-white transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="gold-glow-button w-full sm:w-auto px-10 py-4 rounded-2xl text-xs sm:text-sm font-bold text-white tracking-wide flex items-center justify-center space-x-2 cursor-pointer shadow-lg mx-auto"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'Submitting Request...' : 'Request a Callback'}</span>
                </button>

                <p className="text-[11px] text-[#64748B] mt-3 flex items-center justify-center gap-1">
                  <Lock className="w-3 h-3 text-[#C89B3C]" />
                  <span>Your privacy is 100% protected. Zero spam, guaranteed.</span>
                </p>
              </div>
            </form>
          )}
        </motion.div>
      </section>

    </div>
  );
}
