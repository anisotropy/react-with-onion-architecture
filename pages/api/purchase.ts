import type { NextApiRequest, NextApiResponse } from "next";

type PurchasedItem = {
  id: number;
  name: string;
  type: string;
  price: string;
  quantity: number;
};

type Response = { purchasedItems: PurchasedItem[] };

type Request = PurchasedItem[];

export default function items(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  const purchasedItems = req.body as Request;

  res.status(200).json({ purchasedItems });
}
