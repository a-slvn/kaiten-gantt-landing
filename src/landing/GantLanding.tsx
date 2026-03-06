import Navbar from './sections/Navbar';
import HeroSection from './sections/HeroSection';
import FeatureCards from './sections/FeatureCards';
import GanttOverview from './sections/GanttOverview';
import FeatureSection1 from './sections/FeatureSection1';
import FeatureSection2 from './sections/FeatureSection2';
import FeatureSection3 from './sections/FeatureSection3';
import FeatureSection4 from './sections/FeatureSection4';
import FeatureSection5 from './sections/FeatureSection5';
import FeatureSection6 from './sections/FeatureSection6';
import FeatureSection7 from './sections/FeatureSection7';
import ExamplesSection from './sections/ExamplesSection';
import TestimonialsSection from './sections/TestimonialsSection';
import CtaSection from './sections/CtaSection';
import FaqSection from './sections/FaqSection';
import ComparisonTable from './sections/ComparisonTable';
import Footer from './sections/Footer';

export default function GantLanding() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FeatureCards />
      <GanttOverview />
      <FeatureSection1 />
      <FeatureSection2 />
      <FeatureSection3 />
      <FeatureSection4 />
      <FeatureSection5 />
      <FeatureSection6 />
      <FeatureSection7 />
      <ExamplesSection />
      <TestimonialsSection />
      <CtaSection />
      <FaqSection />
      <ComparisonTable />
      <Footer />
    </div>
  );
}
