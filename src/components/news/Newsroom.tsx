import { useState } from 'react';
import Image from 'next/image';

import { newsroomEpisodes } from '@/data/newsroom';
import { getEmbedLink, getThumbnailUrl } from '@/utils/helpers';

import styles from './styles/newsroom.module.css';

function Newsroom() {
  const [current, setCurrent] = useState(0);

  if (!newsroomEpisodes.length) return null;

  const watching = newsroomEpisodes.at(current);

  return (
    <section className={styles.section} id="newsroom">
      <div className={styles.inner}>
        <header className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Moneda Newsroom</p>
            <h2>Watch the forces shaping African markets.</h2>
          </div>
          <p>
            Clear, visual explainers on the numbers, policies and industries
            behind the continent&apos;s economic transformation.
          </p>
        </header>

        <NowWatching episode={watching} />
        <WatchList current={current} setCurrent={setCurrent} />
      </div>
    </section>
  );
}

function NowWatching({ episode }) {
  const embedLink = `${getEmbedLink(episode.link)}?rel=0`;

  return (
    <div className={styles.nowWatching}>
      <div className={styles.videoFrame}>
        <iframe
          width="560"
          height="315"
          src={embedLink}
          title={episode.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      <div className={styles.watchingCopy}>
        <span>Now watching</span>
        <h3>{episode.title}</h3>
        <div
          dangerouslySetInnerHTML={{ __html: episode.caption }}
          className={styles.caption}
        />
      </div>
    </div>
  );
}

function WatchList({ current, setCurrent }) {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;
  const currentSlice = newsroomEpisodes.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className={styles.watchList}>
      <div className={styles.watchListHeader}>
        <h3>More from the newsroom</h3>
        <div className={styles.pagination}>
          <button
            type="button"
            onClick={() => setStartIndex((value) => value - itemsPerPage)}
            disabled={startIndex === 0}
            aria-label="Previous videos"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => setStartIndex((value) => value + itemsPerPage)}
            disabled={startIndex + itemsPerPage >= newsroomEpisodes.length}
            aria-label="Next videos"
          >
            →
          </button>
        </div>
      </div>
      <div className={styles.episodeGrid}>
        {currentSlice.map((episode, localIndex) => {
          const episodeIndex = startIndex + localIndex;
          return (
            <PreviewBox
              key={episode.link}
              episode={episode}
              index={episodeIndex}
              active={current === episodeIndex}
              setCurrent={setCurrent}
            />
          );
        })}
      </div>
    </div>
  );
}

function PreviewBox({ episode, index, active, setCurrent }) {
  const thumbnailUrl = getThumbnailUrl(episode.link);

  return (
    <button
      type="button"
      className={`${styles.episodeCard} ${active ? styles.active : ''}`}
      onClick={() => setCurrent(index)}
      aria-pressed={active}
    >
      <span className={styles.thumbnail}>
        {thumbnailUrl && (
          <Image
            src={thumbnailUrl}
            alt=""
            fill
            sizes="(max-width: 700px) 86vw, 28vw"
          />
        )}
        <span className={styles.play} aria-hidden="true">
          ▶
        </span>
      </span>
      <span className={styles.episodeNumber}>
        {String(index + 1).padStart(2, '0')}
      </span>
      <strong>{episode.title}</strong>
    </button>
  );
}

export default Newsroom;
