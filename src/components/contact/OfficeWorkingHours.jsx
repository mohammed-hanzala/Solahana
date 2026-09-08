import React from 'react';
import { motion } from 'framer-motion';
import { Building2, MapPin, Mail, Phone, Clock, Calendar, Navigation, Globe } from 'lucide-react';

export const OfficeWorkingHours = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#071C48]/60 via-[#020B2D] to-[#020B2D]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C8A24A]/10 border border-[#C8A24A]/25 mb-4"
          >
            <Building2 className="w-3.5 h-3.5 text-[#E8C878]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#E8C878]">
              LOCATION & HOURS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-playfair text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
          >
            We're Here When You{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8A24A] via-[#F3E5AB] to-[#C8A24A]">
              Need Us.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-base md:text-lg font-light leading-relaxed"
          >
            Visit our corporate headquarters in Mumbai or schedule a digital advisory session from anywhere in the world.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side: Luxury Office Info Cards */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-3xl bg-gradient-to-br from-[#071C48]/90 via-[#041235]/95 to-[#020B2D] border border-white/10 shadow-2xl backdrop-blur-2xl text-left space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#C8A24A]/15 border border-[#C8A24A]/30 flex items-center justify-center text-[#E8C878]">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#E8C878] uppercase tracking-wider">Corporate Headquarters</span>
                  <h3 className="font-playfair text-2xl font-bold text-white">Mumbai, India</h3>
                </div>
              </div>

              <div className="space-y-4 pt-2 border-t border-white/10 text-sm text-white/80">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C8A24A] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white block">SOLAHANA Financial Advisory</span>
                    <span className="text-white/60 font-light">Off Veera Desai Road, Andheri West, Mumbai, Maharashtra 400053, India</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#C8A24A] shrink-0" />
                  <div>
                    <span className="text-white/60 font-light">Email: </span>
                    <a href="mailto:info@solahana.com" className="text-white hover:text-[#E8C878] transition-colors font-medium">info@solahana.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#C8A24A] shrink-0 mt-0.5" />
                  <div className="flex flex-col space-y-0.5">
                    <span className="text-white/60 font-light">Phone / WhatsApp: </span>
                    <a href="tel:+917304442171" className="text-white hover:text-[#E8C878] transition-colors font-medium">+91 73044 42171</a>
                    <a href="tel:+917021295187" className="text-white/80 hover:text-[#E8C878] transition-colors font-medium text-xs">+91 70212 95187</a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Working Hours Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 rounded-3xl bg-gradient-to-br from-[#071C48]/90 via-[#041235]/95 to-[#020B2D] border border-white/10 shadow-2xl backdrop-blur-2xl text-left"
            >
              <h4 className="font-playfair text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#E8C878]" />
                <span>Working Hours & Support</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <div className="flex items-center gap-2 text-xs text-[#E8C878] font-mono uppercase">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Working Days</span>
                  </div>
                  <div className="text-base font-semibold text-white">Monday – Saturday</div>
                  <div className="text-xs text-white/50 font-light">9:30 AM – 6:30 PM IST</div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono uppercase">
                    <Globe className="w-3.5 h-3.5" />
                    <span>Client Support Desk</span>
                  </div>
                  <div className="text-base font-semibold text-white">24/7 Digital Portal</div>
                  <div className="text-xs text-white/50 font-light">Always Accessible</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Premium Dark Map Placeholder Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-[#C8A24A]/30 shadow-2xl bg-[#041235] flex flex-col min-h-[420px]"
          >
            {/* Map visual background graphics */}
            <div className="absolute inset-0 bg-[#020B2D] opacity-90" />
            <div className="absolute inset-0 bg-[radial-gradient(#C8A24A_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
            
            {/* Map grid lines overlay */}
            <svg className="absolute inset-0 w-full h-full stroke-white/5" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>

            {/* Glowing Map Pin Centerpiece */}
            <div className="relative z-10 flex-1 flex flex-col items-center justify-center p-8 text-center">
              {/* Pin pulse ring */}
              <div className="relative mb-6">
                <div className="absolute inset-0 rounded-full bg-[#C8A24A]/30 animate-ping" />
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E8C878] via-[#C8A24A] to-[#B8862B] p-[2px] shadow-[0_0_30px_rgba(200,162,74,0.6)] relative z-10 flex items-center justify-center">
                  <div className="w-full h-full bg-[#020B2D] rounded-full flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-[#E8C878]" />
                  </div>
                </div>
              </div>

              <h4 className="font-playfair text-2xl font-bold text-white mb-2">
                Andheri West Office, Mumbai
              </h4>
              <p className="text-white/60 text-sm font-light max-w-sm mb-6">
                Off Veera Desai Road, Andheri West, Mumbai, Maharashtra 400053
              </p>

              <button
                type="button"
                onClick={() => window.open('https://maps.google.com/?q=Off+Veera+Desai+Road+Andheri+West+Mumbai+Maharashtra+400053', '_blank')}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#C8A24A] via-[#D4AF37] to-[#C8A24A] text-[#020B2D] font-bold text-sm shadow-lg shadow-[#C8A24A]/25 hover:shadow-xl hover:shadow-[#C8A24A]/40 transition-all flex items-center gap-2 group cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-[#020B2D] group-hover:rotate-45 transition-transform" />
                <span>Get Directions</span>
              </button>
            </div>

            <div className="relative z-10 p-4 bg-[#020B2D]/90 border-t border-white/10 text-xs text-white/50 text-center font-mono">
              Off Veera Desai Road, Andheri West, Mumbai 400053 • SOLAHANA
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
