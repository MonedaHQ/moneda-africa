import Link from 'next/link';

import AllPosts from './AllPosts';
import type { PostSummary } from '@/types/posts';

import styles from './styles/newsgrid.module.css';

type NewsGridProps = {
  posts: PostSummary[];
  totalPosts: number;
  currentPage: number;
};

function NewsGrid({ posts, totalPosts, currentPage }: NewsGridProps) {
  return (
    <section className={styles.section} id="stories" aria-label="All insights">
      <div className={styles.inner}>
        {posts.length ? (
          <AllPosts
            posts={posts}
            totalPosts={totalPosts}
            currentPage={currentPage}
          />
        ) : (
          <div className={styles.empty}>
            <p>There are currently no published insights.</p>
            <Link href="/">Return home</Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default NewsGrid;
