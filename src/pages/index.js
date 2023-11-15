import MetaTags from '@/components/ui/head';
import Image from 'next/image';

import styles from './index/styles/index.module.css';
import Navigation from '@/components/ui/Navigation';
import { useRef } from 'react';
import StickyCursor from '@/components/ui/StickyCursor';
import { useMenuToggler } from '@/context/MenuToggler';
import HeroSection from './index/HeroSection';

function Home() {
  const stickyElement = useRef(null);
  const { isMenuOpen, openMenu, closeMenu, toggleMenu } = useMenuToggler();

  return (
    <>
      <MetaTags
        title="Moneda Africa: Home"
        description="African economies rely heavily on raw material exports, making them vulnerable to fluctuations in commodity prices. The 2014 crude oil crash left many SMEs in Nigeria bankrupt. Moneda aims to address this issue by providing alternative credit and support to oil contractors."
      />
      <section className={styles.section}>
        <div className={styles.backgroundImage}></div>
        <Navigation
          ref={stickyElement}
          toggleControls={{ isMenuOpen, openMenu, closeMenu, toggleMenu }}
        />
        <StickyCursor stickyElement={stickyElement} />
        <HeroSection openMenu={openMenu} />
      </section>
    </>
  );
}

export default Home;
