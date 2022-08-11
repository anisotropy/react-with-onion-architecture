import {
  CartItems,
  cartItemsSum,
  countCartItems,
  readCartItem,
} from "domain/cart";
import { useMemo } from "react";
import Button from "./layer/layer/Button";

type PurchaseProps = {
  items: CartItems;
  onPurchase: () => void;
};

export default function Purchase({ items, onPurchase }: PurchaseProps) {
  const totalPrice = useMemo(
    () => cartItemsSum(items, (item) => readCartItem(item, "price")),
    [items]
  );

  if (countCartItems(items) == 0) return null;

  return (
    <>
      <div className="total">Total: {totalPrice}</div>
      <Button onClick={onPurchase}>Purchase</Button>
      <style jsx>{`
        .total {
          margin-bottom: 1rem;
        }
      `}</style>
    </>
  );
}
