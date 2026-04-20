const contestApiUrl = process.env.NEXT_PUBLIC_API_IWD_SUBMISSIONS;

if (!contestApiUrl) {
  throw new Error('NEXT_PUBLIC_API_IWD_SUBMISSIONS is not defined');
}

type ContestPayload = Record<string, unknown>;

export async function postResponse(data: ContestPayload): Promise<void> {
  try {
    const response = await fetch(contestApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Failed to post submission. Status: ${response.status}. Response: ${errorText}`
      );
    }
  } catch (error) {
    console.error('Error posting submission:', error);
    throw error;
  }
}
