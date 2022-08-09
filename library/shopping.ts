import {
  arrayReduce,
  arraySort,
  objectGet,
  objectFilter,
  objectIn,
  objectSet,
  objectMap,
  objectReduce,
  objectAppend,
} from "./layer/layer/common";
import {
  createShoppingItem,
  ExtendedShoppingItem,
  readShoppingItem,
  ShoppingItem,
  updateShoppingItem,
} from "./layer/shoppingItem";

export {
  type ShoppingItem,
  type ExtendedShoppingItem,
  readShoppingItem,
  readShoppingItemValues,
  updateShoppingItem,
} from "./layer/shoppingItem";

export type ShoppingItems = { [id: number]: ShoppingItem };

export const emptyShoppingItems: ShoppingItems = {};

export function filterShoppingItems(
  items: ShoppingItems,
  predicate: (item: ShoppingItem) => boolean
) {
  return objectFilter(items, (item) => predicate(item));
}

export function addShoppingItem(
  items: ShoppingItems,
  ...itemsToAdd: ExtendedShoppingItem[]
) {
  return arrayReduce(
    itemsToAdd,
    (items, itemToAdd) => {
      const id = objectGet(itemToAdd, "id");
      return objectIn(items, id)
        ? items
        : objectAppend(items, id, createShoppingItem(itemToAdd));
    },
    items
  );
}

export function mapShoppingItems<T>(
  items: ShoppingItems,
  modify: (item: ShoppingItem) => T
) {
  return objectMap(items, (item) => modify(item));
}

export function getShoppingItem(items: ShoppingItems, id: number) {
  return objectGet(items, id);
}

export function increateShoppingItem(items: ShoppingItems, id: number) {
  if (objectIn(items, id)) {
    const item = objectGet(items, id);
    const quantity = readShoppingItem(item, "quantity");
    const updatedItem = updateShoppingItem(item, { quantity: quantity + 1 });
    return objectSet(items, id, updatedItem);
  } else {
    return items;
  }
}

export function decreaseShoppingItem(items: ShoppingItems, id: number) {
  if (objectIn(items, id)) {
    const item = objectGet(items, id);
    const quantity = readShoppingItem(item, "quantity");
    const updatedItem = updateShoppingItem(item, { quantity: quantity - 1 });
    return objectSet(items, id, updatedItem);
  } else {
    return items;
  }
}

export function initShoppingItem(items: ShoppingItems, id: number) {
  return objectReduce(
    items,
    (result, item) => {
      const id = readShoppingItem(item, "id");
      result[id] = updateShoppingItem(item, { quantity: 0 });
      return result;
    },
    {} as ShoppingItems
  );
}

export function sortShoppingItems(
  items: ShoppingItems,
  compare?: (itemA: ShoppingItem, itemB: ShoppingItem) => number
) {
  const itemArray = objectMap(items, (item) => item);
  return arraySort(itemArray, compare);
}
