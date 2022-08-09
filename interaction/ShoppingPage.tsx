import { addToCart } from "domain/cart";
import { getShoppingItem, increateShoppingItem } from "library/shopping";
import ShoppingLayout from "./components/ShoppingLayout";
import { ShoppingList } from "./components/ShoppingList";
import useCart from "./hooks/useCart";
import useShoppingItems from "./hooks/useShoppingItems";

export default function ShoppingPage() {
  const shopping = useShoppingItems();
  const cart = useCart();

  if (shopping.isError) return <div>Failed to load</div>;
  if (shopping.isLoading) return <div>Loading...</div>;

  const onAddToCart = (id: number) => {
    const item = getShoppingItem(shopping.items, id);
    shopping.setItems((items) => increateShoppingItem(items, id));
    cart.setItems((items) => addToCart(items, item));
  };

  return (
    <ShoppingLayout
      list={<ShoppingList items={shopping.items} onAddToCart={onAddToCart} />}
    />
  );
}
