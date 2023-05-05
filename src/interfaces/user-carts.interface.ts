export interface IUserCarts {
  id: number;
  userId: number;
  date: Date;
  products: ICartProducts[];
  __v: number;
}

export interface ICartProducts {
  productId: number;
  quantity: number;
}
