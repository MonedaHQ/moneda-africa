import TextAndImageSection from '@/components/TextAndImageSection';
import styles from './styles/venturescomponents.module.css';

function VenturesComponents({ dataArray }) {
  return (
    <div className={styles.container}>
      {dataArray?.map((venture, index) => (
        <TextAndImageSection
          imageData={venture.imageData}
          heading=""
          paragraph={venture.paragraph}
          contentFirst={index % 2 ? false : true}
          // brown={index % 2}
          logo={venture.logo}
          key={venture.company}
          link={{ link: venture.link, label: venture.company }}
        />
      ))}
    </div>
  );
}

export default VenturesComponents;
