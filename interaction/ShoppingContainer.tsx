import { addToCart } from "domain/cart";
import { Shopping } from "./components/Shopping";
import { useShoppingItems } from "./functions/useShoppingItems";
import { useCartState } from "./functions/layer/useCart";

export default function ShoppingPage() {
  const { shoppingItems, isLoading, isError } = useShoppingItems();
  const cart = useCartState();

  if (isError) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!shoppingItems) return null;

  const onAdd = (id: number) => {
    cart.set((prevCart) => addToCart(prevCart, shoppingItems[id]));
  };

  return <Shopping shoppingItems={shoppingItems} onAdd={onAdd} />;
}
