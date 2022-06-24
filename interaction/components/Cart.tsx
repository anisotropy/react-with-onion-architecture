import { Cart as CartItems } from "domain/cart";
import CartItem from "./layer/CartItem";

type CartProps = { cartItems: CartItems };

export default function Cart({ cartItems }: CartProps) {
  return (
    <div>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <style jsx>{`
        div > :global(*) {
          margin-top: 1rem;
        }
      `}</style>
    </div>
  );
}
