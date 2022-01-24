import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  width: 28.375rem;
  height: calc(100vh - 13vh);
  min-height: calc(87%);
  border-left: 1px solid #e5e5e5;
  background: #ffffff;
  box-sizing: border-box;
  box-shadow: -4px 1px 8px rgb(0 0 0 / 28%);
  z-index: 8;

  h1 {
    font-size: 1.3rem;
    color: #e41b41;
    font-weight: 500;
    padding: 3% 0;
    width: 100%;
    height: 9%;
    text-align: center;
  }

  #cartFooter {
    width: 100%;
    height: 20%;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  #btnClearCart {
    width: 100%;
    height: 2.188rem;
    text-align: center;
    color: #e41b41;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    background: transparent;
    text-decoration: underline;
    padding: 5px 0;
    cursor: pointer;
  }

  .totalPrice {
    width: 100%;
    height: 3.188rem;
    padding: 3% 2%;

    display: flex;
    justify-content: space-between;

    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    color: #6f6b6b;
    background: #f6f5f5;

    h3,
    .cartPrice {
      width: 25%;
    }
    .cartPrice {
      color: #61ff7e;
    }
  }

  #btnBuyNow {
    width: 100%;
    height: 3.188rem;
    min-height: 3.188rem;
    background: #06d6a0;
    color: #ffffff !important;
    font-size: 1.2rem;
    font-weight: bold;
    border: none;
    cursor: pointer;
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.1rem;
    }
    width: 95%;
  }
`;

export const CardContent = styled.div`
  width: 100%;
  height: 67%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
`;
