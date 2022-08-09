import { CartItems, countCartItems } from "domain/cart";
import { mapCartItems, readCartItem } from "library/cart";
import CartItem from "./layer/CartItem";

type CartProps = {
  items: CartItems;
};

export default function Cart({ items }: CartProps) {
  if (countCartItems(items) === 0) {
    return <p>No items</p>;
  }

  return (
    <>
      <div className="cartItems">
        {mapCartItems(items, (item) => (
          <CartItem key={readCartItem(item, "id")} item={item} />
        ))}
      </div>
      <style jsx>{`
        .cartItems > :global(*) + :global(*) {
          margin-top: 1rem;
        }
      `}</style>
    </>
  );
}
