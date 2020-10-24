import React from "react";
import PropTypes from "prop-types";

import IconEdit from "../../assets/img/edit-img.png";
import QuantityItemWrapper from "./quantityItem.style";

const QuantityItem = ({ quantity, setQuantity }) => (
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
    <input type="number" value={quantity} />
    <span onClick={() => setQuantity((prev) => prev + 1)}>+</span>
    <img src={IconEdit} alt="edit" />
  </QuantityItemWrapper>
);

QuantityItem.propTypes = {
  setQuantity: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default QuantityItem;
