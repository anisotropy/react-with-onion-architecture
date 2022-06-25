import { Cart as CartItems, cartMap, isCartEmpty } from "domain/cart";
import CartItem from "./layer/CartItem";
import Button from "./layer/layer/Button";

type CartAfterPurchaseProps = { items: CartItems };

export default function CartAfterPurchase({ items }: CartAfterPurchaseProps) {
  return (
    <>
      <b>You purchased the items bellow:</b>
      <div className="items">
        {cartMap(items, (item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <style jsx>{`
        .items > :global(*) {
          margin-top: 1rem;
        }
      `}</style>
    </>
  );
}
