import { ShoppingItem as Item } from "domain/shopping";
import Button from "./layer/Button";

type ShoppingItemProps = {
  item: Item;
  onAdd: (id: number) => void;
};

export default function ShoppingItem({ item, onAdd }: ShoppingItemProps) {
  const onClickAdd = () => onAdd(item.id);
  return (
    <>
      <div className="shoppingitem">
        <b>{item.name}</b>
        <div>price: {item.price}</div>
        <div>shipping: {item.shipping}</div>
        <Button text="Add to cart" onClick={onClickAdd} />
      </div>
      <style jsx>{`
        .shoppingitem {
          border: solid 1px #aaa;
          padding: 1rem;
          width: 20rem;
          border-radius: 0.5rem;
        }
        .shoppingitem > :global(button) {
          display: block;
          margin-top: 0.5rem;
        }
      `}</style>
    </>
  );
}
