import Footer from '@/components/Footer';
import MetaTags from '@/components/head';
import HeroSection from '@/components/HeroSection';
import Navigation from '@/components/mainNav/Navigation';
import MobileNavigationHeader from '@/components/mobileNav/MobileNavigationHeader';
import AllTeamMembers from './ourPeople/AllTeamMembers';

function OurPeople() {
  const heroContent = {
    images: ['/assets/africa-wood.jpg'],
    content: {
      heading: 'Our standard is simple',
      paragraph:
        '<h4><strong>Only the best make it.</strong></h4><br/>At Moneda Africa, our expert team drives economic transformation through innovative solutions and strong partnerships.',
    },
  };
  return (
    <>
      <MetaTags
        title="Meet Our People - Moneda | Bridging Africa's Credit Gap"
        description="At Moneda Africa, our success is driven by the exceptional talent and dedication of our team. We are a dynamic group of professionals with a shared vision of transforming Africa's economic landscape. Our diverse expertise spans finance, commodity trading and sustainable development committed to delivering innovative solutions and exceeding client expectations. We pride ourselves on our collaborative culture and our ability to build strong partnerships."
      />
      <Navigation />
      <MobileNavigationHeader />
      <HeroSection images={heroContent.images} content={heroContent.content} />
      <AllTeamMembers />
      <Footer />
    </>
  );
}

export default OurPeople;
