import { ReactNode, useReducer } from "react";
import { TProduct } from "../../types";
import { Cart, CartActions, CartContextType } from "../../types/TCart";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

type AddActionType = { type: CartActions.ADD; item: TProduct };
type SubtractActionType = { type: CartActions.SUBTRACT; id: number };
type DeleteActionType = { type: CartActions.DELETE; id: number };

const cartReducer = (
  state: Cart,
  action: AddActionType | SubtractActionType | DeleteActionType
) => {
  if (action.type === CartActions.ADD) {
    const updatedTotalAmount = state.totalAmount + action.item.price;

    const existingCartItemIndex = state.items.findIndex(
      // number
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex]; //Object
    let updatedItems;

    if (existingCartItem) {
      // if existingCartItem is not undefind
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat({ ...action.item, quantity: 1 });
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === CartActions.SUBTRACT) {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems;
    if (existingItem.quantity === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === CartActions.DELETE) {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - (existingItem.price* existingItem.quantity);

    let updatedItems;
    updatedItems = state.items.filter((item) => item.id !== action.id);

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props: { children: ReactNode }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item: TProduct) => {
    dispatchCartAction({ type: CartActions.ADD, item: item });
  };

  const subtractItemFromCartHandler = (id: number) => {
    dispatchCartAction({ type: CartActions.SUBTRACT, id });
  };

  const deleteItemFromCartHandler = (id: number) => {
    dispatchCartAction({ type: CartActions.DELETE, id });
  };

  const cartContext: CartContextType = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    subtractItem: subtractItemFromCartHandler,
    deleteItem: deleteItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
