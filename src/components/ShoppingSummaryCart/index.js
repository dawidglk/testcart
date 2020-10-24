import React from "react";

import ShoppingSummaryCartWrapper from "./shoppingSummaryCart.style";
import Button from "../Button";
import ButtonWrapper from "../ButtonWrapper";

const ShoppingSummaryCart = () => (
  <ShoppingSummaryCartWrapper>
    <ButtonWrapper>
      <Button>Proceed to checkout</Button>
    </ButtonWrapper>
    <div>
      <div className="wrapper__shipping">
        <p>Shipping</p>
        <p>24$</p>
      </div>

      <div className="wrapper__total">
        <p>Cart Totals</p>
        <div>
          <div>
            <p>Subtotal</p>
            <p>$23.80</p>
          </div>
          <div>
            <p>Grand Total</p>
            <p>$27.00</p>
          </div>
        </div>
        <Button>Proceed to checkout</Button>
      </div>
    </div>
  </ShoppingSummaryCartWrapper>
);

export default ShoppingSummaryCart;
