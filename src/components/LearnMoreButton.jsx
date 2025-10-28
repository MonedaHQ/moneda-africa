import Link from 'next/link';
import ArrowRight from './lottieFiles/ArrowRight';
import styles from './styles/learnmorebutton.module.css';
import { useRouter } from 'next/router';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

function LearnMoreButton({
  buttonLabel,
  buttonLink,
  newTab = false,
  dark = false,
}) {
  const router = useRouter();
  const scrollTo = useSmoothScroll(80);
  const isScrollLink = buttonLink.startsWith('#');

  const commonProps = {
    className: styles.learnMoreLink,
    onClick: (e) => {
      e.preventDefault();
      if (isScrollLink) {
        // Remove the # from the buttonLink before passing to scrollTo
        scrollTo(buttonLink.substring(1));
      } else if (!newTab) {
        router.push(buttonLink);
      } else {
        window.open(buttonLink, '_blank', 'noopener,noreferrer');
      }
    },
    href: buttonLink,
  };

  return (
    <div className={`${styles.learnMore} ${dark && styles.dark}`}>
      <a {...commonProps}>{buttonLabel}</a>
      <ArrowRight />
    </div>
  );
}

export default LearnMoreButton;
