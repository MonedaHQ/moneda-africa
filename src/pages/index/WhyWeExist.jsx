import Section from '@/components/Section';
import styles from './styles/whyweexist.module.css';
import LearnMoreButton from '@/components/LearnMoreButton';

import AnimatedLineHorizontal from '@/components/AnimatedLineHorizontal';

function WhyWeExist() {
  return (
    <Section>
      <div className={styles.mainContainer}>
        <div className={styles.videoContainer}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/QzLmkPjM84Y?si=Bkm3--PiLeOb_ylG"
            title="Why Moneda Exists"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <div className={styles.content}>
          <div className={styles.smallHeading}>
            <h6>THE MONEDA GROUP</h6>
            <AnimatedLineHorizontal
              opacity={0.3}
              color="black"
              duration={0.6}
            />
          </div>
          <h2>
            Unlocking <span>Africa&lsquo;s</span> Resource Potential
          </h2>
          <p>
            Moneda Invest Africa is a pan-African alternative fund provider
            committed to providing bespoke capital and technical support for
            critical SMEs in natural resource value chains that are pivotal to
            Africa&lsquo;s economic growth. Our model bridges global investors
            with African fund managers, combining international capital with
            local expertise, alternative credit solutions, and a strong emphasis
            on local content in Africa. <br />
            <br />
            Through innovative financing and private credit in Africa, we are
            unlocking opportunities for enterprises that power industrial
            transformation and inclusive development.
          </p>
          <LearnMoreButton
            buttonLabel="Explore our Impact"
            buttonLink="/our-impact"
          />
        </div>
      </div>
    </Section>
  );
}

export default WhyWeExist;
