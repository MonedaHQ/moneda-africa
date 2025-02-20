import Section from '@/components/Section';
import styles from './styles/trading.module.css';
import TextAndImageSection from '@/components/TextAndImageSection';
import Quote from '@/components/Quote';
import GetInTouch from '@/components/GetInTouch';

function Trading() {
  const quote = {
    quote:
      '“Our continent holds enormous resources and potential. It is our duty to unlock this potential sustainably, creating value and ensuring shared prosperity for future generations.”',
    caption: 'Akinwumi Adesina - President, African Development Bank',
  };
  const imageAndTextContent = {
    imageUrl: '/assets/verticals/images/grains.jpg',
    title: '',
    heading: 'Trading',
    paragraph:
      '<strong>A high-performing trading team leveraging cutting-edge analytics.</strong> <br/> <br/>Moneda drives sustainable growth across African commodities and mining sectors. Through Domena Commodities, we are fostering agricultural growth, ensuring food security, providing financial support to traders and empowering small-scale farmers by providing essential farming inputs starting with our base in Pambegua Kaduna.<br/> <br/>Our involvement extends into the mining sector through DT Mining, a lithium mining venture in its exploratory phase. This project positions us at the forefront of the clean energy transition, contributing to the rising global demand for lithium, a key component in electric vehicle batteries and renewable energy storage solutions.',
    contentFirst: true,
  };

  const sectionTwo = {
    imageUrl: '/assets/verticals/images/farmer.jpg',
    heading: '',
    paragraph:
      "By leveraging our technical, and risk management expertise and industry relationships, Moneda provides critical support to both farmers and miners, ensuring their products reach markets efficiently. Our trading operations not only generate significant returns but also contribute to Africa's economic development by promoting local industries and export opportunities. We are committed to empowering stakeholders and supporting sustainable practices within these sectors",
    contentFirst: false,
  };

  return (
    <>
      <Section>
        <main className={styles.main}>
          <TextAndImageSection
            imageUrl={imageAndTextContent.imageUrl}
            heading={imageAndTextContent.heading}
            paragraph={imageAndTextContent.paragraph}
            contentFirst={imageAndTextContent.contentFirst}
            title={imageAndTextContent.title}
          />
        </main>
      </Section>
      <TextAndImageSection
        imageUrl={sectionTwo.imageUrl}
        heading={sectionTwo.heading}
        paragraph={sectionTwo.paragraph}
        contentFirst={sectionTwo.contentFirst}
        brown={true}
        line={false}
      />
      <Quote quote={quote.quote} caption={quote.caption} />

      <GetInTouch venture="Trading activites" />
    </>
  );
}

export default Trading;
