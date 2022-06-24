import { ShoppingItems } from "domain/shopping";
import ShoppingItem from "./layer/ShoppingItem";

type ShoppingProps = {
  shoppingItems: ShoppingItems;
  onAdd: (id: number) => void;
};

export function Shopping({ shoppingItems, onAdd }: ShoppingProps) {
  return (
    <div>
      <div className="items">
        {Object.values(shoppingItems).map((item) => (
          <ShoppingItem key={item.id} item={item} onAdd={onAdd} />
        ))}
      </div>
      <style jsx>{`
        .items > :global(*) + :global(*) {
          margin-top: 1rem;
        }
      `}</style>
    </div>
  );
}
