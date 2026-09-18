import React, { useEffect } from 'react';
import InvestmentsHero from '../components/investments/InvestmentsHero';
import WhyInvestingMatters from '../components/investments/WhyInvestingMatters';
import InvestmentCategories from '../components/investments/InvestmentCategories';
import WhyChooseSolahanaInvestment from '../components/investments/WhyChooseSolahanaInvestment';
import InvestmentCalculator from '../components/investments/InvestmentCalculator';

export default function InvestmentsPage({ onOpenSearch }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const scrollToCalculator = () => {
    const el = document.getElementById('investment-calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToConsultation = () => {
    const el = document.getElementById('global-consultation-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative z-10 bg-[#FAF8F5]">
      {/* 1. HERO SECTION */}
      <InvestmentsHero 
        onStartPlanning={scrollToCalculator}
        onRequestCallback={scrollToConsultation}
      />

      {/* 2. WHY INVESTMENT PLANNING MATTERS */}
      <WhyInvestingMatters />

      {/* 3. INVESTMENT PLANNING SOLUTIONS */}
      <InvestmentCategories />

      {/* 4. WHY CHOOSE SOLAHANA */}
      <WhyChooseSolahanaInvestment />

      {/* 5. INVESTMENT CALCULATOR */}
      <InvestmentCalculator />
    </div>
  );
}
