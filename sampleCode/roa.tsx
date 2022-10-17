import * as R from "ramda";

// 인터랙션 레이어 #################################################

// 페이지: 액션 ---------------------------------------------------------

function PurchasePage() {
  const { cart } = useCart();

  const purchase = usePurchase();

  return (
    <div>
      <div>{mapCart((item) => <div>{item.name}</div>)(cart)}</div>
      <button onClick={purchase}>Purchase</button>
    </div>
  );
}

function ShoppingPage() {
  const { setCart } = useCart();

  const onAdd = (name: string, price: number) => {
    const item = createItem(name, price);
    setCart(addToCart(item));
  };

  return (
    <div>
      <Commodity name="watch" price={100000} onAdd={onAdd} />
      <Commodity name="apple" price={3000} onAdd={onAdd} />
    </div>
  );
}

// 훅: 엑션 -------------------------------------------------------

import { useRecoilState } from "recoil";
import axios from "axios";

function useCart() {
  const [cart, setCart] = useRecoilState(cartState);
  return {
    cart,
    setCart,
  };
}

function usePurchase() {
  const [cart] = useRecoilState(cartState);

  const purchase = async () => await axios.post("/api/purchase", cart);

  return purchase;
}

// 전역 상태: 액션 --------------------------------------------------------

import { atom } from "recoil";

const cartState = atom<Cart>({
  key: "cartState",
  default: createEmptyCart(),
});

// 컴포넌트: 계산 -------------------------------------------------------------------------

type CommodityProps = {
  name: string;
  price: number;
  onAdd: (name: string, price: number) => void;
};

function Commodity({ name, price, onAdd }: CommodityProps) {
  return (
    <div>
      <div>{name}</div>
      <div>{price}</div>
      <button onClick={() => onAdd(name, price)}>Add</button>
    </div>
  );
}

// 도메인 레이어 #############################################################################3

// 장바구니 비즈니스 로직: 계산 ---------------------------------------------------------------------------

function addToCart(item: Item) {
  return (cart: Cart) =>
    R.pipe(
      addItemToCart(item),
      R.ifElse(shouldOfferWatchDiscount, offerWatchDiscount, R.identity)
    )(cart);
}

// 장바구니 비즈니스 로직(하위 레이어): 계산 -----------------------------------------

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

// 장바구니 기본 동작: 인터페이스, 계산 ---------------------------------------------------------------------------

type Cart = Item[];

function createEmptyCart() {
  return [] as Cart;
}

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

// 장바구니 아이템 기본 동작: 계산 ---------------------------------------------------------------------------

type Item = { name: string; originalPrice: number; price: number };

function createItem(name: string, price: number) {
  return { name, originalPrice: price, price } as Item;
}

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
