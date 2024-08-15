import Section from '@/components/Section';
import Image from 'next/image';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import styles from './styles/corevalues.module.css';
import WordAnimator from '@/components/WordAnimator';

function CoreValues() {
  const corevalues = [
    {
      heading: 'African',
      value:
        'To us, being African is more than skin color. It is a joint belief in the history and power of our lands to sustain us. It speaks to the power of the collective, over individual gains.',
    },
    {
      heading: 'Ethical  - We Fear God',
      value:
        'Have you ever seen someone who tells the truth even when it does not benefit him? We see that every day at Moneda. We call this unusual behavior, radical honesty. We believe true impact can only be made by ethical people.',
    },
    {
      heading: 'Resilient - Always 100%',
      value: 'Failure is alien to us and we refuse to understand it.',
    },
    {
      heading: 'Leaders',
      value:
        'The Moneda mindset makes no excuses. It seeks out and sails through uncharted waters.',
    },
    {
      heading: 'Continuous Learners',
      value:
        'Curiosity does not kill here - it elevates. We encourage curious minds and consistently strive to expand our knowledge to extraordinary lengths. We never stop learning.',
    },
  ];
  return (
    <Section>
      <div className={styles.backgroundImage}>
        <Image
          src="/assets/backdrop-brown.jpg"
          width={1575}
          height={1183.79}
          alt="Background Image"
          draggable={false}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.heading}>
          <WordAnimator
            text=" Our success is driven by our exceptional people and our unwavering
            commitment to our core values."
            as="h2"
          />

          <p>
            Our people are our most valuable asset. We are a global team of
            dedicated professionals committed to fostering an inclusive
            environment where diverse perspectives thrive. Through
            collaboration, integrity, and mutual respect, we build meaningful
            relationships that drive our success.
          </p>
        </div>
        <div className={styles.coreValuesContainer}>
          {corevalues.map((coreValue, index) => (
            <CoreValue
              key={coreValue.heading}
              coreValue={coreValue}
              index={index}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

function CoreValue({ coreValue, index }) {
  const { heading, value } = coreValue;
  const ref = useRef();
  const inView = useInView(ref, { once: true });

  const lineVariants = {
    initial: { width: 0 },
    animate: {
      width: '80%',
      transition: { delay: 0.3 * index, duration: 0.34 },
    },
  };

  return (
    <div className={styles.coreValueContainer} ref={ref}>
      <motion.div
        className={styles.line}
        variants={lineVariants}
        initial="initial"
        animate={inView ? 'animate' : 'initial'}
      />
      <div className={styles.valueHeading}>
        <p>We are</p>
        <h3>{heading}</h3>
      </div>
      <p>{value}</p>
    </div>
  );
}

export default CoreValues;
