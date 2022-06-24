import { ShoppingItem as Item } from "domain/shopping";

type ShoppingItemProps = {
  item: Item;
  onAdd: (id: number) => void;
};

export default function ShoppingItem({ item, onAdd }: ShoppingItemProps) {
  const onClickAdd = () => onAdd(item.id);
  return (
    <div>
      <b>{item.name}</b>
      <div>price: {item.price}</div>
      <div>shipping: {item.shipping}</div>
      <button onClick={onClickAdd}>Add to cart</button>
    </div>
  );
}
