export function groupBy<T>(xs: T[], key: keyof T): Record<string, T[]> {
  return xs.reduce((rv, x) => {
    (rv[x[key] as any] = rv[x[key] as any] || []).push(x);
    return rv;
  }, {});
}
