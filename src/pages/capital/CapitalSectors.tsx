import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './styles/capitalsectors.module.css';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const sectors = [
  {
    emoji: '⚡',
    badge: 'Primary',
    heading: 'Energy',
    body: 'Upstream, midstream, gas distribution, LNG logistics and power infrastructure. Contracts for Shell, Chevron, NLNG, NPDC, Seplat, and Total. The largest and most active sector in our portfolio.',
  },
  {
    emoji: '🌾',
    badge: 'Active',
    heading: 'Agriculture',
    body: 'Pre-export trade finance for processors and exporters of cocoa, palm oil, sesame, soya, and grains. Seasonal cycles create repeatable, predictable deal flow year on year.',
  },
  {
    emoji: '🏗️',
    badge: 'Active',
    heading: 'Infrastructure',
    body: 'Civil and engineering contractors executing government and multilateral-backed projects. Confirmed purchase orders and sovereign payment guarantees underpin the receivable structure.',
  },
  {
    emoji: '⛏️',
    badge: 'Active',
    heading: 'Minerals & Mining',
    body: 'Commodity procurement and supply chain financing for extractive sector contractors in Nigeria, Namibia, South Africa, and the DRC. Off-take agreements with tier-one buyers.',
  },
];

function CapitalSectors() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.header}>
        <motion.p
          className={styles.label}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
        >
          Where We Deploy
        </motion.p>

        <motion.h2
          className={styles.sectionHeading}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: EASE,
          }}
        >
          Four sectors.
          <br />
          <span className={styles.headingAccent}>
            One structural advantage.
          </span>
        </motion.h2>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: EASE,
          }}
        >
          Every deployment is backed by a confirmed contract with an
          established, creditworthy buyer. We do not finance speculation — we
          finance delivery.
        </motion.p>
      </div>

      <div className={styles.gridWrapper}>
        {sectors.map((sector, i) => (
          <motion.div
            key={sector.heading}
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.3 + i * 0.08,
              ease: EASE,
            }}
          >
            <span className={styles.badge}>{sector.badge}</span>
            <span className={styles.emoji}>{sector.emoji}</span>
            <h3 className={styles.cardHeading}>{sector.heading}</h3>
            <p className={styles.body}>{sector.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default CapitalSectors;
