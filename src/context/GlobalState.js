import React, { createContext, useReducer } from 'react';

//import { useHistory } from 'react-router-dom';
import AppReducer from './AppReducer';

const initialState = {
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  coupon: localStorage.getItem('coupon') || '',
  discountCode: 'xyz123',
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function addToCart(data) {
    var cart = state.cart;

    // replace item with the same id color and size
    var filteredCart = cart.filter((item) => {
      if (item.id === data.id) {
        if (item.color === data.color) {
          if (item.size === data.size) {
            return false;
          }
          return true;
        }
        return true;
      }
      return true;
    });
    var newCart = [data, ...filteredCart];
    localStorage.setItem('cart', JSON.stringify(newCart));
    dispatch({
      type: 'LOAD_CART',
      payload: newCart,
    });
  }
  function addCoupon(data) {
    localStorage.setItem('coupon', data);
    dispatch({
      type: 'ADD_COUPON',
      payload: data,
    });
  }
  function removeCoupon() {
    localStorage.removeItem('coupon');
    dispatch({
      type: 'DELETE_COUPON',
      payload: '',
    });
  }
  function deleteFromCart(data) {
    var cart = state.cart;
    var newCart = cart.filter((item) => {
      if (item.id === data.id) {
        if (item.color === data.color) {
          if (item.size === data.size) {
            return false;
          }
          return true;
        }
        return true;
      }
      return true;
    });
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
        coupon: state.coupon,
        discountCode: state.discountCode,
        addToCart,
        deleteFromCart,
        removeCoupon,
        addCoupon,
        updateCartItem,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
