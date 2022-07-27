import { useCartState, useCartStatus } from "./hooks/layer/useCart";
import Cart from "./components/Cart";
import CartLayout from "./components/CartLayout";
import CartAfterPurchase from "./components/CartAfterPurchase";
import usePurchase from "./hooks/usePurchase";
import PurchaseError from "./components/PurchaseError";

export default function CartPage() {
  const cartItems = useCartState();
  const cartStatus = useCartStatus();
  const purchase = usePurchase(cartItems.value);

  return (
    <CartLayout>
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
    </CartLayout>
  );
}
