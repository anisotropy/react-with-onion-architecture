import {
  CartItem,
  CartItemWighoutQuantity,
  makeCartItem,
} from "./layer/cartItem";
import {
  arrayGet,
  arrayPush,
  arraySet,
  objectSet,
} from "./layer/layer/functions";

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
