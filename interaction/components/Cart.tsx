import {
  Cart as CartItems,
  cartMap,
  CartStatus,
  isCartEmpty,
} from "domain/cart";
import CartItem from "./layer/CartItem";
import Button from "./layer/layer/Button";

type CartProps = {
  items: CartItems;
  status: CartStatus;
  onPurchase: () => void;
};

export default function Cart({ items, status, onPurchase }: CartProps) {
  if (isCartEmpty(items)) {
    return <p>No items</p>;
  }

  return (
    <div className="wrapper">
      <div className="cartitems">
        {cartMap(items, (item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div>
        <div>total amount: {status.totalAmount}</div>
        <div>
          total shipping:{" "}
          <span className="shipping">{status.totalShipping}</span>{" "}
          {status.isFreeShipping && 0}
        </div>
        <div>tax: {status.tax}</div>
      </div>
      <div>
        <Button text="Purchase" onClick={onPurchase} />
      </div>
      <style jsx>{`
        .wrapper > * {
          margin-top: 1rem;
        }
        .cartitems > :global(*) {
          margin-top: 1rem;
        }
        .shipping {
          text-decoration: ${status.isFreeShipping ? "line-through" : "none"};
        }
      `}</style>
    </div>
  );
}
