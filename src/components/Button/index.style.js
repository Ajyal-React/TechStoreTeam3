import styled from "styled-components";

export const Btn = styled.button`
  width: 100%;
  cursor: pointer;
  padding: 10px 20px;
  background-color: transparent;
  border: 1px solid #fff;
  color: #fff;
  font-size: 16px;
  border-radius: 4px;
  transition: 0.2s;
  &:hover {
    background-color: #fa7400;
  font-size: 15.9px;
    transition: 0.2s;
  }
`;
/* width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.bgColor};
  font-size: ${(props) => props.size}; */
