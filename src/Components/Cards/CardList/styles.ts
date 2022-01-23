import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 5.813rem;
  margin: 2% 0;
  box-sizing: border-box;
  padding: 0 2%;

  .imgWrapper {
    width: 6.875rem;
    height: 100%;
    border: 1px solid #e5e5e5;
  }

  .description {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .prodInfo {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .prodTitle,
    .prodPrice {
      width: 100%;
      font-size: 1rem;
      text-align: left;

      padding: 0 2%;
      color: #6f6b6b;
    }
    .prodTitle {
      font-weight: bold;
      font-size: 1rem;
      color: #6f6b6b;
    }
    span {
      color: #61ff7e;
    }

    input[type="number"] {
      padding: 1px 5px;
    margin: 0 2%;
    width: 2rem;
    height: 2.2rem;
    border-radius: 5px;
    border: 1px solid #cecece;
    }
    .btnRemoveToCart {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      
      background: #E41B41;
      color: #ffffff !important;

      font-size: 1.4rem;
      text-align: center;
      font-weight: bold;
      border: none;
    }
  }
`;
