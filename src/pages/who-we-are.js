import MetaTags from '@/components/head';
import Navigation from '@/components/mainNav/Navigation';
import MobileNavigationHeader from '@/components/mobileNav/MobileNavigationHeader';
import Quote from '@/components/Quote';
import TypicalHero from '@/components/TypicalHero';
import CoreValues from './whoWeAre/CoreValues';
import Footer from '@/components/Footer';
import TextAndImageSection from '@/components/TextAndImageSection';
import TrackRecord from './whoWeAre/TrackRecord';
import OurFounder from './whoWeAre/OurFounder';
import Careers from './whoWeAre/Careers';

function WhoWeAre() {
  const heroContent = {
    pageTitle: 'Who we are',
    heading:
      'A global team of dedicated professionals renowned for responsible innovation.',
    paragraph:
      'Built on a foundation of integrity, Moneda is a global energy and commodities firm with a far-reaching presence across asset classes. <br/> <br/> We leverage a network of 5 global offices and a team of  traders with over  extensive industry experience  across 20 diverse business lines. <br/> <br/>This collective expertise empowers us to deliver unparalleled insights and solutions to enterprise, multinational, and government clients worldwide.',
    imageUrl: '/assets/site.jpg',
  };

  const quote = {
    quote:
      '“To see true transformation within the economy, we have to get the capital in the hands of local communities”',
    caption: 'Ejike Egbuagu, Group Chief Executive',
  };

  const imageAndTextContent = {
    imageUrl: '/assets/cms-2.jpg',
    heading: 'Shaping a Sustainable Future Through Diversified Investments',
    paragraph:
      'We are dedicated to driving positive change through our diversified investment portfolio. We believe that by investing across multiple sectors, including energy, mining, construction, and commodities, we can contribute to a more sustainable and prosperous future. <br/> <br/>Our focus is on identifying and supporting innovative businesses that are making a meaningful impact. By leveraging our expertise and resources, we aim to foster growth, create value, and drive positive social and environmental outcomes. Through our investments, we are committed to shaping a sustainable future for generations to come.',
    contentFirst: false,
  };

  return (
    <>
      <MetaTags
        title="What We Do - Moneda | We are attracted to Gaps: African Credit Gaps"
        description="A global leader in finance and commodities, renowned for our unwavering integrity. "
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
      <Careers />
      <Footer />
    </>
  );
}

export default WhoWeAre;
