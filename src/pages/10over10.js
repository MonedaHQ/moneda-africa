import MetaTags from '@/components/head';
import HeroSection from '@/components/HeroSection';
import Navigation from '@/components/mainNav/Navigation';
import MobileNavigationHeader from '@/components/mobileNav/MobileNavigationHeader';
import useScrollPosition from '@/hooks/useScrollPostion';
import { scrollOffset } from '@/utils/config';
import RSVP from './tenoverten/RSVP';
import Footer from '@/components/Footer';
import TheStory from './tenoverten/TheStory';
import EventInfo from './tenoverten/EventInfo';

const heroContent = {
  images: ['/assets/tenoverten/hero.jpg'],
  content: {
    heading: 'A Decade of Building Bold',
    paragraph:
      "<p>Ten years of proving Africans CAN finance Africa's future</p>",
  },
  button: {
    label: 'Confirm Your Attendance',
    link: '#rsvp',
    // newTab: true,
    dark: true,
  },
};

function TenOverTen() {
  const scrollPosition = useScrollPosition(scrollOffset);
  return (
    <>
      <MetaTags
        title="Moneda 10 over 10 | A Decade of Building Boldly"
        description="Ten years ago, we set out to prove that Africans CAN finance Africa’s future. After building roots across 7 African countries, safely deploying capital where ‘smart’ people said was impossible - we return to where it all started. "
      />
      <Navigation scrollPosition={scrollPosition} />
      <MobileNavigationHeader />
      <HeroSection
        images={heroContent.images}
        content={heroContent.content}
        button={heroContent.button}
      />
      <RSVP />
      <TheStory />
      {/* <EventInfo /> */}
      <Footer />
    </>
  );
}

export default TenOverTen;
