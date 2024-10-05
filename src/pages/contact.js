import MetaTags from '@/components/head';
import HeroSection from '@/components/HeroSection';
import Navigation from '@/components/mainNav/Navigation';
import MobileNavigationHeader from '@/components/mobileNav/MobileNavigationHeader';
import ContactPage from './contact/ContactPage';
import Footer from '@/components/Footer';
import MapSection from './contact/MapSection';

function Contact() {
  const heroContent = {
    images: ['/assets/phone-user.jpg'],
    content: {
      heading: 'Contact Us',
      paragraph:
        'Have a question or need assistance? Our team is ready to support you. Reach out using the details below, and we’ll get back to you as soon as possible.',
    },
  };
  return (
    <>
      <MetaTags
        title="Contact us - Moneda | Bridging Africa's Credit Gap"
        description="Have a question or need assistance? Our team is ready to support you. Reach out using the details below, and we’ll get back to you as soon as possible."
      />
      <Navigation />
      <MobileNavigationHeader />
      <HeroSection images={heroContent.images} content={heroContent.content} />
      <ContactPage />
      <MapSection />
      <Footer />
    </>
  );
}

export default Contact;
