export function withCopy<T>(object: T, modify: (object: T) => void) {
  const copy = { ...object };
  modify(copy);
  return copy;
}
