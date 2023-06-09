import { Response } from "express";
import { AppError } from "../errors/AppError";
import {
  ICartHistory,
  ICartHistoryResponse,
  IProductDetailHistory,
} from "../interfaces/cart-history.interface";
import { IProductDetail } from "../interfaces/product-detail.interface";
import { ICartProducts, IUserCarts } from "../interfaces/user-carts.interface";
import { IUser } from "../interfaces/user.interface";
import axios from "axios";

const listCartHistoryService = async (
  userId: string
): Promise<ICartHistoryResponse> => {
  const products: IProductDetail[] = await axios
    .get("https://fakestoreapi.com/products")
    .then((res) => res.data);

  const userCarts: IUserCarts[] = await axios
    .get(`https://fakestoreapi.com/carts/user/${userId}`)
    .then((res) => res.data);

  const user: IUser = await axios
    .get(`https://fakestoreapi.com/users/${userId}`)
    .then((res) => res.data);

  if (userCarts.length === 0) {
    throw new AppError("Esse usuario não existe ou não tem historico", 404);
  }

  let userTotal = 0;
  const userCartHistory = userCarts.map((carts: IUserCarts) => {
    let cartTotal = 0;
    const productsDetailHistory: IProductDetailHistory[] = carts.products.map(
      (cartProduct: ICartProducts) => {
        const productDetail = products.find(
          (product: IProductDetail) => cartProduct.productId === product.id
        );

        if (productDetail === undefined) {
          throw new AppError("Internal Server Error", 500);
        }

        const { rating, ...product } = productDetail;
        const total = product.price * cartProduct.quantity;

        const productDetailHistory: IProductDetailHistory = {
          ...product,
          quantity: cartProduct.quantity,
          total: total,
        };

        cartTotal += total;
        return productDetailHistory;
      }
    );

    const cartHistory: ICartHistory = {
      id: carts.id,
      date: carts.date,
      products: productsDetailHistory,
      total: cartTotal,
    };

    userTotal += cartTotal;
    return cartHistory;
  });

  const cartHistoryResponse: ICartHistoryResponse = {
    userId: Number(userId),
    email: user.email,
    fullName: `${user.name.firstname} ${user.name.lastname}`,
    carts: userCartHistory,
    total: userTotal,
  };

  return cartHistoryResponse;
};

export default listCartHistoryService;
