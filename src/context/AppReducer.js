export default (state, action) => {
  switch (action.type) {
    case 'LOAD_CART':
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
    // break;
  }
};
