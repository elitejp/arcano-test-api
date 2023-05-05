import { Request, Response } from "express";
import listCartHistoryService from "../services/list-cart-history.service";

const listCartHistoryController = async (req: Request, res: Response) => {
  const { userId } = req.params;

  const CartHistory = await listCartHistoryService(userId);

  return res.json(CartHistory);
};

export { listCartHistoryController };
