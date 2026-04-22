import Image from 'next/image';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useRouter } from 'next/router';

import { capitalMenuLinks } from '@/data/menu';
import useScrollPosition from '@/hooks/useScrollPostion';
import { scrollOffset } from '@/utils/config';
import CapitalButton from '@/pages/capital/CapitalButton';

import styles from './styles/capitalnavigation.module.css';

function CapitalNavigation() {
  const scrollPosition = useScrollPosition(scrollOffset);
  const isScrolled = scrollPosition > 120;

  return (
    <AnimatePresence>
      {isScrolled ? <CapitalHeaderScrolled /> : <CapitalHeaderInitial />}
    </AnimatePresence>
  );
}

const headerAnim: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

function CapitalHeaderInitial() {
  const router = useRouter();

  return (
    <motion.header
      className={styles.navContainerInitial}
      variants={headerAnim}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <nav className={styles.navigation}>
        <Image
          width={408.5}
          height={79}
          src="/assets/moneda-line-white.png"
          alt="Moneda Capital logo"
          className={styles.logo}
          onClick={() => router.push('/')}
        />
        <NavLinks />
      </nav>
    </motion.header>
  );
}

function CapitalHeaderScrolled() {
  const router = useRouter();

  return (
    <motion.header
      className={styles.navContainerScrolled}
      variants={headerAnim}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <nav className={styles.navigation}>
        <Image
          width={408.5}
          height={79}
          src="/assets/moneda-line-white.png"
          alt="Moneda Capital logo"
          className={styles.logo}
          onClick={() => router.push('/')}
        />
        <NavLinks />
      </nav>
    </motion.header>
  );
}

function NavLinks() {
  return (
    <ul className={styles.navigationList}>
      {capitalMenuLinks.map((link) => (
        <li key={link.label}>
          <CapitalButton variant="nav" href={link.path}>
            {link.label}
          </CapitalButton>
        </li>
      ))}
      <li>
        <CapitalButton variant="solid" href="#register-interest">
          Register Interest
        </CapitalButton>
      </li>
    </ul>
  );
}

export default CapitalNavigation;
