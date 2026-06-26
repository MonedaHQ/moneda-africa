import { getApiErrorMessage } from './apiError';

const url = '/api/contact';

type ContactPayload = Record<string, unknown>;
type ContactApiResponse = Record<string, unknown>;

export async function contactApi(
  data: ContactPayload,
): Promise<ContactApiResponse> {
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
