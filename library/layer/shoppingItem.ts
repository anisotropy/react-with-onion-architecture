import {
  arrayReduce,
  objectGet,
  objectIn,
  objectPick,
  objectReduce,
  objectSet,
  objectSetValues,
} from "./layer/common";

export type ShoppingItem = {
  id: number;
  name: string;
  image: string;
  stock: number;
  price: number;
  isPrime: boolean;
  quantity: number;
};

export type ExtendedShoppingItem = Omit<ShoppingItem, "quantity"> & {
  quantity?: number;
} & {
  [key: string | number | symbol]: any;
};

export function createShoppingItem(item: ExtendedShoppingItem): ShoppingItem {
  const shoppingItem = objectPick(item, [
    "id",
    "name",
    "image",
    "stock",
    "price",
    "isPrime",
    "quantity",
  ]);

  return objectIn(shoppingItem, "quantity")
    ? (shoppingItem as ShoppingItem)
    : (objectSet(shoppingItem, "quantity", 0) as ShoppingItem);
}

export function updateShoppingItem<K extends keyof ShoppingItem>(
  item: ShoppingItem,
  values: Partial<ShoppingItem>
) {
  return objectSetValues(item, values);
}

export function readShoppingItem<K extends keyof ShoppingItem>(
  item: ShoppingItem,
  key: K
) {
  return objectGet(item, key);
}

export function readShoppingItemValues<K extends keyof ShoppingItem>(
  item: ShoppingItem,
  keys: K[]
) {
  return arrayReduce(
    keys,
    (values, key) => {
      values[key] = objectGet(item, key);
      return values;
    },
    {} as Pick<ShoppingItem, K>
  );
}
