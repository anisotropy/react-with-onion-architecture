export type CartItem = {
  id: number;
  name: string;
  amount: number;
  shipping: number;
  quantity: number;
};

export type ExtendedCartitem = CartItem & {
  [key: string | number | symbol]: any;
};

export function makeCartItem(properties: ExtendedCartitem): CartItem {
  const { id, name, amount, shipping, quantity } = properties;
  return { id, name, amount, shipping, quantity };
}
