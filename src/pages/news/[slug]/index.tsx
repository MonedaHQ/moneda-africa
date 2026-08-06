import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import { useEffect } from 'react';

import Navigation from '@/components/mainNav/Navigation';
import MetaTags from '@/components/head';
import Footer from '@/components/Footer';
import MobileNavigationHeader from '@/components/mobileNav/MobileNavigationHeader';
import { getRelatedPosts, getSinglePost } from '@/services/apiPosts';
import { mapPostArticle, mapPostSummary } from '@/utils/posts';
import { absoluteUrl, SITE_NAME, SITE_URL } from '@/utils/site';
import type { PostArticle, PostSummary } from '@/types/posts';

import Article from '@/components/news/Article';

type BlogPostProps = {
  post: PostArticle;
  relatedPosts: PostSummary[];
};

function BlogPost({
  post,
  relatedPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  useEffect(() => {
    if (!post || typeof window === 'undefined' || !window.clarity) return;
    window.clarity('set', 'page_type', 'news_article');
    window.clarity('set', 'article_slug', post.slug);
  }, [post]);

  const canonicalPath = `/news/${post.slug}`;
  const canonicalUrl = absoluteUrl(canonicalPath);
  const title = `${post.title} | Moneda Africa`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${canonicalUrl}#article`,
        headline: post.title,
        description: post.excerpt,
        image: [absoluteUrl(post.imgSrc)],
        datePublished: post.date,
        dateModified: post.modified,
        author: {
          '@type': 'Organization',
          name: post.author,
          url: post.authorUrl || SITE_URL,
        },
        publisher: {
          '@type': 'Organization',
          name: SITE_NAME,
          url: SITE_URL,
          logo: {
            '@type': 'ImageObject',
            url: absoluteUrl('/apple-touch-icon.png'),
          },
        },
        mainEntityOfPage: canonicalUrl,
        articleSection: post.category,
        inLanguage: 'en',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Insights',
            item: absoluteUrl('/news'),
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: post.title,
            item: canonicalUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <MetaTags
        title={title}
        description={post.excerpt}
        canonical={canonicalPath}
        image={post.imgSrc}
        imageAlt={post.imgAlt}
        type="article"
        article={{
          publishedTime: post.date,
          modifiedTime: post.modified,
          section: post.category,
        }}
        jsonLd={structuredData}
      />
      <Navigation darkHero={false} />
      <MobileNavigationHeader />
      <Article post={post} relatedPosts={relatedPosts} />
      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: 'blocking',
});

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({ params }) => {
  const slug = String(params?.slug || '');
  const posts = await getSinglePost(slug);

  if (!posts.length) {
    return { notFound: true, revalidate: 60 };
  }

  const post = mapPostArticle(posts[0]);
  const related = await getRelatedPosts(post.id, 3);

  return {
    props: {
      post,
      relatedPosts: related.map(mapPostSummary),
    },
    revalidate: 900,
  };
};

export default BlogPost;
