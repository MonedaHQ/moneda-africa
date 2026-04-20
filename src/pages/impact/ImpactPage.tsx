import Section from '@/components/Section';
import TextAndImageSection from '@/components/TextAndImageSection';

import styles from './styles/ourimpact.module.css';
import WordAnimator from '@/components/WordAnimator';

const data = [
  {
    imageData: {
      src: '/assets/impact/maize-farmer.jpg',
    },
    title: '',
    heading: 'Driving Sustainable Growth',
    paragraph:
      'Through Domena Commodities Limited, Moneda drives sustainable growth across African commodities sectors ensuring food security, providing financial support to traders and empowering small-scale farmers by providing essential farming inputs starting with our base in Pambegua Kaduna. <br/> <br/> By leveraging our technical, and risk management expertise and industry relationships, Moneda provides critical support to both farmers and miners, ensuring their products reach markets efficiently. With over ₦542M in transactions, Domena Commodities is revolutionizing Nigeria’s food sector. By empowering 241 farmers, distributing 60,000 kg of fertilizers, and creating 100+ direct jobs, we are driving food security and sustainability. Our investment in solar-powered warehouses, grain purchases, and backward integration is reshaping the way agriculture is practiced in Nigeria, with a focus on scalability and execution excellence.',
  },
  {
    imageData: {
      src: '/assets/impact/mining.jpg',
    },
    title: '',
    heading: 'Clean Energy Transition',
    paragraph:
      'Our impact extends into the mining sector through DT Mining, a lithium mining venture in its exploratory phase. This positions us at the forefront of the clean energy transition, contributing to the rising global demand for lithium, a key component in electric vehicle batteries and renewable energy storage solutions. Africa holds 30% of the world’s mineral resources, yet accounts for less than 5% of global mining revenue due to the lack of investment and processing capacity. In Nigeria, where 90% of mining is artisanal.<br/><br/>We are committed to empowering stakeholders and supporting sustainable practices within these sectors.',
  },
  {
    imageData: {
      src: '/assets/impact/sand-badge.jpg',
    },
    title: '',
    heading: 'Supporting Economic Growth',
    paragraph:
      'Moneda’s asset division is anchored by AfriSand, a vital sand transportation business. With two state-of-the-art 150MT sand transportation barges, Afrisand has deployed NGN116.4M creating 50+ jobs and introducing modern sand transportation solutions. This shows our commitment to contributing to lesser pollution because 1 sand barge takes 7 20MT trucks off the roads in Lagos. This investment demonstrates our commitment to building foundational industries and supporting economic growth.',
  },
];

function ImpactPage() {
  return (
    <main className={styles.main}>
      <MainContent />
      <Section paddingTop={false}>
        <h5>
          Expanding beyond Nigeria, Moneda Africa is playing a vital role in
          supporting the growth of SMEs in Namibia&lsquo;s oil and gas industry.
          We have trained 170 SMEs on contract execution strategies and
          established partnerships with key stakeholders like NAMCOR and the
          Namibia Investment Promotion and Development Board (NIPDB). Through
          our Joint Venture with Ino Harith Capital, we are financing oil and
          gas projects, ensuring that local businesses are equipped to
          participate in Namibia&lsquo;s burgeoning energy sector.
        </h5>
      </Section>
      <CSRSection />
      <Section paddingTop={false}>
        <h5>
          Together, these initiatives reflect Moneda Africa&lsquo;s unwavering
          commitment to building a self-sustaining Africa, where local
          businesses and artists are empowered to unlock the continent&lsquo;s
          vast potential and lead it toward economic prosperity.
        </h5>
      </Section>
    </main>
  );
}

function MainContent() {
  return (
    <>
      {data.map((impact, index) => {
        const isEven = index % 2 ? true : false;
        return (
          <>
            {!isEven && (
              <Section>
                <TextAndImageSection
                  imageData={impact.imageData}
                  heading={impact.heading}
                  paragraph={impact.paragraph}
                  contentFirst={!isEven}
                  title={impact.title}
                />
              </Section>
            )}
            {isEven && (
              <TextAndImageSection
                imageData={impact.imageData}
                heading={impact.heading}
                paragraph={impact.paragraph}
                contentFirst={!isEven}
                title={impact.title}
                brown={isEven}
              />
            )}
          </>
        );
      })}
    </>
  );
}

function CSRSection() {
  return (
    <Section>
      <div className={styles.csrContainer}>
        <div className={styles.videoContainer}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/vNQoRyDjEvk?si=Ury4jAie-Nh3i2In"
            title="Our Journey So Far - 1952 Africa"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <div className={styles.content}>
          <WordAnimator
            as="h2"
            text="Catalyzing a Renaissance of African Art with 1952 Africa"
          />
          {/* <h2>Catalyzing a Renaissance of African Art with 1952 Africa</h2> */}
          <p>
            In addition to our economic initiatives, Moneda Africa is proud to
            support 1952 Africa, which is at the forefront of cultivating a
            dynamic African art ecosystem. By investing in the creative
            potential of African artists, we are driving a renaissance of
            artistic expression and cultural preservation. Through robust
            platforms that offer access to finance, mentorship programs, and
            development opportunities, we empower individual artists to flourish
            and contribute to the economic growth and cultural enrichment of the
            continent.
            <br />
            <br />
            By preserving cultural heritage, we ensure that future generations
            can appreciate and build upon the legacy of African artistic
            brilliance.
          </p>
        </div>
      </div>
    </Section>
  );
}

export default ImpactPage;
