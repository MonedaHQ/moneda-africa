import { PAGE_SIZE } from '@/utils/config';

const blogApiUrl = process.env.NEXT_PUBLIC_APP_BLOG_API_URL;
const appApiBaseUrl = process.env.NEXT_PUBLIC_APP_API_BASE_URL;

if (!blogApiUrl) {
  throw new Error('NEXT_PUBLIC_APP_BLOG_API_URL is not defined');
}

if (!appApiBaseUrl) {
  throw new Error('NEXT_PUBLIC_APP_API_BASE_URL is not defined');
}

type Post = Record<string, unknown>;
type Comment = Record<string, unknown>;
type CommentPayload = Record<string, unknown>;

export async function getPosts(): Promise<{ posts: Post[] }> {
  const allPosts: Post[] = [];

  let page = 1;
  let totalPages = 1;

  while (page <= totalPages) {
    const query = `${blogApiUrl}/posts?_page=${page}&_embed`;
    const response = await fetch(query);

    if (!response.ok) {
      throw new Error(`Failed to fetch posts. Status: ${response.status}`);
    }

    const posts = (await response.json()) as Post[];

    const totalPagesHeader = response.headers.get('x-wp-totalpages');
    if (totalPagesHeader) {
      totalPages = parseInt(totalPagesHeader, 10);
    }

    allPosts.push(...posts);
    page += 1;
  }

  return { posts: allPosts };
}

export async function getAllPosts({ page }: { page?: number }): Promise<{
  posts: Post[];
  totalPosts: number;
}> {
  let query = `${blogApiUrl}/posts?per_page=${PAGE_SIZE}&_embed&status=publish`;

  if (page) {
    query = `${query}&page=${page}`;
  }

  const res = await fetch(query);

  if (!res.ok) {
    throw new Error(`Failed to fetch posts. Status: ${res.status}`);
  }

  const posts = (await res.json()) as Post[];
  const totalPostsHeader = res.headers.get('x-wp-total');
  const totalPosts = totalPostsHeader ? parseInt(totalPostsHeader, 10) : 0;

  return { posts, totalPosts };
}

export async function getThreePosts(): Promise<Post[]> {
  const query = `${blogApiUrl}/posts?per_page=3&_orderby=date&status=publish`;
  const res = await fetch(query);

  if (!res.ok) {
    throw new Error(`Failed to fetch posts. Status: ${res.status}`);
  }

  return (await res.json()) as Post[];
}

export async function getSinglePost(slug: string): Promise<Post[]> {
  const query = `${blogApiUrl}/posts?slug=${slug}`;
  const res = await fetch(query);

  if (!res.ok) {
    throw new Error(`Failed to fetch post. Status: ${res.status}`);
  }

  return (await res.json()) as Post[];
}

export async function getComments(postSlug: string): Promise<Comment[]> {
  try {
    const postQuery = await fetch(`${blogApiUrl}/posts?slug=${postSlug}`);

    if (!postQuery.ok) {
      throw new Error(`Failed to fetch post. Status: ${postQuery.status}`);
    }

    const [post] = (await postQuery.json()) as Array<{ id?: number }>;

    if (!post?.id) {
      throw new Error('Post not found');
    }

    const commentsResponse = await fetch(`${blogApiUrl}/comments?post=${post.id}`);

    if (!commentsResponse.ok) {
      throw new Error(
        `Failed to fetch comments. Status: ${commentsResponse.status}`
      );
    }

    return (await commentsResponse.json()) as Comment[];
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('Error fetching comments:', message);
    throw error;
  }
}

export async function postComment(
  postId: number | string,
  commentData: CommentPayload
): Promise<Comment> {
  try {
    const response = await fetch(`${appApiBaseUrl}/treasury/blog/comment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        post: postId,
        ...commentData,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to post comment. Status: ${response.status}`);
    }

    return (await response.json()) as Comment;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('Error posting comment:', message);
    throw error;
  }
}
