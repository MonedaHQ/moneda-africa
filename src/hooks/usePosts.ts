import { getAllPosts } from '@/services/apiPosts';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

type Post = {
  title: { rendered: string };
  slug: string;
  excerpt: { rendered: string };
  date: string;
  content: { rendered: string };
  categories?: number[];
  featured_media?: number;
  [key: string]: unknown;
};

export function usePosts() {
  const router = useRouter();

  const pageParam = router.query.page;
  const page = typeof pageParam === 'string' ? Number(pageParam) || 1 : 1;

  const { isLoading, data, error } = useQuery({
    queryKey: ['posts', page],
    queryFn: () => getAllPosts({ page }),
    staleTime: 0,
    gcTime: 0,
  });

  const { totalPosts, posts } = (data as { totalPosts: number; posts: Post[] }) || { totalPosts: 0, posts: [] as Post[] };

  return { isLoading, posts, totalPosts, error };
}
