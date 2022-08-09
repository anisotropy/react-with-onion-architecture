import { emptyShoppingItems, ShoppingItems } from "domain/shopping";
import { atom } from "recoil";

export const shoppingState = atom<ShoppingItems>({
  key: "cart",
  default: emptyShoppingItems,
});
