export type PostCategory = {
  id?: number;
  name: string;
  slug?: string;
};

export type PostSummary = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  modified: string;
  category: string;
  categories: PostCategory[];
  imgSrc: string;
  imgAlt: string;
  readingTime: number;
};

export type PostArticle = PostSummary & {
  contentHtml: string;
  author: string;
  authorUrl: string | null;
};

