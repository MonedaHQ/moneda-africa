import { submitTermsheetApi } from '@/services/apiTermsheet';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

function getErrorMessage(err: unknown): string {
  if (err instanceof Error) {
    return err.message;
  }

  return 'Failed to submit termsheet';
}

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
        { scroll: false }
      );
    },
    onError: (err: unknown) => {
      toast.error(getErrorMessage(err));
      router.push(
        {
          pathname: router.pathname,
          query: { status: 'error' },
        },
        undefined,
        { scroll: false }
      );
    },
  });

  return { submitTermsheet, isSubmitting };
}
