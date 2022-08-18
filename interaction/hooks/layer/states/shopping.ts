import axios from "axios";
import {
  emptyShoppingItems,
  readShoppingItem,
  ShoppingItems,
} from "domain/shopping";
import { filterShoppingItems } from "domain/shopping";
import { atom, selector } from "recoil";
import { readShoppingStatus, ShoppingStatus } from "./library/shopping";

export const shoppingState = atom<ShoppingItems>({
  key: "shoppginState",
  default: emptyShoppingItems,
});

export const shoppingStatusState = atom<ShoppingStatus>({
  key: "shoppingStatusState",
  default: { filterBy: "All" },
});

export const displayedShoppingState = selector({
  key: "displayedShoppingState",
  get: ({ get }) => {
    const shoppingItems = get(shoppingState);
    const status = get(shoppingStatusState);
    const filterBy = readShoppingStatus(status, "filterBy");
    return filterShoppingItems(shoppingItems, (item) =>
      filterBy === "All" ? true : readShoppingItem(item, "type") === filterBy
    );
  },
});

type Item = {
  id: number;
  name: string;
  type: string;
  price: number;
};

// TODO: 상태이름 변경 필요 shoppingAsyncState -> ?
export const shoppingAsyncState = selector({
  key: "shoppingAsyncState",
  get: async ({ get }) => {
    const { data: fetched } = await axios.get<Item[]>("/api/items");
    return fetched;
  },
});
