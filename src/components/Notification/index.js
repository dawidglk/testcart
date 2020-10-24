import React from "react";
import PropTypes from "prop-types";

import NotificationWrapper from "./notification.style";

const Notification = ({ children, primary }) => (
  <NotificationWrapper primary={primary}>{children}</NotificationWrapper>
);

Notification.propTypes = {
  children: PropTypes.string.isRequired,
  primary: PropTypes.bool,
};

export default Notification;
