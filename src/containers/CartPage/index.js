import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchData } from "../../actions";
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

const CartPage = ({ getProducts, products }) => {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => getProducts(data), [getProducts, products]);

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
              />
              <ButtonWrapper>
                <Button>Update Shopping Cart</Button>
              </ButtonWrapper>
            </ShoppingList>
          </ShoppingWrapperList>
          <ShoppingSummaryCart />
        </>
      ) : (
        <Loader />
      )}
    </Wrapper>
  );
};

CartPage.propTypes = {
  getProducts: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({})),
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = { getProducts: fetchData };

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
