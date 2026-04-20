import ArrowRight from './lottieFiles/ArrowRight';
import { useRouter } from 'next/router';

import { useSmoothScroll } from '@/hooks/useSmoothScroll';

import styles from './styles/learnmorebutton.module.css';

type LearnMoreButtonProps = {
  buttonLabel: string;
  buttonLink: string;
  newTab?: boolean;
  dark?: boolean;
};

function LearnMoreButton({
  buttonLabel,
  buttonLink,
  newTab = false,
  dark = false,
}: LearnMoreButtonProps) {
  const router = useRouter();
  const scrollTo = useSmoothScroll(80);
  const isScrollLink = buttonLink.startsWith('#');

  return (
    <div className={`${styles.learnMore} ${dark ? styles.dark : ''}`}>
      <a
        className={styles.learnMoreLink}
        href={buttonLink}
        onClick={(e) => {
          e.preventDefault();

          if (isScrollLink) {
            scrollTo(buttonLink.substring(1));
            return;
          }

          if (!newTab) {
            router.push(buttonLink);
            return;
          }

          window.open(buttonLink, '_blank', 'noopener,noreferrer');
        }}
      >
        {buttonLabel}
      </a>
      <ArrowRight />
    </div>
  );
}

export default LearnMoreButton;
