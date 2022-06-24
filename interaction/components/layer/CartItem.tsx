import { CartItem as Item } from "domain/cart";

type CartItemProps = {
  item: Item;
};

export default function CartItem({ item }: CartItemProps) {
  return (
    <>
      <div className="cartitem">
        <b>{item.name}</b>
        <div>qauntity: {item.quantity}</div>
        <div>total amount: {item.amount}</div>
        <div>shipping: {item.shipping}</div>
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
