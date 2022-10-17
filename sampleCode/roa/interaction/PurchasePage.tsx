import { mapCart } from "sampleCode/roa/library";
import useCart from "./layer/useCart";
import usePurchase from "./layer/usePurcase";

export default function PurchasePage() {
  const { cart } = useCart();

  const purchase = usePurchase();

  return (
    <div>
      <div>{mapCart((item) => <div>{item.name}</div>)(cart)}</div>
      <button onClick={purchase}>Purchase</button>
    </div>
  );
}
