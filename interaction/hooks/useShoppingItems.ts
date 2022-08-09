import axios, { AxiosResponse } from "axios";
import {
  addShoppingItem,
  FilterBy,
  filterShoppingItemsBy,
} from "domain/shopping";
import { objectSet } from "domain/common";
import { useEffect, useMemo } from "react";
import { useRecoilState } from "recoil";
import useSWR from "swr";
import { shoppingState, shoppingStatus } from "./states/shopping";

type Item = {
  id: number;
  name: string;
  type: string;
  price: number;
};

export default function useShoppingItems() {
  const { data, error } = useSWR<AxiosResponse<Item[]>>(
    "/api/items",
    axios.get
  );
  const [items, setItems] = useRecoilState(shoppingState);
  const [status, setStatus] = useRecoilState(shoppingStatus);
  const { filterBy } = status;

  useEffect(() => {
    if (!data) return;
    setItems((items) => addShoppingItem(items, ...data.data));
  }, [data, setItems]);

  const setFilterBy = (by: FilterBy) => {
    setStatus((prevStatus) => objectSet(prevStatus, "filterBy", by));
  };

  const displayedItems = useMemo(
    () => filterShoppingItemsBy(items, filterBy),
    [items, filterBy]
  );

  return {
    items: displayedItems,
    setItems,
    filterBy,
    setFilterBy,
    isLoading: !data && !error,
    isError: Boolean(error),
  };
}
