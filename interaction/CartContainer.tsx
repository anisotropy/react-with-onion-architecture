import { useCartState } from "./functions/useCart";
import Cart from "./components/Cart";
import { purchase } from "./functions/purhase";
import { useState } from "react";
import CartLayer from "./components/CartLayer";
import PurchasedCart from "./components/PurchasedCart";

export default function CartContainer() {
  const cartItems = useCartState();
  const [isPurchased, setIsPurchased] = useState(false);
  const [isError, setIsError] = useState(false);

  const onPurchase = async () => {
    try {
      await purchase(cartItems.value);
      cartItems.set([]);
      setIsPurchased(true);
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <CartLayer>
      {isPurchased ? (
        <PurchasedCart />
      ) : (
        <Cart cartItems={cartItems.value} onPurchase={onPurchase} />
      )}
    </CartLayer>
  );
}
