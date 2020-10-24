import styled from "styled-components";

export default styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  padding: 0 20px;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;
