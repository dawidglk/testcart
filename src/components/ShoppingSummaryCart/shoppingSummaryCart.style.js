import styled from "styled-components";

export default styled.div`
  width: 100%;
  align-self: center;
  font-size: 16px;
  margin-top: 10px;

  @media (min-width: 800px) {
    width: 20%;
    margin-left: 30px;
    margin-bottom: 23px;
    margin-top: 0;
  }

  div {
    &.wrapper {
      &__shipping {
        background-color: #f4f4f4;
        display: flex;
        justify-content: space-between;
        padding: 0px 14px;
        text-transform: uppercase;
        font-weight: bold;
        margin-top: 16px;
        border: 1px solid #d7d7d7;
      }
      &__total {
        background: #fbfbfb;
        margin-top: 16px;
        border: 1px solid #d7d7d7;
        padding-bottom: 16px;
        text-align: center;

        button {
          width: 100%;
        }

        > p {
          background-color: #f4f4f4;
          margin: 0;
          padding: 14px;
          border-bottom: 1px solid #d7d7d7;
          text-transform: uppercase;
          font-weight: bold;
          text-align: left;
        }

        > div {
          margin: 16px 20px;

          div {
            display: flex;
            justify-content: space-between;

            &:first-child {
              border-bottom: 1px solid #d7d7d7;
            }

            p {
              color: #777777;
              font-weight: bold;
              display: flex;
              align-items: center;

              &.grand {
                font-size: 20px;
              }

              &:last-child {
                color: #000;
              }
            }
          }
        }
      }
    }
  }
`;
