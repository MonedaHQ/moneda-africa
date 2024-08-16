import MetaTags from '@/components/head';
import Navigation from '@/components/mainNav/Navigation';
import MobileNavigationHeader from '@/components/mobileNav/MobileNavigationHeader';
import TypicalHero from '@/components/TypicalHero';

function WhatWeDo() {
  const heroContent = {
    pageTitle: 'What we do',
    heading:
      'Leveraging Decades of Global Expertise in Finance and Commodities to Deliver Innovative Solutions and Maximize Returns for Our Clients.',
    paragraph:
      'Since our inception in 2023, Moneda Capital has rapidly established itself as a global leader in the finance and commodities markets. Operating at the forefront of the wholesale energy sector, we have amassed unparalleled expertise across a diverse range of physical and financial commodities. This deep-rooted knowledge empowers us to deliver exceptional value to our clients through a comprehensive suite of services.',
    imageUrl: '/assets/business-man.jpg',
  };
  return (
    <>
      <MetaTags
        title="What We Do - Moneda | We are attracted to Gaps: African Credit Gaps"
        description="At Moneda, we leverage our deep-rooted expertise in the finance and commodities markets to identify and capitalize on emerging opportunities. We empower our clients to enter new markets confidently by navigating complexities and maximizing returns while minimizing risk."
      />
      <Navigation />
      <MobileNavigationHeader />
      <TypicalHero content={heroContent} />
    </>
  );
}

export default WhatWeDo;
