import Image from 'next/image';
import Section from './Section';
import AnimatedLine from './AnimatedLine';
import WordAnimator from './WordAnimator';

import styles from './styles/textandimagesection.module.css';
import Button from './Button';
import Link from 'next/link';
import Metadata from './Metadata';
import LearnMoreButton from './LearnMoreButton';

/**
 * TextAndImageSection Component
 *
 * A flexible section component that displays a combination of text and image,
 * with options for layout direction, colors, buttons, and metadata.
 *
 * Props:
 * @param {Object} imageData - Required. Contains image source, alt metadata, and optional artist info.
 *   @param {string} imageData.src - Image source path.
 *   @param {boolean} [imageData.art] - Whether the image has artwork metadata.
 *   @param {Object} [imageData.metadata] - Metadata for the artwork.
 *     @param {string} metadata.work - Title of the work.
 *     @param {string} metadata.workUrl - URL to the work.
 *     @param {string} metadata.artistName - Name of the artist.
 *     @param {string} metadata.artistUrl - URL to the artist.
 *
 * @param {string} heading - Required. Main heading text for the section.
 *
 * @param {string} paragraph - Required. Rich HTML string for the paragraph content.
 *
 * @param {boolean} [contentFirst=false] - Optional. If true, content appears before the image.
 *
 * @param {string|null} [title=null] - Optional. Caption text shown above the heading.
 *
 * @param {boolean} [line=true] - Optional. Whether to display an animated line before the paragraph.
 *
 * @param {boolean} [brown=false] - Optional. Applies a brown-themed background if true; default is white.
 *
 * @param {Object|null} [logo=null] - Optional. Logo image to display above the heading.
 *   @param {string} logo.src - Source path of the logo image.
 *   @param {string} logo.alt - Alt text for the logo.
 *
 * @param {Object|null} [link=null] - Optional. Adds a secondary link below the main content.
 *   @param {string} link.link - The href for the link.
 *   @param {string} link.label - Text label to display for the link.
 *
 * @param {Object} [buttonData] - Optional. Contains data for a Learn More button.
 *   @param {string} buttonData.label - Text label for the button.
 *   @param {string} buttonData.link - Href for the button.
 */

function TextAndImageSection({
  imageData,
  heading,
  paragraph,
  contentFirst,
  title = null,
  line = true,
  brown = false,
  logo = null,
  link = null,
  buttonData = undefined,
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
            buttonData={buttonData ? buttonData : ''}
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
            buttonData={buttonData ? buttonData : ''}
          />

          <ImageBox heading={heading} imageData={imageData} />
        </>
      )}
    </div>
    // </Section>
  );
}

function ImageBox({ imageData, heading }) {
  if (!imageData || !imageData.src) return;
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
  buttonData = undefined,
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
      {buttonData ? (
        <LearnMoreButton
          buttonLabel={buttonData.label}
          buttonLink={buttonData.link}
        />
      ) : (
        ''
      )}
      {link?.link && (
        <LearnMoreButton
          buttonLabel={`Visit ${link.label}`}
          buttonLink={link.link}
        />
      )}
    </div>
  );
}

export default TextAndImageSection;
