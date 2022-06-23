type ItemProps = {
  name: string;
  price: number;
  shipping: number;
};

export default function Item({ name, price, shipping }: ItemProps) {
  return (
    <div>
      <b>{name}</b>
      <div>price: {price}</div>
      <div>shipping: {shipping}</div>
      <button>Put</button>
    </div>
  );
}
