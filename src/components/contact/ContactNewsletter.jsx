import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export const ContactNewsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#020B2D]">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden p-8 md:p-16 bg-gradient-to-b from-[#071C48] via-[#041235] to-[#020B2D] border border-[#C8A24A]/30 shadow-2xl text-center"
        >
          {/* Soft golden glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#C8A24A]/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C8A24A]/15 border border-[#C8A24A]/30"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E8C878]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#E8C878]">
                WEEKLY INSIGHTS
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-playfair text-3xl md:text-5xl font-bold text-white leading-tight"
            >
              Stay Updated With{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8A24A] via-[#F3E5AB] to-[#C8A24A]">
                Financial Insights.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/75 text-base md:text-lg font-light leading-relaxed"
            >
              Receive simple financial planning tips, goal planning guides and educational articles delivered straight to your inbox every Sunday morning.
            </motion.p>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              onSubmit={handleSubmit}
              className="pt-4 flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto"
            >
              <div className="relative flex-1 w-full">
                <Mail className="w-5 h-5 text-white/40 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#020B2D]/90 border border-white/20 focus:border-[#C8A24A] rounded-xl py-4 pl-12 pr-4 text-white text-sm placeholder-white/40 focus:outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#C8A24A] via-[#D4AF37] to-[#C8A24A] text-[#020B2D] font-bold text-sm shadow-lg shadow-[#C8A24A]/25 hover:shadow-xl hover:shadow-[#C8A24A]/40 transition-all flex items-center justify-center gap-2 shrink-0"
              >
                <span>{subscribed ? 'Subscribed ✓' : 'Subscribe'}</span>
                {!subscribed && <ArrowRight className="w-4 h-4 text-[#020B2D]" />}
              </button>
            </motion.form>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-center gap-2 text-xs text-white/50 pt-2"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#C8A24A]" />
              <span>We respect your privacy. Zero spam. Unsubscribe anytime with 1 click.</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
