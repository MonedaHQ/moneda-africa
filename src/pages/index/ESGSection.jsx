import Section from '@/components/Section';
import styles from './styles/esgsection.module.css';
import WordAnimator from '@/components/WordAnimator';
import Image from 'next/image';

function ESGSection() {
  return (
    <Section>
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <WordAnimator text="Driving Value Across the ESG Spectrum" as="h2" />
          <p>
            Investors increasingly recognize the significance of Environmental,
            Social, and Governance (ESG) factors in assessing investment risks
            and opportunities.
            <br />
            <br />
            Moneda actively seeks ESG-driven ventures, collaborating with
            partners to create sustainable value across the ESG spectrum. Our
            commitment to sustainability is a prime example of this approach.
            <br />
            <br />
            Moneda is at the forefront of developing innovative investment
            solutions, consulting services, and sustainable strategies for the
            energy and commodities markets. Our focus is on creating
            commercially viable pathways to a sustainable future.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/assets/esg-investing.jpg"
            width={734}
            height={507}
            alt="ESG Investing"
          />
        </div>
      </div>
    </Section>
  );
}

export default ESGSection;
