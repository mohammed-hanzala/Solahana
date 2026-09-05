import React from 'react';
import { motion } from 'framer-motion';
import { Star, Home, GraduationCap, ShieldCheck, Quote, MapPin } from 'lucide-react';

export default function GoalSuccessStories() {
  const stories = [
    {
      name: 'Rohan Sharma',
      role: 'Senior Software Architect',
      location: 'Bangalore',
      goal: 'Dream Home Fund',
      corpus: '₹1.20 Cr Goal',
      timeline: '5-Year Roadmap',
      status: '85% Achieved',
      icon: Home,
      text: 'SOLAHANA structured my step-up SIPs and tax harvesting so my down-payment fund hit 85% target 18 months ahead of schedule without lifestyle compromise.',
      rating: 5
    },
    {
      name: 'Ananya & Vikram Deshmukh',
      role: 'Tech Startup Founders',
      location: 'Mumbai',
      goal: 'Children Overseas University',
      corpus: '₹45 Lakhs Goal',
      timeline: '2032 Target',
      status: '72% Achieved',
      icon: GraduationCap,
      text: 'Managing corporate profits alongside personal family goals was messy until SOLAHANA created a dedicated education trust portfolio with zero-commission direct funds.',
      rating: 5
    },
    {
      name: 'Dr. Rajesh & Sunita Gupta',
      role: 'Senior Cardiac Surgeon',
      location: 'New Delhi',
      goal: 'FIRE Early Retirement',
      corpus: '₹4.50 Cr Goal',
      timeline: 'Age 48 FIRE Target',
      status: '+3 Yrs Ahead',
      icon: ShieldCheck,
      text: 'Retirement felt uncertain despite high income. SOLAHANA built an inflation-indexed passive income framework that puts our FIRE date 3 years ahead of schedule.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#020B2D]">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#C8A24A]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#071C48] border border-[#C8A24A]/30 text-[#E8C878] text-xs font-semibold uppercase tracking-widest font-sora">
            <Quote className="w-3.5 h-3.5 text-[#C8A24A]" />
            <span>AUTHENTIC CLIENT EXPERIENCES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#F8F7F3] tracking-tight">
            Real Goals. Real Progress.
          </h2>

          <p className="text-base sm:text-lg text-[#BAC6DA] font-inter">
            See how goal-based financial planning helps people achieve their most important life milestones.
          </p>
        </div>

        {/* 3 Luxury Story Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((item, idx) => {
            const IconComp = item.icon;

            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                whileHover={{ y: -8 }}
                className="p-8 rounded-3xl bg-gradient-to-b from-[#071C48]/95 to-[#020B2D]/95 border border-[#C8A24A]/30 hover:border-[#E8C878]/70 transition-all duration-300 shadow-[0_15px_40px_rgba(2,11,45,0.8)] backdrop-blur-2xl text-left flex flex-col justify-between group"
              >
                <div className="space-y-6">
                  
                  {/* Top Bar with Client Avatar Initials & Rating */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E8C878] to-[#B8862B] p-[1px] shadow-[0_0_15px_rgba(200,162,74,0.3)]">
                        <div className="w-full h-full bg-[#020B2D] rounded-full flex items-center justify-center font-sora font-bold text-xs text-[#E8C878]">
                          {item.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold font-serif-luxury text-[#F8F7F3] group-hover:text-[#E8C878] transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-[11px] text-[#BAC6DA] flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#C8A24A]" />
                          {item.role} • {item.location}
                        </p>
                      </div>
                    </div>

                    <div className="flex text-[#E8C878]">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Goal Achieved Tag Pill */}
                  <div className="p-3.5 rounded-2xl bg-[#020B2D]/80 border border-[#C8A24A]/20 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <IconComp className="w-4 h-4 text-[#C8A24A]" />
                      <div>
                        <p className="text-xs font-bold text-[#F8F7F3]">{item.goal}</p>
                        <p className="text-[10px] text-[#BAC6DA]">{item.timeline}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-sora font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                      {item.status}
                    </span>
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-xs sm:text-sm text-[#BAC6DA] leading-relaxed font-inter italic">
                    "{item.text}"
                  </p>
                </div>

                {/* Footer Tag */}
                <div className="mt-6 pt-4 border-t border-[#C8A24A]/15 flex items-center justify-between text-[11px] text-[#BAC6DA]">
                  <span>Target Corpus: {item.corpus}</span>
                  <span className="text-[#E8C878] font-semibold font-sora">Verified Client</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
