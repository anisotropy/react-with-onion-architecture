import { withArrayCopy, withObjectCopy } from "./layer/functions";

export function arraySet<T>(array: T[], index: number, value: T) {
  return withArrayCopy(array, (copy) => (copy[index] = value));
}

export function arrayGet<T>(array: T[], index: number) {
  return array[index];
}

export function arrayPush<T>(array: T[], value: T) {
  return withArrayCopy(array, (copy) => copy.push(value));
}

export function arrayRemove<T>(array: T[], index: number) {
  return withArrayCopy(array, (copy) => copy.splice(index, 1));
}

export function objectSet<T, K extends keyof T>(
  object: T,
  key: K,
  value: T[K]
) {
  return withObjectCopy(object, (copy) => (copy[key] = value));
}

export function objectGet<T, K extends keyof T>(object: T, key: K) {
  return object[key];
}

export function objectRemove<T, K extends keyof T>(object: T, key: K) {
  return withObjectCopy(object, (copy) => delete copy[key]);
}
