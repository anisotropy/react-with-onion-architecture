import { readShoppingItem, ShoppingItem as Item } from "domain/shopping";
import Button from "./layer/Button";

type ShoppingItemProps = {
  item: Item;
  onAddToCart: (id: number) => void;
};

export default function ShoppingItem({ item, onAddToCart }: ShoppingItemProps) {
  const onClickAdd = () => onAddToCart(readShoppingItem(item, "id"));
  return (
    <>
      <div className="shoppingitem">
        <b>{readShoppingItem(item, "name")}</b>
        <div>{readShoppingItem(item, "type")}</div>
        <div>Price: {readShoppingItem(item, "price")}</div>
        <div>Qunatity: {readShoppingItem(item, "quantity")}</div>
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
