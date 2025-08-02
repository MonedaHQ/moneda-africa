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
            Moneda Invest Africa is diversified investment firm committed to
            capital preservation and operational excellence. By focusing on
            natural resources, we support the value chains that matter the most
            to Africa&lsquo;s economic growth. Our approach combines your global
            capital with our local capabilities and innovative operational
            model.
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
