import { newsletterApi } from '@/services/apiNewsletter';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

type NewsletterPayload = Record<string, unknown>;

function getErrorMessage(err: unknown): string {
  if (err instanceof Error) {
    return err.message;
  }

  if (typeof err === 'string') {
    return err;
  }

  return 'Failed to submit';
}

export function useNewsletter() {
  const { mutate: newsletterSignup, isPending: isSigningUp } = useMutation({
    mutationFn: (data: NewsletterPayload) => newsletterApi(data),
    onSuccess: () => {
      toast.success('Success!');
    },
    onError: (err: unknown) => {
      toast.error(getErrorMessage(err));
    },
  });

  return { newsletterSignup, isSigningUp };
}
