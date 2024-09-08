import Image from 'next/image';

import styles from './styles/ourfocusareas.module.css';
import WordAnimator from '@/components/WordAnimator';
import Section from '@/components/Section';

function OurFocusAreas() {
  const list = [
    { label: 'Trading', path: '/what-we-do?venture=trading' },
    { label: 'Assets', path: '/what-we-do?venture=assets' },
    { label: 'Risk solutions', path: '/what-we-do?venture=risk-solutions' },
    {
      label: 'Capital Management',
      path: '/what-we-do?venture=capital-management',
    },
    { label: 'Consulting', path: '/what-we-do?venture=consulting' },
  ];
  return (
    <Section color="brown">
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/assets/barrel.jpg"
            width={190}
            height={384}
            alt="Africa Energy Week"
          />
          <Image
            src="/assets/field.jpg"
            width={190}
            height={384}
            alt="Africa Energy Week"
          />
          <Image
            src="/assets/consulting.jpg"
            width={190}
            height={384}
            alt="Africa Energy Week"
          />
        </div>
        <div className={styles.linkList}>
          <WordAnimator text="Our Focus Areas" as="h2" />
          <ul className={styles.list}>
            {list.map((item) => (
              <a key={item.label} className={styles.item} href={item.path}>
                <div className={styles.line} />
                <p>{item.label}</p>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

export default OurFocusAreas;
