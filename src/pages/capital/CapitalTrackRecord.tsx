import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { TbCircleCheck } from 'react-icons/tb';
import styles from './styles/capitaltrackrecord.module.css';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

function CapitalTrackRecord() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-8% 0px' });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.7, delay, ease: EASE },
  });

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.inner}>
        {/* ── LEFT COLUMN ───────────────────────────────── */}
        <div className={styles.left}>
          <div className={styles.topRow}>
            <div className={styles.labelHeadingGroup}>
              <motion.p className={styles.label} {...fadeUp(0)}>
                Track Record
              </motion.p>
              <motion.h2 className={styles.heading} {...fadeUp(0.08)}>
                10 years. <br />
                <span
                  style={{ color: 'var(--color-orange)', fontStyle: 'italic' }}
                >
                  Proof of model.
                </span>
              </motion.h2>
            </div>
          </div>

          <motion.blockquote className={styles.quote} {...fadeUp(0.2)}>
            <span className={styles.quoteBorder} />
            <div className={styles.quoteInner}>
              <p className={styles.quoteText}>
                We finance the contract. We co-execute delivery on the ground.
                Capital and returns flow back through the receivable structure.
                That model has run for 10 years with less than 5% NPL.
              </p>
            </div>
          </motion.blockquote>
          <p>
            Our operational model is the differentiator. We are not a passive
            lender — we deploy capital and remain active in every transaction,
            supervising delivery and controlling the receivable from
            disbursement to repayment.
          </p>

          <motion.div className={styles.complianceCard} {...fadeUp(0.28)}>
            <div className={styles.complianceHeader}>
              <TbCircleCheck className={styles.complianceIcon} />
              <span className={styles.complianceLabel}>
                Contracts backed by
              </span>
            </div>
            <p className={styles.complianceBody}>
              Shell Nigeria · Chevron · TotalEnergies · NLNG · Seplat Energy ·
              VodaCom DRC · NPDC · Sahara Energy
            </p>
          </motion.div>
        </div>

        {/* ── RIGHT COLUMN ──────────────────────────────── */}
        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{
            duration: 0.9,
            delay: 0.1,
            ease: EASE,
          }}
        >
          <Image
            src="/assets/contract-2.png"
            alt="Contract document with pen"
            fill
            className={styles.image}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default CapitalTrackRecord;
