import { ShoppingItems } from "domain/shopping";
import Item from "./layer/Item";

type ShoppingProps = {
  shoppingItems: ShoppingItems;
  onPut: (id: number) => void;
};

export function Shopping({ shoppingItems, onPut }: ShoppingProps) {
  return (
    <div>
      <div className="items">
        {Object.values(shoppingItems).map((item) => (
          <Item key={item.id} {...item} onPut={onPut} />
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
