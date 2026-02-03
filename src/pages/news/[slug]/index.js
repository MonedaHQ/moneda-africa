import { getImage } from '@/utils/helpers';
import { scrollOffset } from '@/utils/config';

import Navigation from '@/components/mainNav/Navigation';
import Loader from '@/components/Loader';
import MetaTags from '@/components/head';
import Post from './Post';
import Footer from '@/components/Footer';
import MobileNavigationHeader from '@/components/mobileNav/MobileNavigationHeader';
import useScrollPosition from '@/hooks/useScrollPostion';
import Reading from './Reading';

function BlogPost({ post }) {
  const scrollPosition = useScrollPosition(scrollOffset);

  if (!post) return <Loader fullScreen={true} />;

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

export async function getServerSideProps(context) {
  const url = process.env.NEXT_PUBLIC_APP_BLOG_API_URL;
  const { slug } = context.params;

  const res = await fetch(`${url}/posts?slug=${slug}&_embed`);
  const data = await res.json();

  if (!data || data.length === 0) {
    return {
      redirect: {
        destination: '/news',
        permanent: false,
      },
    };
  }

  const selectedPost = data[0];

  const categories =
    selectedPost._embedded?.['wp:term']
      ?.flat()
      .filter((term) => term.taxonomy === 'category') || [];

  const post = {
    id: selectedPost?.id,
    title: selectedPost?.title.rendered,
    body: { __html: selectedPost?.content.rendered },
    date: selectedPost?.date,
    modified: selectedPost?.modified,
    excerpt: { __html: selectedPost?.excerpt.rendered },
    imgSrc: getImage(selectedPost?.content.rendered),
    slug: selectedPost?.slug,
    categories,
  };

  return {
    props: {
      post,
    },
  };
}

export default BlogPost;
