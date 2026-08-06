import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import MetaTags from '@/components/head';
import Navigation from '@/components/mainNav/Navigation';
import MobileNavigationHeader from '@/components/mobileNav/MobileNavigationHeader';
import Footer from '@/components/Footer';
import { getAllPosts } from '@/services/apiPosts';
import { mapPostSummary } from '@/utils/posts';
import type { PostSummary } from '@/types/posts';
import { PAGE_SIZE } from '@/utils/config';

import Newsletter from '@/components/news/Newsletter';
import Newsroom from '@/components/news/Newsroom';
import NewsGrid from '@/components/news/NewsGrid';
import NewsHero from '@/components/news/NewsHero';

type NewsPageProps = {
  posts: PostSummary[];
  featuredPost: PostSummary | null;
  totalPosts: number;
  currentPage: number;
};

function NewsHome({
  posts,
  featuredPost,
  totalPosts,
  currentPage,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const pageTitle =
    currentPage > 1
      ? `Insights & Intelligence — Page ${currentPage} | Moneda Africa`
      : 'Insights & Intelligence | Moneda Africa';
  const canonical = currentPage > 1 ? `/news?page=${currentPage}` : '/news';

  return (
    <>
      <MetaTags
        title={pageTitle}
        description="Research, market intelligence and perspectives on African credit, energy, agriculture, mining and the real economy from Moneda Invest Africa."
        canonical={canonical}
        image={featuredPost?.imgSrc || '/assets/news.jpg'}
        imageAlt={featuredPost?.imgAlt || 'Moneda Africa insights'}
      />
      <Navigation />
      <MobileNavigationHeader />
      <NewsHero featuredPost={featuredPost || undefined} />
      <NewsGrid
        posts={posts}
        totalPosts={totalPosts}
        currentPage={currentPage}
      />
      <Newsroom />
      <Newsletter />
      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<NewsPageProps> = async ({
  query,
  res,
}) => {
  const requestedPage = Array.isArray(query.page) ? query.page[0] : query.page;
  const currentPage = Math.max(1, Number(requestedPage) || 1);
  const latestResult = await getAllPosts({ page: 1 });
  const { totalPosts } = latestResult;
  const pageCount = Math.max(1, Math.ceil(totalPosts / PAGE_SIZE));

  if (currentPage > pageCount) {
    return { notFound: true };
  }

  const pageResult =
    currentPage === 1
      ? latestResult
      : await getAllPosts({ page: currentPage });

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=600, stale-while-revalidate=86400'
  );

  return {
    props: {
      posts: pageResult.posts.map(mapPostSummary),
      featuredPost: latestResult.posts[0]
        ? mapPostSummary(latestResult.posts[0])
        : null,
      totalPosts,
      currentPage,
    },
  };
};

export default NewsHome;
