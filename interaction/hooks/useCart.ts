import { useRecoilState } from "recoil";
import { cartState } from "./states/cart";

export default function useCart() {
  const [items, setItems] = useRecoilState(cartState);
  return {
    items,
    setItems,
  };
}
