import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 14.688rem;
  height: 19.75rem;
  margin: 0 0 3% 0;

  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  z-index: 5;

  .showCardInfo{
    visibility: visible !important;
    height: 19.75rem !important;
    

  }
  .imgWrapper {
    width: 100%;
    height: 11.563rem;
    border-bottom: 1px solid #e5e5e5;
  }

  .description {
    width: auto;
    height: 8.188rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    span {
      color: #61ff7e;
    }
    .btnAddToCart {
      height: 2.563rem;
      background: #06d6a0;
      color: #ffffff !important;
      font-weight: bold;
      border: none;
    }
    #linkCardNutritional {
      margin: 0 0 4% 0;
      color: #6f6b6b;
      font-size: 0.8rem;
      text-decoration: underline;
      cursor: pointer;

    }
  }
  .prodTitle,
  .prodPrice,
  .btnAddToCart {
    width: 100%;
    font-size: 1rem;
    color: #6f6b6b;
    text-align: center;
  }
  .prodTitle {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    color: #6f6b6b;
    padding: 3% 0;
  }
  .prodPrice {
    padding: 3% 0 3% 0;
    margin: 0;
  }

  .CardNutritional {
    position: absolute;
    width: 14.688rem;
    height: 0;
    visibility: hidden;
    bottom: 0;
    z-index: 6;

    background: #f1dde1;
    transition: ease-in 0.5s;


    .linkDown {
      color: #e41b41;
      position: absolute;
      margin: 5% 46%;
      font-size: 1.5rem;
      bottom: 0;
      cursor: pointer;
    }
    .prodTitle {
      color: #e41b41;
      padding: 7% 0;
    }

    ul,
    li {
      width: 100%;
      text-align: left;
      list-style: none;
    }
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #6f6b6b;
      padding: 2% 0 0 11%;
    }
    strong {
      color: #e41b41;
    }
    #subTitle {
      margin: 0 0 2% 0;
    }
    .group2 {
      padding: 0 0 0 4%;
    }
  }
`;
