import axios, { AxiosResponse } from "axios";
import { ShoppingItems } from "library/shopping";
import useSWR from "swr";

type Data = { items: ShoppingItems };

export default function useShoppingItems() {
  const { data, error } = useSWR<AxiosResponse<Data>>("/api/items", axios.get);

  return {
    shoppingItems: data?.data.items,
    isLoading: !data && !error,
    isError: Boolean(error),
  };
}
