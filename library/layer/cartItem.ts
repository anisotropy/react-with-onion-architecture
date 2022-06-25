export type CartItem = {
  id: number;
  name: string;
  amount: number;
  originalAmount?: number;
  shipping: number;
  quantity: number;
};

export type ExtendedCartitem = CartItem & {
  [key: string | number | symbol]: any;
};

export function makeCartItem(properties: ExtendedCartitem): CartItem {
  const { id, name, amount, shipping, quantity, originalAmount } = properties;
  return { id, name, amount, shipping, quantity, originalAmount };
}
