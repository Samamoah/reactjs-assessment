export default (state, action) => {
  switch (action.type) {
    case 'LOAD_CART':
      return {
        ...state,
        cart: action.payload,
      };
    case 'ADD_COUPON':
      return {
        ...state,
        coupon: action.payload,
      };
    case 'DELETE_COUPON':
      return {
        ...state,
        coupon: action.payload,
      };
    default:
      return state;
    // break;
  }
};
