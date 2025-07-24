import AnimatedLineHorizontal from '@/components/AnimatedLineHorizontal';
import WordAnimator from '@/components/WordAnimator';

import styles from './styles/venturescomponents.module.css';

function VenturesHeading({ data }) {
  if (!data) return;
  return (
    <div className={styles.headingContainer}>
      <WordAnimator text={data?.heading} as="h1" />
      <AnimatedLineHorizontal />
      <p dangerouslySetInnerHTML={{ __html: data?.paragraph }} />
    </div>
  );
}

export default VenturesHeading;
