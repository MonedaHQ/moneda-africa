import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';

import NavLink from './NavLink';

import { homeMenuLinks as baseLinks } from '@/data/menu';
import styles from './styles/navigation.module.css';
import useScrollPosition from '@/hooks/useScrollPostion';
import { scrollOffset } from '@/utils/config';

function Navigation({ scrollDirection = 'up', darkHero = false }) {
  const scrollPosition = useScrollPosition(scrollOffset);
  const isHero = scrollPosition > 120;

  return (
    <AnimatePresence>
      {isHero ? <HeaderSecondary /> : <HeaderInitial darkHero={darkHero} />}
    </AnimatePresence>
  );
}

function getModifiedLinks(currentPath) {
  const isHome = currentPath === '/';

  if (isHome) return baseLinks;

  return [
    {
      path: '/',
      label: 'Home',
      action: null,
      icon: null,
      icon2: null,
      dropdown: null,
    },
    ...baseLinks,
  ];
}

function HeaderSecondary() {
  const router = useRouter();
  const route = router.route;
  const modifiedLinks = getModifiedLinks(route);

  const headerIntro = {
    initial: { opacity: 0, y: -50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.1, ease: [0.67, 0.41, 0, 1] },
    },
    exit: { opacity: 0, y: -30 },
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
        <Image
          width={408.5}
          height={79}
          src="/assets/moneda-line-white.png"
          alt="logo"
          className={styles.logo}
          onClick={() => router.push('/')}
        />
        <ul className={styles.navigationList}>
          {modifiedLinks.map((link) => (
            <NavLink key={link.label} link={link} motion={motion} />
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}

function HeaderInitial({ darkHero }) {
  const router = useRouter();
  const route = router.route;
  const modifiedLinks = getModifiedLinks(route);

  const headerIntro = {
    initial: { opacity: 0, y: -50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.1, ease: [0.67, 0.41, 0, 1] },
    },
    exit: { opacity: 0, y: -30 },
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
        <Image
          width={408.5}
          height={79}
          src="/assets/1x/moneda-logo.png"
          alt="logo"
          className={styles.logo}
          onClick={() => router.push('/')}
        />
        <ul className={styles.navigationList}>
          {modifiedLinks.map((link) => (
            <NavLink
              key={link.label}
              link={link}
              motion={motion}
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
