import { atom } from "recoil";
import { CartItem } from "domain/cart";

export const cartState = atom<CartItem[]>({
  key: "cart",
  default: [],
});
