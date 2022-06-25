import { atom } from "recoil";
import { CartItem, emptyCart } from "domain/cart";

export const cartState = atom<CartItem[]>({
  key: "cart",
  default: emptyCart(),
});
