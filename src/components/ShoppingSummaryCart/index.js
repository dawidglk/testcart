import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import ShoppingSummaryCartWrapper from "./shoppingSummaryCart.style";
import Button from "../Button";
import ButtonWrapper from "../ButtonWrapper";
import { priceShipping, grandTotal } from "../../helpers";

const ShoppingSummaryCart = ({ makeOrder, value, shippingfree }) => {
  const history = useHistory();
  const navigateTo = () => {
    makeOrder();
    return history.push("/completed");
  };

  return (
    <ShoppingSummaryCartWrapper>
      <ButtonWrapper>
        <Button onClick={navigateTo}>Proceed to checkout</Button>
      </ButtonWrapper>
      <div>
        <div className="wrapper__shipping">
          <p>Shipping</p>
          <p>{priceShipping(shippingfree)}</p>
        </div>

        <div className="wrapper__total">
          <p>Cart Totals</p>
          <div>
            <div>
              <p>Subtotal</p>
              <p>{`$${value.toFixed(2)}`}</p>
            </div>
            <div>
              <p>Grand Total</p>
              <p className="grand">{grandTotal(value, shippingfree) || `$0`}</p>
            </div>
          </div>
          <Button onClick={navigateTo}>Proceed to checkout</Button>
        </div>
      </div>
    </ShoppingSummaryCartWrapper>
  );
};

ShoppingSummaryCart.propTypes = {
  makeOrder: PropTypes.func.isRequired,
  quantity: PropTypes.number,
  shippingfree: PropTypes.bool.isRequired,
};

export default ShoppingSummaryCart;
