import Image from 'next/image';
import Link from 'next/link';

import PostComments from './PostComments';
import type { PostArticle, PostSummary } from '@/types/posts';
import { formatArticleDate } from '@/utils/posts';

import styles from './styles/post.module.css';

type PostProps = {
  post: PostArticle;
  relatedPosts: PostSummary[];
};

function Article({ post, relatedPosts }: PostProps) {
  return (
    <article className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/news">Insights</Link>
          </nav>

          <div className={styles.heroGrid}>
            <div>
              <div className={styles.meta}>
                <span>{post.category}</span>
                <time dateTime={post.date}>{formatArticleDate(post.date)}</time>
                <span>{post.readingTime} min read</span>
              </div>
              <h1>{post.title}</h1>
            </div>
            <div className={styles.summary}>
              <p>{post.excerpt}</p>
              <div className={styles.byline}>
                <span>Written by</span>
                <strong>{post.author}</strong>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className={styles.featuredWrap}>
        <div className={styles.featuredImage}>
          <Image
            src={post.imgSrc}
            alt={post.imgAlt}
            fill
            priority
            sizes="(max-width: 900px) 90vw, 86vw"
          />
        </div>
      </div>

      <div className={styles.articleGrid}>
        <aside className={styles.articleAside}>
          <p className={styles.asideLabel}>Filed under</p>
          <ul>
            {post.categories.map((category) => (
              <li key={category.slug || category.name}>{category.name}</li>
            ))}
          </ul>
          <div className={styles.asideRule} />
          <p className={styles.updated}>
            Last updated
            <time dateTime={post.modified}>
              {formatArticleDate(post.modified)}
            </time>
          </p>
        </aside>

        <div
          className={styles.body}
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </div>

      {relatedPosts.length > 0 && (
        <section className={styles.related} aria-labelledby="related-heading">
          <div className={styles.relatedHeading}>
            <p>Continue reading</p>
            <h2 id="related-heading">Related perspectives</h2>
          </div>
          <div className={styles.relatedGrid}>
            {relatedPosts.map((relatedPost) => (
              <article key={relatedPost.slug} className={styles.relatedCard}>
                <Link
                  href={`/news/${relatedPost.slug}`}
                  className={styles.relatedImage}
                  aria-label={`Read ${relatedPost.title}`}
                >
                  <Image
                    src={relatedPost.imgSrc}
                    alt={relatedPost.imgAlt}
                    fill
                    sizes="(max-width: 700px) 86vw, 28vw"
                  />
                </Link>
                <div className={styles.relatedMeta}>
                  <span>{relatedPost.category}</span>
                  <time dateTime={relatedPost.date}>
                    {formatArticleDate(relatedPost.date)}
                  </time>
                </div>
                <h3>
                  <Link href={`/news/${relatedPost.slug}`}>
                    {relatedPost.title}
                  </Link>
                </h3>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className={styles.commentsSection} aria-label="Article comments">
        <PostComments slug={post.slug} id={post.id} />
      </section>
    </article>
  );
}

export default Article;
