import { emptyShoppingItems, FilterBy, ShoppingItems } from "domain/shopping";
import { atom } from "recoil";

export const shoppingState = atom<ShoppingItems>({
  key: "shoppginState",
  default: emptyShoppingItems,
});

type ShoppingStatus = {
  filterBy: FilterBy;
};

export const shoppingStatus = atom<ShoppingStatus>({
  key: "shoppingStatus",
  default: { filterBy: "all" },
});
