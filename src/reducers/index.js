import {
  REMOVE_ITEM,
  UPDATE_CART,
  COMPLETED_CART,
  FETCH_DATA,
  FETCH_SUCCES_DATA,
} from "../actions/constants";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, loading: true };
    case FETCH_SUCCES_DATA:
      return { ...state, products: action.products, loading: false };
    case REMOVE_ITEM:
      return {
        ...state,
        products: state.products.filter(({ id }) => id !== action.id),
      };
    case UPDATE_CART:
      return { ...state };
    case COMPLETED_CART:
      return { ...state, completed: true };
    default:
      return state;
  }
};

export default reducer;
