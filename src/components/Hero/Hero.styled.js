import styled from "styled-components";
import { Title } from "../../GlobalStyles";
// import image from "../../../images/hero_bg.png";
export const HeroSection = styled.div`
  z-index: -1;
  margin-top: -100px;
  @media (max-width: 1071px) {
    margin-top: -130px;
  }
  @media (max-width: 1024px) {
    margin-top: -125px;
  }
  @media (max-width: 768px) {
    margin-top: -145px;
  }
  @media (max-width: 827px) {
    margin-top: -150px;
  }
`;

export const Image = styled.div`
  /* width: 100%;
  margin-top: -100px;
  opacity: 1;
  top: 0; */
  opacity: 1;
  display: flex;
  align-items: center;
  height: 1088px;
  background-repeat: no-repeat;
  width: 100%;
  background-size: cover;

  @media (max-width: 1600px) {
    height: 900px;
  }
  @media (max-width: 1199.98px) {
    height: 700px;
    background-size: cover;
  }
`;
export const ContainerHero = styled.div`
  margin-bottom: 80px;
  @media (max-width: 767.98px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const TetleHero = styled.div`
  position: absolute;
  top: ${({ top }) => (top ? top : "0%")};
  left: ${({ left }) => (left ? left : "10%")};
  right: ${({ right }) => (right ? right : "10%")};
`;
export const TitleSuber = styled(Title)`
  @media (max-width: 575.98px) {
    text-align: center;
    font-size: 14px;
  }
`;
export const BtnHero = styled.button`
  /* background-color: #fff;
  padding: 10px 25px;
  border-radius: 10px;
  color: #000;
  
  border: 1px solid #fff;
  margin-top: 100px;
  font-weight: 700;
  font-size: 20px;
  */
  outline: none;
  border: none;
  padding: 1rem 3rem;
  font-weight: bolder;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 3px 6px #ffffff5c;
  cursor: pointer;
  @media (max-width: 767.98px) {
    font-size: 14px;
    margin-top: 50px;
    padding: 1rem 2rem;
    align-items: center;
  }
`;

export const IconDown = styled.button`
  background-color: #fff;
  padding: 10px;
  border-radius: 50px;
  color: #fa7400;
  font-size: 23px;
  line-height: 16px;
  outline: none;
  border: 1px solid #fff;
  position: absolute;
  left: 50%;
  /* bottom: -100px; */
  box-shadow: 0px 3px 6px #ffffff5c;

  display: flex;
  justify-content: center;
  margin-top: 180px;
  @media (max-width: 1199.98px) {
    margin-top: 100px;
  }
  @media (max-width: 767.98px) {
    margin-top: 80px;
  }
`;
