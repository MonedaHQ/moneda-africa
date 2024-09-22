import MetaTags from '@/components/head';
import Navigation from '@/components/mainNav/Navigation';
import MobileNavigationHeader from '@/components/mobileNav/MobileNavigationHeader';
import TypicalHero from '@/components/TypicalHero';
import QueryNavigator from './focusAreas/QueryNavigator';
import Footer from '@/components/Footer';
import WhatWeDoHero from './focusAreas/WhatWeDoHero';

function WhatWeDo() {
  const heroContent = {
    pageTitle: 'Focus areas',
    heading:
      'Global Experts in Finance and Commodities Delivering Innovative Solutions and Maximizing Returns for Our Clients.',
    paragraph:
      'Since our inception in 2023, Moneda Capital has rapidly established itself as a global leader in the finance and commodities markets. Operating at the forefront of the wholesale energy sector, we have amassed unparalleled expertise across a diverse range of physical and financial commodities. This deep-rooted knowledge empowers us to deliver exceptional value to our clients through a comprehensive suite of services.',
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
