import { CartItem, makeCartItem } from "./layer/cartItem";
import { arrayFind, arrayRemove } from "./layer/layer/common";
import { withObjectCopy } from "./layer/layer/layer/common";

export { type CartItem };

export type Cart = CartItem[];

type ItemToAdd = Omit<CartItem, "amount" | "quantity"> & { price: number };

export function addToCart(cart: Cart, itemToAdd: ItemToAdd) {
  return arrayFind(
    cart,
    (item) => item.id === itemToAdd.id,
    (itemCopy) => {
      itemCopy.quantity += 1;
      itemCopy.amount += itemToAdd.price;
    },
    (cartCopy) => {
      const newItem = makeCartItem({
        ...itemToAdd,
        amount: itemToAdd.price,
        quantity: 1,
      });
      cartCopy.push(newItem);
    }
  );
}

export function calcTotal(cart: Cart, field: keyof CartItem) {
  return cart.reduce((total, item) => {
    const value = item[field];
    if (typeof value === "number") {
      return total + value;
    } else {
      return total;
    }
  }, 0);
}

export function removeItem(cart: Cart, index: number) {
  return arrayRemove(cart, index);
}

export function isInCart(cart: Cart, name: string) {
  const item = cart.find((item) => item.name === name);
  return Boolean(item);
}

export function isCartEmpty(cart: Cart) {
  return cart.length === 0;
}

export function cartMap<T>(cart: Cart, callbcak: (item: CartItem) => T) {
  return cart.map(callbcak);
}

export function emptyCart() {
  return [];
}

export function copyCart(cart: Cart) {
  return cart.map((item) => withObjectCopy(item, (itemCopy) => itemCopy));
}

export function cartFind(
  cart: Cart,
  name: string,
  modify: (item: CartItem) => void
) {
  return arrayFind(
    cart,
    (item) => item.name === name,
    (item) => modify(item)
  );
}
