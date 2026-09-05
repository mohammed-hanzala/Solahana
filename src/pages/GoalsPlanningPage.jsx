import React, { useEffect } from 'react';
import GoalsHero from '../components/goals/GoalsHero';
import WhyGoalPlanning from '../components/goals/WhyGoalPlanning';
import PersonalizedGoalTimelineSection from '../components/goals/PersonalizedGoalTimelineSection';
import GoalJourneyTimeline from '../components/goals/GoalJourneyTimeline';
import GoalDashboardPreview from '../components/goals/GoalDashboardPreview';
import GoalPrinciples from '../components/goals/GoalPrinciples';
import GoalSuccessStories from '../components/goals/GoalSuccessStories';
import GoalsCTA from '../components/goals/GoalsCTA';

export default function GoalsPlanningPage({ onOpenSearch }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleExploreCategories = () => {
    const el = document.getElementById('personalized-goal-timeline');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative z-10">
      {/* SECTION 1: HERO BANNER */}
      <GoalsHero 
        onStartPlanning={onOpenSearch}
        onExploreCategories={handleExploreCategories}
      />

      {/* SECTION 2: WHY GOAL-BASED PLANNING? */}
      <WhyGoalPlanning />

      {/* SECTION 3: PERSONALIZED GOAL TIMELINE & HORIZONS */}
      <PersonalizedGoalTimelineSection />

      {/* SECTION 4: YOUR GOAL JOURNEY */}
      <GoalJourneyTimeline />

      {/* SECTION 5: GOAL PLANNING DASHBOARD PREVIEW */}
      <GoalDashboardPreview />

      {/* SECTION 6: PLANNING PRINCIPLES */}
      <GoalPrinciples />

      {/* SECTION 7: CLIENT SUCCESS STORIES */}
      <GoalSuccessStories />

      {/* SECTION 8: FINAL CTA */}
      <GoalsCTA 
        onStartPlanning={onOpenSearch}
        onBookConsultation={onOpenSearch}
      />
    </div>
  );
}
