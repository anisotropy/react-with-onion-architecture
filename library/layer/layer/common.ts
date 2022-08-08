import { withObjectCopy, withArrayCopy } from "./layer/common";

export function objectSet<T, K extends keyof T>(
  object: T,
  key: K,
  value: T[K]
) {
  return withObjectCopy(object, (copy) => {
    if (key in copy) copy[key] = value;
  });
}

export function objectSetValues<T, K extends keyof T>(
  object: T,
  values: Partial<T>
) {
  return withObjectCopy(object, (copy) => {
    (Object.keys(values) as K[]).forEach((key) => {
      if (key in copy) copy[key] = values[key] as T[K];
    });
  });
}

export function objectAppend<K extends number | string | symbol, V>(
  object: Record<K, V>,
  key: K,
  value: V
) {
  return withObjectCopy(object, (copy) => {
    if (!(key in copy)) copy[key] = value;
  });
}

export function objectGet<T, K extends keyof T>(object: T, key: K) {
  return object[key];
}

export function objectIn<T, K extends keyof T>(object: T, key: K) {
  return key in object;
}

export function objectPick<T, K extends keyof T>(
  object: T,
  keys: K[]
): Pick<T, K> {
  return keys.reduce((newObject, key) => {
    if (key in object) {
      newObject[key] = object[key];
    }
    return newObject;
  }, {} as T);
}

export function objectReduce<T, R, K extends keyof T>(
  object: T,
  func: (result: R, key: K, value: T[K]) => R,
  initial: R
) {
  return Object.entries(object).reduce((result, [key, value]) => {
    return func(result, key as K, value);
  }, initial);
}

export function objectFilter<K extends number | string | symbol, V>(
  object: Record<K, V>,
  predicate: (key: K, value: V) => boolean
) {
  return Object.entries(object).reduce((result, [key, value]) => {
    if (predicate(key as K, value as V)) result[key as K] = value as V;
    return result;
  }, {} as Record<K, V>);
}

export function objectMap<T, K extends keyof T, R>(
  object: T,
  modify: (key: K, value: T[K]) => R
) {
  return Object.entries(object).map(([key, value]) => modify(key as K, value));
}

export function objectLength<T>(object: T) {
  return Object.keys(object).length;
}

export function arrayFilter<T>(array: T[], predicate: (value: T) => boolean) {
  return array.filter(predicate);
}

export function arrayMap<T, R>(array: T[], modify: (value: T) => R) {
  return array.map(modify);
}

export function arrayReduce<T, R>(
  array: T[],
  func: (result: R, value: T) => R,
  initial: R
) {
  return array.reduce(func, initial);
}

export function arraySet<T>(array: T[], index: number, value: T) {
  return withArrayCopy(array, (copy) => (copy[index] = value));
}

export function arrayGet<T>(array: T[], index: number) {
  return array[index];
}

export function arrayPush<T>(array: T[], ...values: T[]) {
  return withArrayCopy(array, (copy) => {
    values.forEach((value) => {
      copy.push(value);
    });
  });
}

export function arrayRemove<T>(array: T[], index: number) {
  return withArrayCopy(array, (copy) => copy.splice(index, 1));
}

export function arrayFindElement<T>(
  array: T[],
  predicate: (value: T) => boolean
) {
  return array.find(predicate);
}

export function arrayFind<T>(
  array: T[],
  predicate: (value: T) => boolean,
  modify: (value: T) => T,
  fallback?: (array: T[]) => T[]
) {
  const index = array.findIndex(predicate);
  if (index >= 0) {
    return withArrayCopy(array, (copy) => {
      const value = copy[index];
      copy[index] = modify(value);
    });
  } else if (fallback) {
    return fallback(array);
  } else {
    return array;
  }
}

export function arraySort<T>(array: T[], compare?: (a: T, b: T) => number) {
  return withArrayCopy(array, (copy) => {
    copy.sort(compare);
  });
}

export function arrayLength<T>(array: T[]) {
  return array.length;
}

export function chain<T>(value: T, ...funcs: ((value: T) => T)[]) {
  return funcs.reduce<T>((result, func) => {
    return func(result);
  }, value);
}
