import express from "express";

import "dotenv/config";
import { handleErrorMiddleware } from "./middlewares/handleError.middleware";
import { cartHistoryRoutes } from "./routes/cart-history.routes";

const app = express();

app.use("/cart-history", cartHistoryRoutes);

app.use(handleErrorMiddleware);
app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running");
});
