type Obj<T> = { [key: string]: T };

export function set<T>(object: Obj<T>, key: string, value: T) {
  return { ...object, key: value };
}

export function remove<T>(object: Obj<T>, key: string) {
  const copy = { ...object };
  delete copy[key];
  return copy;
}

export function addElement<T>(object: Obj<T>, key: string, element: T) {
  return { ...object, key: element };
}
