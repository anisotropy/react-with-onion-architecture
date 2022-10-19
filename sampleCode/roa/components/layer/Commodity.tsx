type CommodityProps = {
  name: string;
  price: number;
  onAdd: (name: string, price: number) => void;
};

export default function Commodity({ name, price, onAdd }: CommodityProps) {
  return (
    <div>
      <div>{name}</div>
      <div>{price}</div>
      <button onClick={() => onAdd(name, price)}>Add</button>
    </div>
  );
}
