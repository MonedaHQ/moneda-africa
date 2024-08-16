import Image from 'next/image';
import Section from './Section';
import AnimatedLine from './AnimatedLine';
import WordAnimator from './WordAnimator';

import styles from './styles/textandimagesection.module.css';

function TextAndImageSection({ imageUrl, heading, paragraph, contentFirst }) {
  return (
    // <Section>
    <div className={styles.container}>
      {!contentFirst && (
        <>
          <div className={styles.imageContainer}>
            <Image src={imageUrl} width={764} height={626} alt={heading} />
          </div>
          <div className={styles.contentBox}>
            <WordAnimator text={heading} as="h2" />
            <div className={styles.paragraph}>
              <AnimatedLine />
              <p dangerouslySetInnerHTML={{ __html: paragraph }} />
            </div>
          </div>
        </>
      )}
      {contentFirst && (
        <>
          <div className={styles.contentBox}>
            <WordAnimator text={heading} as="h2" />
            <div className={styles.paragraph}>
              <AnimatedLine />
              <p dangerouslySetInnerHTML={{ __html: paragraph }} />
            </div>
          </div>
          <div className={styles.imageContainer}>
            <Image src={imageUrl} width={764} height={626} alt={heading} />
          </div>
        </>
      )}
    </div>
    // </Section>
  );
}

export default TextAndImageSection;
