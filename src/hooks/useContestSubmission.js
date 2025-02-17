import { postResponse } from '@/services/apiContest';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

export function useContestSubmission() {
  const router = useRouter();
  const { mutate: submitForm, isLoading: isSubmittingForm } = useMutation({
    mutationFn: (dataInput) => {
      postResponse(dataInput);
    },
    onSuccess: () => {
      toast.success('Your entry has been recorded!');
    },
    onError: (err) => {
      toast.error('Failed to record entry', err.message);
    },
  });

  return { submitForm, isSubmittingForm };
}
