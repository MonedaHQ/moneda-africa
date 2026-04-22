import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './styles/capitalopportunity.module.css';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const metrics = [
  {
    value: '$150m+',
    desc: 'Deployed into African local content supply chains since inception',
  },
  {
    value: '<5%',
    desc: 'NPL maintained across 10 consecutive years and multiple economic cycles',
  },
  {
    value: '75 days',
    desc: 'Average capital cycle — fast, rotating, productive deployment',
  },
  {
    value: '30+',
    desc: 'Active transactions in 2025 across energy, agriculture, and minerals',
  },
];

function CapitalOpportunity() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <motion.p
            className={styles.label}
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE }}
          >
            The Opportunity
          </motion.p>

          <motion.h2
            className={styles.heading}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: EASE,
            }}
          >
            A $3 trillion asset class.{' '}
            <span style={{ color: 'var(--color-orange)', fontStyle: 'italic' }}>
              0.3% reaches Africa.
            </span>
          </motion.h2>
        </div>

        <motion.div
          className={styles.right}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: EASE,
          }}
        >
          <p className={styles.body}>
            Global private credit has grown into one of the most sought-after
            asset classes in the world. Africa receives a fraction of it —
            despite producing the contracts, the counterparties, and the deal
            flow that would justify a far larger allocation.
          </p>
          <p className={styles.body}>
            The continent&apos;s largest multinationals award billions in
            contracts every year to African businesses that have the capability
            to deliver. The banks won&apos;t fund them. Moneda does — and earns
            the return that banks would not take.
          </p>
        </motion.div>
      </div>

      <div className={styles.metricsStrip}>
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.value}
            className={styles.metricItem}
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.3 + i * 0.1,
              ease: EASE,
            }}
          >
            <p className={styles.metricValue}>{metric.value}</p>
            <p className={styles.metricDesc}>{metric.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default CapitalOpportunity;
