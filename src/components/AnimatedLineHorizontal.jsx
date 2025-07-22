import { useRef } from 'react';

import { motion, useInView } from 'framer-motion';
import styles from './styles/animatedLineHorizontal.module.css';

function AnimatedLineHorizontal({
  width = 100,
  index = 1,
  color = 'orange',
  opacity = 1,
  duration = 0.34,
}) {
  const ref = useRef();
  const inView = useInView(ref, { once: true });
  const lineVariants = {
    initial: { width: 0 },
    animate: {
      width: `${width}%`,
      transition: {
        delay: 0.3 * index,
        duration: duration,
        ease: [0.95, 0.22, 0.24, 0.99],
      },
    },
  };
  return (
    <motion.div
      className={`${styles.line} ${styles[color]}`}
      variants={lineVariants}
      initial="initial"
      animate={inView ? 'animate' : 'initial'}
      ref={ref}
      style={{ opacity: opacity }}
    />
  );
}

export default AnimatedLineHorizontal;
