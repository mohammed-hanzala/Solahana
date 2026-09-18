import React, { useEffect } from 'react';
import RiskHero from '../components/risk/RiskHero';
import WhyRiskManagementMatters from '../components/risk/WhyRiskManagementMatters';
import RiskSolutions from '../components/risk/RiskSolutions';
import WhyChooseSolahanaRisk from '../components/risk/WhyChooseSolahanaRisk';
import RiskBenefits from '../components/risk/RiskBenefits';
import RiskCalculator from '../components/risk/RiskCalculator';
import GlobalConsultationSection from '../components/common/GlobalConsultationSection';

export default function RiskManagementPage({ onOpenSearch }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const scrollToCalculator = () => {
    const el = document.getElementById('risk-calculator');
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
      <RiskHero 
        onStartRiskPlanning={scrollToCalculator}
        onRequestCallback={scrollToConsultation}
      />

      {/* 2. WHY RISK MANAGEMENT MATTERS */}
      <WhyRiskManagementMatters />

      {/* 3. RISK MANAGEMENT SOLUTIONS */}
      <RiskSolutions onSelectSolution={onOpenSearch} />

      {/* 4. WHY CHOOSE SOLAHANA */}
      <WhyChooseSolahanaRisk />

      {/* 5. PROTECTION BENEFITS SECTION */}
      <RiskBenefits onStartRiskPlanning={scrollToCalculator} />

      {/* 6. RISK PROTECTION CALCULATOR (LAST CONTENT SECTION) */}
      <RiskCalculator />

      {/* 7. CONSULTATION BOOKING SECTION */}
      <GlobalConsultationSection />
    </div>
  );
}
