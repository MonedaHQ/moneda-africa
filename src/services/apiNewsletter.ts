import { getApiErrorMessage } from './apiError';

const apiBaseUrl = process.env.NEXT_PUBLIC_API;

if (!apiBaseUrl) {
  throw new Error('NEXT_PUBLIC_API is not defined');
}

const url = `${apiBaseUrl}/general/brevo/contacts`;

type NewsletterPayload = Record<string, unknown>;
type NewsletterResponse = Record<string, unknown>;

export async function newsletterApi(
  data: NewsletterPayload
): Promise<NewsletterResponse> {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error(await getApiErrorMessage(res));
  }

  return await res.json();
}
