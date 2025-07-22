import Lottie from 'lottie-react';
import arrowRight from './files/right-arrow.json';

import styles from './styles/arrowright.module.css';

function ArrowRight() {
  return (
    <div className={styles.iconContainer}>
      <div style={{ width: '100%', height: '100%' }}>
        <Lottie
          animationData={arrowRight}
          loop={true}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
}

export default ArrowRight;
