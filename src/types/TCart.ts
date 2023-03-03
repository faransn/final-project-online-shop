import { TProduct } from "./TProduct";

export type Cart = {
  items: ({ quantity: number } & TProduct)[];
  totalAmount: number;
};

export type CartContextType = Cart & {
  addItem: (item: TProduct) => void;
  subtractItem: (id: number) => void;
  deleteItem: (id: number) => void;
};

export enum CartActions {
  ADD = "ADD",
  SUBTRACT = "SUBTRACT",
  DELETE = "DELETE",
}
