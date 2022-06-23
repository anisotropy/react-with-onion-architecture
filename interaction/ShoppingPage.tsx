import { useSetRecoilState } from "recoil";
import { cartState } from "./cartState";
import Item from "./Item";
import useShoppingItems from "./useShoppingItems";

export default function ShoppingPage() {
  const { items, isLoading, isError } = useShoppingItems();

  const setCart = useSetRecoilState(cartState);

  if (isError) return `Failed to load`;
  if (isLoading) return `Loading...`;
  if (!items) return null;

  const onPut = (id: number) => {
    setCart((cart) => {
      const itemIndex = cart.findIndex((item) => item.id === id);
      if (itemIndex >= 0) {
        const cartCopy = [...cart];
        const cartItem = {
          ...cart[itemIndex],
          quantity: cart[itemIndex].quantity + 1,
        };
        cartCopy[itemIndex] = cartItem;
        return cartCopy;
      } else {
        const cartItem = { ...items[id], quantity: 1 };
        return [...cart, cartItem];
      }
    });
  };

  return (
    <div>
      <div className="items">
        {Object.values(items).map((item) => (
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
