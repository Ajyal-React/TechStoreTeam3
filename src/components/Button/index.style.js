import styled from "styled-components";

export const Btn = styled.button`
 width: 12%;
        padding: 10px 20px;
        background-color: transparent;
        border: 1px solid #fff;
        color: #fff;
        font-size: 16px;
        border-radius: 4px;
        &:hover{
          background-color: #FA7400;
        }

`;
  /* width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.bgColor};
  font-size: ${(props) => props.size}; */