import { getComments } from '@/services/apiPosts';
import { useQuery } from '@tanstack/react-query';

type Comment = Record<string, unknown>;

export function useAllComments(slug?: string) {
  const { isLoading, data, error } = useQuery({
    queryKey: ['comments', slug],
    queryFn: () => getComments(slug as string),
    enabled: Boolean(slug),
    staleTime: 0,
    gcTime: 0,
  });

  const comments = (data || []) as Comment[];

  return { isLoading, comments, error };
}
