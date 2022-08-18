import { useCallback } from "react";
import Button from "./layer/layer/Button";

type FilterBy = "All" | "Fruit" | "Vegetable" | "Meat";

type FilterProps = { by: FilterBy; onFilter: (by: FilterBy) => void };

export default function Filter({ by, onFilter }: FilterProps) {
  const props = useCallback(
    (filterBy: FilterBy) => ({
      round: true,
      border: true,
      text: filterBy !== by,
      onClick: () => onFilter(filterBy),
    }),
    [by, onFilter]
  );

  return (
    <>
      <div className="filter">
        <Button {...props("All")}>All</Button>
        <Button {...props("Fruit")}>Fruit</Button>
        <Button {...props("Vegetable")}>Vegetable</Button>
        <Button {...props("Meat")}>Meat</Button>
      </div>
      <style jsx>{`
        .filter > :global(*) + :global(*) {
          margin-left: 1rem;
        }
      `}</style>
    </>
  );
}
