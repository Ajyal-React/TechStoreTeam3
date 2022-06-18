//Styled component for the "Featured products" is here

import styled from "styled-components";
import { devices } from "../../General/MediaQuery.style";

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
  margin: 104px 0px;
  height: auto;
  margin-top: 42px;
`;

export const TopTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  margin: 0 auto;
  width: 80%;
  @media ${devices.mobileS} {
    /*  text-align: center;
    justify-content: center;
    align-items: center; */
  }
`;
