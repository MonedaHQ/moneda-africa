import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import notFoundAnimation from './files/not-found.json'; // Replace with your path

import styles from './styles/notfoundicon.module.css';

function NotFoundIcon({ interval = 3000 }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className={styles.iconContainer}>
      <motion.div
        // variants={containerVariants}
        // initial="hidden"
        // animate={isVisible ? 'visible' : 'hidden'}
        // transition={{ duration: 1, ease: 'easeInOut' }}
        style={{ width: '100%', height: '100%' }}
      >
        <Lottie
          animationData={notFoundAnimation}
          loop={true}
          style={{ width: '100%', height: '100%' }}
        />
      </motion.div>
    </div>
  );
}

export default NotFoundIcon;
