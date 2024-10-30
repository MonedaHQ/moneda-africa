import TextAndImageSection from '@/components/TextAndImageSection';
import styles from './styles/sustainablefuture.module.css';

const imageAndTextContent = {
  imageUrl: '/assets/heroImages/oil-rig-2.jpg',
  heading: 'Shaping a Sustainable Future Through Diversified Investments',
  paragraph:
    'We are dedicated to driving positive change through our diversified investment portfolio. We believe that by investing across multiple sectors, including energy, mining, construction, and commodities, we can contribute to a more sustainable and prosperous future. <br/> <br/>Our focus is on identifying and supporting innovative businesses that are making a meaningful impact. By leveraging our expertise and resources, we aim to foster growth, create value, and drive positive social and environmental outcomes. Through our investments, we are committed to shaping a sustainable future for generations to come.',
  contentFirst: false,
};

function SustainableFuture() {
  return (
    <main className={styles.main}>
      <TextAndImageSection
        imageUrl={imageAndTextContent.imageUrl}
        heading={imageAndTextContent.heading}
        paragraph={imageAndTextContent.paragraph}
        contentFirst={imageAndTextContent.contentFirst}
      />
    </main>
  );
}

export default SustainableFuture;
