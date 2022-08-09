import { FilterBy } from "domain/shopping";
import { useCallback } from "react";
import Button from "./layer/layer/Button";

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
        <Button {...props("all")}>All</Button>
        <Button {...props("fruit")}>Fruit</Button>
        <Button {...props("vegetable")}>Vegetable</Button>
        <Button {...props("meat")}>Meat</Button>
      </div>
      <style jsx>{`
        .filter > :global(*) + :global(*) {
          margin-left: 1rem;
        }
      `}</style>
    </>
  );
}
