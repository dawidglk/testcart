import React from "react";
import PropTypes from "prop-types";

import ButtonWrapper from "./button.style";

const Button = ({ children }) => <ButtonWrapper>{children}</ButtonWrapper>;

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;
