import Section from '@/components/Section';
import styles from './styles/whyweexist.module.css';
import Image from 'next/image';

function WhyWeExist() {
  return (
    <Section paddingBottom={false} paddingTop={false}>
      <div className={styles.mainContainer}>
        <div className={styles.videoContainer}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/tnltNkowUqk?si=pVUGDEA9Y9A8yNf9"
            title="Why Moneda Exists"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          />
        </div>
        <div className={styles.content}>
          <h2>
            Why <span>Moneda</span> Exists
          </h2>
          <p>
            Most African budgets depend on selling raw materials, so commodity
            price reductions can cause economic crisis in African markets. After
            the crude oil crash of 2014, several SMEs with profitable contracts
            in Nigeria went bankrupt (because of dollar scarcity, devaluations
            and illiquidity in credit systems).
            <br />
            <br />
            Moneda was born to fix such anomalies - providing alternative credit
            and execution expertise to underserved SMEs (natural resource value
            chains) abandoned by traditional credit.. This is why we exist.
          </p>
          <div className={styles.signatureContainer}>
            <Image
              src="/assets/signature.png"
              width={52}
              height={30}
              alt="Ejike signature"
              draggable={false}
            />
            <p>
              <strong>Ejike Egbuagu</strong>
            </p>
            <p>Group Chief Executive</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default WhyWeExist;
