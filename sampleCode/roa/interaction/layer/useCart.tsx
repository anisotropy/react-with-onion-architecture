import { useRecoilState } from "recoil";
import { cartState } from "./layer/cartState";

export default function useCart() {
  const [cart, setCart] = useRecoilState(cartState);
  return {
    cart,
    setCart,
  };
}
