import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles, MapPin } from 'lucide-react';

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
    <section className="relative z-10 py-24 bg-[#FAF8F5] border-t border-[#C89A4B]/20 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full gold-badge text-xs font-semibold text-[#9A7326] border border-[#C89A4B]/35 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C89A4B]" />
            <span className="font-sora tracking-wide uppercase text-[11px]">CLIENT TESTIMONIALS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#0F172A] tracking-tight leading-tight"
          >
            Trusted by Families Across{' '}
            <span className="gold-gradient-text italic font-serif-luxury">India</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#475569] font-inter leading-relaxed"
          >
            Read how SOLAHANA helps professionals, families, and business owners build goal-aligned wealth with zero commission conflict.
          </motion.p>
        </div>

        {/* Carousel Card Container */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 sm:p-12 rounded-3xl bg-white border border-[#C89A4B]/30 shadow-xl space-y-6 relative overflow-hidden"
          >
            <Quote className="w-12 h-12 text-[#C89A4B]/20 absolute top-6 right-8 pointer-events-none" />

            <div className="flex items-center space-x-1 text-[#C89A4B]">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#C89A4B]" />
              ))}
            </div>

            <p className="text-base sm:text-xl text-[#0F172A] font-serif-luxury italic leading-relaxed">
              "{testimonials[activeIndex].text}"
            </p>

            <div className="pt-6 border-t border-[#C89A4B]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <img
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].name}
                  className="w-12 h-12 rounded-full border-2 border-[#C89A4B] object-cover shadow-sm"
                />
                <div>
                  <div className="text-base font-serif-luxury font-bold text-[#0F172A]">
                    {testimonials[activeIndex].name}
                  </div>
                  <div className="text-xs text-[#64748B] flex items-center gap-1 mt-0.5">
                    <span>{testimonials[activeIndex].role}</span>
                    <span>•</span>
                    <span className="flex items-center gap-0.5"><MapPin className="w-3 h-3 text-[#C89A4B]" /> {testimonials[activeIndex].location}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full border border-[#C89A4B]/30 text-[#0F172A] hover:bg-[#C89A4B]/10 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full border border-[#C89A4B]/30 text-[#0F172A] hover:bg-[#C89A4B]/10 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
