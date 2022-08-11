import { atom } from "recoil";
import { CartItems, emptyCart } from "domain/cart";

export const cartState = atom<CartItems>({
  key: "cartState",
  default: emptyCart,
});
