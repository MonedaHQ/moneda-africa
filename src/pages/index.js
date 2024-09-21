import MetaTags from '@/components/head';
import Navigation from '@/components/mainNav/Navigation';
import useScrollPosition from '@/hooks/useScrollPostion';
import { scrollOffset } from '@/utils/config';
import HeroSection from './index/HeroSection';
import MobileNavigationHeader from '@/components/mobileNav/MobileNavigationHeader';
import WhyWeExist from './index/WhyWeExist';
import TeamSection from './index/TeamSection';
import WWDSection from './index/WWDSection';
import WhatWeDo from './index/OurFocusAreas';
import Footer from '@/components/Footer';
import OurTeam from './index/OurTeam';

function Home() {
  const scrollPosition = useScrollPosition(scrollOffset);
  return (
    <>
      <MetaTags
        title="Home - Moneda | Bridging Africa's Credit Gap"
        description="At Moneda, we've cultivated a profound understanding of African finance and commodities sectors. Our expertise across various sectors allows us to spot and seize emerging opportunities. We partner with our clients to navigate African markets confidently. By leveraging the insights we collect, you can maximise returns while mitigating risks."
      />
      <Navigation />
      <MobileNavigationHeader />
      <HeroSection />
      <WhyWeExist />
      <TeamSection />
      <WWDSection />
      <WhatWeDo />
      <OurTeam />
      <Footer />
    </>
  );
}

export default Home;
