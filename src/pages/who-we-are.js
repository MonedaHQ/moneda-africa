import MetaTags from '@/components/head';
import Navigation from '@/components/mainNav/Navigation';
import MobileNavigationHeader from '@/components/mobileNav/MobileNavigationHeader';
import Quote from '@/components/Quote';
import TypicalHero from '@/components/TypicalHero';
import CoreValues from './index/CoreValues';
import Footer from '@/components/Footer';
import TextAndImageSection from '@/components/TextAndImageSection';
import TrackRecord from './index/TrackRecord';
import OurFounder from './index/OurFounder';
import Careers from './index/Careers';

function WhoWeAre() {
  const heroContent = {
    pageTitle: 'Who we are',
    heading:
      'A global leader in finance and commodities, renowned for our unwavering integrity.',
    paragraph:
      'Built on a foundation of integrity, Moneda is a global investment firm with a far-reaching presence across asset classes. <br/> <br/> We leverage a network of 5 global offices and a team of  traders with extensive industry experience  across 20 diverse business lines. <br/> <br/>This collective expertise empowers us to deliver unparalleled insights and solutions to enterprise, multinational, and government clients worldwide.',
    imageUrl: '/assets/site.jpg',
  };

  const quote = {
    quote:
      '“To see true transformation within the economy, we have to get the capital in the hands of local communities”',
    caption: 'Ejike Egbuagu, Group Chief Executive',
  };

  const imageAndTextContent = {
    imageUrl: '/assets/cms-2.jpg',
    heading: 'Leading the Charge towards a sustainable Energy Transition',
    paragraph:
      'We view sustainability as both a strategic imperative and an extraordinary opportunity. <br/> <br/>Moneda Capital is at the forefront of developing innovative investment solutions, consulting services, and sustainable strategies for the energy transition. <br/> <br/> By harnessing the power of technology, we are creating commercially viable pathways to a renewable energy future.',
    contentFirst: false,
  };

  return (
    <>
      <MetaTags
        title="Home - Moneda | We are attracted to Gaps: African Credit Gaps"
        description="At Moneda, we leverage our deep-rooted expertise in the finance and commodities markets to identify and capitalize on emerging opportunities. We empower our clients to enter new markets confidently by navigating complexities and maximizing returns while minimizing risk."
      />
      <Navigation />
      <MobileNavigationHeader />
      <TypicalHero content={heroContent} />
      <Quote quote={quote.quote} caption={quote.caption} />
      <CoreValues />
      <TextAndImageSection
        imageUrl={imageAndTextContent.imageUrl}
        heading={imageAndTextContent.heading}
        paragraph={imageAndTextContent.paragraph}
        contentFirst={imageAndTextContent.contentFirst}
      />
      <TrackRecord />
      <OurFounder />
      <Careers />
      <Footer />
    </>
  );
}

export default WhoWeAre;
