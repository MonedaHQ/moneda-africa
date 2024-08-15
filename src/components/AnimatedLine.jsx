import { animate, motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './styles/animatedline.module.css';

function AnimatedLine() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const lineVariants = {
    initial: { height: 0 },
    animate: { height: '100%', transition: { delay: 0.35, duration: 0.6 } },
  };

  return (
    <motion.div
      ref={ref}
      className={styles.line}
      variants={lineVariants}
      initial="initial"
      animate={inView ? 'animate' : 'initial'}
    />
  );
}

export default AnimatedLine;
