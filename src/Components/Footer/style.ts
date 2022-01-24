import styled from "styled-components";

export const Container = styled.div`
  position: relxative;
  width: 100%;
  height: 6rem;
  text-align: center;

  border-top: 1px solid #cecece;

  #copyright,
  #copyright a {
    font-size: 1.1rem;
    font-weight: 500;
    color:  #e41b41;
  }
  #credits {
    font-size: 1rem;
    font-weight: 500;
    padding: 1% 0;
    color:  #e41b41;
  }
  #credits a {
    color:  #e41b41;
    text-decoration: underline;
  }

  @media (max-width: 480px) {
    #copyright,
    #copyright a {
      font-size: 1rem;
    }
    #credits {
      font-size: 0.8rem;
    }
  }
`;

export const IconContent = styled.div`
  position: relative;
  width: 100%;
  height: 45%;

  display: flex;
  justify-content: center;
  text-align: center;
  padding: 1% 0 0 0;
  margin: 1% 0;
  .linkContactFooter {
    margin: 0 1%;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 60%;

    padding: 3% 0 3% 0;
    .linkContactFooter {
      width: 35px;
      height: 35px;
      margin: 0 1%;
    }
  }
`;
