import Section from '@/components/Section';
import Image from 'next/image';

import WordAnimator from '@/components/WordAnimator';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import styles from './styles/teamsection.module.css';
import CharacterAnimator from '@/components/CharacterAnimator';
import { useCountIncrement } from '@/hooks/useCountIncrement';

const metrics = [
  {
    metric: 8,
    prefix: null,
    suffix: '+',
    description: 'years investing in Africa',
  },
  {
    metric: 350,
    prefix: '$',
    suffix: 'm+',
    description: 'value of funding requests',
  },
  {
    metric: 150,
    prefix: '$',
    suffix: 'm+',
    description: 'value of funded requests',
  },
  {
    metric: 130,
    prefix: null,
    suffix: '+',
    description: 'onboarded African SMEs',
  },
];

function TeamSection() {
  const ref = useRef();
  const inView = useInView(ref, { once: true });

  const paragraphVariant = {
    initial: { opacity: 0, y: '-20px' },
    animate: { opacity: 1, y: 0, transition: { delay: 0.62, duration: 0.35 } },
  };

  return (
    <>
      <Section paddingBottom={false} color="darkBrown">
        <div className={styles.teamContainer}>
          <div className={styles.imageContainer}>
            <Image
              src="/assets/ejike-and-declan.jpg"
              width={725}
              height={865}
              alt="Team Moneda at the AEW"
              draggable={false}
            />
          </div>
          <div className={styles.content}>
            <WordAnimator
              text="A global team of dedicated professionals renowned for responsible
            innovation."
              as="h3"
            />

            <motion.p
              variants={paragraphVariant}
              ref={ref}
              initial="initial"
              animate={inView ? 'animate' : 'initial'}
            >
              Since our inception in 2023, Moneda has rapidly established itself
              as a global leader in the energy and commodities markets.
              Operating at the forefront of the energy sector, we have amassed
              unparalleled expertise across a diverse range of physical and
              financial commodities.
              <br />
              <br />
              This deep-rooted knowledge empowers us to deliver exceptional
              value to our clients through a comprehensive suite of services.
            </motion.p>
          </div>
        </div>
      </Section>
      <Section color="darkBrown" paddingTop={false}>
        <Metrics />
      </Section>
    </>
  );
}

function Metrics() {
  return (
    <div className={styles.metrics}>
      {metrics.map((metric) => (
        <Metric key={metric.metric} metric={metric} />
      ))}
    </div>
  );
}

function Metric({ metric }) {
  const [metricDigit, metricRef] = useCountIncrement(0, metric.metric);
  return (
    <div className={styles.metric} key={metric.metric}>
      <div className={styles.metricHeading} ref={metricRef}>
        <h2>
          {metric.prefix}
          {metricDigit}
          {metric.suffix}
        </h2>
      </div>
      <p>{metric.description}</p>
    </div>
  );
}

export default TeamSection;
