import { CartItems, countCartItems } from "domain/cart";
import { mapCartItems, readCartItem } from "library/cart";
import CartItem from "./layer/CartItem";

type CartProps = {
  items: CartItems;
  onRemoveFromCart: (id: number) => void;
};

export default function Cart({ items, onRemoveFromCart }: CartProps) {
  if (countCartItems(items) === 0) {
    return <p>No items</p>;
  }

  return (
    <>
      <div className="cartItems">
        {mapCartItems(items, (item) => (
          <CartItem
            key={readCartItem(item, "id")}
            item={item}
            onRemoveFromCart={onRemoveFromCart}
          />
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
