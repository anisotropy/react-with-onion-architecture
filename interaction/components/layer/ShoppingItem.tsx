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
        <h1>{readShoppingItem(item, "name")}</h1>
        <div>{readShoppingItem(item, "type")}</div>
        <div>Price: {readShoppingItem(item, "price")}</div>
        <div>Qunatity: {readShoppingItem(item, "quantity")}</div>
        <Button onClick={onClickAdd}>Add to Cart</Button>
      </div>
      <style jsx>{`
        .shoppingitem {
          border: solid 1px #333;
          padding: 1rem;
          width: 20rem;
          border-radius: 0.5rem;
        }
        .shoppingitem > :global(button) {
          display: block;
          margin-top: 0.5rem;
        }
        h1 {
          margin: 0;
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }
      `}</style>
    </>
  );
}
