import styled from "styled-components";

export default styled.div`
  border-top: 1px solid #dedede;
  border-bottom: 1px solid #dedede;
  margin: 18px 0;
  color: #777777;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      &:first-child {
        img {
          cursor: pointer;
        }
      }
    }
  }
`;
