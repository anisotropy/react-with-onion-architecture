import { CartItem as Item } from "domain/cart";

type CartItemProps = {
  item: Item;
};

export default function CartItem({ item }: CartItemProps) {
  const originalAmount = item.originalAmount || item.amount;
  return (
    <>
      <div className="cartitem">
        <b>{item.name}</b>
        <div>qauntity: {item.quantity}</div>
        <div>
          total amount:
          {item.originalAmount ? (
            <span>
              {" "}
              <span className="original-amount">{originalAmount}</span>{" "}
            </span>
          ) : null}
          {item.amount}
        </div>
        <div>shipping: {item.shipping}</div>
      </div>
      <style jsx>{`
        .cartitem {
          border: solid 1px #aaa;
          padding: 1rem;
          width: 20rem;
          border-radius: 0.5rem;
        }
        .original-amount {
          text-decoration: line-through;
        }
      `}</style>
    </>
  );
}
