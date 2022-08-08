import {
  CartItem,
  createCartItem,
  ExtendedCartItem,
  readCartItem,
  updateCartItem,
} from "./layer/cartItem";
import {
  arrayFilter,
  arrayFind,
  arrayMap,
  arrayPush,
  arrayReduce,
  arraySort,
  objectGet,
} from "./layer/layer/common";

export { type CartItem, readCartItem, updateCartItem } from "./layer/cartItem";

export type CartItems = CartItem[];

export const emptyCart: CartItems = [];

export function addToCart(cartItems: CartItems, itemToAdd: ExtendedCartItem) {
  return arrayFind(
    cartItems,
    (cartItem) => readCartItem(cartItem, "id") === objectGet(itemToAdd, "id"),
    (cartItem) => {
      const quantity = readCartItem(cartItem, "quantity") + 1;
      const totalPrice = readCartItem(cartItem, "price") * quantity;
      return updateCartItem(cartItem, {
        quantity,
        totalPrice,
      });
    },
    (cartItems) => {
      const price = objectGet(itemToAdd, "price");
      const cartItem = updateCartItem(createCartItem(itemToAdd), {
        quantity: 1,
        totalPrice: price,
      });
      return arrayPush(cartItems, cartItem);
    }
  );
}

export function subtractFromCart(cartItems: CartItems, id: number) {
  return arrayFind(
    cartItems,
    (cartItem) => {
      return (
        readCartItem(cartItem, "id") === id &&
        readCartItem(cartItem, "quantity") > 1
      );
    },
    (cartItem) => {
      const quantity = readCartItem(cartItem, "quantity") - 1;
      const totalPrice = readCartItem(cartItem, "price") * quantity;
      return updateCartItem(cartItem, {
        quantity,
        totalPrice,
      });
    },
    (cartItems) => {
      return arrayFilter(
        cartItems,
        (cartItem) => readCartItem(cartItem, "id") !== id
      );
    }
  );
}

export function removeFromCart(cartItems: CartItems, id: number) {
  return arrayFilter(cartItems, (item) => readCartItem(item, "id") !== id);
}

export function mapCartItems<T>(
  items: CartItems,
  modify: (item: CartItem) => T
) {
  return arrayMap(items, modify);
}

export function countCartItems(items: CartItems) {
  return items.length;
}

export function calcPrice(
  items: CartItems,
  predicate: (item: CartItem) => boolean
) {
  return arrayReduce(
    items,
    (totalPrice, item) =>
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
  return arraySort(items, compare);
}
