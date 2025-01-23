import { useRouter } from 'next/router';
import { usePosts } from '@/hooks/usePosts';

import Section from '@/components/Section';

import styles from './styles/intelligencereports.module.css';
import Button from '@/components/Button';
import AllPosts from './AllPosts';

function IntelligenceReports() {
  const { isLoading, posts, totalPosts, error } = usePosts();
  return (
    <Section>
      <div className={styles.reportsContainer}>
        <h3>Intelligence Reports</h3>
        {posts.length === 0 ? (
          <NoPosts />
        ) : (
          <AllPosts content={{ posts, totalPosts, isLoading }} />
        )}
      </div>
    </Section>
  );
}

function GoBack() {
  const router = useRouter();
  return (
    <div className={styles.goBack}>
      <Button
        variant="primary"
        onClick={() => router.push('/investor-relations')}
      >
        Back
      </Button>
    </div>
  );
}

function NoPosts() {
  const router = useRouter();
  return (
    <main className={styles.mainEmpty}>
      <div className={styles.empty}>
        <p>There are currently no posts</p>
        <Button variant="primary" onClick={() => router.back()}>
          Go back
        </Button>
      </div>
    </main>
  );
}

export default IntelligenceReports;
