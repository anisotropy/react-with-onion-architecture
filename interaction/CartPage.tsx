import Cart from "./components/Cart";
import CartLayout from "./components/CartLayout";
import useCart from "./hooks/useCart";

export default function CartPage() {
  const cart = useCart();
  return <CartLayout list={<Cart items={cart.items} />} />;

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
