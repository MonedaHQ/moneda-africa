import MetaTags from '@/components/head';
import Navigation from '@/components/mainNav/Navigation';
import HeroSection from '../components/HeroSection';
import MobileNavigationHeader from '@/components/mobileNav/MobileNavigationHeader';
import WhyWeExist from './index/WhyWeExist';
import TeamSection from './index/TeamSection';
import Footer from '@/components/Footer';
import OurTeam from './index/OurTeam';
import OurVerticals from './index/OurVerticals';
import NewsInsights from './index/NewsInsights';

function Home() {
  const heroContent = {
    images: [
      '/assets/heroImages/link-bridge.jpg',
      '/assets/heroImages/badge.jpg',
      '/assets/heroImages/agriculture.jpg',
      '/assets/heroImages/oil-rig-2.jpg',
    ],
    content: {
      heading: 'We Are Not A Bank',
      paragraph:
        '<p>We are the evolution of <strong>African Credit, </strong>redefining access to financing across the continent.</p><br/><p>Our mission is to support the most important enterprises—critical SMEs—operating in sectors that drive African industrial growth and strengthen local content in Africa. </p>',
    },
    button: {
      label: 'Partner with Us',
      link: '/contact',
      variant: 'secondary',
    },
  };

  return (
    <>
      <MetaTags
        title="Home - Moneda | Bridging Africa's Credit Gap"
        description="Moneda Invest Africa is a pan-African alternative credit and execution platform providing bespoke capital and technical support for critical SMEs in natural resource value chains pivotal to Africa's economic growth. Our model combines institutional capital partnerships with local execution capability."
      />
      <Navigation />
      <MobileNavigationHeader />
      <HeroSection
        images={heroContent.images}
        content={heroContent.content}
        button={heroContent.button}
      />
      <WhyWeExist />
      <TeamSection />
      <OurVerticals />
      <OurTeam />
      <NewsInsights />
      <Footer />
    </>
  );
}

export default Home;
