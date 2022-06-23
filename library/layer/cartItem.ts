export type CartItem = {
  id: number;
  name: string;
  price: number;
  shipping: number;
  quantity: number;
};

export type ExtendedCartitem = CartItem & {
  [key: string | number | symbol]: any;
};

export type CartItemWighoutQuantity = Omit<CartItem, "quantity">;

export function makeCartItem(properties: ExtendedCartitem): CartItem {
  const { id, name, price, shipping, quantity } = properties;
  return { id, name, price, shipping, quantity };
}
