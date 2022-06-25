import { useRecoilState } from "recoil";
import { cartState } from "./states/cartState";
import { emptyCart } from "domain/cart";
import { useCallback } from "react";

export function useCartState() {
  const [value, set] = useRecoilState(cartState);
  const initialize = useCallback(() => {
    set(emptyCart());
  }, [set]);
  return { value, set, initialize };
}
