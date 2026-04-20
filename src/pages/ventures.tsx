import Footer from '@/components/Footer';
import MetaTags from '@/components/head';
import HeroSection from '@/components/HeroSection';
import Navigation from '@/components/mainNav/Navigation';
import MobileNavigationHeader from '@/components/mobileNav/MobileNavigationHeader';
import Ventures from './ventures/Ventures';

const heroContent = {
  images: ['/assets/ventures-building.jpg'],
  content: {
    heading: 'Our Ventures',
    paragraph:
      "<strong>A Fusion of Expertise and Passion</strong><br/><br/>At Moneda Africa, our success is driven by the exceptional talent and dedication of our team. We are a dynamic group of professionals with a shared vision of transforming Africa's economic landscape. Our diverse expertise spans finance, commodity trading and sustainable development committed to delivering innovative solutions and exceeding client expectations. We pride ourselves on our collaborative culture and our ability to build strong partnerships.",
  },
};

function VenturesPage() {
  return (
    <>
      <MetaTags
        title="Our Ventures - Moneda | Bridging Africa's Credit Gap"
        description="At Moneda, we leverage our deep-rooted expertise in the finance and commodities markets to identify and capitalize on emerging opportunities. We empower our clients to enter new markets confidently by navigating complexities and maximizing returns while minimizing risk."
      />
      <Navigation />
      <MobileNavigationHeader />
      <HeroSection images={heroContent.images} content={heroContent.content} />
      <Ventures />
      <Footer />
    </>
  );
}

export default VenturesPage;
