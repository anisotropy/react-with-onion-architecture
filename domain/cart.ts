import {
  addToCart,
  CartItem,
  Cart,
  calcTotal,
  isInCart,
  cartMap,
  isCartEmpty,
} from "library/cart";
import { calcTax } from "./layer/functions";

export { type CartItem, type Cart, addToCart, cartMap, isCartEmpty };

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
