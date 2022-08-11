import { objectGet, objectSetValues } from "domain/common";

export type ShoppingStatus = {
  filterBy: "All" | "Fruit" | "Vegetable" | "Meat";
};

export function setShoppingStatus<K extends keyof ShoppingStatus>(
  status: ShoppingStatus,
  values: Partial<ShoppingStatus>
) {
  return objectSetValues(status, values);
}

export function readShoppingStatus<K extends keyof ShoppingStatus>(
  status: ShoppingStatus,
  key: K
) {
  return objectGet(status, key);
}
