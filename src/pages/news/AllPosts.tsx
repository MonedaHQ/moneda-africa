import { useRouter } from 'next/router';

import { getImage, truncateString } from '@/utils/helpers';

import { useAllComments } from '@/hooks/useAllComments';

import { PiChatCircleDotsFill } from 'react-icons/pi';

import Pagination from '@/components/Pagination';
import Image from 'next/image';
import Loader from '@/components/Loader';

import Button from '@/components/Button';

import styles from './styles/allPosts.module.css';

function AllPosts({ content }) {
  if (!content) return <Loader />;

  const { posts: unformattedPosts, totalPosts, isLoading } = content;

  const posts = unformattedPosts.map((post) => {
    return {
      title: post.title.rendered,
      slug: post.slug,
      excerpt: { __html: post.excerpt.rendered },
      date: post.date,
      imgSrc: getImage(post.content.rendered),
    };
  });

  return (
    <div className={styles.postsContainer}>
      <div className={styles.posts}>
        {posts.map((post, index) => (
          <Posts post={post} key={post.slug} />
        ))}
      </div>
      <Pagination count={totalPosts} />
    </div>
  );
}

function Posts({ post }) {
  const router = useRouter();

  const { isLoading, comments } = useAllComments(post.slug);

  if (isLoading) return <Loader />;

  const numComments = comments.length;
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
        <h6 dangerouslySetInnerHTML={{ __html: title }} />
        <div className={styles.numComments}>
          <PiChatCircleDotsFill />{' '}
          <p>
            {numComments} Comment{numComments === 1 ? '' : 's'}
          </p>
        </div>

        <Button
          variant="secondary"
          onClick={() => router.push(`/news/${post.slug}`)}
        >
          Read
        </Button>
      </div>
    </div>
  );
}
export default AllPosts;
