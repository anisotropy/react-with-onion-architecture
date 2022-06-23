import { putItem } from "domain/cart";
import { useSetRecoilState } from "recoil";
import { cartState } from "./cartState";
import { Shopping } from "./layer/Shopping";
import useShoppingItems from "./useShoppingItems";

export default function ShoppingPage() {
  const { shoppingItems, isLoading, isError } = useShoppingItems();

  const setCart = useSetRecoilState(cartState);

  if (isError) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!shoppingItems) return null;

  const onPut = (id: number) => {
    setCart((cart) => putItem(cart, shoppingItems[id]));
  };

  return <Shopping shoppingItems={shoppingItems} onPut={onPut} />;
}
