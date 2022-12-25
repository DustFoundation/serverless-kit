export function parseRequestBody<T>(
  body: string | null | undefined,
  headers: Record<string, string | undefined> | false,
): T | null {
  if (!body) {
    return null;
  }

  if (
    headers !== false &&
    headers['content-type'] !== 'application/json' &&
    headers['Content-Type'] !== 'application/json'
  ) {
    return null;
  }

  try {
    return JSON.parse(body);
  } catch (e) {
    if (e instanceof SyntaxError) {
      return null;
    }

    throw e;
  }
}
