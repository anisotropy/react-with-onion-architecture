import { addToCart } from "domain/cart";
import { getShoppingItem, increateShoppingItem } from "library/shopping";
import { Suspense, useEffect, useState } from "react";
import Filter from "./components/Filter";
import ShoppingLayout from "./components/ShoppingLayout";
import { ShoppingList } from "./components/ShoppingList";
import useCart from "./hooks/useCart";
import useShoppingItems from "./hooks/useShoppingItems";

function ShoppingPage() {
  const shopping = useShoppingItems();
  const cart = useCart();

  const onAddToCart = (id: number) => {
    const item = getShoppingItem(shopping.items, id);
    shopping.setItems((items) => increateShoppingItem(items, id));
    cart.setItems((items) => addToCart(items, item));
  };

  const onFilter = (by: Parameters<typeof shopping.setFilterBy>[0]) => {
    shopping.setFilterBy(by);
  };

  return (
    <ShoppingLayout
      filter={<Filter by={shopping.filterBy} onFilter={onFilter} />}
      list={<ShoppingList items={shopping.items} onAddToCart={onAddToCart} />}
    />
  );
}

// TODO: Suspense를 wrapping하는 HOC 필요
export default function ShoppingPageWithSuspense() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const Loading = <div>Loading ...</div>;

  return mounted ? (
    <Suspense fallback={Loading}>
      <ShoppingPage />
    </Suspense>
  ) : (
    Loading
  );
}
