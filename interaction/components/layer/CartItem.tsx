import { CartItem as Item } from "domain/cart";
import { readCartItem } from "domain/cart";
import Button from "./layer/Button";

type CartItemProps = {
  item: Item;
  onRemoveFromCart: (id: number) => void;
};

export default function CartItem({ item, onRemoveFromCart }: CartItemProps) {
  const onRemove = () => {
    onRemoveFromCart(readCartItem(item, "id"));
  };
  return (
    <>
      <div className="cartItem">
        <h1>{readCartItem(item, "name")}</h1>
        <div>{readCartItem(item, "type")}</div>
        <div>Qauntity: {readCartItem(item, "quantity")}</div>
        <div>Total Price: {readCartItem(item, "totalPrice")}</div>
        <div className="buttons">
          <Button onClick={onRemove}>Remove from Cart</Button>
        </div>
      </div>
      <style jsx>{`
        .cartItem {
          border: solid 1px #aaa;
          padding: 1rem;
          width: 20rem;
          border-radius: 0.5rem;
        }
        h1 {
          margin: 0;
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }
        .buttons {
          margin-top: 0.5rem;
        }
      `}</style>
    </>
  );
}
