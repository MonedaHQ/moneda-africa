import Section from '@/components/Section';
import styles from './styles/ourfounder.module.css';
import TextAndImageSimple from '@/components/TextAndImageSimple';

function OurFounder() {
  const bio = {
    heading: 'Ejike Egbuagu',
    caption: 'Group Chief Executive',
    paragraph:
      "Ejike Egbuagu is the CEO of Moneda Invest Africa, a leading investment firm in Africa. Born in Lagos, Nigeria, Ejike developed a passion for finance early on, influenced by the late Herbert Wigwe of Access Holdings. <br/> <br/> He earned a Bachelor's degree in Law and Business Administration from the University of Kent and later completed an MBA at Geneva Business School and Harvard Business School into lasting wealth.",
    imageUrl: '/assets/ejike-2.jpg',
  };

  const bio2 = {
    paragraph:
      "Ejike started his career at Access Bank PLC, where his innovative approach quickly propelled him into leadership roles. <br/> <br/>In 2016, he founded Moneda Invest Africa in response to Africa's financial challenges, focusing on sustainable investments that drive economic growth across the continent. <br/> <br/>Under his leadership, the firm has become known for its innovative investment strategies and commitment to transforming Africa's resources into lasting wealth.",
    imageUrl: '/assets/ejike-1.jpg',
  };
  return (
    <Section>
      <h2 className={styles.heading}>Our Founder</h2>
      <div className={styles.container}>
        <TextAndImageSimple
          imageUrl={bio.imageUrl}
          heading={bio.heading}
          caption={bio.caption}
          paragraph={bio.paragraph}
          captionFirst={false}
        />
        <TextAndImageSimple
          imageUrl={bio2.imageUrl}
          paragraph={bio2.paragraph}
          captionFirst={true}
        />
      </div>
    </Section>
  );
}

export default OurFounder;
