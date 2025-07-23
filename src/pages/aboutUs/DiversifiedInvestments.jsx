import AnimatedLineHorizontal from '@/components/AnimatedLineHorizontal';
import Section from '@/components/Section';
import WordAnimator from '@/components/WordAnimator';
import Image from 'next/image';

import styles from './styles/diversifiedinvestments.module.css';

function DiversifiedInvestments() {
  return (
    <main>
      <AnimatedLineHorizontal
        width={100}
        color="black"
        opacity={0.6}
        duration={2}
      />
      <DIHeading />
      <div className={styles.imageContainer}>
        <Image width={600} height={600} src="/assets/moneda-people.png" />
      </div>
    </main>
  );
}

function DIHeading() {
  return (
    <Section>
      <div className={styles.heading}>
        <WordAnimator
          text="Shaping a Sustainable Future Through Diversified Investments"
          as="h3"
        />
        <AnimatedLineHorizontal color="orange" width={30} />
        <p>
          We are dedicated to driving positive change through our diversified
          investment portfolio. We believe that by investing across multiple
          sectors, including energy, mining, construction, and commodities, we
          can contribute to a more sustainable and prosperous future.
          <br />
          <br />
          Our focus is on identifying and supporting innovative businesses that
          are making a meaningful impact. By leveraging our expertise and
          resources, we aim to foster growth, create value, and drive positive
          social and environmental outcomes. Through our investments, we are
          committed to shaping a sustainable future for generations to come.
        </p>
      </div>
    </Section>
  );
}

export default DiversifiedInvestments;
