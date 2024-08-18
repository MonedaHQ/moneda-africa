import Section from '@/components/Section';
import styles from './styles/trading.module.css';
import TextAndImageSection from '@/components/TextAndImageSection';
import Quote from '@/components/Quote';
import GetInTouch from '@/components/GetInTouch';

function Trading() {
  const quote = {
    quote:
      '“To see true transformation within the economy, we have to get the capital in the hands of local communities”',
    caption: 'Ejike Egbuagu, Group Chief Executive',
  };
  const imageAndTextContent = {
    imageUrl: '/assets/trading-africa.jpg',
    title: 'Trading',
    heading:
      'A high-performing trading team leveraging cutting-edge analytics.',
    paragraph:
      'Core to our business is global energy and commodities trading. Positioned at the intersection of production and consumption, we optimize value across the supply chain. <br/> <br/>Our team with decades of institutional knowledge, coupled with advanced analytics, enables us to excel in physical and financial trading, investing, and financing. <br/> <br/>A flat organizational structure and collaborative culture empower our teams to seize opportunities rapidly, delivering exceptional results for our clients and shareholders.',
    contentFirst: true,
  };

  const sectionTwo = {
    imageUrl: '/assets/crypto-guy.jpg',
    heading: 'Unparalleled Expertise in Physical and Financial Commodities',
    paragraph:
      'We are active in a wide-range of energy, commodities, and financial markets, including: <ul><li>Energy</li> <li>Metals</li> <li>Renewables</li> <li>Ags/Softs</li> <li>Securities.</li></ul>',
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
      <Quote quote={quote.quote} caption={quote.caption} />
      <TextAndImageSection
        imageUrl={sectionTwo.imageUrl}
        heading={sectionTwo.heading}
        paragraph={sectionTwo.paragraph}
        contentFirst={sectionTwo.contentFirst}
        brown={true}
        line={false}
      />
      <GetInTouch venture="trading activites" />
    </>
  );
}

export default Trading;
