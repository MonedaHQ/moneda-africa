import MetaTags from '@/components/head';
import HeroSection from '@/components/HeroSection';
import Navigation from '@/components/mainNav/Navigation';
import MobileNavigationHeader from '@/components/mobileNav/MobileNavigationHeader';
import { privacyPolicy } from '@/data/legal';
import Footer from '@/components/Footer';
import Terms from './legal/Terms';

const heroContent = {
  images: ['/assets/security.jpg'],
  content: {
    heading: privacyPolicy.heading,
    paragraph:
      'Please read these terms and conditions carefully. By accessing this website, you agree to be bound by the terms and conditions below.',
  },
};

function PrivacyPolicy() {
  return (
    <>
      <MetaTags
        title="Privacy Policy - Moneda | Bridging Africa's Credit Gap"
        description="Your privacy is important to us. This Privacy Policy explains what and how we collect, share, use, and protect your personal information when you visit or use this and other services offered by Moneda Africa (&quot;Moneda)."
      />
      <Navigation />
      <MobileNavigationHeader />
      <HeroSection images={heroContent.images} content={heroContent.content} />
      <Terms data={privacyPolicy.content} />
      <Footer />
    </>
  );
}

export default PrivacyPolicy;
