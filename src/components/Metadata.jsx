import styles from './styles/metadata.module.css';

function Metadata({ work, workUrl, artistName, artistUrl }) {
  return (
    <div className={styles.metadata}>
      <div className={styles.metadataContainer}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={workUrl}
          className={styles.metadataLink}
        >
          {work}
        </a>

        <p>by</p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={artistUrl}
          className={styles.metadataLink}
        >
          {artistName}
        </a>
      </div>
    </div>
  );
}

export default Metadata;
