import { CartItems, mapCartItems } from "domain/cart";

export type PurchaseReq = {
  id: number;
  name: string;
  type: string;
  price: string;
  quantity: number;
}[];

export type PurchaseRes = {
  purchasedItems: {
    id: number;
    name: string;
    type: string;
    price: string;
    quantity: number;
  }[];
};

export function convCartItemsToPurchaseReq(items: CartItems) {
  return mapCartItems(items, (item) => item);
}
