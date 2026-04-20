import { useState } from 'react';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import { newsroomEpisodes } from '@/data/newsroom';

import { getEmbedLink, getThumbnailUrl } from '@/utils/helpers';

import Section from '@/components/Section';
import Button from '@/components/Button';

import styles from './styles/newsroom.module.css';
import Image from 'next/image';

function Newsroom() {
  const [current, setCurrent] = useState(0);

  if (!newsroomEpisodes.length) return <NoEpisodes />;

  const watching = newsroomEpisodes.at(current);

  return (
    <Section>
      <div className={styles.container}>
        <NowWatching episode={watching} />
        <WatchList setCurrent={setCurrent} />
      </div>
    </Section>
  );
}

function NowWatching({ episode }) {
  const embedLink = `${getEmbedLink(episode.link)}?rel=0`;

  return (
    <div className={styles.nowWatching}>
      <h3>{episode.title}</h3>
      <div className={styles.watchingContainer}>
        <iframe
          width="560"
          height="315"
          src={embedLink}
          title={episode.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className={styles.iFrame}
        />
        <div
          dangerouslySetInnerHTML={{ __html: episode.caption }}
          className={styles.caption}
        />
      </div>
    </div>
  );
}

function WatchList({ setCurrent }) {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  const handleNext = () => setStartIndex((prev) => prev + itemsPerPage);
  const handlePrev = () => setStartIndex((prev) => prev - itemsPerPage);

  const allEpisodes = newsroomEpisodes.map((episode, index) => ({
    ...episode,
    index,
  }));

  const currentSlice = allEpisodes.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className={styles.watchList}>
      <h5>Explore Newsroom Episodes</h5>
      <div className={styles.episodeGrid}>
        {currentSlice.map((episode) => (
          <PreviewBox
            key={episode.index}
            episode={episode}
            setCurrent={setCurrent}
          />
        ))}
      </div>
      <div className={styles.pagination}>
        <Button
          variant="secondary"
          onClick={handlePrev}
          disabled={startIndex === 0}
        >
          Previous
        </Button>

        <Button
          variant="secondary"
          onClick={handleNext}
          disabled={startIndex + itemsPerPage >= allEpisodes.length}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

function PreviewBox({ episode, setCurrent }) {
  const thumbnailUrl = getThumbnailUrl(episode.link);

  const getShortenedTitle = (title) => {
    const words = title.split(' ');
    return words.length > 5 ? words.slice(0, 5).join(' ') + '...' : title;
  };

  return (
    <div
      className={styles.episodeCard}
      onClick={() => setCurrent(episode.index)}
    >
      {thumbnailUrl && (
        <Image
          src={thumbnailUrl}
          alt={`Thumbnail for ${episode.title}`}
          className={styles.thumbnail}
          width={300}
          height={300}
        />
      )}
      <h4>{getShortenedTitle(episode.title)}</h4>
    </div>
  );
}

function NoEpisodes() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  const containerVariant = {
    inital: { scale: 0 },
    animate: { scale: 1 },
  };

  return (
    <Section>
      <motion.div
        className={styles.noEpisodesContainer}
        ref={ref}
        variants={containerVariant}
        initial="inital"
        animate={inView ? 'animate' : 'initial'}
      >
        <div className={styles.noEpisodes}>
          <p>There are no episodes to display yet</p>
        </div>
      </motion.div>
    </Section>
  );
}

export default Newsroom;
