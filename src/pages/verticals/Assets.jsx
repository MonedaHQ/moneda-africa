import Section from '@/components/Section';
import styles from './styles/assets.module.css';
import TextAndImageSection from '@/components/TextAndImageSection';
import GetInTouch from '@/components/GetInTouch';
import Quote from '@/components/Quote';

function Assets() {
  const sectionOne = {
    imageUrl: '/assets/power-plant.jpg',
    title: '',
    heading: 'Assets',
    paragraph:
      '<strong>As a leading investment firm, Moneda Africa is committed to identifying and capitalizing on high-potential assets within the energy, mining and commodities sector.</strong> <br/> <br/> Our deep understanding of the market enables us to: <ul><li> Identify promising investment opportunities</li><li> Evaluate asset potential and risks</li><li>Optimize asset performance for maximum returns</li></ul> With our expertise in finance , trading and risk management, we are well-equipped to navigate the dynamic market landscape and secure profitable investments.',
    contentFirst: true,
  };

  const sectionTwo = {
    imageUrl: '/assets/assets-field.jpg',
    title: '',
    heading: 'Our Assets Investment Include',
    paragraph:
      '<ul><li>Dredging and Logistics</li><li>Warehousing and Storage</li><li>Renewable Assests</li></ul>',
    contentFirst: false,
  };
  return (
    <>
      <Section>
        <TextAndImageSection
          imageUrl={sectionOne.imageUrl}
          heading={sectionOne.heading}
          paragraph={sectionOne.paragraph}
          contentFirst={sectionOne.contentFirst}
          title={sectionOne.title}
        />
      </Section>
      <TextAndImageSection
        imageUrl={sectionTwo.imageUrl}
        heading={sectionTwo.heading}
        paragraph={sectionTwo.paragraph}
        contentFirst={sectionTwo.contentFirst}
        title={sectionTwo.title}
        brown={true}
        line={false}
      />
      <Quote />
      <GetInTouch venture="Assets Investment Strategy" />
    </>
  );
}

export default Assets;
