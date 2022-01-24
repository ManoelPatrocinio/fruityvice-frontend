import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  margin: 0;
  position: relative;
`;

export const Main = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;

  align-items: flex-start;
`;

export const SectionTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  width: 100%;
  max-height: 1.875rem;
  padding: 2% 0;

  h2 {
    font-size: 1.3rem;
    color: #e41b41;
    font-weight: 500;
    margin: 0 2%;
  }

  .titleLine {
    width: 12.188rem;
    max-width: 30%;
    height: 2px;
    background-color: #e41b41;
  }
`;

export const CardContent = styled.div`
  width: 85%;
  height: auto;
  margin: 2% auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;

  @media(max-width:480px){
    width: 100%;
  }
`;
