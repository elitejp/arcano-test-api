export interface ICartHistoryResponse {
  userId: number;
  carts: ICartHistory[];
  total: number;
}

export interface ICartHistory {
  id: number;
  date: Date;
  products: IProductDetailHistory[];
  total: number;
}

export interface IProductDetailHistory {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
  total: number;
}
