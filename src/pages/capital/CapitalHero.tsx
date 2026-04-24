import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import HeroPill from '@/components/HeroPill';
import CapitalButton from './CapitalButton';
import styles from './styles/capitalhero.module.css';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;
const DURATION = 1600;

const stats = [
  { label: 'Deployed', value: 150, prefix: '$', suffix: 'm+' },
  { label: 'NPL Ratio', value: 5, prefix: '<', suffix: '%' },
  { label: 'Minimum', value: 100, prefix: '$', suffix: 'k' },
  { label: 'Investment Term', value: 12, prefix: '', suffix: 'months' },
];

function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function CapitalHero() {
  const [pillDone, setPillDone] = useState(false);
  const [displays, setDisplays] = useState<(number | null)[]>(
    stats.map(() => null),
  );
  const cancelledRef = useRef(false);

  useEffect(() => {
    if (!pillDone) return;
    cancelledRef.current = false;

    stats.forEach((stat, index) => {
      let startTime: number | null = null;

      function step(ts: number) {
        if (cancelledRef.current) return;
        if (startTime === null) startTime = ts;
        const progress = Math.min((ts - startTime) / DURATION, 1);
        const current = Math.floor(easeOutExpo(progress) * stat.value);
        setDisplays((prev) => {
          const next = [...prev];
          next[index] = progress < 1 ? current : stat.value;
          return next;
        });
        if (progress < 1) requestAnimationFrame(step);
      }

      requestAnimationFrame(step);
    });

    return () => {
      cancelledRef.current = true;
    };
  }, [pillDone]);
  return (
    <main className={styles.hero}>
      <div className={styles.backgroundImage}>
        <Image
          src="/assets/background-capital.jpg"
          alt="Capital background"
          fill
          priority
          className={styles.bgImg}
        />
      </div>

      <div className={styles.content}>
        <Image
          src="/assets/moneda-line-white.png"
          width={408.5}
          height={79}
          alt="Moneda Capital Logo"
          className={styles.mobileLogo}
        />
        <HeroPill
          text="Private Credit · Africa · Mauritius Domiciled"
          delay={300}
          onComplete={() => setPillDone(true)}
        />

        <motion.div
          className={styles.headingBlock}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <h1 className={styles.heading}>
            Africa doesn&apos;t <br />
            need believers.
            <br />
            It needs{' '}
            <span className={styles.headingAccent}>African Investors.</span>
          </h1>
          <p className={styles.paragraph}>
            Moneda Capital deploys private credit into Africa's most bankable
            sectors — financing confirmed contracts for the continent's largest
            energy, agriculture, infrastructure, and minerals businesses. Senior
            secured. Asset-backed. Operationally co-executed.
          </p>
        </motion.div>

        <motion.div
          className={styles.ctas}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: EASE,
          }}
        >
          <CapitalButton variant="solid" href="#register-interest">
            Register Interest
          </CapitalButton>
        </motion.div>

        <motion.div
          className={styles.divider}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.45,
            ease: EASE,
          }}
        />

        <motion.div
          className={styles.stats}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.6,
            ease: EASE,
          }}
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className={styles.statItem}>
              <span className={styles.statLine} />
              <p className={styles.statLabel}>{stat.label}</p>
              <p className={styles.statValue}>
                {displays[i] !== null ? stat.prefix : ''}
                {displays[i] !== null ? displays[i] : '—'}
                {displays[i] !== null ? stat.suffix : ''}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}

export default CapitalHero;
