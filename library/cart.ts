import {
  CartItem,
  CartItemWighoutQuantity,
  makeCartItem,
} from "./layer/cartItem";
import {
  arrayGet,
  arrayPush,
  arrayRemove,
  arraySet,
  objectSet,
} from "./layer/layer/functions";

export { type CartItem };

export type Cart = CartItem[];

export function putItem(cart: Cart, itemToPut: CartItemWighoutQuantity) {
  const itemIndex = cart.findIndex((item) => item.id === itemToPut.id);
  if (itemIndex >= 0) {
    const cartItem = arrayGet(cart, itemIndex);
    const updatedCartItem = objectSet(
      cartItem,
      "quantity",
      cartItem.quantity + 1
    );
    return arraySet(cart, itemIndex, updatedCartItem);
  } else {
    const cartItem = makeCartItem({ ...itemToPut, quantity: 1 });
    return arrayPush(cart, cartItem);
  }
}

export function calcTotal(cart: Cart) {
  return cart.reduce((total, item) => total + item.price, 0);
}

export function removeItem(cart: Cart, index: number) {
  return arrayRemove(cart, index);
}

export function isInCart(cart: Cart, name: string) {
  const item = cart.find((item) => item.name === name);
  return Boolean(item);
}
