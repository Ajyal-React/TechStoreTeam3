import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
export default GlobalStyle;

export const Container = styled.div.attrs((props) => ({
  w: props.w,
  h: props.h,
  margin: props.margin,
  mr: props.mr,
  ml: props.ml,
  mt: props.mt,
  mb: props.mb,
  padding: props.padding,
  pr: props.pr,
  pl: props.pl,
  pt: props.pt,
  pb: props.pb,
  bg: props.bg,
  radius: props.radius,
}))`
  width: ${({ w }) => (w ? w : "auto")};
  height: ${({ h }) => (h ? h : "auto")};
  margin: ${({ margin }) => (margin ? margin : "0px")};
  margin-right: ${({ mr }) => mr && mr};
  margin-left: ${({ ml }) => ml && ml};
  margin-top: ${({ mt }) => mt && mt};
  margin-bottom: ${({ mb }) => mb && mb};
  padding: ${({ padding }) => (padding ? padding : "0px")};
  padding-right: ${({ pr }) => pr && pr};
  padding-left: ${({ pl }) => pl && pl};
  padding-top: ${({ pt }) => pt && pt};
  padding-bottom: ${({ pb }) => pb && pb};
  background-color: ${({ bg }) => bg && bg};
  border-radius: ${({ radius }) => radius && radius};
`;

export const FlexContainer = styled(Container).attrs((props) => ({
  direction: props.direction,
  justify: props.justify,
  align: props.align,
}))`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  justify-content: ${({ justify }) => (justify ? justify : "flex-start")};
  align-items: ${({ align }) => (align ? align : "flex-start")};
`;

export const Title = styled.p.attrs((props) => ({
  fontSize: props.fontSize,
  color: props.color,
}))`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
  color: ${({ color }) => (color ? color : "#000")};
`;

export const Text = styled.p.attrs((props) => ({
  fontSize: props.fontSize,
  color: props.color,
  weight: props.weight,
}))`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
  font-weight: ${({ weight }) => (weight ? weight : "normal")};
  color: ${({ color }) => (color ? color : "#000")};
  font-family: Poppins, sans-serif;
`;

export const Price = styled.p.attrs((props) => ({
  w: props.w,
  h: props.h,
  fontSize: props.fontSize,
  primary: props.primary,
}))`
  width: ${({ w }) => (w ? w : "93px")};
  height: ${({ h }) => (h ? h : "50px")};
  line-height: ${({ h }) => (h ? h : "50px")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
  color: ${({ primary }) => (primary ? "#FF4F04" : "#0EA965")};
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  border-radius: 17px;
  text-align: center;
  background-color: ${({ primary }) => (primary ? "#FF4F0416" : "#fff")};
`;

export const Button = styled.a.attrs((props) => ({
  w: props.w,
  h: props.h,
  fontSize: props.fontSize,
  outline: props.outline,
}))`
  width: ${({ w }) => (w ? w : "auto")};
  height: ${({ h }) => (h ? h : "auto")};
  line-height: ${({ h }) => (h ? h : "auto")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "20px")};
  border: ${({ outline }) => (outline ? "0.4px solid #999999" : "none")};
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  border-radius: 9px;
  text-decoration: none;
  text-align: center;
  background-color: ${({ outline }) => (outline ? "transparent" : "#fff")};
`;

