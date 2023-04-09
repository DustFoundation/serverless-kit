export function parseRequestBody<T>(
  body: string | null | undefined,
  headers: Record<string, string | undefined> | false,
): T | null {
  if (!body) {
    return null;
  }

  if (headers !== false) {
    const contentType = headers['Content-Type'] ?? headers['content-type'];
    if (contentType !== 'application/json') {
      return null;
    }
  }

  try {
    return JSON.parse(body);
  } catch {
    return null;
  }
}
