import Section from '@/components/Section';
import styles from './styles/post.module.css';
import PostComments from './PostComments';

import he from 'he';
import { useEffect, useState } from 'react';

function Post({ post }) {
  if (!post) return;
  return (
    <main className={styles.main}>
      <Title title={post.title} date={post.date} excerpt={post.excerpt} />
      <Body body={post.body} />
      <PostComments slug={post.slug} id={post.id} />
    </main>
  );
}

function Title({ title, date, excerpt }) {
  const decodedTitle = he.decode(title);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header className={styles.header}>
      <p className={styles.authorDate}>
        Moneda Intelligence - {new Date(date).toDateString()}
      </p>
      <h1 className={styles.postTitle}>{decodedTitle}</h1>

      {isClient && excerpt?.__html && (
        <p
          dangerouslySetInnerHTML={{ __html: excerpt.__html }}
          className={styles.excerpt}
        />
      )}
    </header>
  );
}
function Body({ body }) {
  const decodedBody = he.decode(body['__html']);
  return (
    <article
      dangerouslySetInnerHTML={{ __html: decodedBody }}
      className={styles.body}
    />
  );
}

export default Post;
