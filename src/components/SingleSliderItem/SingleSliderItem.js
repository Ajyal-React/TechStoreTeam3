import styled from "styled-components";

export const Discount = styled.p.attrs((props) => ({
  w: props.w,
  h: props.h,
  mr: props.mr,
  ml: props.ml,
  mt: props.mt,
  mb: props.mb,
}))`
  width: ${({ w }) => (w ? w : "145px")};
  height: ${({ h }) => (h ? h : "50px")};
  line-height: ${({ h }) => (h ? h : "50px")};
  margin-right: ${({ mr }) => mr && mr};
  margin-left: ${({ ml }) => ml && ml};
  margin-top: ${({ mt }) => mt && mt};
  margin-bottom: ${({ mb }) => mb && mb};
  border-radius: 10px;
  background-color: #fa740073;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: #000;
`;

export const SliderImage = styled.img.attrs((props) => ({
  w: props.w,
  h: props.h,
  margin: props.margin,
}))`
  width: ${({ w }) => (w ? w : "auto")};
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
