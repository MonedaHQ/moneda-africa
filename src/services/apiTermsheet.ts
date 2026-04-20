const baseUrl = process.env.NEXT_PUBLIC_APP_API_BASE_URL;

if (!baseUrl) {
  throw new Error('NEXT_PUBLIC_APP_API_BASE_URL is not defined');
}

const url = `${baseUrl}/form/moneda`;

type TermsheetPayload = Record<string, unknown>;
type TermsheetResponse = Record<string, unknown>;

export async function submitTermsheetApi(
  data: TermsheetPayload
): Promise<TermsheetResponse> {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error(`${res.status}: ${res.statusText}`);
  }

  return await res.json();
}
