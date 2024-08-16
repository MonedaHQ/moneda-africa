import Image from 'next/image';
import Section from './Section';
import styles from './styles/quote.module.css';
import WordAnimator from './WordAnimator';

function Quote({ quote, caption }) {
  return (
    <Section paddingBottom={false} paddingTop={false}>
      <main className={styles.quote}>
        <div className={styles.kwaAfrika}>
          <Image
            src="/assets/kwa-afrika.png"
            width={860}
            height={860}
            alt="Kwa Afrika coin"
            draggable={false}
          />
        </div>
        <div className={styles.quoteContainer}>
          {/* <WordAnimator text={quote} as="h2" /> */}
          <h2>{quote}</h2>
          <p>{caption}</p>
        </div>
      </main>
    </Section>
  );
}

export default Quote;
