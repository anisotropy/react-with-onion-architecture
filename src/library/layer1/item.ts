export type Item = { name: string; price: number };

export function setPrice(item: Item, price: number) {
  return { ...item, price };
}

export function makeItem(name: string, price: number) {
  return { name, price };
}
