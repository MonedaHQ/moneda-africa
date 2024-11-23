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
    imageUrl: '/assets/verticals/images/adviser.jpg',
    title: '',
    heading: 'Risk Advisory',
    paragraph:
      'At Moneda, we offer comprehensive risk advisory and negotiation services to customers. Our team has deep expertise in structuring and executing high-value oil transactions, mitigating risks associated with price volatility, supply chain disruptions, and regulatory changes. We work closely with clients to develop bespoke risk management strategies, ensuring seamless execution and long-term sustainability of their trade operations.<br/><br/>Moneda’s advisory services go beyond just risk management; we help clients navigate complex oil trading landscapes by leveraging our relationships and knowledge of market dynamics. By ensuring that deals are well-structured, and negotiations are favorable, we earn fees for our expertise while delivering significant value to our clients.',
    contentFirst: true,
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
      <Quote quote={quote.quote} caption={quote.caption} />
      <GetInTouch venture="Risk Advisory services" />
    </>
  );
}

export default RiskSolutions;
