import Image from 'next/image';
import styles from './styles/thestory.module.css';
import Section from '@/components/Section';
import WordAnimator from '@/components/WordAnimator';
import AnimatedLineHorizontal from '@/components/AnimatedLineHorizontal';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const countries = [
  {
    name: 'Nigeria',
    flag: '/assets/tenoverten/flags/nigeria.png',
  },
  {
    name: 'South Africa',
    flag: '/assets/tenoverten/flags/southAfrica.png',
  },
  {
    name: 'Ghana',
    flag: '/assets/tenoverten/flags/ghana.png',
  },
  {
    name: 'Namibia',
    flag: '/assets/tenoverten/flags/namibia.png',
  },
  {
    name: 'Mauritius',
    flag: '/assets/tenoverten/flags/mauritius.png',
  },
  {
    name: 'Botswana',
    flag: '/assets/tenoverten/flags/botswana.png',
  },
  {
    name: 'DRC',
    flag: '/assets/tenoverten/flags/drc.png',
  },
];

function TheStory() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.backgroundImg}>
        <Image
          src="/assets/heroImages/background-img.jpg"
          width={400}
          height={400}
          alt="Moneda Motif"
        />
      </div>
      <Section color="transparent">
        <Heading />
        <CountryFlag />
        <p className={styles.paragraph}>
          Ten years ago, Moneda set out to prove one truth, that Africans CAN
          finance Africa&lsquo;s future. <br />
          <br />
          Despite what the world called “impossible”, we&lsquo;ve built systems
          of capital and confidence across 7 African countries, from Nigeria to
          Mauritius, transforming ideas into enterprises, and challenges into
          opportunities. <br />
          <br />
          Now, we return to where it all began, <strong>Lagos</strong>, to
          celebrate a decade of transformation, vision, and resilience.
        </p>
      </Section>
    </div>
  );
}

function Heading() {
  return (
    <div className={styles.heading}>
      <WordAnimator text="Ten Years. Seven Countries." as="h3" />
      <span>
        <WordAnimator text="One Bold Vision" as="h3" />
      </span>
      <div className={styles.animatedLineContainer}>
        <AnimatedLineHorizontal />
      </div>
    </div>
  );
}

function CountryFlag() {
  const containerRef = useRef();
  const inView = useInView(containerRef, { once: true });
  const flagVariants = {
    hidden: (i) => ({
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div className={styles.countriesContainer} ref={containerRef}>
      {countries.map((country, index) => (
        <motion.div
          variants={flagVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          key={country.name}
          custom={index}
        >
          <Image
            key={country.name}
            src={country.flag}
            width={48}
            height={48}
            alt={`${country.name} Flag`}
            draggable={false}
          />
        </motion.div>
      ))}
    </div>
  );
}

export default TheStory;
