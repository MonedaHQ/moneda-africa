import Section from '@/components/Section';
import styles from './styles/wwdsection.module.css';
import WordAnimator from '@/components/WordAnimator';
import Image from 'next/image';
import Button from '@/components/Button';

import { SlArrowRightCircle } from 'react-icons/sl';

function WWDSection() {
  return (
    <Section>
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <WordAnimator text="What We Do" as="h2" />
          <p>
            Moneda Africa has emerged as a dominant force in Africa&lsquo;s
            dynamic finance and investment landscape. Since our founding in
            2015, we have rapidly expanded our reach and expertise, establishing
            ourselves as a trusted partner for businesses and investors seeking
            to capitalize on the continent's vast potential.
          </p>
          <Button variant="link-light">
            Explore What We Do <SlArrowRightCircle />
          </Button>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/assets/futuristic-photo.jpg"
            width={734}
            height={507}
            alt="Futuristic Investor"
            draggable={false}
          />
        </div>
      </div>
    </Section>
  );
}

export default WWDSection;
