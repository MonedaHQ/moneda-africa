import Section from '@/components/Section';
import styles from './styles/milestones.module.css';
import WordAnimator from '@/components/WordAnimator';
import AnimatedLineHorizontal from '@/components/AnimatedLineHorizontal';
import Accordion from '@/components/Accordion';
import Image from 'next/image';

const milestoneData = [
  {
    question: '$150 Million in Trade Volumes and Zero Defaults',
    answer:
      'Since 2015, Moneda has documented over $150 million in trade volumes, financing countless across industries such as energy, agriculture, oil and gas and FMCG. More than just a number, those figures represent that trust placed in businesses in our quest to be the leading SME financing platform on the continent that offers value-added services and world-bringing this model of risk-sharing and peer evaluation has resulted in zero defaults in documented cases are testament to the credit underwriting the success of our approach.',
  },
  {
    question: 'Creating Jobs, Empowering Communities',
    answer:
      'Through our financing and advisory services, Moneda has directly contributed to the creation of over 1,000 direct jobs and 8,000 indirect jobs across Africa. These jobs are not just numbers; they represent lives transformed and families empowered. Our work has empowered local businesses to scale, creating employment opportunities and fostering economic resilience.',
  },
  {
    question: 'Supporting Women in Business',
    answer:
      'Moneda has been at the forefront of empowering women to achieve career advancement with our commitment to gender parity in our team. We are assured that at least 40% of the content are women supporting women and businesses. These initiatives have empowered women in leadership is leading not just change and inclusivity in our business operations but has contributed to making foundational change in the leadership composition of the continental SME ecosystem.',
  },
  {
    question:
      'Expanding Across Africa – A Strategic Merger with Ino Harith Capital',
    answer:
      "Building on our journey has been a paramount to the first move across in the market. From Nigeria to Botswana, Morocco, and Ghana, we've never stopped pushing the boundaries of our reach beyond and have been a trusted counterpart to local content. Our members representing of over 15 African countries, we're committed to making a meaningful and accessible financial solutions that have proven viable. We're glad to say there's now new chapter in our efforts to drive growth in the region. The partnership continues to unlock well-lab teams on project contracts, ensuring that franchise looks have the capabilities and support they need to succeed.",
  },
  {
    question: 'Commitment to Sustainable Energy – Green Hydrogen in Namibia',
    answer:
      "Moneda has been at the forefront of supporting green energy projects in Africa. One of our most notable initiatives is the green hydrogen project in Namibia, where we've contributed to innovative funding mechanisms to support this groundbreaking renewable energy initiative. This project is not just about sustainable energy goals.",
  },
  {
    question: 'A Track Record of Outperformance',
    answer:
      "Despite global challenges, including market volatility and disruptions like the outbreak of Silicon Valley Bank, Moneda's performance has sometimes helped us achieve and delivered 10% financial derived serving our clients' operating concerns. Benchmarks have outlined and showing that our approach to investments and risk management delivers even in uncertain times.",
  },
  {
    question: 'Strategic Partnerships with Multinational Corporations',
    answer:
      'Our strategic partnerships with leading multinational corporations have enabled us to expand our reach and impact. These partnerships have resulted in collaborative initiatives that drive innovation and create value for all stakeholders involved.',
  },
];

function Milestones() {
  return (
    <Section color="darkBrown">
      <div className={styles.container}>
        <div className={styles.backgroundImg}>
          <Image
            width={400}
            height={400}
            alt="Kwa Afrika"
            src="/assets/coin.png"
          />
        </div>
        <div className={styles.content}>
          <div className={styles.heading}>
            <WordAnimator as="h1" text="9+ Years of Milestones" />
            <p>
              For 9+ years, Moneda has been at the heart of a series of
              pioneering initiatives that have empowered SMEs, created jobs, and
              contributed to Africa’s sustainable development. Our journey is
              defined by achievements that not only reflect our ability to
              innovate but also demonstrate the tangible impact we have had on
              the continent.{' '}
            </p>
          </div>
          <AnimatedLineHorizontal width={100} color="white" opacity={0.4} />
          <Accordion questions={milestoneData} color="white" />
        </div>
      </div>
    </Section>
  );
}

export default Milestones;
