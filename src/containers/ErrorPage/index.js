import React from "react";
import ErrorWrapper from "../../components/CompletedWrapper";
import Title from "../../components/Title";
import { Link } from "react-router-dom";

const ErrorPage = () => (
  <ErrorWrapper>
    <Title>Not found</Title>
    <Link to="/">Back to Cart</Link>
  </ErrorWrapper>
);

export default ErrorPage;
