import React, { createContext, useReducer } from 'react';
import { CARD_ADD_ITEM } from './components/Request';

export const Store = createContext();

const initialState = {
  panier: {
    eltPanier: [],
  },
};

function reducer(state, action) {
  switch (action.type) {
    case CARD_ADD_ITEM:
      const newItem = action.payload;
      const existItem = state.panier.eltPanier.find(
        (item) => item._id === newItem._id
      );
      const eltPanier = existItem
        ? state.panier.eltPanier.map((item) =>
            item._id === existItem._id ? newItem : item
          )
        : [...state.panier.eltPanier, newItem];
      return { ...state, panier: { ...state.panier, eltPanier } };

    default:
      return state;
  }
}
export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
