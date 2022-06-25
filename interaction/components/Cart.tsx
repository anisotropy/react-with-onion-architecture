import { Cart as CartItems, cartMap, isCartEmpty } from "domain/cart";
import CartItem from "./layer/CartItem";
import Button from "./layer/layer/Button";

type CartProps = {
  cartItems: CartItems;
  onPurchase: () => void;
};

export default function Cart({ cartItems, onPurchase }: CartProps) {
  return (
    <>
      {isCartEmpty(cartItems) ? (
        <p>No items</p>
      ) : (
        <>
          <div className="cartitems">
            {cartMap(cartItems, (item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="button-wrapper">
            <Button text="Purchase" onClick={onPurchase} />
          </div>
        </>
      )}
      <style jsx>{`
        .cartitems > :global(*) {
          margin-top: 1rem;
        }
        .button-wrapper {
          margin-top: 1rem;
        }
      `}</style>
    </>
  );
}
