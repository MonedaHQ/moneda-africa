export async function postResponse(data) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_IWD_SUBMISSIONS;
    console.log('API URL:', apiUrl);

    const response = await fetch(apiUrl, {
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
