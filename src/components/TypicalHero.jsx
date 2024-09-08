import Image from 'next/image';
import Section from './Section';

import styles from './styles/typicalhero.module.css';

import LineAndContent from './LineAndContent';

function TypicalHero({ content }) {
  if (!content) return;
  const { imageUrl } = content;

  return (
    <Section paddingBottom={false} paddingTop={false}>
      <main className={styles.main}>
        <div className={styles.contentContainer}>
          <LineAndContent content={content} />
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

export default TypicalHero;
