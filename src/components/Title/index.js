import React from "react";
import PropTypes from "prop-types";

import H1Wrapper from "./h1.style";

const Title = ({ children }) => <H1Wrapper>{children}</H1Wrapper>;

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Title;
