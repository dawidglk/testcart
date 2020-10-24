import React from "react";
import PropTypes from "prop-types";

import ShoppingListItemWrapper from "./shoppingListItem.style";
import IconRemove from "../../assets/img/x-img.png";
import QuantityItem from "../QuantityItem";

const ShoppingListItem = ({ products, quantity, setQuantity }) => (
  <ShoppingListItemWrapper>
    {products.map(({ id, name, price, img }) => (
      <div key={id}>
        <p>
          <img src={IconRemove} alt="remove" />
        </p>
        <p>
          <img src={img} alt={name} />
        </p>
        <p>{name}</p>
        <p>
          <b>{`$${price}`}</b>
        </p>
        <QuantityItem quantity={quantity} setQuantity={setQuantity} />
      </div>
    ))}
  </ShoppingListItemWrapper>
);

ShoppingListItem.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({})),
  setQuantity: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default ShoppingListItem;
