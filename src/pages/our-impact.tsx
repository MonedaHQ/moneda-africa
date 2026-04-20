import Footer from '@/components/Footer';
import MetaTags from '@/components/head';
import HeroSection from '@/components/HeroSection';
import Navigation from '@/components/mainNav/Navigation';
import Metrics from '@/components/Metrics';
import MobileNavigationHeader from '@/components/mobileNav/MobileNavigationHeader';
import ImpactPage from './impact/ImpactPage';

const heroContent = {
  images: ['/assets/africa-map.jpg'],
  content: {
    heading: 'Our Impact Across Africa',
    paragraph:
      'We\'re driving transformational change across Africa by empowering SMEs, providing sustainable financing, and delivering world-class solutions. Through strategic investments and partnerships, we bridge key gaps in sectors like agriculture, mining, oil & gas, and the arts—helping local businesses grow and compete globally.',
  },
};

const metrics = [
  { metric: 150, prefix: null, suffix: '+', description: 'jobs created' },
  { metric: 200, prefix: null, suffix: '+', description: 'farmers empowered' },
  { metric: 600, prefix: 'NGN', suffix: 'm+', description: 'capital deployed' },
  { metric: 170, prefix: null, suffix: '+', description: 'trained African CSMEs' },
];

function OurImpact() {
  return (
    <>
      <MetaTags
        title="Our Impact - Moneda | Bridging Africa's Credit Gap"
        description="At Moneda, we leverage our deep-rooted expertise in the finance and commodities markets to identify and capitalize on emerging opportunities. We empower our clients to enter new markets confidently by navigating complexities and maximizing returns while minimizing risk."
      />
      <Navigation />
      <MobileNavigationHeader />
      <HeroSection images={heroContent.images} content={heroContent.content} />
      <Metrics paddingTop={true} metrics={metrics} />
      <ImpactPage />
      <Footer />
    </>
  );
}

export default OurImpact;
