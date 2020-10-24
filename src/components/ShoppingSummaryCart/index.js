import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import Button from "../Button";
import ButtonWrapper from "../ButtonWrapper";
import Notification from "../Notification";

import ShoppingSummaryCartWrapper from "./shoppingSummaryCart.style";
import { priceShipping, grandTotal } from "../../helpers";

const ShoppingSummaryCart = ({ makeOrder, value, shippingfree }) => {
  const [errorNotification, setErrorNotification] = useState(false);
  const [updateNotification, setUpdateNotification] = useState(false);

  useEffect(() => {
    if (value > 0) {
      setUpdateNotification(true);
      setErrorNotification(false);
      const interval = setInterval(() => {
        setUpdateNotification(false);
      }, 500);
      return () => clearInterval(interval);
    }
  }, [value]);

  const history = useHistory();

  const navigateTo = () => {
    if (value > 0) {
      setErrorNotification(false);
      makeOrder();
      history.push("/completed");
    } else {
      setErrorNotification(true);
    }
  };

  return (
    <ShoppingSummaryCartWrapper>
      <ButtonWrapper>
        <Button onClick={navigateTo}>Proceed to checkout</Button>
      </ButtonWrapper>
      {errorNotification ? (
        <Notification primary={true}>The quantity cannot be zero</Notification>
      ) : null}
      {updateNotification ? <Notification>Summary Update</Notification> : null}
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
