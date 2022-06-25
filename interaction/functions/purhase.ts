import axios from "axios";
import { Cart } from "domain/cart";

type PurchaseRes = Cart;

export async function purchase(cart: Cart) {
  return await axios.post<PurchaseRes>("/api/purchase", cart);
}
