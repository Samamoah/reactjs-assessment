import React, { createContext, useReducer } from 'react';

//import { useHistory } from 'react-router-dom';
import AppReducer from './AppReducer';

const initialState = {
  cart: JSON.parse(localStorage.getItem('cart')) || [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //  const history = useHistory();
  function addToCart(data) {
    var cart = state.cart;

    var filteredCart = cart.filter((item) => item.id !== data.id);
    var newCart = [data, ...filteredCart];
    localStorage.setItem('cart', JSON.stringify(newCart));
    dispatch({
      type: 'LOAD_CART',
      payload: newCart,
    });
  }
  function deleteFromCart(data) {
    var cart = state.cart;
    var newCart = cart.filter((item) => item.id !== data);
    localStorage.setItem('cart', JSON.stringify(newCart));
    dispatch({
      type: 'LOAD_CART',
      payload: newCart,
    });
  }
  function updateCartItem(item, counter) {
    var cart = state.cart;
    console.log(cart.indexOf(item));
    cart[cart.indexOf(item)].quantity = counter;
    localStorage.setItem('cart', JSON.stringify(cart));
    dispatch({
      type: 'LOAD_CART',
      payload: cart,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        cart: state.cart,
        addToCart,
        deleteFromCart,
        updateCartItem,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
