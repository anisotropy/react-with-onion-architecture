import type { NextApiRequest, NextApiResponse } from "next";

type Item = {
  id: number;
  name: string;
  type: string;
  price: number;
};

type Items = Item[];

export default function items(
  req: NextApiRequest,
  res: NextApiResponse<Items>
) {
  const items = [
    { id: 1, name: "Banana", type: "Fruit", price: 20900 },
    { id: 2, name: "Apple", type: "Fruit", price: 44500 },
    { id: 3, name: "Grape", type: "Fruit", price: 49900 },
    { id: 4, name: "Watermelon", type: "Fruit", price: 42190 },
    { id: 5, name: "Lettuce", type: "Vegetable", price: 16900 },
    { id: 6, name: "Onion", type: "Vegetable", price: 12900 },
    { id: 7, name: "Cucumber", type: "Vegetable", price: 17900 },
    { id: 8, name: "Spinach", type: "Vegetable", price: 2950 },
    { id: 9, name: "Pork", type: "Meat", price: 7800 },
    { id: 10, name: "Beef", type: "Meat", price: 99000 },
    { id: 11, name: "Chicken", type: "Meat", price: 9200 },
    { id: 12, name: "Duck", type: "Meat", price: 9600 },
  ];
  res.status(200).json(items);
}
