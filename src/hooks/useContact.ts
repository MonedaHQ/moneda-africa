import { contactApi } from '@/services/apiContact';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

type FormPayload = Record<string, unknown>;

function getErrorMessage(err: unknown): string {
  if (err instanceof Error) {
    return err.message;
  }

  return 'Failed to submit';
}

export function useContactUs() {
  const router = useRouter();

  const { mutate: contactUs, isPending: isSubmitting } = useMutation({
    mutationFn: (data: FormPayload) => contactApi(data),
    onSuccess: () => {
      toast.success('Success!');
      router.push(
        { pathname: router.pathname, query: { status: 'success' } },
        undefined,
        { scroll: false }
      );
    },
    onError: (err: unknown) => {
      toast.error(getErrorMessage(err));
      router.push(
        { pathname: router.pathname, query: { status: 'error' } },
        undefined,
        { scroll: false }
      );
    },
  });

  return { contactUs, isSubmitting };
}
