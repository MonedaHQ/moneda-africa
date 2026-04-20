import { useRouter } from 'next/router';
import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { perspective } from '@/data/anim';

import styles from './styles/mobilenvalinks.module.css';
import MobileDropDown from './MobileDropDown';
import { useMenuToggler } from '@/context/MenuToggleContext';
import Link from 'next/link';

function MobileNavLinks({ data, isOpen, onDropdownToggle }) {
  const { closeMenu } = useMenuToggler();

  const { nav, index } = data;
  const router = useRouter();

  const dropdown = nav.dropdown;

  const icon = isOpen ? nav.icon2 : nav.icon;

  function handleClick(e, path, label) {
    e.preventDefault();
    if (dropdown) {
      onDropdownToggle(label);
    } else {
      router.push(path);
      closeMenu();
    }
  }

  return (
    <motion.li
      key={nav.label}
      className={styles.link}
      variants={perspective}
      animate="enter"
      exit="exit"
      initial="initial"
      custom={index}
    >
      <Link
        href={nav.label}
        className={styles.navLink}
        onClick={(e) => handleClick(e, nav.path, nav.label)}
      >
        {nav.label} {dropdown ? icon : ''}
      </Link>
      <AnimatePresence>
        {isOpen && <MobileDropDown dropdown={dropdown} />}
      </AnimatePresence>
    </motion.li>
  );
}

export default MobileNavLinks;
