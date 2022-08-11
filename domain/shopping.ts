import { filterShoppingItems, ShoppingItems } from "library/shopping";

export {
  type ShoppingItems,
  type ShoppingItem,
  addShoppingItem,
  mapShoppingItems,
  readShoppingItem,
  setShoppingItems,
  updateShoppingItem,
  filterShoppingItems,
  emptyShoppingItems,
} from "library/shopping";

// export type FilterBy = "All" | "Fruit" | "Vegetable" | "Meat";

// export function filterShoppingItemsBy(items: ShoppingItems, by: FilterBy) {
//   return filterShoppingItems(items, (item) =>
//     by === "All" ? true : item.type === by
//   );
// }
