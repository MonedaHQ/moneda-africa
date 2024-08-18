import Section from '@/components/Section';
import styles from './styles/capitalmanagement.module.css';
import TextAndImageSection from '@/components/TextAndImageSection';
import GetInTouch from '@/components/GetInTouch';

function CapitalManagement() {
  const imageAndTextContent = {
    imageUrl: '/assets/office-setting.jpg',
    title: 'Capital Management',
    heading: 'Mastering Energy and Commodity Price Volatility.',
    paragraph:
      'Moneda offers comprehensive risk management solutions tailored to the unique needs of our clients. By combining deep industry expertise with advanced analytics, we help businesses navigate the complexities of energy and commodity price fluctuations. <br/> <br/>From financial derivatives to physical energy solutions, our holistic approach mitigates risk and optimizes returns. Our extensive global network and deep liquidity pool enable us to deliver competitive pricing and seamless execution on a wide range of products.',
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
      <GetInTouch venture="capital management" />
    </>
  );
}

export default CapitalManagement;
