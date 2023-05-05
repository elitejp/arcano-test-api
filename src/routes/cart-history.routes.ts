import { Router } from "express";
import { listCartHistoryController } from "../controllers/cart-history.controller";

const cartHistoryRoutes = Router();

cartHistoryRoutes.get("/:userId", listCartHistoryController);

export { cartHistoryRoutes };
