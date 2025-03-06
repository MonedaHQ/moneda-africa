import Footer from '@/components/Footer';
import MetaTags from '@/components/head';
import HeroSection from '@/components/HeroSection';
import Navigation from '@/components/mainNav/Navigation';
import MobileNavigationHeader from '@/components/mobileNav/MobileNavigationHeader';
import JoinTheChallenge from './iwd/JoinTheChallenge';
import OurStories from './iwd/OurStories';

function IWDHome() {
  const heroContent = {
    images: ['/assets/iwd-2025.jpg'],
    content: {
      heading: 'Leading Her Community',
      paragraph:
        'Women are the backbone of thriving communities, leading in ways big and small—from markets to estates to workplaces. Now, it’s time to spotlight their impact. <br/> <br/>Moneda’s #LeadingHerCommunity Challenge is a call to action for women who have stepped up as community leaders. Whether you’re organizing, advocating, or driving change, your story can inspire others to do the same.',
    },
  };
  return (
    <>
      <MetaTags
        title="IWD 2025 - Leading Her Community | Moneda"
        description="Women are the backbone of thriving communities, leading in ways big and small—from markets to estates to workplaces. Now, it’s time to spotlight their impact. Moneda’s #LeadingHerCommunity Challenge is a call to action for women who have stepped up as community leaders. Whether you’re organizing, advocating, or driving change, your story can inspire others to do the same."
      />
      <Navigation />
      <MobileNavigationHeader />
      <HeroSection images={heroContent.images} content={heroContent.content} />
      {/* <JoinTheChallenge /> */}
      <OurStories />
      <Footer />
    </>
  );
}

export default IWDHome;
