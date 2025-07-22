import TextAndImageSection from '@/components/TextAndImageSection';
import styles from './styles/doublesection.module.css';
import AnimatedLineHorizontal from '@/components/AnimatedLineHorizontal';

function DoubleSection({ data1, data2 }) {
  return (
    <main className={styles.main}>
      <TextAndImageSection
        imageData={data1.imageData}
        imageUrl={data1.imageData.src}
        heading={data1.heading}
        paragraph={data1.paragraph}
        contentFirst={data1.contentFirst}
      />
      <AnimatedLineHorizontal color="black" opacity={0.08} />
      <TextAndImageSection
        imageData={data2.imageData}
        imageUrl={data2.imageData.src}
        heading={data2.heading}
        paragraph={data2.paragraph}
        contentFirst={data2.contentFirst}
      />
    </main>
  );
}

export default DoubleSection;
