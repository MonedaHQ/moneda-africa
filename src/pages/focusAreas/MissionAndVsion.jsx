import Section from '@/components/Section';

import styles from './styles/missionandvision.module.css';
import WordAnimator from '@/components/WordAnimator';

function MissionAndVsion() {
  const content = [
    {
      heading: 'Our Mission',
      paragraph:
        'Our mission is to trigger unconventional growth in Natural Resource value chains in Africa using alternative credit and world-class execution',
    },
    {
      heading: 'Our Vision',
      paragraph: 'To transform African natural resources into African wealth​',
    },
  ];
  return (
    <Section>
      <main className={styles.main}>
        {content.map((item) => (
          <ContentBox content={item} key={item.heading} />
        ))}
      </main>
    </Section>
  );
}

function ContentBox({ content }) {
  return (
    <div className={styles.contentBox}>
      <WordAnimator text={content.heading} as="h3" />
      <h4>{content.paragraph}</h4>
    </div>
  );
}

export default MissionAndVsion;
