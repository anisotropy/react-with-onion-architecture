import { set } from "library/base/object";

export type Item = {
  name: string;
  price: number;
  qunatity: number;
  shipping: number;
};

export function makeItem(
  name: string,
  price: number,
  qunatity: number,
  shipping: number
) {
  return { name, price, qunatity, shipping };
}
