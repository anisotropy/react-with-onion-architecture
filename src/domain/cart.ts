import { calcTotal, Cart, isInCart } from "library/interface/cart";
import { calcTax } from "./common";

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
