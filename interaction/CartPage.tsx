import { subtractFromCart } from "domain/cart";
import { decreaseShoppingItem } from "library/shopping";
import Cart from "./components/Cart";
import CartLayout from "./components/CartLayout";
import Purchase from "./components/Purchase";
import useCart from "./hooks/useCart";
import usePurchase from "./hooks/usePurchase";
import useShoppingItems from "./hooks/useShoppingItems";

export default function CartPage() {
  const cart = useCart();
  const shopping = useShoppingItems();
  const purchase = usePurchase();

  const onRemoveFromCart = (id: number) => {
    cart.setItems((items) => subtractFromCart(items, id));
    shopping.setItems((items) => decreaseShoppingItem(items, id));
  };

  return (
    <CartLayout
      list={<Cart items={cart.items} onRemoveFromCart={onRemoveFromCart} />}
      purchase={<Purchase items={cart.items} onPurchase={purchase.callback} />}
    />
  );
}
