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

export const removeItem = (id) => ({ type: REMOVE_ITEM, id });

export const updateCart = (value, price) => ({
  type: UPDATE_CART,
  value,
  price,
});

export const completedCart = () => ({ type: COMPLETED_CART });
