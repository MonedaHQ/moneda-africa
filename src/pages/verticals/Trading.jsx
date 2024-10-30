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
    imageUrl: '/assets/grains.jpg',
    title: '',
    heading: 'Trading',
    paragraph:
      '<strong>A high-performing trading team leveraging cutting-edge analytics.</strong> <br/> <br/>Moneda Africa is proud to have a highly skilled and experienced investment team at its core. Leveraging cutting-edge analytics and decades of institutional knowledge, our team is dedicated to delivering exceptional results across various sectors. <br/> <br/>We focus on identifying and capitalizing on investment opportunities, optimizing value throughout the supply chain. Our collaborative culture and flat organizational structure empower our team members to seize opportunities rapidly, ensuring that we consistently deliver superior returns for our clients and shareholders.',
    contentFirst: true,
  };

  const sectionTwo = {
    imageUrl: '/assets/site.jpg',
    heading: "Building Businesses that powers Africa's Economy",
    paragraph:
      'We are active in a wide-range of energy, commodities, and financial markets, including: <ul><li>Energy</li> <li>Metals</li> <li>Renewables</li> <li>Ags/Softs</li> <li>Securities.</li></ul>',
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

      <GetInTouch venture="trading activites" />
    </>
  );
}

export default Trading;
