import React from "react";
import PropTypes from "prop-types";

import ShoppingListItemWrapper from "./shoppingListItem.style";
import IconRemove from "../../assets/img/x-img.png";
import QuantityItem from "../QuantityItem";
import { sumPrice } from "../../helpers";

const ShoppingListItem = ({
  products,
  quantity,
  setQuantity,
  updateCart,
  removeItem,
}) => {
  const sumPriceProduct = sumPrice(products);
  return (
    <ShoppingListItemWrapper>
      {products.map(({ id, name, price, img }) => (
        <div key={id}>
          <p onClick={() => removeItem(id)}>
            <img src={IconRemove} alt="remove" />
          </p>
          <p>
            <img src={img} alt={name} />
          </p>
          <p>{name}</p>
          <p>
            <b>{`$${price}`}</b>
          </p>
          <QuantityItem
            quantity={quantity}
            setQuantity={setQuantity}
            price={sumPriceProduct}
            updateCart={updateCart}
          />
        </div>
      ))}
    </ShoppingListItemWrapper>
  );
};

ShoppingListItem.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({})),
  setQuantity: PropTypes.func.isRequired,
  updateCart: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default ShoppingListItem;
