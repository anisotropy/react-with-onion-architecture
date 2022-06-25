import axios from "axios";
import { Cart } from "domain/cart";
import { useCallback } from "react";
import { useAsync } from "./layer/common";

type PurchaseRes = Cart;

export default function usePurchase(cart: Cart) {
  const asyncCallback = useCallback(async () => {
    return await axios.post<PurchaseRes>("/api/purchase", cart);
  }, [cart]);

  const { isCalled, success, data, error, callback, reset } =
    useAsync(asyncCallback);

  return { isCalled, success, data, error, callback, reset };
}
