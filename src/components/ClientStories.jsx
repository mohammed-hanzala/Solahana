import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';

export default function ClientStories() {
  const testimonials = [
    {
      name: 'Rohan Sharma',
      role: 'Senior Software Architect',
      location: 'Bangalore, India',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
      text: 'SOLAHANA brought total clarity to my finances. They structured my NPS, Section 80C tax savings, and monthly step-up SIPs. My early retirement FIRE roadmap is now 68% ahead of schedule with zero guesswork.',
      tag: 'Salaried Professional',
      rating: 5,
    },
    {
      name: 'Ananya & Vikram Deshmukh',
      role: 'Co-Founders, Tech scale-up',
      location: 'Mumbai, India',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
      text: 'Managing business profits while structuring personal family wealth was complex until we partnered with SOLAHANA. Their team set up our corporate treasury liquidity, tax-efficient profit extraction, and children’s education fund.',
      tag: 'Business Owners',
      rating: 5,
    },
    {
      name: 'Dr. Rajesh Gupta',
      role: 'Senior Cardiac Surgeon',
      location: 'New Delhi, India',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
      text: 'Retirement planning used to feel overwhelming given my hectic hospital schedule. SOLAHANA mapped out an inflation-protected passive income strategy that gives my family total financial security.',
      tag: 'Family Retirement',
      rating: 5,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative z-10 py-24 bg-gradient-to-b from-[#020B2D] via-[#041442] to-[#020B2D] border-t border-[#C8A24A]/15 overflow-hidden">
      
      {/* Background Radial Lights */}
      <div className="absolute top-1/3 left-10 w-[550px] h-[550px] bg-[#C8A24A]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full gold-badge text-xs font-semibold text-[#E8C878] border border-[#C8A24A]/35 shadow-[0_0_15px_rgba(200,162,74,0.2)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E8C878]" />
            <span className="font-sora tracking-wide uppercase text-[11px]">CLIENT STORIES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#F8F7F3] tracking-tight leading-tight"
          >
            Thousands of Financial Decisions.{' '}
            <br className="hidden sm:inline" />
            One Common Goal —{' '}
            <span className="gold-gradient-text italic font-serif-luxury">Peace of Mind</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#BAC6DA] font-inter leading-relaxed"
          >
            See how thoughtful financial planning helps people move closer to their life goals with complete confidence.
          </motion.p>
        </div>


        {/* TESTIMONIAL CAROUSEL / GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-[32px] p-7 sm:p-8 bg-[#071C48]/70 hover:bg-[#071C48]/95 border border-[#C8A24A]/25 hover:border-[#C8A24A]/60 backdrop-blur-2xl transition-all duration-500 shadow-[0_15px_40px_rgba(2,11,45,0.8)] hover:shadow-[0_20px_50px_rgba(200,162,74,0.22)] overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Gold Quote Icon + 5 Stars */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#C8A24A]/15 border border-[#C8A24A]/30 text-[#E8C878] flex items-center justify-center shadow-[0_0_12px_rgba(200,162,74,0.2)]">
                    <Quote className="w-6 h-6 fill-[#E8C878]" />
                  </div>

                  <div className="flex items-center space-x-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#E8C878] text-[#E8C878]" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm sm:text-base text-[#F8F7F3] font-serif-luxury italic leading-relaxed mb-8">
                  "{t.text}"
                </p>
              </div>

              {/* Client Info Footer */}
              <div className="pt-5 border-t border-[#C8A24A]/15 flex items-center justify-between mt-auto">
                <div>
                  <div className="text-base font-serif-luxury font-bold text-[#F8F7F3] group-hover:text-[#E8C878] transition-colors">
                    {t.name}
                  </div>
                  <div className="text-xs text-[#C8A24A] font-sora mt-0.5">
                    {t.role}
                  </div>
                  <div className="text-[10px] text-[#BAC6DA] flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3 text-[#E8C878]" />
                    <span>{t.location}</span>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full text-[10px] font-bold font-sora bg-[#020B2D]/80 text-[#E8C878] border border-[#C8A24A]/30 shrink-0">
                  {t.tag}
                </span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
}
