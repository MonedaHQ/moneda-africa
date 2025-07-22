import Image from 'next/image';
import Section from './Section';
import AnimatedLine from './AnimatedLine';
import WordAnimator from './WordAnimator';

import styles from './styles/textandimagesection.module.css';
import Button from './Button';
import Link from 'next/link';
import Metadata from './Metadata';

function TextAndImageSection({
  imageData,
  imageUrl,
  heading,
  paragraph,
  contentFirst,
  title = null,
  line = true,
  brown = false,
  logo = null,
  link = null,
}) {
  return (
    // <Section>
    <div
      className={`${styles.container} ${brown ? styles.brown : styles.white}`}
    >
      {!contentFirst && (
        <>
          <ImageBox heading={heading} imageData={imageData} />
          <ContentBox
            heading={heading}
            paragraph={paragraph}
            title={title}
            line={line}
            logo={logo}
            lineColor={brown ? 'white' : 'orange'}
            link={link}
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
            link={link}
          />
          <ImageBox heading={heading} imageData={imageData} />
        </>
      )}
    </div>
    // </Section>
  );
}

function ImageBox({ imageData, heading }) {
  const { src, art, metadata } = imageData;

  return (
    <div className={styles.imageContainer}>
      <Image
        src={src}
        width={764}
        height={626}
        alt={heading}
        draggable={false}
      />
      {art && (
        <Metadata
          work={metadata.work}
          workUrl={metadata.workUrl}
          artistName={metadata.artistName}
          artistUrl={metadata.artistUrl}
        />
      )}
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
  link,
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
      {link?.link && (
        <Button
          variant="link-dark"
          href={link.link}
        >{`Visit ${link.label}`}</Button>
      )}
    </div>
  );
}

export default TextAndImageSection;
