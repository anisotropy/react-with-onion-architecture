import axios from "axios";
import * as R from "ramda";

// 액션 ###########################################################################

// 레이어 1 ---------------------------------------------------------------------------

async function purchase() {
  const cart = getCart();
  await axios.post("/api/purchase", cart);
}

function addCommodity(item: Item) {
  const cart = getCart();
  const updatedCart = addToCart(item)(cart);
  setCart(updatedCart);
}

// 레이어 2: 전역 상태 ------------------------------------------------------------------------

let globalCart: Cart;

function setCart(cart: Cart) {
  globalCart = cart;
}

function getCart() {
  return globalCart;
}

// 계산 #################################################################

// 레이어 3: 장바구니 비즈니스 로직 ---------------------------------------------------------------------------

function addToCart(item: Item) {
  return (cart: Cart) =>
    R.pipe(
      addItemToCart(item),
      R.ifElse(shouldOfferWatchDiscount, offerWatchDiscount, R.identity)
    )(cart);
}

// 레이어 4: 장바구니 비즈니스 로직) ------------------------------------------------

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

// 레이어 5: 장바구니 기본 동작 ---------------------------------------------------------------------------

type Cart = Item[];

function addItemToCart(item: Item) {
  return (cart: Cart) => R.append(item)(cart);
}

function mapCart<T>(modify: (item: Item) => T) {
  return (cart: Cart) => R.map(modify)(cart);
}

function countItems(cart: Cart) {
  return R.length(cart);
}

function findItem<K extends keyof Item>(propsName: K, propValue: Item[K]) {
  return (cart: Cart) => R.find(hasItemProp(propsName, propValue))(cart);
}

// 레이어 6: 장바구니 아이템 기본 동작 ---------------------------------------------------------------------------

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
