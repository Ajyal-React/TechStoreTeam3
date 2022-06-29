import styled from "styled-components";

export const NavSection = styled.div`
  display: flex;
  height: ${(props) => (props.extendNavbar ? "200px" : "80px")};
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  line-height: normal;
  align-items: center;
  opacity: 0.79;
  z-index: 2;
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
  @media (max-width: 700px) {
    display: none;
  } ;
`;

export const SpanIcon = styled.span`
  margin-left: 3%;
  align-items: center;

  @media (max-width: 700px) {
    display: none;
  } ;
`;

export const NavbarList = styled.div`
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : "8%")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "18px")};
  color: ${({ color }) => (color ? color : "#000")};
`;
export const List = styled.li`
  list-style: none;
  display: ${({ display }) => (display ? display : "inline-block")};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "0")};
  cursor: pointer;
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : "18px")};
  color: ${({ colorActive }) => (colorActive ? colorActive : "#000")};
  font-weight: ${({ weight }) => (weight ? weight : "500")};

  &:hover {
    color: #fa7400;
    transition: 0.5s;
  }
  &:active {
    color: #fa7400;
  }

  @media (max-width: 700px) {
    display: none;
  } ;
`;

export const Logo = styled.img`
  width: 150px;
  margin-left: 3%;
`;

export const BtnSginIn = styled.button`
  background-color: #eeeeee;
  box-shadow: 0px 3px 6px #f9f8f88a;
  border: none;
  color: #fa7400;
  padding: 10px 20px;
  border-radius: 50px;
  outline: none;
  cursor: pointer;
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : "25px")};

  &:hover {
    opacity: 0.7;
    color: #fff;
  }
`;

//Search overlay starts here
export const ContainerSearch = styled.div`
  width: 50%;
  height: 50%;
  position: absolute;
  top: 25%;
  left: 25%;
  background-color: transparent;
`;

export const SearchInput = styled.input`
  border: none;
  width: 90%;
  height: 20%;
  background-color: transparent;
  border-left: 4px solid #ffffff;
  border-bottom: 0.1px solid #f8f8f8;
  padding-left: 20px;
  outline: none;
  color: #fa7400;
  font-size: 25px;
  position: relative;
  margin-bottom: 30px;

  &::placeholder {
    font-size: 25px;
    color: #eeeeee;
  }
`;

export const SearchIcon = styled.div`
  color: #ffffff;
  font-size: 30px;
  position: absolute;
  left: 630px;
  top: 25px;
  cursor: pointer;
`;

export const Tags = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  justify-content: start;
  align-items: flex-start;
`;

export const Tag = styled.li`
  color: #ffffff;
  width: 20%;
  font-size: 15px;
  border: 1px solid #ffffff;
  padding: 10px 0px;
  background-color: transparent;
  min-width: 10%;
  border-radius: 50px;
  text-align: center;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    font-size: 14px;
    color: #fa7400;
    box-sizing: border-box;
  }
`;
//Search overlay ends here

// Navbar Extended

export const BtnSide = styled.button`
  font-size: 40px;
  cursor: pointer;
  border: none;
  background: none;

  @media (min-width: 700px) {
    display: none;
  } ;
`;

export const NavExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    display: none;
  } ;
`;

export const ListExtended = styled.li`
  list-style: none;
  display: block;
  margin-top: 0px;
  cursor: pointer;
  margin-left: 0px;
  color: #000;
  font-weight: 500;

  &:hover {
    color: #fa7400;
    transition: 0.5s;
  }
  &:active {
    color: #fa7400;
  }

  @media (max-width: 700px) {
    display: none;
  } ;
`;
