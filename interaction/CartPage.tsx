import Cart from "./components/Cart";
import CartLayout from "./components/CartLayout";
import CartAfterPurchase from "./components/CartAfterPurchase";
import usePurchase from "./hooks/usePurchase";
import PurchaseError from "./components/PurchaseError";
import useCart from "./hooks/useCart";
import { mapCartItems, readCartItem } from "library/cart";

export default function CartPage() {
  const cart = useCart();
  return (
    <div>
      {mapCartItems(cart.items, (item) => (
        <div key={readCartItem(item, "id")}>{readCartItem(item, "name")}</div>
      ))}
    </div>
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
