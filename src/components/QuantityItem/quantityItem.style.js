import styled from "styled-components";

export default styled.div`
  display: flex;

  span {
    background-color: #f4f4f4;
    color: #777778;
    font-weight: bold;
    border: 1px solid #d7d7d7;
    padding: 10px;
    text-align: center;
    width: 40px;
    cursor: pointer;
  }

  input {
    outline: none;
    width: 40px;
    border: 0;
    border-top: 1px solid #d7d7d7;
    border-bottom: 1px solid #d7d7d7;
    text-align: center;
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;
