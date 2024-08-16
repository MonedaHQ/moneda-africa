import { useRef } from 'react';

import { motion, useInView } from 'framer-motion';
import styles from './styles/animatedLineHorizontal.module.css';

function AnimatedLineHorizontal({ width = 100, index = 1 }) {
  const ref = useRef();
  const inView = useInView(ref, { once: true });
  const lineVariants = {
    initial: { width: 0 },
    animate: {
      width: `${width}%`,
      transition: { delay: 0.3 * index, duration: 0.34 },
    },
  };
  return (
    <motion.div
      className={styles.line}
      variants={lineVariants}
      initial="initial"
      animate={inView ? 'animate' : 'initial'}
      ref={ref}
    />
  );
}

export default AnimatedLineHorizontal;
