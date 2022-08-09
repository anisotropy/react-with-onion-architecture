import axios, { AxiosResponse } from "axios";
import { addShoppingItem } from "domain/shopping";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import useSWR from "swr";
import { shoppingState } from "./states/shopping";

type Item = {
  id: number;
  name: string;
  type: string;
  price: number;
};

export function useShoppingItems() {
  const { data, error } = useSWR<AxiosResponse<Item[]>>(
    "/api/items",
    axios.get
  );
  const [shoppingItems, setShoppingItems] = useRecoilState(shoppingState);

  useEffect(() => {
    if (!data) return;
    setShoppingItems((items) => addShoppingItem(items, ...data.data));
  }, [data, setShoppingItems]);

  return {
    shoppingItems,
    isLoading: !data && !error,
    isError: Boolean(error),
  };
}
