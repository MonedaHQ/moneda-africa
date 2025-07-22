import TextAndImageSection from '@/components/TextAndImageSection';
import { ourVentures } from '@/data/ourVentures';

import styles from './styles/ventures.module.css';

function Ventures() {
  return (
    <div className={styles.container}>
      {ourVentures.map((venture, index) => (
        <TextAndImageSection
          imageData={venture.imageData}
          heading=""
          paragraph={venture.paragraph}
          contentFirst={index % 2 ? false : true}
          brown={index % 2}
          logo={venture.logo}
          key={venture.company}
          link={{ link: venture.link, label: venture.company }}
        />
      ))}
    </div>
  );
}

export default Ventures;
