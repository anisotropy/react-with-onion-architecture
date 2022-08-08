import {
  objectGet,
  objectIn,
  objectPick,
  objectReduce,
  objectSet,
} from "./layer/common";

export type CartItem = {
  id: number;
  name: string;
  isPrime: boolean;
  image: string;
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
    "isPrime",
    "image",
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
  return objectReduce(
    values,
    (item, key, value) => objectSet(item, key, value as CartItem[K]),
    item
  );
}

export function readCartItem<K extends keyof CartItem>(item: CartItem, key: K) {
  return objectGet(item, key);
}
