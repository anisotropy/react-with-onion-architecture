import {
  objectGet,
  objectIn,
  objectPick,
  objectReduce,
  objectSet,
  objectSetValues,
} from "./layer/common";

export type CartItem = {
  id: number;
  name: string;
  type: string;
  price: number;
  quantity: number;
  totalPrice: number;
};

export type ExtendedCartItem = Omit<CartItem, "totalPrice"> & {
  totalPrice?: number;
} & {
  [key: string | number | symbol]: any;
};

export function createCartItem(properties: ExtendedCartItem): CartItem {
  const cartItem = objectPick(properties, [
    "id",
    "name",
    "type",
    "price",
    "quantity",
    "totalPrice",
  ]);

  return objectIn(cartItem, "totalPrice")
    ? (cartItem as CartItem)
    : (objectSet(
        cartItem,
        "totalPrice",
        objectGet(cartItem, "price") * objectGet(cartItem, "quantity")
      ) as CartItem);
}

export function updateCartItem<K extends keyof CartItem>(
  item: CartItem,
  values: Partial<CartItem>
) {
  return objectSetValues(item, values);
}

export function readCartItem<K extends keyof CartItem>(item: CartItem, key: K) {
  return objectGet(item, key);
}
