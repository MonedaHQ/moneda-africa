import Image from 'next/image';
import Section from './Section';
import styles from './styles/textandimagesimple.module.css';

import AnimatedLineHorizontal from './AnimatedLineHorizontal';
import WordAnimator from './WordAnimator';

function TextAndImageSimple({
  imageUrl,
  heading = undefined,
  caption = undefined,
  paragraph,
  captionFirst,
}) {
  return (
    <div className={styles.container}>
      {!captionFirst && (
        <>
          <ImageBox imageUrl={imageUrl} heading={heading} />
          <Content heading={heading} caption={caption} paragraph={paragraph} />
        </>
      )}
      {captionFirst && (
        <>
          <Content heading={heading} caption={caption} paragraph={paragraph} />
          <ImageBox imageUrl={imageUrl} heading={heading} />
        </>
      )}
    </div>
  );
}

function Content({ heading, caption, paragraph }) {
  if (!paragraph) return;

  return (
    <div className={styles.content}>
      {heading && (
        <div className={styles.contentHeadings}>
          <WordAnimator text={heading} as="h3" />

          {caption && <p>{caption}</p>}
          <AnimatedLineHorizontal width={100} />
        </div>
      )}
      <p dangerouslySetInnerHTML={{ __html: paragraph }} />
    </div>
  );
}

function ImageBox({ imageUrl, heading }) {
  if (!imageUrl) return;
  return (
    <div className={styles.imageContainer}>
      <Image
        src={imageUrl}
        width={796.97}
        height={484}
        alt={heading ? heading : 'image'}
        draggable={false}
      />
    </div>
  );
}

export default TextAndImageSimple;
