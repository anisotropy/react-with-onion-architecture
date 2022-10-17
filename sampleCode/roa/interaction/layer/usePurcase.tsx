import axios from "axios";
import { useRecoilState } from "recoil";
import { cartState } from "./layer/cartState";

export default function usePurchase() {
  const [cart] = useRecoilState(cartState);

  const purchase = async () => await axios.post("/api/purchase", cart);

  return purchase;
}
