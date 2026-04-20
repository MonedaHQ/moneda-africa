import { getSinglePost } from '@/services/apiPosts';
import { useQuery } from '@tanstack/react-query';

type Post = Record<string, unknown>;

export function usePost(slug?: string) {
  const {
    isLoading,
    data: post,
    error,
  } = useQuery({
    queryKey: ['blogPost', slug],
    queryFn: () => getSinglePost(slug as string),
    enabled: Boolean(slug),
    staleTime: 0,
    gcTime: 0,
  });

  return { isLoading, post: (post || []) as Post[], error };
}
