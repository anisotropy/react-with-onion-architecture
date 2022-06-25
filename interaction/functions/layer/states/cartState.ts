import { atom, selector } from "recoil";
import {
  CartItem,
  CartStatus,
  discountWatch,
  emptyCart,
  getCartStatus,
} from "domain/cart";

export const cartState = atom<CartItem[]>({
  key: "cart",
  default: emptyCart(),
});

export const cartStatusState = selector<CartStatus>({
  key: "cartStatus",
  get: ({ get }) => {
    const cart = get(cartState);
    return getCartStatus(cart);
  },
});

export const cartDiscountedState = selector({
  key: "cartDiscounted",
  get: ({ get }) => {
    const cart = get(cartState);
    const status = get(cartStatusState);
    if (status.isWatchDiscounted) {
      return discountWatch(cart);
    } else {
      return cart;
    }
  },
});
