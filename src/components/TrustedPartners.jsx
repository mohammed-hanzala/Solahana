import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Building2, Landmark, Lock, CheckCircle2 } from 'lucide-react';

export default function TrustedPartners() {
  const partners = [
    { name: 'NSE', full: 'National Stock Exchange', type: 'Exchange', icon: Landmark },
    { name: 'BSE', full: 'Bombay Stock Exchange', type: 'Exchange', icon: Building2 },
    { name: 'NSDL', full: 'National Securities Depository', type: 'Depository', icon: ShieldCheck },
    { name: 'CDSL', full: 'Central Depository Services', type: 'Depository', icon: Lock },
    { name: 'CAMS', full: 'Computer Age Management', type: 'Registrar', icon: CheckCircle2 },
    { name: 'MCX', full: 'Multi Commodity Exchange', type: 'Exchange', icon: Landmark },
    { name: 'RBI', full: 'RBI Regulated Entities', type: 'Banking Gateway', icon: Landmark },
    { name: 'SEBI', full: 'SEBI Registered Planning Standard', type: 'Compliance', icon: Award },
  ];

  // Duplicate for seamless infinite marquee loop
  const marqueeItems = [...partners, ...partners, ...partners];

  return (
    <section className="relative z-10 py-16 bg-[#FCFAF6] border-t border-[#E7D7B5] overflow-hidden">
      
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[150px] bg-[#C89B3C]/5 blur-[90px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 mb-10">
        
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-serif-luxury font-bold text-[#1A1A1A] tracking-tight"
        >
          Trusted by India's Financial Ecosystem
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm sm:text-base text-[#555555] font-inter max-w-xl mx-auto"
        >
          Supporting investors through trusted financial institutions, depositories, and SEBI compliance standards.
        </motion.p>

      </div>

      {/* Infinite Horizontal Marquee */}
      <div className="relative w-full overflow-hidden py-4 select-none">
        
        {/* Left & Right Gradient Mask Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#FCFAF6] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#FCFAF6] to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <motion.div
          animate={{ x: ['0%', '-33.333%'] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: 'linear',
          }}
          className="flex items-center space-x-6 sm:space-x-8 w-max"
        >
          {marqueeItems.map((item, index) => {
            const IconComp = item.icon;
            return (
              <div
                key={index}
                className="group relative px-6 py-4 rounded-2xl bg-white border border-[#E7D7B5] hover:border-[#C89B3C] shadow-sm transition-all duration-300 flex items-center space-x-3 cursor-pointer hover:shadow-md hover:-translate-y-1"
              >
                <div className="p-2 rounded-xl bg-[#C89B3C]/10 group-hover:bg-[#C89B3C] border border-[#E7D7B5] text-[#C89B3C] group-hover:text-white transition-all duration-300">
                  <IconComp className="w-5 h-5" />
                </div>

                <div className="text-left">
                  <div className="text-sm font-bold tracking-wider text-[#1A1A1A] group-hover:text-[#C89B3C] transition-colors duration-300 font-sora">
                    {item.name}
                  </div>
                  <div className="text-[10px] text-[#555555] transition-colors duration-300">
                    {item.type}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Thin Gold Divider Below Section */}
      <div className="max-w-7xl mx-auto mt-14 px-4 sm:px-6 lg:px-8">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#E7D7B5] to-transparent" />
      </div>

    </section>
  );
}
