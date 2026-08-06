import type { GetServerSideProps } from 'next';

import { getPosts } from '@/services/apiPosts';
import { mapPostSummary } from '@/utils/posts';
import { absoluteUrl } from '@/utils/site';

const staticRoutes = [
  '/',
  '/about-us',
  '/verticals',
  '/capital',
  '/ventures',
  '/our-impact',
  '/our-people',
  '/news',
  '/contact',
  '/privacy-policy',
  '/terms-of-use',
  '/sitemap',
];

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function buildSitemap(posts: ReturnType<typeof mapPostSummary>[]) {
  const staticEntries = staticRoutes
    .map((route) => `<url><loc>${escapeXml(absoluteUrl(route))}</loc></url>`)
    .join('');

  const articleEntries = posts
    .map(
      (post) =>
        `<url><loc>${escapeXml(absoluteUrl(`/news/${post.slug}`))}</loc>` +
        `<lastmod>${new Date(post.modified).toISOString()}</lastmod>` +
        `<image:image><image:loc>${escapeXml(
          absoluteUrl(post.imgSrc)
        )}</image:loc><image:title>${escapeXml(post.imgAlt)}</image:title></image:image>` +
        `</url>`
    )
    .join('');

  return (
    '<?xml version="1.0" encoding="UTF-8"?>' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" ' +
    'xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">' +
    staticEntries +
    articleEntries +
    '</urlset>'
  );
}

function SitemapXml() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const { posts } = await getPosts();
  const sitemap = buildSitemap(posts.map(mapPostSummary));

  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=3600, stale-while-revalidate=86400'
  );
  res.write(sitemap);
  res.end();

  return { props: {} };
};

export default SitemapXml;
