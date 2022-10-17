import * as R from "ramda";
import {
  Cart,
  countItems,
  findItem,
  hasItemProp,
  mapCart,
  readItemProp,
  updateItem,
} from "sampleCode/roa/library";

export function shouldOfferWatchDiscount(cart: Cart) {
  const count = countItems(cart);
  const hasWatch = Boolean(findItem("name", "watch")(cart));
  return count >= 10 && hasWatch;
}

export function offerWatchDiscount(cart: Cart) {
  return mapCart(
    R.ifElse(
      hasItemProp("name", "watch"),
      updateItem(
        "price",
        R.pipe(readItemProp("originalPrice"), R.multiply(0.9))
      ),
      R.identity
    )
  )(cart);
}
