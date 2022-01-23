import styled from "styled-components";

export const Container = styled.header`
  position: sticky;
  width: 100%;
  height: 13vh;
  min-height: 5.5rem;
  top: 0;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  border-bottom: 1px solid #dcdcdc;

  color: #e41b41;
  z-index: 100;
  #LogoTitle,#LogoTitle img {
    width: 16rem;
    max-height: 6rem;
    max-width: 16rem;
  }
  i {
    width: 1.5rem;
  }
  @media (max-width: 680px) and (orientation: landscape) {
    width: 100%;
    height: 4rem !important;
  }
`;
export const ItemHeaderContent = styled.div`
  width: 5rem;
  text-align: center;
  transition: ease-in 0.5s;


  h1 {
    font-size: 1.375rem;
    font-weight: 500;
  }
  h3 {
    font-size: 1.125rem;
    font-weight: 400;
  }
  i {
    font-size: 1.3rem;
    cursor: pointer;
  }

  .iconHelp {
    cursor: help;
  }
  .showFormSearch {
    visibility: visible !important;
    width: 14rem !important;
  }
  .formSearch {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 4rem;
    bottom: 2rem;
    -webkit-flex-direction: row-reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
    width: 0;
    height: 2rem;
    visibility: hidden;
    transition: ease-in 0.5s;
  }

  .formSearch input,
  .formSearch button {
    background-color: #fff;
    border: none;
    margin: 0 0 0 0;
  }
  .formSearch input {
    width: 100%;
    height: 100%;
    font-size: 1rem;
    border-bottom: 2px solid #e41b41;
    padding: 2%;
    transition: all 0.4s linear;
  }
  .formSearch input:focus {
    border-radius: 2px 25px 25px 2px;
    box-shadow: 2px 2px 2px 2px rgb(0 0 0 / 12%);
    outline: none;
    border-bottom: 2px solid #e41b41;
  }
  .formSearch button {
    background-color: transparent;
    height: 100%;
    width: 15%;
    margin: 0.2rem;
    border: none;
  }
  .formSearch button i {
    color: #ffff;
  }

  @media (max-width: 480px) {
    i {
      font-size: 1.2rem;
      font-weight: 600;
      cursor: pointer;
    }

    h1 {
      font-size: 1.3rem;
      font-weight: 500;
    }
    h3 {
      font-size: 1rem;
      font-weight: 400;
    }

    .showFormSearch {
      visibility: visible !important;
      width: 16rem !important;
      bottom: 1.6rem;
      height: 3rem;
      max-width: 70%;
    }
    .formSearch {
      right: 3.5rem;
      margin-top: 2%;
    }
    .formSearch input {
      border-radius: 25px !important;
    }
  }
`;
