import Lottie from 'lottie-react';
import arrowDownnAnimation from './files/arrow-down.json';

import styles from './styles/scrolldownicon.module.css';

function ArrowDownIcon() {
  return (
    <div className={styles.iconContainer}>
      <div style={{ width: '100%', height: '100%' }}>
        <Lottie
          animationData={arrowDownnAnimation}
          loop={true}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
}

export default ArrowDownIcon;
