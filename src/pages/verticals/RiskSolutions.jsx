import Section from '@/components/Section';
import styles from './styles/risksolutions.module.css';
import TextAndImageSection from '@/components/TextAndImageSection';
import GetInTouch from '@/components/GetInTouch';
import Quote from '@/components/Quote';

function RiskSolutions() {
  const quote = {
    quote:
      '“Investing in Africa isn’t just a financial decision; it’s about contributing to a legacy of growth and resilience.”',
    caption: 'Strive Masiyiwa - Founder, Econet Wireless Group',
  };

  const imageAndTextContent = {
    imageUrl: '/assets/mobile-trading.jpg',
    title: 'Risk Solutions',
    heading: 'Mastering Energy and Commodity Price Volatility.',
    paragraph:
      'Moneda offers comprehensive risk management solutions tailored to the unique needs of our clients. By combining deep industry expertise with advanced analytics, we help businesses navigate the complexities of energy and commodity price fluctuations. <br/> <br/>From financial derivatives to physical energy solutions, our holistic approach mitigates risk and optimizes returns. Our extensive global network and deep liquidity pool enable us to deliver competitive pricing and seamless execution on a wide range of products.',
    contentFirst: true,
  };

  const sectionTwo = {
    imageUrl: '/assets/man-night-trading.jpg',
    heading: 'Mastering Energy and Commodity Price Volatility.',
    paragraph:
      '<strong>World-class trading team:</strong> Leveraging deep industry experience.<br/><br/><strong>Tailored solutions:</strong> Delivering optimal outcomes for diverse client needs.<br/> <br/><strong>Global market coverage:</strong> Spanning major energy markets and related commodities.<br/><br/><strong>Renewables leadership:</strong> Pioneering sustainable energy solutions.<br/><br/><strong>Exceptional execution:</strong> Combining competitive pricing with seamless service.',
    contentFirst: false,
  };
  return (
    <>
      <Section>
        <TextAndImageSection
          imageUrl={imageAndTextContent.imageUrl}
          heading={imageAndTextContent.heading}
          paragraph={imageAndTextContent.paragraph}
          contentFirst={imageAndTextContent.contentFirst}
          title={imageAndTextContent.title}
        />
      </Section>
      <Section>
        <TextAndImageSection
          imageUrl={sectionTwo.imageUrl}
          heading={sectionTwo.heading}
          paragraph={sectionTwo.paragraph}
          contentFirst={sectionTwo.contentFirst}
        />
      </Section>
      <Quote quote={quote.quote} caption={quote.caption} />
      <GetInTouch venture="risk solution services" />
    </>
  );
}

export default RiskSolutions;
