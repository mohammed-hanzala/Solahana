import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Phone, Mail, MessageSquare, ArrowRight } from 'lucide-react';

const contactOptions = [
  {
    id: 'schedule',
    icon: Calendar,
    title: 'Schedule a Consultation',
    description: 'Book a 1-on-1 private video or in-person session with a certified Solahana wealth advisor.',
    actionText: 'Book Appointment',
    href: '#book-form-section',
    badge: 'Recommended'
  },
  {
    id: 'phone',
    icon: Phone,
    title: 'Call Our Planning Team',
    description: 'Speak directly with our senior financial planners during working hours for quick queries.',
    actionText: 'Call Now',
    href: 'tel:+912248901200',
    badge: 'Direct Line'
  },
  {
    id: 'email',
    icon: Mail,
    title: 'Email Us',
    description: 'Send us detailed questions or financial documents. We respond within 24 business hours.',
    actionText: 'Send Email',
    href: 'mailto:advisory@solahana.com',
    badge: '24h Response'
  },
  {
    id: 'whatsapp',
    icon: MessageSquare,
    title: 'WhatsApp Support',
    description: 'Quick chat assistant for existing clients and instant appointment scheduling assistance.',
    actionText: 'Chat on WhatsApp',
    href: 'https://wa.me/919820012345',
    badge: 'Instant Chat'
  }
];

export const ContactOptionsGrid = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#020B2D]">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#C8A24A]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C8A24A]/10 border border-[#C8A24A]/25 mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8A24A]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#E8C878]">
              CHOOSE HOW TO CONNECT
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-playfair text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Connect With SOLAHANA{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8A24A] via-[#F3E5AB] to-[#C8A24A]">
              Your Way.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-base md:text-lg font-light leading-relaxed"
          >
            Select your preferred communication channel to initiate your personalized wealth planning conversation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactOptions.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative p-8 rounded-3xl bg-gradient-to-b from-[#071C48]/80 via-[#041235]/90 to-[#020B2D] border border-white/10 hover:border-[#C8A24A]/40 shadow-2xl backdrop-blur-2xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Gold glow overlay on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#C8A24A]/0 via-[#C8A24A]/0 to-[#C8A24A]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#C8A24A]/10 border border-[#C8A24A]/25 flex items-center justify-center group-hover:bg-[#C8A24A] transition-colors duration-300">
                      <Icon className="w-7 h-7 text-[#E8C878] group-hover:text-[#020B2D] transition-colors duration-300" />
                    </div>

                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-white/5 border border-white/10 text-[#E8C878]">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-playfair text-xl font-bold text-white mb-3 group-hover:text-[#E8C878] transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-white/65 text-sm leading-relaxed font-light mb-8">
                    {item.description}
                  </p>
                </div>

                <a
                  href={item.href}
                  className="w-full py-3.5 px-4 rounded-xl bg-white/5 border border-white/10 group-hover:bg-[#C8A24A] group-hover:border-[#C8A24A] text-white group-hover:text-[#020B2D] font-medium text-sm transition-all duration-300 flex items-center justify-between"
                >
                  <span>{item.actionText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
