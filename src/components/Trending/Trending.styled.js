import styled from "styled-components";
import { devices } from "../../General/MediaQuery.style";

export const ContinerItem = styled.div`
  padding: 85px;
  background: #f9f8f8 0% 0% no-repeat padding-box;
  @media (max-width: 768px) {
    padding: 15px;
  }
  @media (max-width: 576px) {
    padding: 10px;
  }
`;
export const ContinerCard = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    justify-content: center;
    gap: 15px;
    padding: 0px;
    justify-content: left;
    /* margin-left: 10%; */
  }
  @media (max-width: 576px) {
    gap: 8px;
    /* justify-content: center; */
    margin-left: 28%;
  }
`;
export const Cards = styled.div`
  width: 210px;
  height: 270px;

  @media (max-width: 768px) {
    width: 150px;
    height: 170px;
    margin-top: 10%;
  }
  @media (max-width: 1024px) {
    width: 180px;
    height: 170px;
    margin-top: 10%;
  }
  @media (max-width: 576px) {
    margin-top: 15%;
  }
`;
export const Images = styled.img`
  width: 100%;
  height: 200px;
  background: #f9f8f8 0% 0% no-repeat padding-box;
  border: 0.3px solid #dfdede;
  border-radius: 8px;
  @media (max-width: 768px) {
    height: 150px;
  }
  /* @media (max-width: 576px) {
    height: 120px;
  } */
  @media (max-width: 1024px) {
    height: 150px;
  }
`;
export const SmTitle = styled.p`
  color: #302f2f;
  font-size: 14px;
  font-weight: 300;
  text-transform: uppercase;
  @media (max-width: 576px) {
    text-align: center;
  }
`;
export const LgTitle = styled.p`
  color: #111111;
  font-size: 30px;
  font-weight: 600;
  text-transform: uppercase;
  @media (max-width: 576px) {
    text-align: center;
    font-size: 25px;
  }
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
  line-height: 20px;
  font-size: 14px;
  text-align: center;
  padding: 5px 8px;
`;
