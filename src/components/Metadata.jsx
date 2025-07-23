import styles from './styles/metadata.module.css';

/**
 * @param {Object} props
 * @param {string} props.work - Title of the artwork.
 * @param {string} props.workUrl - URL linking to the artwork.
 * @param {string} props.artistName - Name of the artist.
 * @param {string} props.artistUrl - URL linking to the artist's profile.
 */

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
