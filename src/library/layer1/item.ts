import { set } from "library/layer2/object";

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
