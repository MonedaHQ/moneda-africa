import { motion } from 'framer-motion';

import styles from './styles/mobiledropdown.module.css';
import { useRouter } from 'next/router';
import { useMenuToggler } from '@/context/MenuToggleContext';
import { grow, perspectiveFast } from '@/data/anim';

function MobileDropDown({ dropdown }) {
  return (
    <motion.div
      className={styles.dropdown}
      variants={grow}
      animate="enter"
      initial="initial"
      exit="exit"
    >
      <ul className={styles.navList}>
        {dropdown?.map((link, index) => (
          <DropLink key={link.label} index={index} link={link} />
        ))}
      </ul>
    </motion.div>
  );
}

function DropLink({ link, index }) {
  const { closeMenu } = useMenuToggler();

  const router = useRouter();
  return (
    <motion.li
      onClick={() => {
        router.push(link.path);
        closeMenu();
      }}
      variants={perspectiveFast}
      animate="enter"
      initial="initial"
      exit="exit"
      custom={index}
    >
      {link.label}
    </motion.li>
  );
}

export default MobileDropDown;
