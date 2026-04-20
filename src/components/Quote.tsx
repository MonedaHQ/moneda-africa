import Image from 'next/image';
import Section from './Section';
import styles from './styles/quote.module.css';
import WordAnimator from './WordAnimator';

const defaultQuote = {
  quote:
    '“To see true transformation within the economy, we have to get the capital in the hands of local communities”',
  caption: 'Ejike Egbuagu, Group Chief Executive',
};

function Quote({ quote = defaultQuote.quote, caption = defaultQuote.caption }) {
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
