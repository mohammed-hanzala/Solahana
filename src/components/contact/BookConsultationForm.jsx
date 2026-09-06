import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar as CalendarIcon, 
  Video, 
  PhoneCall, 
  Building, 
  CheckCircle2, 
  Sparkles,
  Send,
  Save,
  Loader2,
  AlertCircle
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import consultationService from '../../services/consultationService';

const goals = [
  'Retirement Planning',
  'Dream Home',
  'Tax Planning',
  'Investment Planning',
  'Emergency Fund',
  'Wealth Creation',
  'Child Education',
  'General Financial Planning',
];

const modes = [
  { id: 'Video Call', label: 'Video Call', icon: Video },
  { id: 'Phone Call', label: 'Phone Call', icon: PhoneCall },
  { id: 'Office Visit', label: 'In Person (BKC Office)', icon: Building },
];

const timeSlots = ['10:00 AM', '11:30 AM', '02:00 PM', '04:00 PM', '05:30 PM'];

export const BookConsultationForm = ({ onNavigateToDashboard }) => {
  const { user, openAuthModal } = useAuth();

  const [formData, setFormData] = useState({
    fullName: user ? user.name : '',
    email: user ? user.email : '',
    phone: user ? user.phone : '',
    city: user ? user.city : '',
    goal: 'Retirement Planning',
    consultationMode: 'Video Call',
    preferredDate: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
    preferredTime: '11:30 AM',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [saved, setSaved] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [phoneTouched, setPhoneTouched] = useState(false);

  const isPhoneValid = /^[6-9][0-9]{9}$/.test(formData.phone);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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

    if (!isPhoneValid) {
      setErrorMsg('Please enter a valid 10-digit Indian mobile number.');
      return;
    }

    if (!user) {
      openAuthModal('login');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      await consultationService.bookConsultation({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        goal: formData.goal,
        consultationMode: formData.consultationMode,
        preferredDate: formData.preferredDate,
        preferredTime: formData.preferredTime,
        message: formData.message,
      });

      setSubmitted(true);

      // Redirect to dashboard after successful booking
      setTimeout(() => {
        if (onNavigateToDashboard) {
          onNavigateToDashboard();
        } else {
          window.location.hash = '#dashboard';
        }
      }, 1500);
    } catch (err) {
      const msg = err.response?.data?.message || err.message || 'Failed to submit consultation booking';
      setErrorMsg(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveDraft = (e) => {
    e.preventDefault();
    localStorage.setItem('solahana_consultation_draft', JSON.stringify(formData));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <section id="book-form-section" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#020B2D] via-[#041235] to-[#020B2D]">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-[#C8A24A]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C8A24A]/10 border border-[#C8A24A]/25 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E8C878]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#E8C878]">
              1-ON-1 ADVISORY CRM
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif-luxury text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Tell Us About Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8A24A] via-[#F3E5AB] to-[#C8A24A]">
              Financial Goals.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-base md:text-lg font-light leading-relaxed"
          >
            Provide a few key details so our fiduciary wealth team can tailor your private 45-minute consultation.
          </motion.p>
        </div>

        {/* Main Glass Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl bg-gradient-to-b from-[#071C48]/90 via-[#041235]/95 to-[#020B2D] border border-[#C8A24A]/30 p-8 md:p-12 shadow-2xl backdrop-blur-2xl"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[3px] bg-gradient-to-r from-transparent via-[#C8A24A] to-transparent rounded-full" />

          {errorMsg && (
            <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-3">
              <AlertCircle className="w-5 h-5 shrink-0 text-red-400" />
              <span>{errorMsg}</span>
            </div>
          )}

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-16 text-center space-y-6"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-[#C8A24A]/20 border-2 border-[#C8A24A] flex items-center justify-center text-[#E8C878]">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h3 className="font-serif-luxury text-3xl font-bold text-white">
                Consultation Request Received
              </h3>

              <p className="text-white/75 text-base max-w-lg mx-auto font-light leading-relaxed">
                Thank you, <span className="text-[#E8C878] font-semibold">{formData.fullName || 'Valued Client'}</span>. Your consultation request for <span className="text-white font-medium">{formData.goal}</span> has been confirmed for <span className="text-[#E8C878] font-medium">{formData.preferredDate}</span> at <span className="text-[#E8C878] font-medium">{formData.preferredTime}</span> via {formData.consultationMode}.
              </p>

              <div className="pt-6 flex items-center justify-center gap-4 flex-wrap">
                {onNavigateToDashboard && (
                  <button
                    onClick={onNavigateToDashboard}
                    className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#C8A24A] to-[#E8C878] text-[#020B2D] font-bold text-sm transition-all shadow-lg"
                  >
                    View My Consultations
                  </button>
                )}
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition-all"
                >
                  Book Another Session
                </button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 text-left">
              
              {!user && (
                <div className="p-4 rounded-xl bg-[#C8A24A]/10 border border-[#C8A24A]/30 text-xs text-[#E8C878] flex items-center justify-between">
                  <span>Please login or sign up to schedule your consultation booking.</span>
                  <button
                    type="button"
                    onClick={() => openAuthModal('login')}
                    className="px-3 py-1.5 rounded-lg bg-[#C8A24A] text-[#020B2D] font-bold text-xs"
                  >
                    Login Now
                  </button>
                </div>
              )}

              {/* Row 1: Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#E8C878] mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-white/40 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikramaditya Sharma"
                      value={formData.fullName}
                      onChange={(e) => handleChange('fullName', e.target.value)}
                      className="w-full bg-[#020B2D]/80 border border-white/15 focus:border-[#C8A24A] rounded-xl py-3.5 pl-11 pr-4 text-white text-sm placeholder-white/30 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#E8C878] mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-white/40 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="vikram@domain.com"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="w-full bg-[#020B2D]/80 border border-white/15 focus:border-[#C8A24A] rounded-xl py-3.5 pl-11 pr-4 text-white text-sm placeholder-white/30 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Contact & City */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#E8C878] mb-2 flex items-center justify-between">
                    <span>Phone Number *</span>
                    {phoneTouched && (
                      <span className={`text-[10px] font-mono font-normal ${isPhoneValid ? 'text-emerald-400' : 'text-red-400'}`}>
                        {formData.phone.length}/10 digits
                      </span>
                    )}
                  </label>
                  <div className="relative">
                    <Phone className={`w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${
                      phoneTouched
                        ? isPhoneValid
                          ? 'text-emerald-400'
                          : 'text-red-400'
                        : 'text-white/40'
                    }`} />
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      placeholder="9820012345"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      onBlur={() => setPhoneTouched(true)}
                      className={`w-full bg-[#020B2D]/80 rounded-xl py-3.5 pl-11 pr-4 text-white text-sm placeholder-white/30 focus:outline-none transition-colors border ${
                        phoneTouched
                          ? isPhoneValid
                            ? 'border-emerald-500/80 focus:border-emerald-500'
                            : 'border-red-500/80 focus:border-red-500'
                          : 'border-white/15 focus:border-[#C8A24A]'
                      }`}
                    />
                  </div>
                  {phoneTouched && !isPhoneValid && (
                    <p className="text-[11px] text-red-400 mt-1.5 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0 text-red-400" />
                      <span>Please enter a valid 10-digit Indian mobile number.</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#E8C878] mb-2">
                    City / Location
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-white/40 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="e.g. Mumbai / Bengaluru / Delhi"
                      value={formData.city}
                      onChange={(e) => handleChange('city', e.target.value)}
                      className="w-full bg-[#020B2D]/80 border border-white/15 focus:border-[#C8A24A] rounded-xl py-3.5 pl-11 pr-4 text-white text-sm placeholder-white/30 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3: Dropdowns */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#E8C878] mb-2">
                  Primary Financial Goal *
                </label>
                <select
                  value={formData.goal}
                  onChange={(e) => handleChange('goal', e.target.value)}
                  className="w-full bg-[#020B2D]/80 border border-white/15 focus:border-[#C8A24A] rounded-xl py-3.5 px-4 text-white text-sm focus:outline-none transition-colors cursor-pointer"
                >
                  {goals.map(g => (
                    <option key={g} value={g} className="bg-[#020B2D] text-white">
                      {g}
                    </option>
                  ))}
                </select>
              </div>

              {/* Row 4: Preferred Mode */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#E8C878] mb-3">
                  Preferred Consultation Mode *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {modes.map(m => {
                    const ModeIcon = m.icon;
                    const isSelected = formData.consultationMode === m.id;
                    return (
                      <button
                        type="button"
                        key={m.id}
                        onClick={() => handleChange('consultationMode', m.id)}
                        className={`p-4 rounded-xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#C8A24A]/20 border-[#C8A24A] text-white shadow-lg'
                            : 'bg-white/5 border-white/10 text-white/70 hover:border-white/20'
                        }`}
                      >
                        <ModeIcon className={`w-5 h-5 ${isSelected ? 'text-[#E8C878]' : 'text-white/40'}`} />
                        <span className="text-sm font-medium">{m.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Row 5: Date & Time Picker */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#E8C878] mb-2">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <CalendarIcon className="w-4 h-4 text-white/40 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.preferredDate}
                      onChange={(e) => handleChange('preferredDate', e.target.value)}
                      className="w-full bg-[#020B2D]/80 border border-white/15 focus:border-[#C8A24A] rounded-xl py-3.5 pl-11 pr-4 text-white text-sm focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#E8C878] mb-2">
                    Preferred Time Slot *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {timeSlots.map(ts => {
                      const isSelected = formData.preferredTime === ts;
                      return (
                        <button
                          type="button"
                          key={ts}
                          onClick={() => handleChange('preferredTime', ts)}
                          className={`px-3.5 py-2 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#C8A24A] text-[#020B2D] font-bold shadow'
                              : 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10'
                          }`}
                        >
                          {ts}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Message Box */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#E8C878] mb-2">
                  Additional Notes / Specific Questions (Optional)
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about any specific investments, retirement timelines or tax questions you'd like to cover..."
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className="w-full bg-[#020B2D]/80 border border-white/15 focus:border-[#C8A24A] rounded-xl p-4 text-white text-sm placeholder-white/30 focus:outline-none transition-colors"
                />
              </div>

              {/* Form Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={handleSaveDraft}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/5 border border-white/15 hover:border-white/30 text-white text-sm font-medium flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Save className="w-4 h-4 text-[#E8C878]" />
                  <span>{saved ? 'Draft Saved ✓' : 'Save For Later'}</span>
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-9 py-4 rounded-xl bg-gradient-to-r from-[#C8A24A] via-[#D4AF37] to-[#C8A24A] text-[#020B2D] font-bold text-base shadow-lg shadow-[#C8A24A]/25 hover:shadow-xl hover:shadow-[#C8A24A]/40 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin text-[#020B2D]" />
                  ) : (
                    <Send className="w-5 h-5 text-[#020B2D]" />
                  )}
                  <span>{loading ? 'Submitting...' : 'Schedule Consultation'}</span>
                </button>
              </div>

            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
