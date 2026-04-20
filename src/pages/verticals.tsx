import MetaTags from '@/components/head';
import Navigation from '@/components/mainNav/Navigation';
import MobileNavigationHeader from '@/components/mobileNav/MobileNavigationHeader';
import QueryNavigator from './verticals/QueryNavigator';
import Footer from '@/components/Footer';
import WhatWeDoHero from './verticals/WhatWeDoHero';
import HeroSection from '@/components/HeroSection';

const heroContent = {
  images: ['/assets/verticals-hero.jpg'],
  content: {
    heading: 'Our Verticals',
    paragraph:
      '<strong>We are global experts in Finance and Commodities</strong><br/><br/>Since inception, Moneda has been delivering innovative solutions and maximizing client returns. With leading expertise in the wholesale energy sector and commodities, we provide exceptional value through a comprehensive range of services.',
  },
};

function WhatWeDo() {
  return (
    <>
      <MetaTags
        title="Our Verticals - Moneda | Bridging Africa's Credit Gap"
        description="At Moneda, we leverage our deep-rooted expertise in the finance and commodities markets to identify and capitalize on emerging opportunities. We empower our clients to enter new markets confidently by navigating complexities and maximizing returns while minimizing risk."
      />
      <Navigation />
      <MobileNavigationHeader />
      <HeroSection images={heroContent.images} content={heroContent.content} />
      <div style={{ position: 'relative', height: '100%' }}>
        <QueryNavigator />
        <WhatWeDoHero />
      </div>
      <Footer />
    </>
  );
}

export default WhatWeDo;
