import Image from 'next/image';
import Section from './Section';
import AnimatedLine from './AnimatedLine';
import WordAnimator from './WordAnimator';

import styles from './styles/textandimagesection.module.css';

function TextAndImageSection({
  imageUrl,
  heading,
  paragraph,
  contentFirst,
  title = null,
  line = true,
  brown = false,
  logo = null,
}) {
  return (
    // <Section>
    <div
      className={`${styles.container} ${brown ? styles.brown : styles.white}`}
    >
      {!contentFirst && (
        <>
          <ImageBox heading={heading} imageUrl={imageUrl} />
          <ContentBox
            heading={heading}
            paragraph={paragraph}
            title={title}
            line={line}
            logo={logo}
            lineColor={brown ? 'white' : 'orange'}
          />
        </>
      )}
      {contentFirst && (
        <>
          <ContentBox
            heading={heading}
            paragraph={paragraph}
            title={title}
            line={line}
            logo={logo}
            lineColor={brown ? 'white' : 'orange'}
          />
          <ImageBox heading={heading} imageUrl={imageUrl} />
        </>
      )}
    </div>
    // </Section>
  );
}

function ImageBox({ imageUrl, heading }) {
  return (
    <div className={styles.imageContainer}>
      <Image
        src={imageUrl}
        width={764}
        height={626}
        alt={heading}
        draggable={false}
      />
    </div>
  );
}

function ContentBox({
  heading,
  paragraph,
  title,
  line,
  logo,
  lineColor = 'orange',
}) {
  return (
    <div className={styles.contentBox}>
      {title && <h4 className={styles.caption}>{title}</h4>}
      {logo && (
        <Image
          src={logo.src}
          alt={logo.alt}
          width={204.82}
          height={42}
          className={styles.logo}
          draggable={false}
        />
      )}
      <WordAnimator text={heading} as="h2" />
      <div className={styles.paragraph}>
        <AnimatedLine
          visible={line}
          // color={lineColor}
        />
        <p dangerouslySetInnerHTML={{ __html: paragraph }} />
      </div>
    </div>
  );
}

export default TextAndImageSection;
