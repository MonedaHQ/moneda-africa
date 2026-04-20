import { AnimatePresence, motion } from 'framer-motion';

import { useMenuToggler } from '@/context/MenuToggleContext';
import { useOutsideClick } from '@/hooks/useOutsideClick';

import MobileNavigation from './MobileNavigation';
import SpecialMenuButton from './SpecialMenuButton';
import styles from './styles/navigationheader.module.css';

function MobileNavigationHeader() {
  const { isMenuOpen, closeMenu } = useMenuToggler();
  const ref = useOutsideClick(closeMenu);

  const menu = {
    open: {
      width: '100%',
      height: '100%',
      top: '-25px',
      right: '-25px',
      transition: { duration: 0.75, type: 'tween', ease: [0.76, 0, 0.24, 1] },
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
        ease: [0.76, 0, 0.24, 1],
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
        <AnimatePresence>{isMenuOpen && <MobileNavigation />}</AnimatePresence>
      </motion.div>
      <SpecialMenuButton isActive={isMenuOpen} />
    </div>
  );
}

export default MobileNavigationHeader;
