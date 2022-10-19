import * as R from "ramda";

export type Item = { name: string; originalPrice: number; price: number };

export function createItem(name: string, price: number) {
  return { name, originalPrice: price, price } as Item;
}

export function readItemProp<K extends keyof Item>(propName: K) {
  return (item: Item) => R.prop(propName, item);
}

export function hasItemProp<K extends keyof Item>(
  propName: K,
  propValue: Item[K]
) {
  return (item: Item) => R.propEq(propName, propValue)(item);
}

export function updateItem<K extends keyof Item>(
  propName: K,
  updateValue: (item: Item) => Item[K]
) {
  return (item: Item) => R.set(R.lensProp(propName), updateValue(item))(item);
}
