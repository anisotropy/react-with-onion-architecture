import axios from "axios";
import { useCallback } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { convCartItemsToPurchaseReq, PurchaseRes } from "./states/library/cart";
import { cartState } from "./states/cart";
import { useAsync } from "./states/library/common";
import { emptyCart } from "domain/cart";
import { setShoppingItems as setShItems } from "domain/shopping";
import { shoppingState } from "./states/shopping";
import { updateShoppingItem } from "domain/shopping";

export default function usePurchase() {
  const [cartItems, setCartItems] = useRecoilState(cartState);
  const setShoppingItems = useSetRecoilState(shoppingState);

  const asyncFunc = useCallback(async () => {
    const items = convCartItemsToPurchaseReq(cartItems);
    const { data } = await axios.post<PurchaseRes>("/api/purchase", items);
    return data.purchasedItems;
  }, [cartItems]);

  return useAsync(asyncFunc, () => {
    setCartItems(emptyCart);
    setShoppingItems((items) =>
      setShItems(items, (item) => updateShoppingItem(item, { quantity: 0 }))
    );
  });
}
