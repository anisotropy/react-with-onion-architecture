import { addItemToCart, createItem } from "sampleCode/roa/library";
import { Commodity } from "sampleCode/roa/components";
import useCart from "./layer/useCart";

export default function ShoppingPage() {
  const { setCart } = useCart();

  const onAdd = (name: string, price: number) => {
    const item = createItem(name, price);
    setCart(addItemToCart(item));
  };

  return (
    <div>
      <Commodity name="watch" price={100000} onAdd={onAdd} />
      <Commodity name="apple" price={3000} onAdd={onAdd} />
    </div>
  );
}
