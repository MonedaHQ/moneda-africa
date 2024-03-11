import {
  PiFacebookLogoFill,
  PiInstagramLogoFill,
  PiLinkedinLogoFill,
  PiXThin,
} from 'react-icons/pi';
import { RiTwitterXFill } from 'react-icons/ri';
import { motion } from 'framer-motion';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { menuSlide, slide } from '@/utils/anim';
import Magnetic from '../../components/ui/Magnetic';
import { navLinks, socialLinks } from '@/data/navigationData';

import Curve from '@/components/ui/Curve';
import styles from './styles/navlist.module.css';

function NavList({ closeMenu }) {
  const ref = useOutsideClick(closeMenu);
  if (!closeMenu) return;
  return (
    <motion.ul
      className={styles.menu}
      ref={ref}
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <div className={styles.closeBtn} onClick={() => closeMenu()}>
        <Magnetic>
          <p>
            <PiXThin />
          </p>
        </Magnetic>
      </div>
      <nav className={styles.navigation}>
        <div className={styles.title}>
          <h3>Navigate to</h3>
        </div>
        {navLinks.map((nav, index) => (
          <motion.li
            key={nav.label}
            className={styles.link}
            variants={slide}
            animate="enter"
            exit="exit"
            initial="initial"
            custom={index}
          >
            <a href={nav.path} className={styles.navLink} target="blank">
              {nav.label}
            </a>
          </motion.li>
        ))}
      </nav>
      <div className={styles.socials}>
        {socialLinks.map((link) => (
          <Magnetic key={link.path} multiplier={0.3}>
            <p>
              <a href={link.path}>{link.icon}</a>
            </p>
          </Magnetic>
        ))}
      </div>
      <Curve />
    </motion.ul>
  );
}

export default NavList;
