import styled from "styled-components";

export const NavSection = styled.div`
  display: flex;
  padding: 30px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  line-height: normal;
  align-items: center;
  opacity: 0.79;
  z-index: 1;
  position: fixed;
  width: 100%;
`;

export const SelectOpctions = styled.select`
  background: #7b77770f 0% 0% no-repeat padding-box;
  border-radius: 3px;
  display: inline-block;
  border: none;
  margin-left: 5%;
  padding: 8px 10px;
  outline: none;
`;

export const SpanIcon = styled.span`
  margin-left: 3%;
  align-items: center;
`;

export const NavbarList = styled.div`
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : "6%")};
`;
export const List = styled.li`
  list-style: none;
  display: inline-block;
  cursor: pointer;
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : "18px")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "18px")};
  color: ${({ colorActive }) => (colorActive ? colorActive : "#000")};

  &:hover {
    color: #fa7400;
    transition: 0.5s;
  }
  &:active {
    color: #fa7400;
  }
`;

export const Logo = styled.img`
  width: 150px;
  margin-left: 3%;
`;

export const BtnSginIn = styled.button`
  background: #f9f8f8;
  box-shadow: 0px 3px 6px #f9f8f88a;
  border: 0.3px solid #afafaf;
  color: #fa7400;
  padding: 10px 20px;
  border-radius: 50px;
  outline: none;
  cursor: pointer;
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : "25px")};
`;
