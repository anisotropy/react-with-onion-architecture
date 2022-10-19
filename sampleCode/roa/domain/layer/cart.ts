import * as R from "ramda";
import { Cart, Item, addItemToCart } from "sampleCode/roa/library";
import { offerWatchDiscount, shouldOfferWatchDiscount } from "./layer/cart";

export function addToCart(item: Item) {
  return (cart: Cart) =>
    R.pipe(
      addItemToCart(item),
      R.ifElse(shouldOfferWatchDiscount, offerWatchDiscount, R.identity)
    )(cart);
}
