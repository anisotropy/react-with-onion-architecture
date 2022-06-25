export function withArrayCopy<T>(array: T[], modify: (copy: T[]) => void) {
  const copy = [...array];
  modify(copy);
  return copy;
}

export function withObjectCopy<T>(object: T, modify: (copy: T) => void) {
  const copy = { ...object };
  modify(copy);
  return copy;
}
