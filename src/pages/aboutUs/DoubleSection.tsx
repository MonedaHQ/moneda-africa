import TextAndImageSection from '@/components/TextAndImageSection';
import styles from './styles/doublesection.module.css';
import AnimatedLineHorizontal from '@/components/AnimatedLineHorizontal';

/**
 * @typedef {Object} ButtonData
 * @property {string} label
 * @property {string} link
 */

/**
 * @typedef {Object} SectionData
 * @property {{ src: string, alt?: string, art?: boolean, metadata?: object }} imageData
 * @property {string} heading
 * @property {string} paragraph
 * @property {boolean} contentFirst
 * @property {boolean} [button]
 * @property {ButtonData} [buttonData]
 */

/**
 * @param {{ sectionData: SectionData[] }} props
 */

function DoubleSection({ doubleSectionData }) {
  if (!doubleSectionData) return;
  return (
    <main className={styles.main}>
      {doubleSectionData.map((data, index) => {
        return (
          <TextAndImageSection
            imageData={data.imageData}
            heading={data.heading}
            paragraph={data.paragraph}
            contentFirst={data.contentFirst}
            buttonData={data.buttonData}
            key={index}
          />
        );
      })}
    </main>
  );
}

export default DoubleSection;
