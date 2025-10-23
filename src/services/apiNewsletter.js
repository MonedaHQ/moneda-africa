const url = `${process.env.NEXT_PUBLIC_API}/general/brevo/contacts`;

export async function newsletterApi(data) {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      console.log(res);
      throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
    }

    const resData = await res.json();
    return resData;
  } catch (err) {
    throw err;
  }
}
