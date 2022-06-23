type ItemProps = {
  id: number;
  name: string;
  price: number;
  shipping: number;
  onPut: (id: number) => void;
};

export default function Item({ id, name, price, shipping, onPut }: ItemProps) {
  const onClickPut = () => onPut(id);
  return (
    <div>
      <b>{name}</b>
      <div>price: {price}</div>
      <div>shipping: {shipping}</div>
      <button onClick={onClickPut}>Put</button>
    </div>
  );
}
