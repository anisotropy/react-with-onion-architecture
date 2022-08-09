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
    { id: 1, name: "banana", type: "fruit", price: 20900 },
    { id: 2, name: "apple", type: "fruit", price: 44500 },
    { id: 3, name: "grape", type: "fruit", price: 49900 },
    { id: 4, name: "watermelon", type: "fruit", price: 42190 },
    { id: 5, name: "lettuce", type: "vegetable", price: 16900 },
    { id: 6, name: "onion", type: "vegetable", price: 12900 },
    { id: 7, name: "cucumber", type: "vegetable", price: 17900 },
    { id: 8, name: "spinach", type: "vegetable", price: 2950 },
    { id: 9, name: "pork", type: "meat", price: 7800 },
    { id: 10, name: "beef", type: "meat", price: 99000 },
    { id: 11, name: "chicken", type: "meat", price: 9200 },
    { id: 12, name: "duck", type: "meat", price: 9600 },
  ];
  res.status(200).json(items);
}
