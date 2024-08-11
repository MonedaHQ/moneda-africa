import Image from 'next/image';

import styles from './styles/whatwedo.module.css';
import WordAnimator from '@/components/WordAnimator';

function WhatWeDo() {
  const list = [
    { label: 'Trading', path: '' },
    { label: 'Assets', path: '' },
    { label: 'Risk solutions', path: '' },
    { label: 'Capital Management', path: '' },
    { label: 'Consulting', path: '' },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/assets/aew-2.jpg"
          width={854}
          height={684}
          alt="Africa Energy Week"
        />
      </div>
      <div className={styles.linkList}>
        <WordAnimator text="What we do" as="h2" />
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
  );
}

export default WhatWeDo;
