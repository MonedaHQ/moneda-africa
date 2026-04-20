import Section from '@/components/Section';
import Image from 'next/image';

import WordAnimator from '@/components/WordAnimator';

import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';

import styles from './styles/teamsection.module.css';

import Metrics from '@/components/Metrics';

function TeamSection() {
  return (
    <>
      <Section paddingBottom={false} color="darkBrown">
        <Metrics />
      </Section>
    </>
  );
}

function TeamComponent() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  const paragraphVariant: Variants = {
    initial: { opacity: 0, y: '-20px' },
    animate: { opacity: 1, y: 0, transition: { delay: 0.62, duration: 0.35 } },
  };

  return (
    <div className={styles.teamContainer}>
      <div className={styles.imageContainer}>
        <Image
          src="/assets/clay-globe.jpg"
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
          Since our inception in 2015, Moneda has rapidly established itself as
          a global leader in the energy and commodities markets. Operating at
          the forefront of the energy sector, we have amassed unparalleled
          expertise across a diverse range of physical and financial
          commodities.
          <br />
          <br />
          This deep-rooted knowledge empowers us to deliver exceptional value to
          our clients through a comprehensive suite of services.
        </motion.p>
      </div>
    </div>
  );
}

export default TeamSection;
