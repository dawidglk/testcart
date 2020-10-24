import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  fetchData,
  completedCart,
  updateCart,
  removeItem,
} from "../../actions";
import { data } from "../../assets/data";

// import styled from "styled-components";

import Title from "../../components/Title";
import Loader from "../../components/Loader";
import HeaderList from "../../components/HeaderList";
import Button from "../../components/Button";
import ShoppingListItem from "../../components/ShoppingListItems";
import Wrapper from "../../components/Wrapper";
import ShoppingWrapperList from "../../components/ShoppingWrapperList";
import ShoppingSummaryCart from "../../components/ShoppingSummaryCart";
import ShoppingList from "../../components/ShoppingList";
import ButtonWrapper from "../../components/ButtonWrapper";
import { sumPrice } from "../../helpers";

const CartPage = ({
  getProducts,
  products,
  makeOrder,
  shippingfree,
  value,
  updateCart,
  removeItem,
}) => {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => getProducts(data), [getProducts]);

  return (
    <Wrapper>
      {products ? (
        <>
          <ShoppingWrapperList>
            <Title>Shopping Cart</Title>
            <ShoppingList>
              <HeaderList />
              <ShoppingListItem
                products={products}
                quantity={quantity}
                setQuantity={setQuantity}
                updateCart={updateCart}
                removeItem={removeItem}
              />
              <ButtonWrapper>
                <Button
                  onClick={() => updateCart(quantity, sumPrice(products))}
                >
                  Update Shopping Cart
                </Button>
              </ButtonWrapper>
            </ShoppingList>
          </ShoppingWrapperList>
          <ShoppingSummaryCart
            makeOrder={makeOrder}
            shippingfree={shippingfree}
            value={value}
          />
        </>
      ) : (
        <Loader />
      )}
    </Wrapper>
  );
};

CartPage.propTypes = {
  getProducts: PropTypes.func.isRequired,
  makeOrder: PropTypes.func.isRequired,
  updateCart: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({})),
  shippingfree: PropTypes.bool,
  value: PropTypes.number,
  removeItem: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
    shippingfree: state.shippingfree,
    value: state.value,
  };
};

const mapDispatchToProps = {
  getProducts: fetchData,
  makeOrder: completedCart,
  updateCart,
  removeItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
