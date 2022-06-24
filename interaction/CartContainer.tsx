import { useCartState } from "./hooks/useCart";
import Cart from "./components/Cart";

export default function CartContainer() {
  const cartItems = useCartState();
  return <Cart cartItems={cartItems.value} />;
}
