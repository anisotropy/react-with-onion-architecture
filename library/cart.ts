import {
  CartItem,
  createCartItem,
  ExtendedCartItem,
  readCartItem,
  updateCartItem,
} from "./layer/cartItem";
import {
  arraySort,
  objectAppend,
  objectFilter,
  objectGet,
  objectIn,
  objectLength,
  objectMap,
  objectReduce,
  objectSet,
} from "./layer/layer/common";

export { type CartItem, readCartItem, updateCartItem } from "./layer/cartItem";

export type CartItems = { [id: number]: CartItem };

export const emptyCart: CartItems = {};

export function addToCart(items: CartItems, itemToAdd: ExtendedCartItem) {
  const id = objectGet(itemToAdd, "id");
  if (objectIn(items, id)) {
    const item = objectGet(items, id);
    const quantity = readCartItem(item, "quantity") + 1;
    const totalPrice = readCartItem(item, "price") * quantity;
    return objectSet(items, id, updateCartItem(item, { quantity, totalPrice }));
  } else {
    const newItem = updateCartItem(createCartItem(itemToAdd), {
      quantity: 1,
      totalPrice: objectGet(itemToAdd, "price"),
    });
    return objectAppend(items, id, newItem);
  }
}

export function subtractFromCart(items: CartItems, id: number) {
  if (!objectIn(items, id)) return items;

  const item = objectGet(items, id);
  const quantity = readCartItem(item, "quantity") - 1;

  if (quantity > 0) {
    const updatedItem = updateCartItem(item, {
      quantity,
      totalPrice: readCartItem(item, "price") * quantity,
    });
    return objectSet(items, id, updatedItem);
  } else if (quantity === 0) {
    return objectFilter(items, (item) => readCartItem(item, "id") !== id);
  } else {
    return items;
  }
}

export function removeFromCart(items: CartItems, id: number) {
  return objectFilter(items, (item) => readCartItem(item, "id") !== id);
}

export function mapCartItems<T>(
  items: CartItems,
  modify: (item: CartItem) => T
) {
  return objectMap(items, (id, item) => modify(item));
}

export function countCartItems(items: CartItems) {
  return objectLength(items);
}

export function calcPrice(
  items: CartItems,
  predicate: (item: CartItem) => boolean
) {
  return objectReduce(
    items,
    (totalPrice, id, item) =>
      predicate(item)
        ? totalPrice + readCartItem(item, "totalPrice")
        : totalPrice,
    0
  );
}

export function sortCartItems(
  items: CartItems,
  compare?: (itemA: CartItem, itemB: CartItem) => number
) {
  const arrayItems = objectMap(items, (id, item) => item);
  return arraySort(arrayItems, compare);
}
