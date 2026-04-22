import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './styles/HeroPill.module.css';

interface HeroPillProps {
  text: string;
  delay?: number; // ms before typewriter starts
  onComplete?: () => void;
}

function HeroPill({ text, delay = 400, onComplete }: HeroPillProps) {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) {
      onComplete?.();
      return;
    }

    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, 42);

    return () => clearTimeout(timer);
  }, [started, displayed, text, onComplete]);

  return (
    <motion.div
      className={styles.pill}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <span className={styles.dot} />
      <span className={styles.text}>
        {displayed}
        {displayed.length < text.length && <span className={styles.cursor} />}
      </span>
    </motion.div>
  );
}

export default HeroPill;
