import axios, { AxiosResponse } from "axios";
import useSWR from "swr";

type Item = {
  id: number;
  name: string;
  price: number;
  shipping: number;
};

type Items = {
  [id: number]: Item;
};

type Data = { items: Items };

export default function useShoppingItems() {
  const { data, error } = useSWR<AxiosResponse<Data>>("/api/items", axios.get);

  return {
    shoppingItems: data?.data.items,
    isLoading: !data && !error,
    isError: Boolean(error),
  };
}
