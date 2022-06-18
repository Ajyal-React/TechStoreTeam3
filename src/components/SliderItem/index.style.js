import styled from "styled-components";
import { devices } from "../../General/MediaQuery.style";

export const Item = styled.div`
  width: 25%;
  height: auto;
  //to centerize the slider items
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  min-width: 200px;
  overflow-x: hidden;
  cursor: pointer;
  @media ${devices.mobileL} {
    text-align: center;
  }
`;

export const ImageContainer = styled.div`
  width: auto;
  height: 70%;

  @media ${devices.mobileL} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-height: 200px;
  height: 200px;
`;

export const ItemTitle = styled.span`
  font-size: 16px;
  color: #111111;
  font-weight: 700;
`;

export const SliderItemPrice = styled.span`
  color: #ff4f04;
  background-color: #fff0e9;
  padding: 6px 15px;
  border-radius: 20px;
  margin: 15px 0px;
  font-size: 15px;

  &:hover {
    opacity: 0.7;
    background-color: orange;
    color: white;
    cursor: default;
  }
`;

export const MoreInfo = styled.button`
  background-color: transparent;
  border: none;
  font-size: 16px;
  color: #898989;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin-left: 30px;
  transform: 2s;

  &:hover {
    color: #fa7400;
    transition: 0.5s;
  }

  #hoverArrow {
    transition: 0.5s;
  }

  &:hover #hoverArrow {
    padding-left: 10px;
    box-sizing: border-box;
    transition: 0.5s;
  }
`;

export const Text = styled.span`
  margin-right: 9px;
`;

export const Arrow = styled.span`
  margin-right: 30px;
`;
