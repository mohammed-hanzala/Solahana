import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, MapPin, CheckCircle2, Calendar, ArrowRight, Sparkles } from 'lucide-react';

export default function ConsultationProcess({ onSchedule }) {
  const steps = [
    {
      num: '01',
      title: 'Tell Us About Your Goals',
      subtitle: '30-minute discovery call',
      description: 'Share your key financial ambitions — early retirement, children higher education, property purchase, or tax optimization. We listen carefully to your timeline and risk preferences.',
      icon: MessageSquare,
      detail: 'No obligation • Confidential'
    },
    {
      num: '02',
      title: 'Receive Your Personalized Roadmap',
      subtitle: 'Custom Master Blueprint',
      description: 'Our team crafts a tailored financial report detailing your cash flow optimization, zero-commission asset allocation, emergency shield, and Section 80C/80D tax savings.',
      icon: MapPin,
      detail: 'Downloadable PDF & Interactive Dashboard'
    },
    {
      num: '03',
      title: 'Review and Start Planning',
      subtitle: 'Strategic execution session',
      description: 'We walk through the plan together, answer all your questions, and help you set up automated goal-based SIPs and tax harvesting rules to start building wealth with confidence.',
      icon: CheckCircle2,
      detail: 'Dedicated Advisor Partnership'
    }
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#020B2D]">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-[#C8A24A]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#071C48] border border-[#C8A24A]/30 text-[#E8C878] text-xs font-semibold uppercase tracking-widest font-sora">
            <Calendar className="w-3.5 h-3.5 text-[#C8A24A]" />
            <span>SIMPLE 3-STEP START</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#F8F7F3] tracking-tight">
            Your First Consultation Is Simple
          </h2>

          <p className="text-base sm:text-lg text-[#BAC6DA] font-inter">
            Three simple steps to transform financial uncertainty into a structured, goal-aligned roadmap.
          </p>
        </div>

        {/* 3 Horizontal Process Steps with Connecting Line */}
        <div className="relative">
          
          {/* Horizontal Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute left-20 right-20 top-1/3 -translate-y-1/2 h-[2px] bg-gradient-to-r from-[#E8C878]/30 via-[#C8A24A] to-[#B8862B]/30 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((item, idx) => {
              const IconComp = item.icon;

              return (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  whileHover={{ y: -8 }}
                  className="p-8 rounded-3xl bg-[#071C48]/90 border border-[#C8A24A]/30 hover:border-[#E8C878]/70 transition-all duration-300 shadow-[0_15px_40px_rgba(2,11,45,0.8)] backdrop-blur-2xl text-left flex flex-col justify-between group"
                >
                  <div className="space-y-5">
                    
                    {/* Top Row with Step Badge & Icon */}
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E8C878] to-[#B8862B] p-[1px] shadow-[0_0_20px_rgba(200,162,74,0.3)]">
                        <div className="w-full h-full bg-[#020B2D] rounded-[15px] flex items-center justify-center text-[#E8C878] group-hover:bg-[#C8A24A] group-hover:text-[#020B2D] transition-colors">
                          <IconComp className="w-7 h-7" />
                        </div>
                      </div>

                      <span className="text-3xl font-sora font-bold text-[#E8C878]/60 group-hover:text-[#E8C878] transition-colors">
                        STEP {item.num}
                      </span>
                    </div>

                    {/* Step Title & Subtitle */}
                    <div className="space-y-1">
                      <h3 className="text-xl font-serif-luxury font-bold text-[#F8F7F3] group-hover:text-[#E8C878] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#E8C878]">
                        {item.subtitle}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-[#BAC6DA] leading-relaxed font-inter">
                      {item.description}
                    </p>
                  </div>

                  {/* Detail Footer */}
                  <div className="mt-8 pt-4 border-t border-[#C8A24A]/15 flex items-center justify-between text-[11px] text-[#BAC6DA]">
                    <span>{item.detail}</span>
                    <span className="text-[#E8C878] font-semibold font-sora">Free Initial Call</span>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
