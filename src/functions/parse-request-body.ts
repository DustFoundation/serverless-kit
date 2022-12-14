export function parseRequestBody<T>(
  body: string | null,
  headers: Record<string, string | undefined>,
): T | null {
  if (!body) {
    return null;
  }

  if (headers['content-type'] === 'application/json' || headers['Content-Type'] === 'application/json') {
    try {
      return JSON.parse(body);
    } catch (e) {
      if (e instanceof SyntaxError) {
        return null;
      }
      throw e;
    }
  }

  return null;
}
