import React, { useEffect } from 'react';
import TaxHero from '../components/tax/TaxHero';
import WhyTaxPlanningMatters from '../components/tax/WhyTaxPlanningMatters';
import TaxServices from '../components/tax/TaxServices';
import TaxOpportunities from '../components/tax/TaxOpportunities';
import TaxTimeline from '../components/tax/TaxTimeline';
import TaxChecklist from '../components/tax/TaxChecklist';
import TaxFAQ from '../components/tax/TaxFAQ';
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

      {/* SECTION 3: SOLAHANA TAX PLANNING SERVICES */}
      <TaxServices onSelectService={onOpenSearch} />

      {/* SECTION 4: TAX SAVING OPPORTUNITIES */}
      <TaxOpportunities />

      {/* SECTION 5: FINANCIAL YEAR TIMELINE */}
      <TaxTimeline />

      {/* SECTION 6: YEAR-END CHECKLIST */}
      <TaxChecklist />

      {/* SECTION 7: FAQ */}
      <TaxFAQ />

      {/* SECTION 8: FINAL CTA */}
      <TaxCTA 
        onStartPlanning={onOpenSearch}
        onScheduleConsultation={onOpenSearch}
      />
    </div>
  );
}
