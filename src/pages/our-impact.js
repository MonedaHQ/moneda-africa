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
      'We are committed to driving transformational change across multiple sectors in Africa empowering SMEs, providing sustainable financing, and deploying world-class solutions. Through strategic investments and partnerships, we address critical gaps in industries such as agriculture, mining,oil & gas, and the arts enabling local businesses to thrive and compete on a global scale.',
  },
};

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
      <Metrics paddingTop={true} />
      <ImpactPage />
      <Footer />
    </>
  );
}

export default OurImpact;
