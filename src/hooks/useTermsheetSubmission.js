import { submitTermsheetApi } from '@/services/apiTermsheet';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

export function useTermsheetSubmission() {
  const router = useRouter();

  const { mutate: submitTermsheet, isPending: isSubmitting } = useMutation({
    mutationFn: submitTermsheetApi,
    onSuccess: () => {
      toast.success('Termsheet submitted successfully');
      router.push(
        {
          pathname: router.pathname,
          query: { status: 'success' },
        },
        undefined,
        { scroll: false },
      );
    },
    onError: (err) => {
      toast.error(err?.message || 'Failed to submit termsheet');
      router.push(
        {
          pathname: router.pathname,
          query: { status: 'error' },
        },
        undefined,
        { scroll: false },
      );
    },
  });

  return { submitTermsheet, isSubmitting };
}
