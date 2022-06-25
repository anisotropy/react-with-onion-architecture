import type { NextApiRequest, NextApiResponse } from "next";

type CartItem = {
  id: number;
  name: string;
  amount: number;
  shipping: number;
};

type Cart = CartItem[];

type Request = Cart;

type Response = { cart: Cart };

export default function items(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  const cart = req.body as Request;
  res.status(200).json({ cart });
}
