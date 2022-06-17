import styled from "styled-components";
import { devices } from "../../General/MediaQuery.style";

export const ContinerItem = styled.div`
  padding: 80px;
`;
export const ContinerCard = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;
export const Cards = styled.div`
  width: 210px;
  height: 270px;
  // margin-top: 20px;

  @media ${devices.mobileL} {
    text-align: center;
  }
`;
export const Images = styled.img`
  width: 100%;
  height: 200px;
  background: #f9f8f8 0% 0% no-repeat padding-box;
  border: 0.3px solid #575252;
  border-radius: 8px;
`;

export const CntDitales = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;
export const PriceTre = styled.span`
  background-color: #ff4f0416;
  border-radius: 50px;
  color: #ff4f04;
  // line-height: 20px;
  font-size: 16px;
  text-align: center;
  padding: 5px 8px;
`;
