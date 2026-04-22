import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';
import { useEffect } from 'react';

import { getImage } from '@/utils/helpers';
import { scrollOffset } from '@/utils/config';

import Navigation from '@/components/mainNav/Navigation';
import Loader from '@/components/Loader';
import MetaTags from '@/components/head';
import Footer from '@/components/Footer';
import MobileNavigationHeader from '@/components/mobileNav/MobileNavigationHeader';
import useScrollPosition from '@/hooks/useScrollPostion';
import Post from './Post';
import Reading from './Reading';

type BlogPostProps = InferGetServerSidePropsType<typeof getServerSideProps>;

function BlogPost({ post }: BlogPostProps) {
  const scrollPosition = useScrollPosition(scrollOffset);

  useEffect(() => {
    if (!post || typeof window === 'undefined' || !window.clarity) return;
    window.clarity('set', 'page_type', 'news_article');
    window.clarity('set', 'article_slug', post.slug);
  }, [post]);

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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const url = process.env.NEXT_PUBLIC_APP_BLOG_API_URL;
  const { slug } = context.params as { slug: string };

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

  const categories: unknown[] =
    selectedPost._embedded?.['wp:term']
      ?.flat()
      .filter((term: { taxonomy: string }) => term.taxonomy === 'category') ||
    [];

  const post = {
    id: selectedPost?.id as number,
    title: selectedPost?.title.rendered as string,
    body: { __html: selectedPost?.content.rendered as string },
    date: selectedPost?.date as string,
    modified: selectedPost?.modified as string,
    excerpt: { __html: selectedPost?.excerpt.rendered as string },
    imgSrc: getImage(selectedPost?.content.rendered) as string | null,
    slug: selectedPost?.slug as string,
    categories,
  };

  return {
    props: {
      post,
    },
  };
}

export default BlogPost;
