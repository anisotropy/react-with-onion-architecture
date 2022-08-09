import { mapShoppingItems, readShoppingItem } from "domain/shopping";
import { useShoppingItems } from "./hooks/useShoppingItems";

export default function ShoppingPage() {
  const { shoppingItems, isLoading, isError } = useShoppingItems();

  if (isError) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {mapShoppingItems(shoppingItems, (item) => (
        <div key={readShoppingItem(item, "id")}>
          {readShoppingItem(item, "name")}
        </div>
      ))}
    </div>
  );
}
