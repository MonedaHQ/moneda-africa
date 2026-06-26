import type { NextApiRequest, NextApiResponse } from 'next';

type ContactPayload = {
  firstName?: unknown;
  lastName?: unknown;
  email?: unknown;
  message?: unknown;
};

async function getPowerAutomateError(response: Response): Promise<string> {
  try {
    const text = await response.text();
    return text || `${response.status} ${response.statusText}`;
  } catch {
    return `${response.status} ${response.statusText}`;
  }
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const endpoint = process.env.CONTACT_FORM_ENDPOINT;

  if (!endpoint) {
    return res.status(500).json({ message: 'Contact endpoint is not configured' });
  }

  const payload = req.body as ContactPayload;
  const requiredFields = ['firstName', 'lastName', 'email', 'message'] as const;
  const missingFields = requiredFields.filter(
    (field) => !isNonEmptyString(payload[field]),
  );

  if (missingFields.length > 0) {
    return res.status(400).json({
      message: `Missing required field(s): ${missingFields.join(', ')}`,
    });
  }

  const firstName = payload.firstName as string;
  const lastName = payload.lastName as string;
  const email = payload.email as string;
  const message = payload.message as string;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        message: message.trim(),
      }),
    });

    if (!response.ok) {
      return res.status(response.status).json({
        message: await getPowerAutomateError(response),
      });
    }

    return res.status(200).json({ message: 'Submitted successfully' });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Submission failed';
    return res.status(502).json({ message });
  }
}
