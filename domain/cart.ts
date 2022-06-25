import {
  addToCart,
  CartItem,
  Cart,
  calcTotal,
  isInCart,
  cartMap,
  isCartEmpty,
  emptyCart,
  copyCart,
} from "library/cart";
import { calcTax } from "./layer/common";

export {
  type CartItem,
  type Cart,
  addToCart,
  cartMap,
  isCartEmpty,
  emptyCart,
  copyCart,
};

export function getFreeShipping(cart: Cart) {
  return calcTotal(cart) >= 20;
}

export function cartTax(cart: Cart) {
  return calcTax(calcTotal(cart));
}

export function getsWatchDiscount(cart: Cart) {
  const total = calcTotal(cart);
  const hasWatch = isInCart(cart, "watch");
  return total > 100 && hasWatch;
}
