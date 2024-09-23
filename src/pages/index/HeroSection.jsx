import Section from '@/components/Section';
import styles from './styles/herosection.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence, animate } from 'framer-motion';
import ImageSlider from '@/components/ImageSlider';
import WordAnimator from '@/components/WordAnimator';
import ScrollDownIcon from '@/components/lottieFiles/ScrollDownIcon';
import LineAndContent from '@/components/LineAndContent';

function HeroSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const images = [
    '/assets/heroImages/cbc.jpg',
    '/assets/heroImages/link-bridge.jpg',
    '/assets/heroImages/badge.jpg',
    '/assets/heroImages/agriculture.jpg',
    '/assets/heroImages/oil-rig-2.jpg',
  ];

  const heroContent = {
    heading: "Bridging Africa's Credit Gap",
    paragraph:
      "<strong>Africa's markets are dynamic and ever evolving</strong>. <br/> <br/>At Moneda, we've cultivated a profound understanding of African finance and commodities sectors. Our expertise across various sectors allows us to spot and seize emerging opportunities. We partner with our clients to navigate African markets confidently. By leveraging the insights we collect, you can maximise returns while mitigating risks.",
  };

  return (
    <main className={styles.main}>
      <div className={styles.heroSection}>
        <ImageComponent images={images} />
        <div className={styles.content}>
          <MobileLogo />
          <LineAndContent
            content={heroContent}
            textColor="white"
            scrollDown={false}
            as="h1"
            whiteText={true}
          />
        </div>
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
