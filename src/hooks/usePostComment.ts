import { postComment } from '@/services/apiPosts';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

type CommentPayload = Record<string, unknown>;

type AddCommentInput = {
  id: number | string;
  data: CommentPayload;
};

function getErrorMessage(err: unknown): string {
  if (err instanceof Error) {
    return err.message;
  }

  return 'Failed to add comment';
}

export function usePostComment() {
  const { mutate: addComment, isPending: isAddingComment } = useMutation({
    mutationFn: (dataInput: AddCommentInput) => {
      const { id, data } = dataInput;
      return postComment(id, data);
    },
    onSuccess: () => {
      toast.success('Your comment has been submitted for review!');
    },
    onError: (err: unknown) => {
      toast.error(getErrorMessage(err));
    },
  });

  return { addComment, isAddingComment };
}
