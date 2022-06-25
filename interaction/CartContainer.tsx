import { useCartState } from "./functions/useCart";
import Cart from "./components/Cart";
import { purchase } from "./functions/purhase";
import { useState } from "react";
import CartLayer from "./components/CartLayer";
import CartAfterPurchase from "./components/CartAfterPurchase";
import { emptyCart, Cart as CartItems, copyCart } from "domain/cart";

export default function CartContainer() {
  const cartItems = useCartState();
  const [purchasedItems, setPurchasedItems] = useState<CartItems | null>(null);
  const [isError, setIsError] = useState(false);

  const onPurchase = async () => {
    try {
      await purchase(cartItems.value);
      setPurchasedItems(copyCart(cartItems.value));
      cartItems.set(emptyCart());
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <CartLayer>
      {purchasedItems ? (
        <CartAfterPurchase items={purchasedItems} />
      ) : (
        <Cart cartItems={cartItems.value} onPurchase={onPurchase} />
      )}
    </CartLayer>
  );
}
