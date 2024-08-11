import Section from '@/components/Section';
import styles from './styles/herosection.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence, animate } from 'framer-motion';
import ImageSlider from '@/components/ImageSlider';
import WordAnimator from '@/components/WordAnimator';
import ScrollDownIcon from '@/components/lottieFiles/ScrollDownIcon';

function HeroSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const images = [
    '/assets/financial-district.jpg',
    '/assets/cornfield-farmer.jpg',
    '/assets/badger.jpg',
  ];

  const heroWords = {
    heading: 'Shaping the Future: Expert Guidance and Solutions',
    paragraph:
      '<strong>The world is constantly evolving</strong>. <br/> <br/>At Moneda, we leverage our deep-rooted expertise in the finance and commodities markets to identify and capitalize on emerging opportunities. We empower our clients to enter new markets confidently by navigating complexities and maximizing returns while minimizing risk.',
  };

  const paragraphVariant = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: 1.4, duration: 0.35 } },
  };

  return (
    <main className={styles.main}>
      <ImageComponent images={images} />
      <div className={styles.heroContent}>
        <div className={styles.container}>
          <div className={styles.headingContainer}>
            <MobileLogo />
            <WordAnimator text={heroWords.heading} as="h1" />
          </div>
          {isClient && (
            <motion.p
              dangerouslySetInnerHTML={{ __html: heroWords.paragraph }}
              className={styles.heroParagraph}
              variants={paragraphVariant}
              initial="initial"
              animate="animate"
            />
          )}
        </div>
      </div>
      <div className={styles.lottieIcon}>
        <ScrollDownIcon />
      </div>
    </main>
  );
}

function MobileLogo() {
  return (
    <div className={styles.mobileLogo}>
      <Image
        src="/assets/1x/moneda-logodark.png"
        width={212}
        height={70}
        alt="Moneda Cap Logo"
      />
    </div>
  );
}

function ImageComponent({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8 } },
    exit: { opacity: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className={styles.backgroundSlider}>
      <ImageSlider imageArray={images} />
    </div>
  );
}

export default HeroSection;
