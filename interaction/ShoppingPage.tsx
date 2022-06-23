import { putItem } from "domain/cart";
import { useSetRecoilState } from "recoil";
import { cartState } from "./cartState";
import Item from "./Item";
import useShoppingItems from "./useShoppingItems";

export default function ShoppingPage() {
  const { shoppingItems, isLoading, isError } = useShoppingItems();

  const setCart = useSetRecoilState(cartState);

  if (isError) return `Failed to load`;
  if (isLoading) return `Loading...`;
  if (!shoppingItems) return null;

  const onPut = (id: number) => {
    setCart((cart) => putItem(cart, shoppingItems[id]));
  };

  return (
    <div>
      <div className="items">
        {Object.values(shoppingItems).map((item) => (
          <Item key={item.id} {...item} onPut={onPut} />
        ))}
      </div>
      <style jsx>{`
        .items > :global(*) + :global(*) {
          margin-top: 1rem;
        }
      `}</style>
    </div>
  );
}
