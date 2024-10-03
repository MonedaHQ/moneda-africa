import MetaTags from '@/components/head';
import Navigation from '@/components/mainNav/Navigation';
import MobileNavigationHeader from '@/components/mobileNav/MobileNavigationHeader';
import TypicalHero from '@/components/TypicalHero';
import QueryNavigator from './verticals/QueryNavigator';
import Footer from '@/components/Footer';
import WhatWeDoHero from './verticals/WhatWeDoHero';

function WhatWeDo() {
  const heroContent = {
    pageTitle: 'Focus areas',
    heading: 'Global Experts in Finance and Commodities',
    paragraph:
      'Moneda has been delivering innovative solutions and maximizing client returns since 2015. <br/> With leading expertise in the wholesale energy sector and commodities, we provide exceptional value through a comprehensive range of services.',
    imageUrl: '/assets/business-man.jpg',
  };
  return (
    <>
      <MetaTags
        title="Our Focus Areas - Moneda | Bridging Africa's Credit Gap"
        description="At Moneda, we leverage our deep-rooted expertise in the finance and commodities markets to identify and capitalize on emerging opportunities. We empower our clients to enter new markets confidently by navigating complexities and maximizing returns while minimizing risk."
      />
      <Navigation />
      <MobileNavigationHeader />
      <TypicalHero content={heroContent} />
      <div style={{ position: 'relative', height: '100%' }}>
        <QueryNavigator />
        <WhatWeDoHero />
      </div>
      <Footer />
    </>
  );
}

export default WhatWeDo;
