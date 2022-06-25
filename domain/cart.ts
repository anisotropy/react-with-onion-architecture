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
  cartFind,
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
  calcTotal,
};

export type CartStatus = ReturnType<typeof getCartStatus>;

export function getCartStatus(cart: Cart) {
  const totalAmount = calcTotal(cart, "amount");
  const totalShipping = calcTotal(cart, "shipping");
  const isFreeShipping = totalAmount >= 150000;
  const hasWatch = isInCart(cart, "watch");
  return {
    totalAmount,
    totalShipping,
    isFreeShipping,
    tax: calcTax(totalAmount),
    isWatchDiscounted: totalAmount > 1000000 && hasWatch,
  };
}

export function discountWatch(cart: Cart) {
  return cartFind(cart, "watch", (item) => {
    const originalAmount = item.originalAmount || item.amount;
    item.amount = originalAmount * 0.9;
    item.originalAmount = originalAmount;
  });
}
