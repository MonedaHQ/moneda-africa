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
      'Founded in 2015, Moneda Invest emerged with a clear vision: to become a leading financial services firm specializing in the energy and commodities sectors. The company laid the groundwork for its future success by establishing a robust financial framework and defining its core values.',
    left: true,
  },
  {
    year: '2016',
    paragraph:
      "A pivotal moment arrived in 2016 when Moneda Invest secured its first exclusive financial advisory mandate from a Nigerian client. This marked the beginning of a transformative journey as the company embarked on a comprehensive restructuring of the client's business operations, focusing on enhancing efficiency, profitability, and overall performance.",
    left: false,
  },
  {
    year: '2017',
    paragraph:
      "Proved to be a year of significant growth and achievement. Moneda Invest successfully raised $5 million in capital from a Geneva Trading House, fueling its expansion plans. The company's expertise was instrumental in supporting a major client with the financing and execution of over 20,000 metric tonnes of gasoil supplies to Chevron Nigeria's offshore oil production fields. This accomplishment solidified Moneda's position as a reliable partner in the energy sector.",
    left: true,
  },
  {
    year: '2018',
    paragraph:
      "Building on this momentum, in 2018, Moneda expanded its capital base to $25 million through strategic partnerships with London-based trading houses and an Africa-focused bank. This financial injection propelled the company into new opportunities, enabling it to support its clients on an even larger scale. A testament to this growth was the successful execution of over 100,000 metric tonnes of gasoil supplies to Total Upstream Nigeria's offshore production facilities, solidifying the client's position as the largest single supplier.",
    left: false,
  },
  {
    year: '2019',
    paragraph:
      "A strategic shift occurred in 2019 as Moneda Invest transitioned to a multi-client model. By terminating exclusive contracts, the company gained greater flexibility to operate across the industry. This strategic move coincided with the redesign of fee structures aligned with the NiPEX platform. Furthermore, Moneda secured the necessary regulatory approvals to operate as both a financier and operator in the oil and gas contracting and execution space. This pivotal year marked a significant milestone in the company's evolution, positioning it for further growth and expansion.",
    left: true,
  },
  {
    year: '2020',
    paragraph:
      'Moneda Invest intensified its focus on the African market. The company entered into non-exclusive joint venture agreements with International Oil Companies (IOCs) to support the financing and execution of their equipment and petroleum supply contracts. These strategic partnerships enabled Moneda to expand its reach and execute significant transactions, including a 30,000 metric tonne gasoil supply contract for Duke Oil and a one-million-barrel Amenam crude contract. To facilitate seamless operations across the continent, Moneda Invest established a presence in Mauritius, enhancing its capital flexibility and market reach.',
    left: false,
  },
  {
    year: '2021',
    paragraph:
      'Moneda fully transitioned into a new operating model, shifting from advisory fees to profit-sharing, raised $10 million from a US-based hedge fund (expandable to $50 million), and deployed its first on-balance sheet capital to support an indigenous SME supplying tug boats to the Otakikpo field.',
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
      'Moneda received its Global Business License (GBL), allowing us to operate and receive funds worldwide, marking a significant milestone in our global expansion efforts.',
    left: false,
  },
];

function OurHistory() {
  return (
    <Section color="darkBrown" id="history">
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
