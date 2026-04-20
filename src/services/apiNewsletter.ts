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
    let message = `Fetch failed: ${res.status} ${res.statusText}`;

    try {
      const text = await res.text();
      if (text) {
        try {
          const json = JSON.parse(text) as { message?: string };
          message = json?.message || JSON.stringify(json);
        } catch {
          message = text;
        }
      }
    } catch {
      // Keep fallback message if body parsing fails.
    }

    throw new Error(message);
  }

  return await res.json();
}
