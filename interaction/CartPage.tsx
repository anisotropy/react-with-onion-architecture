import { subtractFromCart } from "domain/cart";
import { decreaseShoppingItem } from "library/shopping";
import Cart from "./components/Cart";
import CartLayout from "./components/CartLayout";
import useCart from "./hooks/useCart";
import useShoppingItems from "./hooks/useShoppingItems";

export default function CartPage() {
  const cart = useCart();
  const shopping = useShoppingItems();

  const onRemoveFromCart = (id: number) => {
    cart.setItems((items) => subtractFromCart(items, id));
    shopping.setItems((items) => decreaseShoppingItem(items, id));
  };

  return (
    <CartLayout
      list={<Cart items={cart.items} onRemoveFromCart={onRemoveFromCart} />}
    />
  );

  // return (
  //   <CartLayout>
  //     {purchase.error ? (
  //       <PurchaseError />
  //     ) : purchase.items ? (
  //       <CartAfterPurchase items={purchase.items} />
  //     ) : (
  //       <Cart
  //         items={cartItems.value}
  //         status={cartStatus}
  //         onPurchase={purchase.callback}
  //       />
  //     )}
  //   </CartLayout>
  // );
}
