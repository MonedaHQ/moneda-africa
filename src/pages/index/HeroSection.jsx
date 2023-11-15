import { socialLinks } from '@/data/navigationData';
import Magnetic from '../../components/ui/Magnetic';

import styles from './styles/herosection.module.css';
import { motion } from 'framer-motion';

const header = [
  '<motion.h1>We are <span>attracted</span></motion.h1> ',
  '<motion.h1>to gaps!<motion.h1>',
];

function HeroSection({ openMenu }) {
  const animation = {
    initial: { y: '100%' },
    enter: (i) => ({
      y: '0',
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 20,
      },
    }),
  };

  return (
    <section className={styles.main}>
      <main className={styles.mainContent}>
        <div>
          {header.map((head, index) => (
            <div key={head} className={styles.linkMask}>
              <motion.h1
                className={styles.heading}
                custom={index}
                variants={animation}
                initial="initial"
                animate="enter"
                dangerouslySetInnerHTML={{ __html: head }}
              />
            </div>
          ))}
        </div>

        <button className={styles.button} onClick={() => openMenu()}>
          <span className={styles.buttonText}>Explore</span>
        </button>
      </main>
      <div className={styles.socials}>
        {socialLinks.map((link) => (
          <Magnetic key={link.path} multiplier={0.3}>
            <p className={styles.linkParagraph}>
              <a href={link.path}>{link.icon}</a>
            </p>
          </Magnetic>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
