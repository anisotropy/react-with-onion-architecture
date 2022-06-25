import { useCartState } from "./functions/layer/useCart";
import Cart from "./components/Cart";
import CartLayer from "./components/CartLayer";
import CartAfterPurchase from "./components/CartAfterPurchase";
import usePurchase from "./functions/usePurchase";

export default function CartContainer() {
  const cartItems = useCartState();

  const purchase = usePurchase(cartItems.value);

  return (
    <CartLayer>
      {purchase.items ? (
        <CartAfterPurchase items={purchase.items} />
      ) : (
        <Cart cartItems={cartItems.value} onPurchase={purchase.callback} />
      )}
    </CartLayer>
  );
}
