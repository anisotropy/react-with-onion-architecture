import { remove, set } from "library/base/object";
import { Item, makeItem, setPrice } from "library/layer1/item";

export type Cart = { [name: string]: Item };

export function addItem(cart: Cart, name: string, price: number) {
  const item = makeItem(name, price);
  return set(cart, name, item);
}

export function calcTotal(cart: Cart) {
  return Object.keys(cart).reduce((total, name) => total + cart[name].price, 0);
}

export function setPriceByName(cart: Cart, name: string, price: number) {
  if (name in cart) {
    const item = cart[name];
    const itemCopy = setPrice(item, price);
    return set(cart, name, itemCopy);
  } else {
    const item = makeItem(name, price);
    return set(cart, name, item);
  }
}

export function removeItemByName(cart: Cart, name: string) {
  return remove(cart, name);
}

export function isInCart(cart: Cart, name: string) {
  return name in cart;
}
