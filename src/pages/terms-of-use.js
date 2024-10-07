import { useEffect, useState } from 'react';
import MetaTags from '@/components/head';
import HeroSection from '@/components/HeroSection';
import Navigation from '@/components/mainNav/Navigation';
import MobileNavigationHeader from '@/components/mobileNav/MobileNavigationHeader';
import Section from '@/components/Section';
import { termsOfUse } from '@/data/legal';
import Footer from '@/components/Footer';
import Terms from './legal/Terms';

function TermsOfUse() {
  const heroContent = {
    images: ['/assets/contract.jpg'],
    content: {
      heading: termsOfUse.heading,
      paragraph:
        'Please read these terms and conditions carefully. By accessing this website, you agree to be bound by the terms and conditions below.',
    },
  };

  return (
    <>
      <MetaTags
        title="Terms Of Use - Moneda | Bridging Africa's Credit Gap"
        description="Your privacy is important to us. This Privacy Policy explains what and how we collect, share, use, and protect your personal information when you visit or use this and other services offered by Moneda Africa (“Moneda)."
      />
      <Navigation />
      <MobileNavigationHeader />
      <HeroSection images={heroContent.images} content={heroContent.content} />
      <Terms data={termsOfUse.content} />
      <Footer />
    </>
  );
}

export default TermsOfUse;
