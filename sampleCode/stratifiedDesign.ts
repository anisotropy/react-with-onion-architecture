import axios from "axios";
import * as R from "ramda";

// 액션 ---------------------------------------------------------------------------

let globalCart: Cart;

async function purchase() {
  await axios.post("/api/purchase", globalCart);
}

function addToCart(item: Item) {
  globalCart = R.pipe(
    addItemToCart(item),
    R.ifElse(shouldOfferWatchDiscount, offerWatchDiscount, R.identity)
  )(globalCart);
}

// 계산 ---------------------------------------------------------------------------

function shouldOfferWatchDiscount(cart: Cart) {
  const count = countItems(cart);
  const hasWatch = Boolean(findItem("name", "watch")(cart));
  return count >= 10 && hasWatch;
}

function offerWatchDiscount(cart: Cart) {
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

// ---------------------------------------------------------------------------

type Cart = Item[];

function addItemToCart(item: Item) {
  return (cart: Cart) => R.append(item)(cart);
}

const mapCart =
  <T>(modify: (item: Item) => T) =>
  (cart: Cart) => {
    return R.map(modify)(cart);
  };

function countItems(cart: Cart) {
  return R.length(cart);
}

function findItem<K extends keyof Item>(propsName: K, propValue: Item[K]) {
  return (cart: Cart) => R.find(hasItemProp(propsName, propValue))(cart);
}

// ---------------------------------------------------------------------------

type Item = { id: number; name: string; originalPrice: number; price: number };

function readItemProp<K extends keyof Item>(propName: K) {
  return (item: Item) => R.prop(propName, item);
}

function hasItemProp<K extends keyof Item>(propName: K, propValue: Item[K]) {
  return (item: Item) => R.propEq(propName, propValue)(item);
}

function updateItem<K extends keyof Item>(
  propName: K,
  updateValue: (item: Item) => Item[K]
) {
  return (item: Item) => R.set(R.lensProp(propName), updateValue(item))(item);
}
