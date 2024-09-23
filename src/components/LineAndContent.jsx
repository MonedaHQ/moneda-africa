import AnimatedLine from './AnimatedLine';
import ArrowDownIcon from './lottieFiles/ArrowDownIcon';
import styles from './styles/lineandcontent.module.css';
import WordAnimator from './WordAnimator';

function LineAndContent({
  content,
  textColor = 'orange',
  scrollDown = true,
  as = 'h2',
  whiteText = false,
}) {
  let { pageTitle, heading, paragraph } = content;

  if (!pageTitle) {
    pageTitle = null;
  }

  return (
    <div
      className={`${styles.content} ${whiteText ? styles.white : styles.dark}`}
    >
      {pageTitle && <p className={styles.caption}>{pageTitle}</p>}
      <WordAnimator text={heading} as={as} />
      <div className={styles.paragraphBlock}>
        <AnimatedLine color={textColor} />
        <h4
          dangerouslySetInnerHTML={{ __html: paragraph }}
          className={styles.paragraph}
        />
      </div>
      {/* {scrollDown && (
        <div className={`${styles.scrollDown} ${styles[textColor]}`}>
          <ArrowDownIcon />
          <p>Scroll Down</p>
        </div>
      )} */}
    </div>
  );
}

export default LineAndContent;
