type ItemProps = {
  id: number;
  name: string;
  price: number;
  shipping: number;
  onAdd: (id: number) => void;
};

export default function Item({ id, name, price, shipping, onAdd }: ItemProps) {
  const onClickAdd = () => onAdd(id);
  return (
    <div>
      <b>{name}</b>
      <div>price: {price}</div>
      <div>shipping: {shipping}</div>
      <button onClick={onClickAdd}>Add to cart</button>
    </div>
  );
}
