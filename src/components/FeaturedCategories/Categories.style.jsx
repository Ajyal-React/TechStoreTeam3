import styled from "styled-components";


export const MainContainer = styled.main`
  width: 100vw;
  max-width: 1920px;
  margin: 0 auto;
  overflow: hidden;
`;

export const ContainerCard = styled.nav`
  margin: 80px 0;
`;
export const Container = styled.div`
  width: 80%;
  margin: auto;
`;
export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const AllCard = styled.div`
     width: 50%;
    height: 560px;
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
`;
export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SliderDiv = styled.div`
    width: 50%;
    height: 560px;
    background-color: #F9F8F8;
    margin-top: 40px;
    padding: 20px;
    border-radius: 6px;
    position: relative;
`;

export const Button2 = styled.button`
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  border: 1px solid #999999;
  font-weight: 700;
`;
