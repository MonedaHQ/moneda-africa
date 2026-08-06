import * as cheerio from 'cheerio';
import he from 'he';

import type { PostArticle, PostCategory, PostSummary } from '@/types/posts';
export { absoluteUrl, SITE_NAME, SITE_URL } from '@/utils/site';

type WordPressPost = Record<string, any>;

function cleanText(value = '') {
  const $ = cheerio.load(value || '');
  return he.decode($.text()).replace(/\s+/g, ' ').trim();
}

function shorten(value: string, maxLength = 175) {
  if (value.length <= maxLength) return value;

  const shortened = value.slice(0, maxLength + 1);
  const lastSpace = shortened.lastIndexOf(' ');
  return `${shortened.slice(0, lastSpace > 0 ? lastSpace : maxLength).trim()}…`;
}

function getCategories(post: WordPressPost): PostCategory[] {
  const terms = post?._embedded?.['wp:term']?.flat?.() || [];

  return terms
    .filter((term: WordPressPost) => term?.taxonomy === 'category')
    .map((term: WordPressPost) => ({
      id: term.id,
      name: cleanText(term.name),
      slug: term.slug,
    }));
}

function getEditorialFallback(post: WordPressPost, title: string) {
  const subject = `${title} ${cleanText(post?.excerpt?.rendered)} ${cleanText(
    post?.content?.rendered
  ).slice(0, 1200)}`.toLowerCase();

  if (/agricultur|food|farm|fertili|grain|poultry/.test(subject)) {
    return {
      src: '/assets/cornfield-farmer.jpg',
      alt: 'Agricultural production in Africa',
    };
  }

  if (/energy|gas|oil|petrol|refiner|pipeline/.test(subject)) {
    return {
      src: '/assets/power-plant.jpg',
      alt: 'Energy infrastructure in Africa',
    };
  }

  if (/mining|mineral|chrome|ore|copper/.test(subject)) {
    return {
      src: '/assets/mining-equipment.jpg',
      alt: 'Mining and minerals infrastructure in Africa',
    };
  }

  if (/finance|capital|credit|fund|invest|bank/.test(subject)) {
    return {
      src: '/assets/financial-district.jpg',
      alt: 'African finance and investment',
    };
  }

  return {
    src: '/assets/news.jpg',
    alt: title,
  };
}

function getFeaturedImage(post: WordPressPost, title: string) {
  const featured = post?._embedded?.['wp:featuredmedia']?.[0];

  if (!featured?.source_url) return getEditorialFallback(post, title);

  return {
    src:
      featured?.media_details?.sizes?.large?.source_url ||
      featured.source_url,
    alt: cleanText(featured?.alt_text || '') || title,
  };
}

function prepareArticleHtml(value: string, fallbackAlt: string) {
  const $ = cheerio.load(value || '', null, false);

  $('h3').each((_, element) => {
    element.tagName = 'h2';
  });

  $('h4, h5, h6').each((_, element) => {
    element.tagName = 'h3';
  });

  $('h2, h3').each((_, element) => {
    const heading = $(element);

    if (/^source\s*:/i.test(heading.text().trim())) {
      element.tagName = 'p';
      heading.addClass('article-source');
    }
  });

  $('figure').each((_, element) => {
    const figure = $(element);
    const previousParagraph = figure.prev('p');

    if (
      !figure.children('figcaption').length &&
      /^fig(?:ure)?\.?\s*\d+\s*:/i.test(previousParagraph.text().trim())
    ) {
      figure.append(`<figcaption>${previousParagraph.html() || ''}</figcaption>`);
      previousParagraph.remove();
    }
  });

  $('img').each((_, element) => {
    const image = $(element);
    const caption = image.closest('figure').find('figcaption').text().trim();

    if (!image.attr('alt')) image.attr('alt', caption || fallbackAlt);
    if (!image.attr('loading')) image.attr('loading', 'lazy');
    image.attr('decoding', 'async');
  });

  $('a[href^="http"]').attr('rel', 'noopener noreferrer');

  return $.html();
}

export function formatArticleDate(date: string) {
  return new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));
}

export function mapPostSummary(post: WordPressPost): PostSummary {
  const title = cleanText(post?.title?.rendered || 'Untitled');
  const contentHtml = post?.content?.rendered || '';
  const bodyText = cleanText(contentHtml);
  const excerpt = shorten(cleanText(post?.excerpt?.rendered) || bodyText);
  const categories = getCategories(post);
  const image = getFeaturedImage(post, title);

  return {
    id: Number(post?.id || 0),
    slug: String(post?.slug || ''),
    title,
    excerpt,
    date: String(post?.date || ''),
    modified: String(post?.modified || post?.date || ''),
    category: categories[0]?.name || 'Insights',
    categories,
    imgSrc: image.src,
    imgAlt: image.alt,
    readingTime: Math.max(1, Math.ceil(bodyText.split(/\s+/).length / 225)),
  };
}

export function mapPostArticle(post: WordPressPost): PostArticle {
  const summary = mapPostSummary(post);
  const embeddedAuthor = post?._embedded?.author?.[0];
  const authorName = cleanText(embeddedAuthor?.name);
  const hasEditorialByline = authorName && !/^(admin|moneda)$/i.test(authorName);

  return {
    ...summary,
    contentHtml: prepareArticleHtml(post?.content?.rendered || '', summary.title),
    author: hasEditorialByline ? authorName : 'Moneda Intelligence',
    authorUrl: hasEditorialByline ? embeddedAuthor?.link || null : null,
  };
}
