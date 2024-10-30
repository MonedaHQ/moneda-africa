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
    imageUrl: '/assets/sumit-2.jpg',
    title: '',
    heading: 'Capital Management',
    paragraph:
      "Moneda Capital, a strategic investment arm of Moneda Africa, is committed to driving sustainable growth and value creation across Africa's energy and mining sectors. We provide capital and expertise to high-growth companies that are shaping the continent's energy transition and resource development.<br/><br/>With a strong focus on local content development, Moneda Africa is a proud supporter of SMEs operating within the energy and mining value chains. Our investments aim to build strong partnerships with local businesses, creating jobs and fostering economic growth. By combining our financial resources with the entrepreneurial spirit of African entrepreneurs, we are accelerating the development of a thriving and sustainable energy and mining ecosystem.",
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
      <GetInTouch venture="capital management" />
    </>
  );
}

export default CapitalManagement;
