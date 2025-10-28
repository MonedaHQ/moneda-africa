const url = `${process.env.NEXT_PUBLIC_API}/general/brevo/contacts`;

export async function newsletterApi(data) {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    // parse body (await!) and build a useful message
    let message = `Fetch failed: ${res.status} ${res.statusText}`;
    try {
      const text = await res.text();
      if (text) {
        try {
          const json = JSON.parse(text);
          message = json?.message || JSON.stringify(json);
        } catch {
          message = text;
        }
      }
    } catch (e) {
      // ignore parse errors and keep fallback message
    }
    throw new Error(message);
  }

  // success: await the json and return it
  return await res.json();
}
