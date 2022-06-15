import styled from "styled-components";

export const HeroSection = styled.div``;

export const Image = styled.img`
  width: 100%;
  position: relative;
  opacity: 1;
`;

export const TetleHero = styled.div`
  position: absolute;
  bottom: ${({ bottom }) => (bottom ? bottom : "10%")};
  left: ${({ left }) => (left ? left : "10%")};
  right: ${({ right }) => (right ? right : "10%")};
`;

export const BtnHero = styled.button`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#fff"};
  padding: ${({ padding }) => (padding ? padding : "10px 25px")};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "5px")};
  outline: none;
  border: 1px solid #fff;
  margin-top: 100px;
  font-weight: 700;
  fonr-size: 20px;
`;

export const IconArrow = styled.span`
  transform: 2s;
  font-size: 20px;
  &:hover {
    transition: 0.5s;
  }
`;
