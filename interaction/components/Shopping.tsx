import { ShoppingItems } from "domain/shopping";
import Item from "./layer/Item";

type ShoppingProps = {
  shoppingItems: ShoppingItems;
  onAdd: (id: number) => void;
};

export function Shopping({ shoppingItems, onAdd }: ShoppingProps) {
  return (
    <div>
      <div className="items">
        {Object.values(shoppingItems).map((item) => (
          <Item key={item.id} {...item} onAdd={onAdd} />
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
