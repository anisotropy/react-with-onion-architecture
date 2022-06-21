import { get, remove, set } from "library/layer2/object";
import { Item, makeItem } from "library/layer1/item";

export type Cart = { [name: string]: Item };

export function addItem(
  cart: Cart,
  name: string,
  price: number,
  quantity: number,
  shipping: number
) {
  const item = makeItem(name, price, quantity, shipping);
  return set(cart, name, item);
}

export function calcTotal(cart: Cart) {
  return Object.keys(cart).reduce((total, name) => total + cart[name].price, 0);
}

// export function setPriceByName(cart: Cart, name: string, price: number) {
//   if (name in cart) {
//     const item = cart[name];
//     const itemCopy = setPrice(item, price);
//     return set(cart, name, itemCopy);
//   } else {
//     const item = makeItem(name, price);
//     return set(cart, name, item);
//   }
// }

export function setFieldByName<F extends keyof Item>(
  cart: Cart,
  name: string,
  field: F,
  value: Item[F]
) {
  const item = get(cart, name);
  const newItem = set(item, field, value);
  const newCart = set(cart, name, newItem);
  return newCart;
}

export function removeItemByName(cart: Cart, name: string) {
  return remove(cart, name);
}

export function isInCart(cart: Cart, name: string) {
  return name in cart;
}
