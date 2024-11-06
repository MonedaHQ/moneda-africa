import Section from '@/components/Section';
import styles from './styles/capitalmanagement.module.css';
import TextAndImageSection from '@/components/TextAndImageSection';
import GetInTouch from '@/components/GetInTouch';
import Quote from '@/components/Quote';

function CapitalManagement() {
  const quote = {
    quote:
      '“African finance should serve as a bridge between our natural resources and economic development, creating sustainable wealth and uplifting our communities.”',
    caption: 'Benedict Oramah - President, African Export-Import Bank',
  };
  const imageAndTextContent = {
    imageUrl: '/assets/capital-mamagment-image.jpg',
    title: '',
    heading: 'Capital Management',
    paragraph:
      'Moneda Capital, our fund management arm, is at the heart of our capital management activities. With a $250 million fund in view, Moneda Capital focuses on financing small and medium enterprises (SMEs) within Africa, particularly those in the agriculture, energy, mining, and infrastructure sectors. Having secured our license in Mauritius in June 2024, we are strategically based in South Africa to capitalize on the continent’s most dynamic markets. <br/><br/>Our fund aims to drive long-term growth by deploying capital into high-potential sectors, fostering innovation, and creating jobs. Through our capital management services, we deliver attractive returns to our investors while contributing to the sustainable development of African economies. Moneda Capital is committed to ethical investing and adheres to rigorous due diligence processes, ensuring that the companies we support align with our values and growth objectives.',
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
      <GetInTouch venture="capital Management" />
    </>
  );
}

export default CapitalManagement;
