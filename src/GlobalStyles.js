import styled, { createGlobalStyle, css } from "styled-components";
import { mobile } from "./utils/media";
// Create a GlobalStyle component that will be used to apply styles to the entire app.
const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'); 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Poppins, sans-serif;
  }
`;
export default GlobalStyle;

// Global Component
export const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: ${({ justify }) => justify && justify};
  align-items: ${({ align }) => align && align};
  margin: ${({ margin }) => margin && margin};
`;

export const Column = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  margin: ${({ margin }) => margin && margin};
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #c1c1c1;
`;

export const SmTitle = styled.p`
  color: #302f2f;
  font-size: 14px;
  font-weight: 300;
  text-transform: uppercase;
  ${mobile(css``, 450)}
`;

export const LgTitle = styled.h2`
  color: #111111;
  font-size: 30px;
  font-weight: 600;
  text-transform: uppercase;
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "10px")};
`;

export const Title = styled.p.attrs((props) => ({
  fontSize: props.fontSize,
  color: props.color,
}))`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "700")};
  color: ${({ color }) => (color ? color : "#000")};
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? marginBottom : "15px"};
`;

export const Text = styled.p`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "20px")};
  font-weight: ${({ weight }) => (weight ? weight : "500")};
  color: ${({ color }) => (color ? color : "#111111")};
  font-family: Poppins, sans-serif;

  ${mobile(
    css`
      font-size: ${({ lg }) => (lg ? "20px" : "14px")};
    `,
    450
  )}
`;

export const Price = styled.p`
  width: ${({ w }) => (w ? w : "93px")};
  height: ${({ h }) => (h ? h : "50px")};
  line-height: ${({ h }) => (h ? h : "50px")};
  font-size: ${({ fsize }) => (fsize ? fsize : "23px")};
  color: #0ea965;
  font-weight: 500;
  border-radius: 17px;
  text-align: center;
  background-color: #ffffff;

  ${mobile(
    css`
      width: 65px;
      height: 35px;
      line-height: 35px;
      font-size: 17px;
    `,
    450
  )}
`;

export const CardPhone = styled.div`
  padding: 8px 15px;
  background-color: #f9f8f8;
  border-radius: 5px;
  margin-right: 15px;
  width: ${({ width }) => (width ? width : "46%")};
`;
