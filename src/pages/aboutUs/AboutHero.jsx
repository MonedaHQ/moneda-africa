import Section from '@/components/Section';
import styles from './styles/abouthero.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import WordAnimator from '@/components/WordAnimator';
import AnimatedLineHorizontal from '@/components/AnimatedLineHorizontal';
import { truncateString } from '@/utils/helpers';
import LearnMoreButton from '@/components/LearnMoreButton';

function HeroSectionWrapper({ children }) {
  return (
    <div className={styles.heroSection}>
      <div className={styles.backgroundImg}>
        <Image
          src="/assets/heroImages/background-img.jpg"
          width={400}
          height={400}
          alt="Moneda Motif"
        />
      </div>
      <Section color="transparent">{children}</Section>
    </div>
  );
}

function AboutHero() {
  return (
    <HeroSectionWrapper>
      <main className={styles.container}>
        <RotatingPhilosophy />
        {/* <MonedaInPress /> */}
      </main>
    </HeroSectionWrapper>
  );
}

function RotatingPhilosophy() {
  const corporatePhilosophy = [
    {
      heading: 'Our Mission',
      paragraph:
        'Our mission is to trigger unconventional growth in Natural Resource value chains in Africa using alternative credit and world-class execution',
    },
    {
      heading: 'Our Vision',
      paragraph: 'To transform African natural resources into African wealth',
    },
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % corporatePhilosophy.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [corporatePhilosophy.length]);

  const philosophyVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className={styles.philosophyBox}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          variants={philosophyVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className={styles.philosophyTitle}
        >
          <WordAnimator text={corporatePhilosophy[index].heading} as="h1" />
          <AnimatedLineHorizontal />
          <p>{corporatePhilosophy[index].paragraph}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function MonedaInPress() {
  const highlightedNews = [
    {
      headline:
        'Moneda Invest Africa and meCash partner to enhance critical SME financing in Africa with the launch of “Musa”',
      coverUrl:
        'https://c76c7bbc41.mjedge.net/wp-content/uploads/tc/2025/03/0H1A2540-1-scaled.jpg',
      link: 'https://techcabal.com/2025/03/20/moneda-invest-africa-and-mecash-partner-to-enhancesme-financing/',
    },
    {
      headline: 'FNB Namibia commits N$1 billion to fund SMEs in oil and gas',
      coverUrl:
        'https://content.thebrief24.com/wp-content/uploads/2025/04/09181754/FNB-oil-signing.jpeg',
      link: 'https://thebrief.com.na/2025/04/fnb-namibia-commits-n1-billion-to-fund-smes-in-oil-and-gas/',
    },
    {
      headline:
        'For Moneda Invest Africa, Championing Inclusion Beyond Tokenism, but Bold Commitment to Gender Equity',
      coverUrl:
        'https://global.ariseplay.com/amg/www.thisdaylive.com/uploads/IMG_3428.jpeg',
      link: 'https://www.thisdaylive.com/2025/03/14/for-moneda-invest-africa-championing-inclusion-beyond-tokenism-but-bold-commitment-to-gender-equity/',
    },
    {
      headline:
        'Industry Leaders Call for Stronger Local Business Integration at NIEC 2025',
      coverUrl:
        'https://energychamber.org/wp-content/uploads/Industry-leaders-NIEC.jpg',
      link: 'https://energychamber.org/industry-leaders-call-for-stronger-local-business-integration-at-niec-2025/',
    },
  ];

  return (
    <div className={styles.monedaInPress}>
      <div className={styles.heading}>
        <h4>Moneda in Press</h4>
      </div>
      <div className={styles.pressContainer}>
        {highlightedNews.map((news, index) => {
          return <PressItem news={news} index={index} key={news.headline} />;
        })}
      </div>
    </div>
  );
}

function PressItem({ news, index }) {
  return (
    <div className={styles.pressItem}>
      <Image src={news.coverUrl} width={300} height={300} alt={news.heading} />
      <div>
        <h6>{truncateString(news.headline)}</h6>
        <LearnMoreButton
          buttonLabel="Read more"
          buttonLink={news.link}
          newTab={true}
        />
      </div>
    </div>
  );
}

export default AboutHero;
