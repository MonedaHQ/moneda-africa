import Section from '@/components/Section';

import { newsroomEpisodes } from '@/data/newsroom';

import styles from './styles/newsinsights.module.css';
import AnimatedLineHorizontal from '@/components/AnimatedLineHorizontal';
import { getEmbedLink, getImage, truncateString } from '@/utils/helpers';
import LearnMoreButton from '@/components/LearnMoreButton';
import { useEffect, useState } from 'react';
import { usePosts } from '@/hooks/usePosts';
import { PiChatCircleDotsFill } from 'react-icons/pi';
import Button from '@/components/Button';
import Image from 'next/image';
import Loader from '@/components/Loader';

function NewsInsights() {
  return (
    <Section paddingTop={false}>
      <main className={styles.main}>
        <h3>Latest News/Insights</h3>
        <div className={styles.container}>
          <NewsroomComponent />
          <IntelligenceReports />
        </div>
      </main>
    </Section>
  );
}

function TitleComponent({ heading, color = 'orange' }) {
  return (
    <div className={styles.title}>
      <h5 className={`${styles.heading} ${styles[color]}`}>{heading}</h5>
      <AnimatedLineHorizontal color="black" opacity={0.3} duration={1.4} />
    </div>
  );
}

function NewsroomComponent() {
  if (!newsroomEpisodes.length) return;

  const watching = newsroomEpisodes.at(0);

  return (
    <div className={styles.newsroomComponent}>
      <TitleComponent heading="Newsroom" />
      <NowWatching episode={watching} />
    </div>
  );
}

function IntelligenceReports() {
  return (
    <div className={styles.container}>
      <TitleComponent heading="Reports & Press" color="brown" />
      <Reports />
    </div>
  );
}

function Reports() {
  const { isLoading, posts: truncatedPosts } = usePosts();

  if (isLoading) return <Loader />;

  const splicedPosts = truncatedPosts.slice(0, 4);

  const posts = splicedPosts.map((post) => {
    return {
      title: post.title.rendered,
      slug: post.slug,
      excerpt: { __html: post.excerpt.rendered },
      date: post.date,
      imgSrc: getImage(post.content.rendered),
    };
  });

  return (
    <div className={styles.reportsContainer}>
      {!posts.length && (
        <p style={{ opacity: 0.6 }}>
          There are no reports to display at this time.
        </p>
      )}
      <div className={styles.reports}>
        {posts.map((post, index) => (
          <Post post={post} key={post.slug} index={index} />
        ))}
      </div>
      <div className={styles.buttonContainer}>
        {posts.length ? (
          <Button variant="secondary" href="/news">
            Read more
          </Button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

function Post({ post, index }) {
  const title = truncateString(post.title, 4);
  return (
    <div className={styles.post}>
      <div className={styles.postImg}>
        <Image
          width={475}
          height={270}
          alt={post.title}
          src={post.imgSrc}
          draggable={false}
        />
      </div>
      <div className={styles.content}>
        <h5 dangerouslySetInnerHTML={{ __html: title }} />
        <div className={styles.readmore}>
          <AnimatedLineHorizontal
            index={index}
            opacity={0.2}
            duration={1}
            color="black"
          />
          <LearnMoreButton
            buttonLabel="Read report"
            buttonLink={`/news/${post.slug}`}
          />
        </div>
      </div>
    </div>
  );
}

function NowWatching({ episode }) {
  const embedLink = `${getEmbedLink(episode.link)}?rel=0`;
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => setHasMounted(true), []);

  return (
    <div className={styles.nowWatching}>
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
      </div>
      <div className={styles.watchingDescription}>
        <div className={styles.description}>
          <h5>{episode.title}</h5>
          {hasMounted && (
            <p
              dangerouslySetInnerHTML={{ __html: episode.caption }}
              className={styles.caption}
            />
          )}
        </div>
        <LearnMoreButton buttonLabel="Watch more episodes" buttonLink="/news" />
      </div>
    </div>
  );
}

export default NewsInsights;
