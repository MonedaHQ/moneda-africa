import Section from '@/components/Section';
import styles from './styles/trackrecord.module.css';
import Image from 'next/image';
import WordAnimator from '@/components/WordAnimator';

function TrackRecord() {
  return (
    <Section color="brown">
      <div className={styles.container}>
        <div className={styles.leftside}>
          <div className={styles.imageContainer}>
            <Image
              src="/assets/moneda-line-white.png"
              width={188}
              height={59.47}
              alt="Moneda Logo"
            />
          </div>
          <WordAnimator text="A Proven Track Record of Success" as="h2" />
        </div>
        <p>
          Moneda is a partnership between its founding partners, senior
          management, and select funds managed by Moneda Invest Africa, LP.
          Since our inception in 2015, we have invested over{' '}
          <span>$200 million</span> alongside our leadership team. This deep
          commitment to our business positions us at the forefront of
          capitalizing on the transformative shifts reshaping the energy and
          commodities landscape.
        </p>
      </div>
    </Section>
  );
}

export default TrackRecord;
