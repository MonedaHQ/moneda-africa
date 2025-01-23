import { useRouter } from 'next/router';

import { getImage } from '@/utils/helpers';
import { usePost } from '@/hooks/usePost';
import { scrollOffset } from '@/utils/config';

import Navigation from '@/components/mainNav/Navigation';
import Loader from '@/components/Loader';
import MetaTags from '@/components/head';
import Post from './Post';
import Footer from '@/components/Footer';
import MobileNavigationHeader from '@/components/mobileNav/MobileNavigationHeader';
import useScrollPosition from '@/hooks/useScrollPostion';
import Reading from './Reading';

function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const scrollPosition = useScrollPosition(scrollOffset);

  const { isLoading, post: postArray } = usePost(slug);

  if (isLoading) return <Loader fullScreen={true} />;

  if (postArray.length === 0) {
    router.push('/news');
  }

  const selectedPost = postArray.at(0);

  if (!selectedPost) return;

  const post = {
    id: selectedPost?.id,
    title: selectedPost?.title.rendered,
    body: { __html: selectedPost?.content.rendered },
    date: selectedPost?.date,
    modified: selectedPost?.modified,
    excerpt: { __html: selectedPost?.excerpt.rendered },
    imgSrc: getImage(selectedPost?.content.rendered),
    slug: selectedPost.slug,
  };

  console.log(post);

  return (
    <>
      <MetaTags
        title={`${post.title} - Moneda Investment Limited`}
        description={`${post.excerpt.__html}`}
      />
      <Navigation darkHero={false} />
      <MobileNavigationHeader />
      <Reading title={post.title} scrollPosition={scrollPosition} />
      <Post post={post} />
      <Footer />
    </>
  );
}

export default BlogPost;
