import styled from "styled-components";

export const Btn = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.bgColor};
  font-size: ${(props) => props.size};
`;
