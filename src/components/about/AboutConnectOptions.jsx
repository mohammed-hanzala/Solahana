import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, Mail, Calendar, ArrowRight } from 'lucide-react';

export default function AboutConnectOptions() {
  const scrollToConsultation = () => {
    const el = document.getElementById('global-consultation-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const connectOptions = [
    {
      id: 'phone',
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our senior financial planners: +91 73044 42171 / +91 70212 95187.',
      actionText: 'Call Now',
      href: 'tel:+917304442171',
    },
    {
      id: 'whatsapp',
      icon: MessageSquare,
      title: 'WhatsApp',
      description: 'Quick chat assistance at +91 73044 42171 for instant appointment & query support.',
      actionText: 'Chat on WhatsApp',
      href: 'https://wa.me/917304442171',
      target: '_blank',
    },
    {
      id: 'email',
      icon: Mail,
      title: 'Email Us',
      description: 'Send detailed queries to info@solahana.com for a response within 24 hours.',
      actionText: 'Send Email',
      href: 'mailto:info@solahana.com',
    },
    {
      id: 'consultation',
      icon: Calendar,
      title: 'Book a Consultation',
      description: 'Schedule a 1-on-1 private wealth planning session with a certified fiduciary planner.',
      actionText: 'Book Appointment',
      onClick: scrollToConsultation,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5] relative overflow-hidden border-t border-[#E7D7B5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-xs uppercase font-mono tracking-widest text-[#B8860B] font-semibold">
            CHOOSE HOW TO CONNECT
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-luxury font-bold text-[#0F172A]">
            Connect With SOLAHANA
          </h2>
          <p className="text-sm sm:text-base text-[#475569]">
            Select your preferred communication channel to initiate your personalized wealth planning conversation.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {connectOptions.map((opt, idx) => {
            const Icon = opt.icon;
            return (
              <motion.div
                key={opt.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E7D7B5] shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-[#C89B3C]/40 text-[#C89B3C] group-hover:bg-[#C89B3C] group-hover:text-white flex items-center justify-center mb-5 transition-colors shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-serif-luxury font-bold text-[#0F172A] mb-2 group-hover:text-[#B8860B] transition-colors">
                    {opt.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed line-clamp-2 mb-6">
                    {opt.description}
                  </p>
                </div>

                {opt.onClick ? (
                  <button
                    onClick={opt.onClick}
                    className="w-full py-3 px-4 rounded-xl bg-[#FAF8F5] border border-[#E7D7B5] group-hover:bg-[#C89B3C] group-hover:border-[#C89B3C] text-[#0F172A] group-hover:text-white font-semibold text-xs transition-all duration-300 flex items-center justify-between cursor-pointer"
                  >
                    <span>{opt.actionText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                ) : (
                  <a
                    href={opt.href}
                    target={opt.target}
                    rel={opt.target ? 'noopener noreferrer' : undefined}
                    className="w-full py-3 px-4 rounded-xl bg-[#FAF8F5] border border-[#E7D7B5] group-hover:bg-[#C89B3C] group-hover:border-[#C89B3C] text-[#0F172A] group-hover:text-white font-semibold text-xs transition-all duration-300 flex items-center justify-between"
                  >
                    <span>{opt.actionText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
