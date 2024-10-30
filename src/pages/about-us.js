import MetaTags from '@/components/head';
import Navigation from '@/components/mainNav/Navigation';
import MobileNavigationHeader from '@/components/mobileNav/MobileNavigationHeader';
import Quote from '@/components/Quote';
import TypicalHero from '@/components/TypicalHero';
import CoreValues from './aboutUs/CoreValues';
import Footer from '@/components/Footer';
import TextAndImageSection from '@/components/TextAndImageSection';
import TrackRecord from './aboutUs/TrackRecord';
import OurFounder from './aboutUs/OurFounder';
import Careers from './aboutUs/Careers';
import OurHistory from './aboutUs/OurHistory';
import MissionAndVsion from './verticals/MissionAndVsion';
import Section from '@/components/Section';
import SustainableFuture from './aboutUs/SustainableFuture';

function WhoWeAre() {
  const heroContent = {
    pageTitle: 'About us',
    heading:
      'Our mission is to trigger unconventional growth in Natural Resource value chains in Africa using alternative credit and world-class execution',
    paragraph:
      'Built on a foundation of integrity, Moneda is a global energy and commodities firm with a far-reaching presence across asset classes. <br/> <br/> We leverage a network of 5 global offices and a team of  traders with over  extensive industry experience  across 20 diverse business lines. <br/> <br/>This collective expertise empowers us to deliver unparalleled insights and solutions to enterprise, multinational, and government clients worldwide.',
    imageUrl: '/assets/site.jpg',
  };

  const quote = {
    quote:
      '“To see true transformation within the economy, we have to get the capital in the hands of local communities”',
    caption: 'Ejike Egbuagu, Group Chief Executive',
  };

  return (
    <>
      <MetaTags
        title="What We Do - Moneda | Bridging Africa's Credit Gap"
        description="We are dedicated to driving positive change through our diversified investment portfolio. We believe that by investing across multiple sectors, including energy, mining, construction, and commodities, we can contribute to a more sustainable and prosperous future."
      />
      <Navigation />
      <MobileNavigationHeader />
      {/* <TypicalHero content={heroContent} color="darkBrown" whiteText={true} /> */}
      {/* <Quote quote={quote.quote} caption={quote.caption} /> */}
      <MissionAndVsion />
      <CoreValues />
      <SustainableFuture />
      <TrackRecord />
      <OurHistory />
      <Careers />
      <Footer />
    </>
  );
}

export default WhoWeAre;
