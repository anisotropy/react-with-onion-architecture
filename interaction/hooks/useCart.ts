import { useRecoilState } from "recoil";
import { cartState } from "./layer/states/cart";

export default function useCart() {
  const [items, setItems] = useRecoilState(cartState);
  return {
    items,
    setItems,
  };
}
