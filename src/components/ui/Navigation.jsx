import Image from 'next/image';
import { forwardRef } from 'react';

import { PiEqualsThin, PiXThin } from 'react-icons/pi';
import Magnetic from './Magnetic';

import styles from '../styles/navigation.module.css';
import NavList from '@/pages/index/NavList';
import { AnimatePresence, motion } from 'framer-motion';

const Navigation = forwardRef(function index(props, ref) {
  const { isMenuOpen, openMenu, closeMenu, toggleMenu } = props.toggleControls;

  const overlayVariants = {
    initial: { opacity: 0.3 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0 },
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          src="/moneda-logo.png"
          width={1665}
          height={347}
          alt="Moneda Logo"
        />
      </div>
      <Magnetic>
        <div className={`${styles.burger} `} onClick={() => toggleMenu()}>
          <div className={`${styles.bounds} `} ref={ref}></div>
          <span className={` ${isMenuOpen ? styles.whiteIcon : styles.icon}`}>
            <PiEqualsThin />
          </span>
        </div>
      </Magnetic>
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.div
            className={styles.overlay}
            variants={overlayVariants}
            initial="initial"
            animate="visible"
            exit="exit"
          ></motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {isMenuOpen && <NavList closeMenu={closeMenu} />}
      </AnimatePresence>
    </header>
  );
});

export default Navigation;
