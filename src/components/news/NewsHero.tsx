import Image from 'next/image';
import Link from 'next/link';

import type { PostSummary } from '@/types/posts';
import { formatArticleDate } from '@/utils/posts';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

import styles from './styles/newshero.module.css';

type NewsHeroProps = {
  featuredPost?: PostSummary;
};

function NewsHero({ featuredPost }: NewsHeroProps) {
  const scrollTo = useSmoothScroll(80);

  return (
    <section className={styles.hero} aria-labelledby="news-heading">
      <div className={styles.texture} aria-hidden="true" />
      <div className={styles.grid}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Moneda Intelligence</p>
          <h1 id="news-heading">
            Perspective for Africa&apos;s <em>real economy.</em>
          </h1>
          <p className={styles.lede}>
            Original thinking, market signals and practical intelligence across
            the value chains shaping Africa&apos;s next chapter.
          </p>
          <div className={styles.heroLinks}>
            <Link
              href="#stories"
              className={styles.primaryLink}
              onClick={(event) => {
                event.preventDefault();
                scrollTo('stories');
              }}
            >
              Browse all stories <span aria-hidden="true">↘</span>
            </Link>
            <Link
              href="#newsroom"
              className={styles.secondaryLink}
              onClick={(event) => {
                event.preventDefault();
                scrollTo('newsroom');
              }}
            >
              Watch the newsroom
            </Link>
          </div>
        </div>

        {featuredPost && (
          <article className={styles.featured}>
            <Link
              href={`/news/${featuredPost.slug}`}
              className={styles.featuredImage}
              aria-label={`Read ${featuredPost.title}`}
            >
              <Image
                src={featuredPost.imgSrc}
                alt={featuredPost.imgAlt}
                fill
                priority
                sizes="(max-width: 900px) 86vw, 42vw"
              />
            </Link>
            <div className={styles.featuredContent}>
              <div className={styles.meta}>
                <span>{featuredPost.category}</span>
                <time dateTime={featuredPost.date}>
                  {formatArticleDate(featuredPost.date)}
                </time>
              </div>
              <h2>
                <Link href={`/news/${featuredPost.slug}`}>
                  {featuredPost.title}
                </Link>
              </h2>
              <Link
                href={`/news/${featuredPost.slug}`}
                className={styles.readLink}
              >
                Read the latest <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        )}
      </div>
    </section>
  );
}

export default NewsHero;
