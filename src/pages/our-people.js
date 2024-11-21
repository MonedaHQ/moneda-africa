import Footer from '@/components/Footer';
import MetaTags from '@/components/head';
import HeroSection from '@/components/HeroSection';
import Navigation from '@/components/mainNav/Navigation';
import MobileNavigationHeader from '@/components/mobileNav/MobileNavigationHeader';
import AllTeamMembers from './ourPeople/AllTeamMembers';

function OurPeople() {
  const heroContent = {
    images: ['/assets/globe.jpg'],
    content: {
      heading: 'Meet Our People',
      paragraph:
        '<strong>A Fusion of Expertise and Passion</strong><br/><br/>At Moneda Africa, our success stems from a talented, dedicated team committed to transforming Africa’s economy. With expertise in finance, commodity trading, and sustainable development, we deliver innovative solutions while fostering strong partnerships and collaboration.',
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
