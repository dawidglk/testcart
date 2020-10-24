import React from "react";
import PropTypes from "prop-types";

import IconEdit from "../../assets/img/edit-img.png";
import QuantityItemWrapper from "./quantityItem.style";

const QuantityItem = ({ quantity, setQuantity, updateCart, price }) => (
  <QuantityItemWrapper>
    <span
      onClick={() => {
        if (quantity > 0) {
          setQuantity((prev) => prev - 1);
        }
      }}
    >
      -
    </span>
    <input type="number" value={quantity} readOnly />
    <span onClick={() => setQuantity((prev) => prev + 1)}>+</span>
    <img
      onClick={() => updateCart(quantity, price)}
      src={IconEdit}
      alt="edit"
    />
  </QuantityItemWrapper>
);

QuantityItem.propTypes = {
  setQuantity: PropTypes.func.isRequired,
  updateCart: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default QuantityItem;
