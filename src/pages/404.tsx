import NotFoundIcon from '@/components/lottieFiles/NotFoundIcon';
import Button from '@/components/Button';

import styles from './404/styles/custom404.module.css';

export default function Custom404() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <NotFoundIcon />
        <div className={styles.paragraph}>
          <p>
            Oops! It seems this link is broken. Don&lsquo;t worry! Our engineers
            will fix this soon
          </p>
          <Button variant="primary" href="/">
            Go home
          </Button>
        </div>
      </div>
    </div>
  );
}
