export async function getApiErrorMessage(
  response: Response,
  fallbackPrefix = 'Fetch failed',
): Promise<string> {
  let message = `${fallbackPrefix}: ${response.status} ${response.statusText}`;

  try {
    const text = await response.text();

    if (!text) {
      return message;
    }

    try {
      const json = JSON.parse(text) as {
        message?: unknown;
        error?: unknown;
      };

      if (typeof json.message === 'string') {
        return json.message;
      }

      if (typeof json.error === 'string') {
        return json.error;
      }

      return JSON.stringify(json);
    } catch {
      return text;
    }
  } catch {
    return message;
  }
}
