import axios, { AxiosResponse } from "axios";
import { addShoppingItem } from "domain/shopping";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import useSWR from "swr";
import {
  displayedShoppingState,
  shoppingAsyncState,
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
  const fetched = useRecoilValue(shoppingAsyncState);
  const setItems = useSetRecoilState(shoppingState);
  const items = useRecoilValue(displayedShoppingState);

  const [status, setStatus] = useRecoilState(shoppingStatusState);
  const { filterBy } = status;

  useEffect(() => {
    setItems((items) => addShoppingItem(items, ...fetched));
  }, [fetched, setItems]);

  const setFilterBy = (filterBy: ShoppingStatus["filterBy"]) => {
    setStatus((prevStatus) => setShoppingStatus(prevStatus, { filterBy }));
  };

  return {
    items,
    setItems,
    filterBy,
    setFilterBy,
  };
}
