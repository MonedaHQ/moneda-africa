import AnimatedLine from './AnimatedLine';
import ArrowDownIcon from './lottieFiles/ArrowDownIcon';
import styles from './styles/lineandcontent.module.css';
import WordAnimator from './WordAnimator';

function LineAndContent({
  content,
  textColor = 'black',
  scrollDown = true,
  as = 'h2',
}) {
  let { pageTitle, heading, paragraph } = content;

  if (!pageTitle) {
    pageTitle = null;
  }

  return (
    <div className={`${styles.content} ${styles[textColor]}`}>
      {pageTitle && <p className={styles.caption}>{pageTitle}</p>}
      <WordAnimator text={heading} as={as} />
      <div className={styles.paragraphBlock}>
        <AnimatedLine color={textColor} />
        <p
          dangerouslySetInnerHTML={{ __html: paragraph }}
          className={styles.paragraph}
        />
      </div>
      {scrollDown && (
        <div className={`${styles.scrollDown} ${styles[textColor]}`}>
          <ArrowDownIcon />
          <p>Scroll Down</p>
        </div>
      )}
    </div>
  );
}

export default LineAndContent;
