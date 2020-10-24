import styled from "styled-components";

export default styled.div`
  background-color: ${({ primary }) =>
    (primary === true && "#fa3e3e") || "#23c552"};
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  padding: 10px;
  box-shadow: 3px 3px 6px -4px #777;
  border-radius: 5px;
  margin: 10px 0;
  transition: background-color all 0.5s ease;
`;
