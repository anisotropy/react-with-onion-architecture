import axios from "axios";
import { Cart } from "domain/cart";
import { useCallback } from "react";
import { useAsync } from "./layer/layer/common";
import { useCartState } from "./layer/useCart";

type PurchaseRes = { cart: Cart };

export default function usePurchase(cart: Cart) {
  const fetcher = useCallback(async () => {
    return await axios.post<PurchaseRes>("/api/purchase", cart);
  }, [cart]);

  const cartItems = useCartState();

  const { data, error, callback, reset } = useAsync(fetcher, () => {
    cartItems.initialize();
  });

  return { items: data?.data.cart, error: true, callback, reset };
}
