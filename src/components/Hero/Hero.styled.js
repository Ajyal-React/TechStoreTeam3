import styled from "styled-components";

export const HeroSection = styled.div`
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  margin-top: -100px;
  opacity: 1;
  top: 0;
`;

export const TetleHero = styled.div`
  position: absolute;
  top: ${({ top }) => (top ? top : "0%")};
  left: ${({ left }) => (left ? left : "10%")};
  right: ${({ right }) => (right ? right : "10%")};
`;

export const BtnHero = styled.button`
  background-color: #fff;
  padding: 10px 25px;
  border-radius: 10px;
  color: #000;
  outline: none;
  border: 1px solid #fff;
  margin-top: 100px;
  font-weight: 700;
  font-size: 20px;
  box-shadow: 0px 3px 6px #ffffff5c;
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
  bottom: -80px;
  box-shadow: 0px 3px 6px #ffffff5c;
`;
