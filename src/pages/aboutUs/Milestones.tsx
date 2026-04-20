import Section from '@/components/Section';
import styles from './styles/milestones.module.css';
import WordAnimator from '@/components/WordAnimator';
import AnimatedLineHorizontal from '@/components/AnimatedLineHorizontal';
import Accordion from '@/components/Accordion';
import Image from 'next/image';

const milestoneData = [
  {
    question: '2015 - Birth of Moneda',
    answer:
      'Moneda was founded amidst Nigeria’s foreign exchange crisis, driven by global commodity downturns. Recognizing a severe financing gap within critical sectors, Moneda aimed to provide flexible, crisis-resistant financing for African SMEs. The company set its mission to offer accessible and resilient financing models, supported by risk-sharing and execution. Initial operations focused on advisory support for key SMEs, particularly within the oil and gas sector, helping them stabilize cash flows amid illiquid local markets.',
  },
  {
    question: '2016 - Laying the foundation',
    answer:
      'In 2016, Moneda made its first major move by signing an exclusive financial advisory agreement with a key oil and gas client. Moneda started advisory operations from a single desk within its first client’s office, restructuring the client’s operations while focusing on improving people, processes, and profitability. ',
  },
  {
    question: '2017-2018 - First Major Funding & Expansion',
    answer:
      "Moneda successfully raised $5 million from a Geneva Trading House, enabling the expansion of the client’s operations. With the additional capital, Moneda facilitated strategic financing to its first client, supporting the execution of over 20,000 Metric Tons (MT) of Gasoil supplies to offshore oil production rigs for Chevron Nigeria. By the end of the year, Moneda’s client had solidified its reputation as a capable operator in Nigeria’s oil and gas sector – succeeding where others failed. Moneda hired its first professional staff – a young unexperienced accountant. <br/><br/><strong>Scaling and Strategic Expansion</strong>With a 2-man team, Moneda expanded foreign lines to $25 million, backed by a mix of international trading firms. This expansion enabled our client to become the largest single supplier of Gasoil to Total Upstream Nigeria's offshore production facilities. Moneda crossed 100,000MT in petroleum products financed and delivered by our client.",
  },

  {
    question: '2019 - Wanting more',
    answer:
      'Realizing the transformational impact of the financing model we had built, Moneda ended all exclusive advisory contracts - allowing the company to work with a broader range of clients. <br/><br/>Additionally, Moneda redesigned its income structure, improving pricing dynamics. In the same year, the company secured all necessary regulatory approvals to operate as both financier and contractor in the oil and gas sector, and went live on NNPC’s NiPEX platform, setting the stage for further operational expansion.',
  },
  {
    question: '2020 - Moving from adviser to investor',
    answer:
      'Moneda moved into its first office at 6 Abike Suleiman, Lekki Phase 1, Lagos, Nigeria – hiring its first technical intelligence team. This team went on to conduct an industry survey, interviewing over 500 oil and gas contractors in Nigeria. The result was deep market insights into the funding needs of contractors. It is this intelligence that transformed Moneda’s operating model into what it is today. <br/><br/>To have more control over risk management and transaction operations, Moneda adopted a JV investor status in its transactions. Moneda co-executed its first Duke Oil supply contract (supplying 30,000MT of Gasoil), Nigerian Crude lifting contract (1 million barrels of Amenam Crude) and Over 20,000MT of Gasoil delivered to Shell’s Bonga FPSO. Crossed $150m in transactions financed/facilitated. ',
  },
  {
    question: '2021-2022 - Start of Direct Investing activities',
    answer:
      'We registered Moneda Invest Africa (Mauritius), with a long-term view to centralize US Dollar cashflows across Africa in Mauritius. Moneda Mauritius received approval from Boston-based hedge fund (Arcadia Funds) for a $10m Receivables-backed credit line. <br/><br/>This exclusive financing arrangement was backed by Silicon Valley Bank. Some participants from our industry survey became our first customers – oil contractors to IOCs supplying pipes, electrical parts etc. The credit experiment proved to be successful as Moneda extended over $6m of credit to Nigerian oil and gas SMEs, recording strong returns and Zero defaults.  ',
  },
  {
    question: '2023 - Diversify or Die',
    answer:
      'Just as we were gaining operational momentum, disaster struck. When Silicon Valley Bank collapsed suddenly in 2023, Moneda’s funding partner was forced to end all support abruptly. Moneda wasn’t prepared and itself nearly collapsed, as SVB was our only funding source at the time and we did not know we needed a plan B. To ensure this near-death event could not happen again, Moneda made 3 life changing decisions:  <ol><li>Start taking short term cash investments from mostly Africans in Africa and Africans in Diaspora; </li><li>Invest in subsidiaries that would eventually generate parallel pools of revenue; </li><li>Seek approval for a global fund management license in Mauritius (so that one day we could become our own international funding source).</li></ol> <strong>Executed first transaction in GHANA, supporting a contractor in the agriculture value chain… </strong> That same year, we launched DOMENA Commodities, our agriculture venture, designed to provide subject matter expertise + internal infrastructure to support financing Agri opportunities. By embedding ourselves inside informal and fragmented supply chains, Moneda can originate, underwrite and project manage agriculture financing opportunities for SMEs better than any bank in Africa today. With our integrated warehousing, logistics, and access to essential inputs, Domena is both a strong operator + a partner for Moneda’s growing Trade finance business.  ​',
  },
  {
    question: '2024 - Deeper and more expensive Diversification',
    answer:
      'Going into 2024, Moneda continued to prioritize subsidiary investment over financing external customers - launching AFRISAND Logsitics, our construction materials venture – designed to build inhouse technical capabilities to underwrite, manage and control operational decisions in the construction value chain. <br/><br/>Afrisand owns and operates 2 sand dredgers, and (2) 150MT sand carrying vessels, strategic equipment that shifts major sand supply in Lagos from inefficient trucks breaking down on roads to the inland waterways of Lagos.  <br/><br/>Executed first transaction in DR Congo, supporting a contractor in the Telecoms value chain… <br/><br/>In the same year, Moneda completed an incorporated Joint venture with INO-HARITH Capital (Namibia), marking our first physical operating location outside of Nigeria. The new venture MONEDA-INO expanded our capabilities in Southern Africa, positioning the company as a leader in private credit + execution joint ventures for African natural resources. <br/><br/>Launched MUSA a proprietary lending, payments, and transaction-management software built to power Africa’s alternative credit ecosystem. Musa empowers alternative financiers specifically for Africa’s Critical SMEs in energy, minerals, agriculture and infrastructure to seamlessly provide credit, facilitate cross-border payments, and manage risk with speed and transparency. <br/><br/>Finally, Moneda secured its long-awaited Global fund management license in Mauritius, MONEDA CAPITAL CREDIT FUND. This was a moment of validation after years silently building internal capacities and momentum. A game changer – Moneda Capital will seek to raise $100m in its first fund close from HNIs, family offices and institutional investors. ',
  },
  {
    question:
      '2025 - Becoming the leading non-bank lender to the most important SMEs in Africa',
    answer:
      '<ul><li>Executed first transaction in South Africa, supporting a contractor in the minerals value chain.</li> <li>The Moneda Fund has very bold ambitions – to become the largest non-bank lender to Africa’s most important SMEs.</li> </ul>Building momentum, we signed landmark financing agreements:  <ul><li>MOU with First National Bank (FNB Namibia) for a Namibian$ 1Bn financing line to support Namibian SMEs in oil and gas;</li> <li>MOU with Standard Bank (Namibia) for financing line to support Namibian SMEs in oil and gas</li></ul>Moneda also forged key partnerships, including meCash, to enhance cross-border payments solutions for customers of Moneda, using the MUSA software.',
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
            <WordAnimator as="h1" text="10+ Years of Milestones" />
            <p>
              Our journey is only beginning. As we expand access to African
              credit and scale private credit in Africa, we are unlocking new
              opportunities for critical SMEs in natural resource value chains.
              We invite investors, partners, and stakeholders to join us in this
              mission. Together, we can build a future where Africa’s resources
              are fully harnessed, its communities are empowered, and its
              enterprises drive sustainable, inclusive prosperity.
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
