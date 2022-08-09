import {
  mapShoppingItems,
  readShoppingItem,
  ShoppingItems,
} from "domain/shopping";
import ShoppingItem from "./layer/ShoppingItem";

type ShoppingListProps = {
  items: ShoppingItems;
  onAdd: (id: number) => void;
};

export function ShoppingList({ items, onAdd }: ShoppingListProps) {
  return (
    <div className="shoppingList">
      {mapShoppingItems(items, (item) => (
        <ShoppingItem
          key={readShoppingItem(item, "id")}
          item={item}
          onAdd={() => {}}
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
