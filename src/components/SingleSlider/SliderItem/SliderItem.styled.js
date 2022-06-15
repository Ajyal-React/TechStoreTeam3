import styled from "styled-components";

export const SliderContainer = styled.div`
  padding: 22px 40px;
`;

export const Discount = styled.p`
  width: 145px;
  height: 50px;
  line-height: 50px;
  border-radius: 10px;
  background-color: #fa740073;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: #000;
`;

export const SliderImage = styled.img`
  height: 400px;
  margin: 20px 0px 40px 0px;
  &:hover {
    transform: scaleX(-1);
  }
  object-fit: fill;
`;

export const DiscountPrice = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #6a707e;
  font-family: Proxima Nova, sans-serif;
  margin-right: 15px;
  text-decoration: line-through;
  text-decoration-color: red;
`;
