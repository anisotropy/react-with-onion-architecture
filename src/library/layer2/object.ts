import { withCopy } from "library/layer3/object";

export function set<T, K extends keyof T>(object: T, key: K, value: T[K]) {
  return withCopy(object, (copy) => {
    copy[key] = value;
  });
}

export function remove<T, K extends keyof T>(object: T, key: K) {
  return withCopy(object, (copy) => {
    delete copy[key];
  });
}

export function get<T, K extends keyof T>(object: T, key: K) {
  return object[key];
}
