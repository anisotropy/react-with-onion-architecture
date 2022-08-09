import { addToCart } from "domain/cart";
import { FilterBy, filterShoppingItemsBy } from "domain/shopping";
import { getShoppingItem, increateShoppingItem } from "library/shopping";
import Filter from "./components/Filter";
import ShoppingLayout from "./components/ShoppingLayout";
import { ShoppingList } from "./components/ShoppingList";
import useCart from "./hooks/useCart";
import useShoppingItems from "./hooks/useShoppingItems";

export default function ShoppingPage() {
  const shopping = useShoppingItems();
  const cart = useCart();

  if (shopping.isError) return <div>Failed to load</div>;
  if (shopping.isLoading) return <div>Loading...</div>;

  const onAddToCart = (id: number) => {
    const item = getShoppingItem(shopping.items, id);
    shopping.setItems((items) => increateShoppingItem(items, id));
    cart.setItems((items) => addToCart(items, item));
  };

  const onFilter = (by: FilterBy) => {
    shopping.setFilterBy(by);
  };

  return (
    <ShoppingLayout
      filter={<Filter by={shopping.filterBy} onFilter={onFilter} />}
      list={<ShoppingList items={shopping.items} onAddToCart={onAddToCart} />}
    />
  );
}
