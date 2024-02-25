import React, { createContext, useReducer } from "react";

export const cartContext = createContext();

function CartContext({ children }) {
  const initialState = {
    basket: [],
    user: null,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "Add_To_Cart":
        const checkItem = state.basket.find(
          (item) => item.id === action.item.id
        );
        if (!checkItem) {
          return {
            ...state,
            basket: [...state.basket, { ...action.item, quantity: 1 }],
          };
        } else {
          return {
            ...state,
            basket: state.basket.map((item) =>
              item.id === action.item.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          };
        }
      case "Decrement":
        return {
          ...state,
          basket: state.basket
            .map((item) =>
              item.id === action.id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
            .filter((item) => item.quantity !== 0),
        };
      case "Set_User":
        return { ...state, user: action.user };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  );
}

export default CartContext;
