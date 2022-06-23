import { putItem } from "domain/cart";
import { Shopping } from "./components/Shopping";
import { useShoppingItems } from "./hooks/useShoppingItems";
import { useCartState } from "./hooks/useCart";

export default function ShoppingPage() {
  const { shoppingItems, isLoading, isError } = useShoppingItems();
  const cart = useCartState();

  if (isError) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!shoppingItems) return null;

  const onPut = (id: number) => {
    cart.set((prevCart) => putItem(prevCart, shoppingItems[id]));
  };

  return <Shopping shoppingItems={shoppingItems} onPut={onPut} />;
}
