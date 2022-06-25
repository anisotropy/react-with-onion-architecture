import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  cartStatusState,
  cartState,
  cartDiscountedState,
} from "./states/cartState";
import { emptyCart } from "domain/cart";
import { useCallback } from "react";

export function useCartState() {
  const set = useSetRecoilState(cartState);
  const value = useRecoilValue(cartDiscountedState);
  const initialize = useCallback(() => {
    set(emptyCart());
  }, [set]);
  return { value, set, initialize };
}

export function useCartStatus() {
  return useRecoilValue(cartStatusState);
}
