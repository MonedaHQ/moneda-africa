import Section from '@/components/Section';
import { verticals } from '../../data/verticalsData';

import styles from './styles/ourverticals.module.css';
import Image from 'next/image';
import Accordion from '@/components/Accordion';
import AnimatedLineHorizontal from '@/components/AnimatedLineHorizontal';

function OurVerticals() {
  return (
    <Section color="darkBrown">
      <main className={styles.main}>
        <Verticals />
        <Accordion questions={verticals} color="white" />
      </main>
    </Section>
  );
}

function Verticals() {
  return (
    <div className={styles.verticals}>
      <div className={styles.verticalsHeading}>
        <h2>Our Verticals</h2>
        <AnimatedLineHorizontal duration={1} />
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/assets/map.png"
          width={734}
          height={507}
          alt="Map of the world"
          draggable={false}
        />
      </div>
    </div>
  );
}

export default OurVerticals;
