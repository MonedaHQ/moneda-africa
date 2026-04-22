import { AnimatePresence, motion } from 'framer-motion';

import { capitalMenuLinks } from '@/data/menu';
import { useMenuToggler } from '@/context/MenuToggleContext';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { perspective } from '@/data/anim';
import SpecialMenuButton from '@/components/mobileNav/SpecialMenuButton';
import CapitalButton from '@/pages/capital/CapitalButton';

import styles from './styles/capitalmobilenav.module.css';

function CapitalMobileNavigationHeader() {
  const { isMenuOpen, closeMenu } = useMenuToggler();
  const ref = useOutsideClick(closeMenu);

  const menu = {
    open: {
      width: '100%',
      height: '100%',
      top: '-25px',
      right: '-25px',
      transition: {
        duration: 0.75,
        type: 'tween',
        ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
      },
    },
    closed: {
      width: '100px',
      height: '40px',
      top: '0px',
      right: '0px',
      transition: {
        duration: 0.75,
        delay: 0.35,
        type: 'tween',
        ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
      },
    },
  } as const;

  return (
    <div className={styles.header} ref={ref}>
      <motion.div
        className={styles.menu}
        variants={menu}
        animate={isMenuOpen ? 'open' : 'closed'}
        initial="closed"
      >
        <AnimatePresence>{isMenuOpen && <CapitalMobileMenu />}</AnimatePresence>
      </motion.div>
      <SpecialMenuButton isActive={isMenuOpen} />
    </div>
  );
}

function CapitalMobileMenu() {
  const { closeMenu } = useMenuToggler();

  const allLinks = [{ path: '/', label: 'Home' }, ...capitalMenuLinks];

  return (
    <div className={styles.nav}>
      <ul className={styles.mainNavLinks}>
        {allLinks.map((link, i) => (
          <motion.li
            key={link.label}
            className={styles.link}
            variants={perspective}
            animate="enter"
            exit="exit"
            initial="initial"
            custom={i}
          >
            <CapitalButton
              variant="nav"
              href={link.path}
              className={styles.navLink}
              onClick={closeMenu}
            >
              {link.label}
            </CapitalButton>
          </motion.li>
        ))}
      </ul>
      <div className={styles.cta}>
        <CapitalButton
          variant="solid"
          href="#register-interest"
          onClick={closeMenu}
        >
          Register Interest
        </CapitalButton>
      </div>
    </div>
  );
}

export default CapitalMobileNavigationHeader;
