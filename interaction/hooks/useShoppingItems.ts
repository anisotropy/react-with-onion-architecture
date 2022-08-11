import axios, { AxiosResponse } from "axios";
import { addShoppingItem } from "domain/shopping";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import useSWR from "swr";
import {
  displayedShoppingState,
  shoppingState,
  shoppingStatusState,
} from "./layer/states/shopping";
import {
  setShoppingStatus,
  ShoppingStatus,
} from "./layer/states/library/shopping";

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
  const [status, setStatus] = useRecoilState(shoppingStatusState);
  const { filterBy } = status;

  useEffect(() => {
    if (!data) return;
    setItems((items) => addShoppingItem(items, ...data.data));
  }, [data, setItems]);

  const setFilterBy = (filterBy: ShoppingStatus["filterBy"]) => {
    setStatus((prevStatus) => setShoppingStatus(prevStatus, { filterBy }));
  };

  return {
    items: useRecoilValue(displayedShoppingState),
    setItems,
    filterBy,
    setFilterBy,
    isLoading: !data && !error,
    isError: Boolean(error),
  };
}
