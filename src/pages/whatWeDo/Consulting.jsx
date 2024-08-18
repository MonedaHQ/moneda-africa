import Section from '@/components/Section';
import styles from './styles/consulting.module.css';
import TextAndImageSection from '@/components/TextAndImageSection';
import GetInTouch from '@/components/GetInTouch';
import Quote from '@/components/Quote';

function Consulting() {
  const imageAndTextContent = {
    imageUrl: '/assets/consulting.jpg',
    title: 'Consulting',
    heading: 'Expert Energy Market Advisory.',
    paragraph:
      'Moneda  empowers clients to navigate the complexities of the global wholesale energy markets. We provide strategic advisory services to corporations, state-owned enterprises, regulators, and investors seeking to enter or expand their presence in this dynamic sector. From market entry strategies to joint venture partnerships, our in-depth knowledge and experience deliver actionable insights and support for long-term success.',
    contentFirst: true,
  };

  const sectionTwo = {
    imageUrl: '/assets/shaking.jpg',
    heading: 'Our expertise includes:',
    paragraph:
      '<ul> <li>Regulatory, Controls and Compliance</li> <li>Operations</li> <li>Physical Trading</li> <li>Risk Management</li><li>Transaction Structuring</li>  </ul>',
    contentFirst: false,
  };

  const quote = {
    quote:
      '“To see true transformation within the economy, we have to get the capital in the hands of local communities”',
    caption: 'Ejike Egbuagu, Group Chief Executive',
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
      <TextAndImageSection
        imageUrl={sectionTwo.imageUrl}
        heading={sectionTwo.heading}
        paragraph={sectionTwo.paragraph}
        contentFirst={sectionTwo.contentFirst}
        line={false}
      />
      <Quote quote={quote.quote} caption={quote.caption} />

      <GetInTouch venture="consulting services" />
    </>
  );
}

export default Consulting;
