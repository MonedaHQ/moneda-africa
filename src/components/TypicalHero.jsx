import Image from 'next/image';
import Section from './Section';

import styles from './styles/typicalhero.module.css';
import WordAnimator from './WordAnimator';
import AnimatedLine from './AnimatedLine';
import ArrowDownIcon from './lottieFiles/ArrowDownIcon';

function TypicalHero({ content }) {
  if (!content) return;
  const { imageUrl } = content;

  return (
    <Section paddingBottom={false} paddingTop={false}>
      <main className={styles.main}>
        <div className={styles.contentContainer}>
          <Content content={content} />
          <div className={styles.imageContainer}>
            <Image
              src={imageUrl}
              width={719}
              height={757}
              alt="Constuction site"
              draggable={false}
            />
          </div>
        </div>
      </main>
    </Section>
  );
}

function Content({ content }) {
  const { pageTitle, heading, paragraph } = content;

  return (
    <div className={styles.content}>
      <p className={styles.caption}>{pageTitle}</p>
      <WordAnimator text={heading} as="h2" />
      <div className={styles.paragraphBlock}>
        <AnimatedLine />
        <p
          dangerouslySetInnerHTML={{ __html: paragraph }}
          className={styles.paragraph}
        />
      </div>
      <div className={styles.scrollDown}>
        <ArrowDownIcon />
        <p>Scroll Down</p>
      </div>
    </div>
  );
}

export default TypicalHero;
