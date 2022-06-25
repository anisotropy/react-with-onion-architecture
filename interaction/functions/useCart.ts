import { useRecoilState } from "recoil";
import { cartState } from "./states/cartState";

export function useCartState() {
  const [value, set] = useRecoilState(cartState);
  return { value, set };
}
