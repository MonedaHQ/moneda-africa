import Image from 'next/image';
import Section from './Section';

import styles from './styles/typicalhero.module.css';

import LineAndContent from './LineAndContent';

function TypicalHero({
  content,
  color = 'white',
  whiteText = false,
  as = 'h3',
}) {
  if (!content) return;
  const { imageUrl } = content;

  return (
    <Section paddingBottom={false} paddingTop={false} color={color}>
      <main className={styles.main}>
        <div className={styles.contentContainer}>
          <LineAndContent content={content} whiteText={whiteText} as={as} />
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
