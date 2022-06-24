import { CartItem, makeCartItem } from "./layer/cartItem";
import { arrayFind, arrayRemove } from "./layer/layer/functions";

export { type CartItem };

export type Cart = CartItem[];

type ItemToAdd = Omit<CartItem, "amount" | "quantity"> & { price: number };

export function addToCart(cart: Cart, itemToAdd: ItemToAdd) {
  return arrayFind(
    cart,
    (item) => item.id === itemToAdd.id,
    (itemCopy) => {
      itemCopy.quantity += 1;
      itemCopy.amount += itemToAdd.price;
    },
    (cartCopy) => {
      const newItem = makeCartItem({
        ...itemToAdd,
        amount: itemToAdd.price,
        quantity: 1,
      });
      cartCopy.push(newItem);
    }
  );
}

export function calcTotal(cart: Cart) {
  return cart.reduce((total, item) => total + item.amount, 0);
}

export function removeItem(cart: Cart, index: number) {
  return arrayRemove(cart, index);
}

export function isInCart(cart: Cart, name: string) {
  const item = cart.find((item) => item.name === name);
  return Boolean(item);
}
