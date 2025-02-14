import Section from '@/components/Section';
import { useRef } from 'react';
import { useInView, motion, animate, delay } from 'framer-motion';

import styles from './styles/ourhistory.module.css';
import { isEven } from '@/utils/helpers';
import WordAnimator from '@/components/WordAnimator';
import CharacterAnimator from '@/components/CharacterAnimator';

const ourHistory = [
  {
    year: '2015',
    paragraph:
      'Founded in 2015, Moneda Invest aimed to be a leading financial services firm in the energy and commodities sectors. We built our foundation on a strong financial framework and core values.',
    left: true,
  },
  {
    year: '2016',
    paragraph:
      "Moneda Invest secured its first exclusive financial advisory mandate from a Nigerian client, marking a transformative journey. We restructured the client's business to improve efficiency, profitability, and performance.",
    left: false,
  },
  {
    year: '2017',
    paragraph:
      'Moneda Invest experienced significant growth by raising $5 million in capital from a Geneva Trading House, supporting its expansion. It played a key role in financing and executing 20,000 metric tonnes of gasoil supplies to Chevron Nigeria, solidifying its reputation in the energy sector.',
    left: true,
  },
  {
    year: '2018',
    paragraph:
      'Expansion of our capital base to $25 million through strategic partnerships with London-based trading houses and an Africa-focused bank. This enabled the company to execute over 100,000 metric tonnes of gasoil supplies to Total Upstream Nigeria, reinforcing its position as a key player in the energy sector.',
    left: false,
  },
  {
    year: '2019',
    paragraph:
      'The company transitioned to a multi-client model to gain industry-wide flexibilities and create optimal value. Throygh the completion of our registration on the NiPEX portal, the company secured regulatory approvals to operate as both a financier and operator in the oil and gas sector.',
    left: true,
  },
  {
    year: '2020',
    paragraph:
      'Moneda Invest strengthened its focus on Africa by forming non-exclusive joint ventures with African SMEs who have secured contracts with International Oil Companies (IOCs)',
    left: false,
  },
  {
    year: '2021',
    paragraph:
      'Moneda transitioned to a profit-sharing model, raising $10 million from a US-based hedge fund, expandable to $50 million. It also deployed its first on-balance sheet capital to support a local SME supplying tugboats to the Otakikpo field.',
    left: true,
  },
  {
    year: '2022',
    paragraph:
      'Expanded operations beyond Nigeria and signed an MoU with Namibia Oil Corporation (NAMCOR) to support local content development through dedicated funding and execution support.',
    left: false,
  },
  {
    year: '2023',
    paragraph:
      'Moneda signed an MoU with the Namibia Investment Promotion and Development Board (NIPDB), further solidifying our commitment to supporting local content development and expanding our footprint in the region.',
    left: true,
  },
  {
    year: '2024',
    paragraph:
      'Moneda received its fund management license, allowing us to operate and receive funds worldwide, marking a significant milestone in our global expansion efforts.',
    left: false,
  },
];

function OurHistory() {
  return (
    <Section color="darkBrown" id="history">
      <div className={styles.backgroundImage} />
      <TopLine />
      <div className={styles.parentContainer}>
        <Heading />
        <History />
      </div>
    </Section>
  );
}

function Heading() {
  return (
    <div className={styles.heading}>
      <h3>Our History</h3>
      <p>Moneda Invest: A Journey of Financial Innovation</p>
    </div>
  );
}

function TopLine() {
  const horizontalLineVariants = {
    initial: { transform: 'scaleX(0)', transformOrigin: 'center' },
    animate: { transform: 'scaleX(100%)' },
  };
  const lineRef = useRef();
  const inView = useInView(lineRef, { once: true });
  return (
    <div className={styles.lineBox}>
      <motion.div
        className={styles.line}
        variants={horizontalLineVariants}
        initial="initial"
        animate={inView ? 'animate' : 'initial'}
        ref={lineRef}
      />
    </div>
  );
}

function History() {
  const historyLineVariants = {
    initial: { height: 0 },
    animate: { height: '100%', transition: { duration: 8 } },
  };

  const ref = useRef();
  const inView = useInView(ref, { once: true });
  return (
    <div className={styles.historyParent}>
      {ourHistory.map((history, index) => (
        <HistoryBox history={history} index={index} key={history.year} />
      ))}
      <motion.div
        className={styles.historyLine}
        variants={historyLineVariants}
        initial="initial"
        animate={inView ? 'animate' : 'initial'}
        ref={ref}
      />
    </div>
  );
}

function HistoryBox({ history, index }) {
  const isBoxEven = isEven(index);

  const boxVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { delay: index * 0.1 },
    },
  };

  const paragraphVariants = {
    initial: { transfrom: 'translateY(-30px)' },
    animate: { transfrom: 'translateY(0)', transition: { delay: index * 0.3 } },
  };

  const ref = useRef();
  const inView = useInView(ref, { once: true });

  return (
    <>
      <motion.div
        key={history.year}
        className={`${styles.historyContent}`}
        variants={boxVariants}
        initial="initial"
        animate={inView ? 'animate' : 'initial'}
        ref={ref}
      >
        <h3 className={`${!isBoxEven ? styles.orange : ''}`}>
          <CharacterAnimator as="h3" text={history.year} />
        </h3>
        <motion.p
          variants={paragraphVariants}
          initial="initial"
          animate={inView ? 'animate' : 'initial'}
        >
          {history.paragraph}
        </motion.p>
      </motion.div>
      <div />
      <div />
    </>
  );
}

export default OurHistory;
