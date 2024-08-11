import Section from '@/components/Section';
import Image from 'next/image';

import WordAnimator from '@/components/WordAnimator';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import styles from './styles/teamsection.module.css';
import CharacterAnimator from '@/components/CharacterAnimator';

function TeamSection() {
  const ref = useRef();
  const inView = useInView(ref, { once: true });

  const metrics = [
    {
      metric: '2023',
      description: 'Moneda Capital Launch (Cape Town, South Africa)',
    },
    { metric: '$500m', description: 'Target Fund Size' },
    {
      metric: 'June 2024',
      description:
        'Obtained license to operate as a global business and Collective Investment Scheme (CIS)  Management ',
    },
  ];

  const paragraphVariant = {
    initial: { opacity: 0, y: '-20px' },
    animate: { opacity: 1, y: 0, transition: { delay: 0.62, duration: 0.35 } },
  };

  return (
    <Section color="brown">
      <div className={styles.teamContainer}>
        <div className={styles.imageContainer}>
          <Image
            src="/assets/capital-launch.jpg"
            width={725}
            height={865}
            alt="Moneda Capital Launch"
            draggable={false}
          />
        </div>
        <div className={styles.content}>
          <WordAnimator
            text=" A global team of dedicated professionals renowned for responsible
            innovation."
            as="h2"
          />

          <motion.p
            variants={paragraphVariant}
            ref={ref}
            initial="initial"
            animate={inView ? 'animate' : 'initial'}
          >
            Moneda is defined by its people. Our exceptional team is
            characterized by entrepreneurial spirit and independent thought. We
            foster an inclusive culture that values diverse perspectives and
            meaningful collaboration. Integrity is the cornerstone of our
            teamwork, and our commitment to our people drives responsible
            innovation.
          </motion.p>
        </div>
      </div>
      <div className={styles.metrics}>
        {metrics.map((metric) => (
          <div className={styles.metric} key={metric.metric}>
            <div className={styles.metricHeading}>
              <CharacterAnimator text={metric.metric} as="h2" />
            </div>
            <p>{metric.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default TeamSection;
