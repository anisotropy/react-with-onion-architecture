import { useCartState, useCartStatus } from "./functions/layer/useCart";
import Cart from "./components/Cart";
import CartLayer from "./components/CartLayer";
import CartAfterPurchase from "./components/CartAfterPurchase";
import usePurchase from "./functions/usePurchase";
import PurchaseError from "./components/PurchaseError";
import { discountWatch } from "domain/cart";

export default function CartContainer() {
  const cartItems = useCartState();
  const cartStatus = useCartStatus();
  const purchase = usePurchase(cartItems.value);

  return (
    <CartLayer>
      {purchase.error ? (
        <PurchaseError />
      ) : purchase.items ? (
        <CartAfterPurchase items={purchase.items} />
      ) : (
        <Cart
          items={cartItems.value}
          status={cartStatus}
          onPurchase={purchase.callback}
        />
      )}
    </CartLayer>
  );
}
