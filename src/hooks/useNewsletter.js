import { newsletterApi } from '@/services/apiNewsletter';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

export function useNewsletter() {
  const router = useRouter();
  const { mutate: newsletterSignup, isLoading: isSigningUp } = useMutation({
    mutationFn: (data) => {
      newsletterApi(data);
    },
    onSuccess: () => {
      toast.success('Success!');
    },
    onError: (err) => {
      toast.error('Failed to submit', err.message);
    },
  });

  return { newsletterSignup, isSigningUp };
}
