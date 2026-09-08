import React, { useEffect } from 'react';
import TaxHero from '../components/tax/TaxHero';
import WhyTaxPlanningMatters from '../components/tax/WhyTaxPlanningMatters';
import TaxServices from '../components/tax/TaxServices';
import TaxCTA from '../components/tax/TaxCTA';

export default function TaxPlanningPage({ onOpenSearch }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="relative z-10">
      {/* SECTION 1: HERO */}
      <TaxHero 
        onStartTaxPlanning={onOpenSearch}
        onBookConsultation={onOpenSearch}
      />

      {/* SECTION 2: WHY TAX PLANNING MATTERS */}
      <WhyTaxPlanningMatters />

      {/* SECTION 3: HOLISTIC TAX ADVISORY */}
      <TaxServices onSelectService={onOpenSearch} />

      {/* SECTION 4: CONSULTATION CTA */}
      <TaxCTA 
        onStartPlanning={onOpenSearch}
        onScheduleConsultation={onOpenSearch}
      />
    </div>
  );
}
