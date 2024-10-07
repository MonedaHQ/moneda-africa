import Section from '@/components/Section';
import { useState, useEffect } from 'react';

import styles from './styles/terms.module.css';

function Terms({ data }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Section>
      {isClient ? (
        <div
          dangerouslySetInnerHTML={{
            __html: data.join('<br/>'),
          }}
          className={styles.parent}
        />
      ) : (
        <p>Loading...</p>
      )}
    </Section>
  );
}

export default Terms;
