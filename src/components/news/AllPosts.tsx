import Image from 'next/image';
import Link from 'next/link';

import Pagination from '@/components/Pagination';
import type { PostSummary } from '@/types/posts';
import { formatArticleDate } from '@/utils/posts';

import styles from './styles/allPosts.module.css';

type AllPostsProps = {
  posts: PostSummary[];
  totalPosts: number;
  currentPage: number;
};

function AllPosts({ posts, totalPosts, currentPage }: AllPostsProps) {
  return (
    <div className={styles.postsContainer}>
      <div className={styles.posts}>
        {posts.map((post) => (
          <article className={styles.post} key={post.slug}>
            <Link
              href={`/news/${post.slug}`}
              className={styles.postImg}
              aria-label={`Read ${post.title}`}
            >
              <Image
                fill
                alt={post.imgAlt}
                src={post.imgSrc}
                sizes="(max-width: 700px) 86vw, (max-width: 1100px) 42vw, 28vw"
              />
            </Link>

            <div className={styles.content}>
              <div className={styles.meta}>
                <span>{post.category}</span>
                <time dateTime={post.date}>{formatArticleDate(post.date)}</time>
              </div>
              <h3>
                <Link href={`/news/${post.slug}`}>{post.title}</Link>
              </h3>
              <p>{post.excerpt}</p>
              <div className={styles.cardFooter}>
                <span>{post.readingTime} min read</span>
                <Link href={`/news/${post.slug}`}>
                  Read insight <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
      <Pagination count={totalPosts} currentPage={currentPage} />
    </div>
  );
}

export default AllPosts;
