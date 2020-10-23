import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchData } from "../../actions";
import { data } from "../../assets/data";

const CartPage = ({ getProducts, products }) => {
  useEffect(() => getProducts(data), [getProducts, products]);
  return <p>{products}</p>;
};

CartPage.propTypes = {
  getProducts: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({})),
};

const mapStateToProps = (state) => ({
  products: state.data,
});

const mapDispatchToProps = { getProducts: fetchData };

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
