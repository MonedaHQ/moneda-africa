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
        title="Home - Moneda | We are attracted to Gaps: African Credit Gaps"
        description="At Moneda, we leverage our deep-rooted expertise in the finance and commodities markets to identify and capitalize on emerging opportunities. We empower our clients to enter new markets confidently by navigating complexities and maximizing returns while minimizing risk."
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
