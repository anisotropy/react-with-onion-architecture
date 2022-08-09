import { filterShoppingItems, ShoppingItems } from "library/shopping";

export {
  type ShoppingItems,
  type ShoppingItem,
  addShoppingItem,
  mapShoppingItems,
  readShoppingItem,
  emptyShoppingItems,
} from "library/shopping";

export type FilterBy = "all" | "fruit" | "vegetable" | "meat";

export function filterShoppingItemsBy(items: ShoppingItems, by: FilterBy) {
  return filterShoppingItems(items, (item) =>
    by === "all" ? true : item.type === by
  );
}
