export function chunk<T = any>(arr: T[], size: number): T[][] {
  if (size < 1) throw new Error('Chunk size cannot be less than 1!');
  return Array.from({ length: Math.ceil(arr.length / size) }, (value: T, index) =>
    arr.slice(index * size, index * size + size),
  );
}
