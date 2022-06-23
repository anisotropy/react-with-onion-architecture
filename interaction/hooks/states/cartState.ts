import { atom } from "recoil";

type CartItem = {
  id: number;
  name: string;
  price: number;
  shipping: number;
  quantity: number;
};

export const cartState = atom<CartItem[]>({
  key: "cart",
  default: [],
});
