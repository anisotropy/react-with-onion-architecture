import {
  mapShoppingItems,
  readShoppingItem,
  ShoppingItems,
} from "domain/shopping";
import ShoppingItem from "./layer/ShoppingItem";

type ShoppingListProps = {
  items: ShoppingItems;
  onAddToCart: (id: number) => void;
};

export function ShoppingList({ items, onAddToCart }: ShoppingListProps) {
  return (
    <div className="shoppingList">
      {mapShoppingItems(items, (item) => (
        <ShoppingItem
          key={readShoppingItem(item, "id")}
          item={item}
          onAddToCart={onAddToCart}
        />
      ))}
      <style jsx>{`
        .shoppingList > :global(*) + :global(*) {
          margin-top: 1rem;
        }
      `}</style>
    </div>
  );
}
