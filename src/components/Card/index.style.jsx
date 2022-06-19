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
    flex-wrap: wrap;
    margin: 10px;
`;

export const Lines = styled.hr`
  border: 1px solid rgba(128, 128, 128, 0.144);    
margin: 2.5px 0;
`;
export const Icon = styled.p`
    color: #7A7A7A;
    font-size: small;
    position: relative;
`;
export const ImgDimension = styled.img`
    height: 160px;
    width: 80px;
`;
