import { atom } from "recoil";
import { Cart, createEmptyCart } from "sampleCode/roa/library";

export const cartState = atom<Cart>({
  key: "cartState",
  default: createEmptyCart(),
});
