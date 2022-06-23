import type { NextApiRequest, NextApiResponse } from "next";

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

export default function items(req: NextApiRequest, res: NextApiResponse<Data>) {
  const items = {
    1: {
      id: 1,
      name: "egg",
      price: 3000,
      shipping: 2000,
    },
    2: {
      id: 2,
      name: "watch",
      price: 20000,
      shipping: 2000,
    },
    3: {
      id: 3,
      name: "shoes",
      price: 50000,
      shipping: 3000,
    },
    4: {
      id: 4,
      name: "socks",
      price: 5000,
      shipping: 3000,
    },
    5: {
      id: 5,
      name: "t-shirt",
      price: 30000,
      shipping: 2000,
    },
    6: {
      id: 6,
      name: "hat",
      price: 20000,
      shipping: 3000,
    },
  };
  res.status(200).json({ items });
}
