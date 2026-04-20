import { postResponse } from '@/services/apiContest';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

type ContestPayload = Record<string, unknown>;

function getErrorMessage(err: unknown): string {
  if (err instanceof Error) {
    return err.message;
  }

  return 'Failed to record entry';
}

export function useContestSubmission() {
  const { mutate: submitForm, isPending: isSubmittingForm } = useMutation({
    mutationFn: (dataInput: ContestPayload) => postResponse(dataInput),
    onSuccess: () => {
      toast.success('Your entry has been recorded!');
    },
    onError: (err: unknown) => {
      toast.error(getErrorMessage(err));
    },
  });

  return { submitForm, isSubmittingForm };
}
