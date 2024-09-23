import Section from '@/components/Section';
import Image from 'next/image';

import styles from './styles/corevalues.module.css';
import WordAnimator from '@/components/WordAnimator';
import AnimatedLineHorizontal from '@/components/AnimatedLineHorizontal';

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
          <WordAnimator text=" A Driving Force in African Investment" as="h4" />

          <p>
            We are a leading investment firm shaping the future of finance and
            commodities. Since our establishment in 2015, we have solidified our
            position as a key player in the market, leveraging our deep
            expertise in physical and financial commodities to deliver
            exceptional value. Our comprehensive suite of services spans across
            various sectors, including energy, renewables, and solid minerals.
            Through strategic investments and partnerships, we are actively
            driving Africa&lsquo;s economic transformation and creating
            sustainable opportunities for growth.
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

  return (
    <div className={styles.coreValueContainer}>
      <AnimatedLineHorizontal width={80} index={index} />
      <div className={styles.valueHeading}>
        <p>We are</p>
        <h4>{heading}</h4>
      </div>
      <p>{value}</p>
    </div>
  );
}

export default CoreValues;
