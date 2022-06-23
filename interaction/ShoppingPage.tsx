import Item from "./Item";
import useShoppingItems from "./useShoppingItems";

export default function ShoppingPage() {
  const { items, isLoading, isError } = useShoppingItems();

  if (isError) return `Failed to load`;
  if (isLoading) return `Loading...`;
  if (items) {
    return (
      <div>
        <div className="items">
          {Object.values(items).map((item) => (
            <Item key={item.id} {...item} />
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
}
