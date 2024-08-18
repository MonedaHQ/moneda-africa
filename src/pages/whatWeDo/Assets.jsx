import Section from '@/components/Section';
import styles from './styles/assets.module.css';
import TextAndImageSection from '@/components/TextAndImageSection';
import GetInTouch from '@/components/GetInTouch';

function Assets() {
  const imageAndTextContent = {
    imageUrl: '/assets/power-plant.jpg',
    title: 'Assets',
    heading: 'Global Energy Infrastructure Investments.',
    paragraph:
      'Moneda Capital is a leading investor in global energy infrastructure assets. Leveraging our deep-rooted trading expertise, we identify, acquire, and optimize high-performing assets. <br/> <br/>Our portfolio is strategically built to capitalize on market trends while mitigating risk. Through direct investments and strategic partnerships with Moneda Invest Africa, we create long-term value for our investors.',
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
      <GetInTouch venture="Assets Investment Strategy" />
    </>
  );
}

export default Assets;
