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

export default function useShoppingItems() {
  const { data, error } = useSWR<AxiosResponse<Item[]>>(
    "/api/items",
    axios.get
  );
  const [items, setItems] = useRecoilState(shoppingState);

  useEffect(() => {
    if (!data) return;
    setItems((items) => addShoppingItem(items, ...data.data));
  }, [data, setItems]);

  return {
    items,
    setItems,
    isLoading: !data && !error,
    isError: Boolean(error),
  };
}
