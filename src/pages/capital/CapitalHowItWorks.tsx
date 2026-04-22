import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CapitalButton from './CapitalButton';
import styles from './styles/capitalhowithworks.module.css';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const steps = [
  {
    number: '01',
    title: 'Capital committed',
    body: 'Investor commits a minimum of $100,000 for a 12-month term. Capital is deployed through Moneda Capital Managers, FSC Mauritius regulated, administered by APEX.',
  },
  {
    number: '02',
    title: 'Contract identified and underwritten',
    body: "A confirmed contract lands with an African business — from Shell, NLNG, Chevron or equivalent. Moneda underwrites against the assigned trade receivable. The receivable is the security — not the contractor's assets.",
  },
  {
    number: '03',
    title: 'Capital deployed. Moneda co-executes.',
    body: "Capital is used to procure goods or assets required to execute the contract. Moneda's operations team co-executes on the ground — supervising every disbursement, milestone, and delivery.",
  },
  {
    number: '04',
    title: 'Returns distributed',
    body: 'Contract delivered. Capital and returns flow back through the receivable structure. Semi-annual distributions. Full capital repayment at 12-month maturity. Less than 5% NPL across 100+ transactions.',
  },
];

const fundTerms = [
  { label: 'Structure', value: 'Senior secured · Asset-backed', badge: null },
  { label: 'Instrument', value: 'Convertible Note', badge: 'OPEN' },
  { label: 'Target return', value: 'Disclosed on application', badge: null },
  { label: 'Investment term', value: '12 months', badge: null },
  { label: 'Minimum commitment', value: 'US$100,000', badge: null },
  { label: 'Total facility', value: 'US$5,000,000', badge: null },
  { label: 'Distributions', value: 'Semi-annual', badge: null },
  { label: 'Capital repayment', value: 'Bullet at maturity', badge: null },
  { label: 'Security', value: 'Assigned trade receivables', badge: null },
  { label: 'Early exit', value: 'Not permitted', badge: null },
  { label: 'Domicile', value: 'Mauritius (FSC Regulated)', badge: null },
  { label: 'Fund administrator', value: 'APEX Group, Mauritius', badge: null },
];

function CapitalHowItWorks() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-8% 0px' });

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.inner}>
        {/* ── LEFT: steps ──────────────────────────────── */}
        <div className={styles.left}>
          <div className={styles.labelHeadingGroup}>
            <motion.p
              className={styles.label}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE }}
            >
              How It Works
            </motion.p>

            <motion.h2
              className={styles.heading}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.08,
                ease: EASE,
              }}
            >
              Simple structure.
              <br />
              <span className={styles.headingAccent}>Senior secured.</span>
            </motion.h2>
          </div>

          <div className={styles.steps}>
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                className={styles.step}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + i * 0.1,
                  ease: EASE,
                }}
              >
                <span className={styles.stepNumber}>{step.number}</span>
                <div className={styles.stepContent}>
                  <p className={styles.stepTitle}>{step.title}</p>
                  <p className={styles.stepBody}>{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: fund terms card ───────────────────── */}
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: EASE,
          }}
        >
          <p className={styles.cardTitle}>Fund Terms · Convertible Note</p>

          <div className={styles.termsList}>
            {fundTerms.map((term) => (
              <div key={term.label} className={styles.termRow}>
                <span className={styles.termLabel}>{term.label}</span>
                <span className={styles.termValue}>
                  {term.value}
                  {term.badge && (
                    <span className={styles.badge}>{term.badge}</span>
                  )}
                </span>
              </div>
            ))}
          </div>

          <CapitalButton
            variant="solid"
            href="#register-interest"
            fullWidth
            className={styles.cta}
          >
            Register Your Interest →
          </CapitalButton>
        </motion.div>
      </div>
    </section>
  );
}

export default CapitalHowItWorks;
