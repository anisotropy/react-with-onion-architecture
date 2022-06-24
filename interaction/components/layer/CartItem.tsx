type CartItemProps = {
  id: number;
  name: string;
  price: number;
  shipping: number;
  quantity: number;
};

export default function Item({
  id,
  name,
  price,
  shipping,
  quantity,
}: CartItemProps) {
  return (
    <>
      <div className="cartitem">
        <b>{name}</b>
        <div>qauntity: {quantity}</div>
        <div>price: {price}</div>
        <div>shipping: {shipping}</div>
      </div>
      <style jsx>{`
        .cartitem {
          border: solid 1px #aaa;
          padding: 1rem;
          width: 20rem;
          border-radius: 0.5rem;
        }
      `}</style>
    </>
  );
}
