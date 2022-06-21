export function set<T, K extends keyof T>(object: T, key: K, value: T[K]) {
  return { ...object, [key]: value };
}

export function remove<T, K extends keyof T>(object: T, key: K) {
  const copy = { ...object };
  delete copy[key];
  return copy;
}

export function get<T, K extends keyof T>(object: T, key: K) {
  return object[key];
}
