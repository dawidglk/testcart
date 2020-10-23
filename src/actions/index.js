import {
  REMOVE_ITEM,
  COMPLETED_CART,
  UPDATE_CART,
  FETCH_DATA,
  FETCH_SUCCES_DATA,
} from "./constants";

const requestData = () => ({ type: FETCH_DATA });

const receivedData = (products) => ({ type: FETCH_SUCCES_DATA, products });

export const fetchData = (data) => (dispatch) => {
  dispatch(requestData());
  setTimeout(() => dispatch(receivedData(data)), 1000);
};

export const removeItem = () => ({ type: REMOVE_ITEM });

export const updateCart = () => ({ type: UPDATE_CART });

export const completedCart = () => ({ type: COMPLETED_CART });
