import * as R from "ramda";
import { hasItemProp, Item } from "./layer/item";

export type Cart = Item[];

export function createEmptyCart() {
  return [] as Cart;
}

export function addItemToCart(item: Item) {
  return (cart: Cart) => R.append(item)(cart);
}

export function mapCart<T>(modify: (item: Item) => T) {
  return (cart: Cart) => R.map(modify)(cart);
}

export function countItems(cart: Cart) {
  return R.length(cart);
}

export function findItem<K extends keyof Item>(
  propsName: K,
  propValue: Item[K]
) {
  return (cart: Cart) => R.find(hasItemProp(propsName, propValue))(cart);
}
