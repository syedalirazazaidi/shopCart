export interface shoesType {
  id: number;
  name: string;
  price: number;
  photo: string;
  quantity: number;
}
export interface shoesReducer {
  cart: shoesType[];
  error: string;
  isLoading: boolean;
  total: number;
  amount: number;
  quantityA: number;
}
export interface shoesReducerApp {
  reducers: {
    cart: shoesType[];
    error: string;
    isLoading: boolean;
    total: number;
    amount: number;
    quantityA: number;
  };
}
