import { CartItem as Item } from "domain/cart";
import { readCartItem } from "domain/cart";

type CartItemProps = {
  item: Item;
};

export default function CartItem({ item }: CartItemProps) {
  return (
    <>
      <div className="cartitem">
        <b>{readCartItem(item, "name")}</b>
        <div>{readCartItem(item, "type")}</div>
        <div>Qauntity: {readCartItem(item, "quantity")}</div>
        <div>Total Price: {readCartItem(item, "totalPrice")}</div>
      </div>
      <style jsx>{`
        .cartitem {
          border: solid 1px #aaa;
          padding: 1rem;
          width: 20rem;
          border-radius: 0.5rem;
        }
      `}</style>
    </>
  );
}
