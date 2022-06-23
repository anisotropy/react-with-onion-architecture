import { useRecoilValue } from "recoil";
import { cartState } from "./cartState";

export default function CartPage() {
  const cart = useRecoilValue(cartState);
  return (
    <div>
      {cart.map((item) => (
        <div key={item.id}>
          {item.name} {item.quantity}
        </div>
      ))}
    </div>
  );
}
