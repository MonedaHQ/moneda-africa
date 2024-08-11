import MetaTags from '@/components/head';
import Navigation from '@/components/mainNav/Navigation';
import useScrollPosition from '@/hooks/useScrollPostion';
import { scrollOffset } from '@/utils/config';
import HeroSection from './index/HeroSection';
import MobileNavigationHeader from '@/components/mobileNav/MobileNavigationHeader';
import WhyWeExist from './index/WhyWeExist';
import TeamSection from './index/TeamSection';
import ESGSection from './index/ESGSection';
import WhatWeDo from './index/WhatWeDo';
import Footer from '@/components/Footer';

function Home() {
  const scrollPosition = useScrollPosition(scrollOffset);
  return (
    <>
      <MetaTags
        title="Home - Moneda Capital | Shaping the Future of Energy: Expert Guidance and Solutions"
        description="At Moneda Capital, we leverage our deep-rooted expertise in the physical and financial energy and commodities markets to identify and capitalize on emerging opportunities. We empower our clients to enter new markets confidently by navigating complexities and maximizing returns while minimizing risk."
      />
      <Navigation />
      <MobileNavigationHeader />
      <HeroSection />
      <WhyWeExist />
      <TeamSection />
      <ESGSection />
      <WhatWeDo />
      <Footer />
    </>
  );
}

export default Home;
