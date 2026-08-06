import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useRouter } from 'next/router';

import { homeMenuLinks } from '@/data/menu';
import useScrollPosition from '@/hooks/useScrollPostion';
import { scrollOffset } from '@/utils/config';

import NavLink from './NavLink';
import styles from './styles/navigation.module.css';

type MenuLink = {
  path: string;
  label: string;
  action?: string | null;
  icon?: string | null;
  icon2?: string | null;
  dropdown?: unknown;
};

type NavigationProps = {
  scrollDirection?: 'up' | 'down';
  darkHero?: boolean;
};

function Navigation({
  scrollDirection = 'up',
  darkHero = false,
}: NavigationProps) {
  const scrollPosition = useScrollPosition(scrollOffset);
  const isHero = scrollPosition > 120;

  return (
    <AnimatePresence>
      {isHero ? <HeaderSecondary /> : <HeaderInitial darkHero={darkHero} />}
    </AnimatePresence>
  );
}

function HeaderSecondary() {
  const router = useRouter();
  const route = router.route;

  const headerIntro: Variants = {
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

  return (
    <motion.header
      className={styles.navContainerSecondary}
      variants={headerIntro}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <nav className={styles.navigation2}>
        <Link href="/" aria-label="Moneda Invest Africa home">
          <Image
            width={408.5}
            height={79}
            src="/assets/moneda-line-white.png"
            alt="Moneda Invest Africa"
            className={styles.logo}
          />
        </Link>
        <ul className={styles.navigationList}>
          {(homeMenuLinks as MenuLink[]).map((link) => (
            <NavLink
              key={link.label}
              link={link}
              darkHero={false}
              isActive={route === link.path}
            />
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}

function HeaderInitial({ darkHero }: { darkHero: boolean }) {
  const router = useRouter();
  const route = router.route;

  const headerIntro: Variants = {
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

  return (
    <motion.header
      className={styles.navContainer}
      variants={headerIntro}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <nav className={styles.navigation}>
        <Link href="/" aria-label="Moneda Invest Africa home">
          <Image
            width={408.5}
            height={79}
            src="/assets/1x/moneda-logo.png"
            alt="Moneda Invest Africa"
            className={styles.logo}
          />
        </Link>
        <ul className={styles.navigationList}>
          {(homeMenuLinks as MenuLink[]).map((link) => (
            <NavLink
              key={link.label}
              link={link}
              darkHero={darkHero}
              isActive={route === link.path}
            />
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}

export default Navigation;
