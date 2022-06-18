import styled from "styled-components";

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Heading = styled.h1`
  color: #fff;
  text-transform: uppercase;
  font-size: ${({ fontSize }) => fontSize};
`;
export const SubHeading = styled(Heading)`
  color: #111111;
  font-size: ${({ fontSize }) => fontSize};
`;
export const Price = styled.div`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ bgColor }) => bgColor};
  padding: 0.2rem 0.8rem;
`;
export const ImgMulti = styled.div`
  display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
`;
export const CardPhone = styled.div`
  padding: 8px 15px;
    background-color: #F9F8F8;
    width: 46%;
    border-radius: 5px;
    margin-right: 15px;
`;

export const Container = styled.div`
width: 50%;
`;
export const card = styled.sec`
padding: 22px 40px;
`;
