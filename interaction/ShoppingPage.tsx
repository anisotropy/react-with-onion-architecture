import ShoppingLayout from "./components/ShoppingLayout";
import { ShoppingList } from "./components/ShoppingList";
import { useShoppingItems } from "./hooks/useShoppingItems";

export default function ShoppingPage() {
  const { shoppingItems, isLoading, isError } = useShoppingItems();

  if (isError) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <ShoppingLayout
      list={<ShoppingList items={shoppingItems} onAdd={() => {}} />}
    />
  );
}
