import Link from 'next/link';
import ArrowRight from './lottieFiles/ArrowRight';

import styles from './styles/learnmorebutton.module.css';
import { useRouter } from 'next/router';

function LearnMoreButton({ buttonLabel, buttonLink, newTab = false }) {
  const router = useRouter();
  return (
    <div
      className={styles.learnMore}
      onClick={() => (newTab ? '' : router.push(buttonLink))}
    >
      <a
        href={buttonLink}
        className={styles.learnMoreLink}
        target={newTab ? '_blank' : undefined}
        rel={newTab ? 'noopener noreferrer' : undefined}
      >
        {buttonLabel}
      </a>
      <ArrowRight />
    </div>
  );
}

export default LearnMoreButton;
