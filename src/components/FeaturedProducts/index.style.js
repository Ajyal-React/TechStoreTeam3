//Styled component for the "Featured products" is here

import styled from "styled-components";

export const SliderSection = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;
  margin: 104px 0px;
`;

export const SliderTitle = styled("h3")`
  color: #302f2f;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 400;
`;

export const SliderBigTitle = styled("h5")`
  color: #111111;
  font-size: 30px;
  text-transform: uppercase;
`;

export const SliderContent = styled.div`
  width: 100%;
  height: auto;
  margin: 0px auto;
  margin-top: 42px;
`;

export const TopTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  margin: 0 auto;
  width: 80%;

  @media (max-width: 341px) {
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 576px) {
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 992px) {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 1200px) {
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 1400px) {
  }

  @media (max-width: 950px) {
  }
`;
