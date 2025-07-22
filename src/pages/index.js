import MetaTags from '@/components/head';
import Navigation from '@/components/mainNav/Navigation';
import useScrollPosition from '@/hooks/useScrollPostion';
import { scrollOffset } from '@/utils/config';
import HeroSection from '../components/HeroSection';
import MobileNavigationHeader from '@/components/mobileNav/MobileNavigationHeader';
import WhyWeExist from './index/WhyWeExist';
import TeamSection from './index/TeamSection';
import WWDSection from './index/WWDSection';
import WhatWeDo from './index/OurFocusAreas';
import Footer from '@/components/Footer';
import OurTeam from './index/OurTeam';
import useScrollDirection from '@/hooks/useScrollDirection';
import TheMonedaGroup from './index/TheMonedaGroup';
import OurVerticals from './index/OurVerticals';
import NewsInsights from './index/NewsInsights';

function Home() {
  const scrollPosition = useScrollPosition(scrollOffset);

  const heroContent = {
    images: [
      // '/assets/heroupdate/backgroundImage.jpg',
      '/assets/heroImages/link-bridge.jpg',
      '/assets/heroImages/badge.jpg',
      '/assets/heroImages/agriculture.jpg',
      '/assets/heroImages/oil-rig-2.jpg',
    ],
    content: {
      heading: 'We Are Not a Bank',
      paragraph:
        '<h4><strong>We are the evolution of African Credit</strong></h4><p>We support the most important SMEs (Critical SMEs) in the most important sectors for African industrial growth.</p>',
    },
  };

  return (
    <>
      <MetaTags
        title="Home - Moneda | Bridging Africa's Credit Gap"
        description="At Moneda, we've cultivated a profound understanding of African finance and commodities sectors. Our expertise across various sectors allows us to spot and seize emerging opportunities. We partner with our clients to navigate African markets confidently. By leveraging the insights we collect, you can maximise returns while mitigating risks."
      />
      <Navigation scrollPosition={scrollPosition} />
      <MobileNavigationHeader />
      <HeroSection images={heroContent.images} content={heroContent.content} />
      <WhyWeExist />
      <TeamSection />
      <OurVerticals />
      {/* <WWDSection /> */}
      {/* <WhatWeDo /> */}
      <OurTeam />
      <NewsInsights />
      <Footer />
    </>
  );
}

export default Home;
