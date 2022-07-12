import styled from "styled-components";

export const NavSection = styled.div`
  display: flex;
  height: ${(props) => (props.extendNavbar ? "500px" : "80px")};
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  line-height: normal;
  align-items: center;
  opacity: 0.79;
  z-index: 2;
  position: fixed;
  width: 100%;
  @media (max-width: 1200px) {
    padding: 15px;
  }
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
  }
  @media (max-width: 950px) {
    margin-left: 2%;
  }
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
  @media (max-width: 1400px) {
    margin-left: 50px;
    font-size: 16px;
  }
  @media (max-width: 1200px) {
    font-size: 14px;
  }
  @media (max-width: 950px) {
    font-size: 12px;
  }
  @media (max-width: 795px) {
    display: inline-block;
  }
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
<<<<<<< HEAD
  @media (min-width: 768px) {
  }
  @media (max-width: 700px) {
    display: none;
=======
  @media (max-width: 950px) {
    font-size: 16px;
    margin-left: 0%;
>>>>>>> 178cc73ac4ab329d317568edd139d7162a288fff
  }
`;

export const Logo = styled.img`
  width: 150px;
  margin-left: 3%;
  @media (max-width: 795px) {
    margin-left: 20%;
  }

  @media (max-width: 491px) {
    margin-left: 10%;
  }
  @media (max-width: 1400px) {
    margin-left: 5px;
  }
  @media (max-width: 950px) {
    width: 130px;
  }
  @media (max-width: 699px) {
    margin-left: 35%;
  }
  @media (max-width: 621px) {
    margin-left: 25%;
  }
  @media (max-width: 320px) {
    margin-left: 10%;
  }
  @media (max-width: 1400px) {
    margin-left: 80px;
  }
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
  @media (max-width: 950px) {
    padding: 8px 14px;
    margin-left: 8px;
  }
  @media (max-width: 795px) {
    margin-left: 25%;
    font-size: 12px;
  }
  @media (max-width: 597px) {
    margin-left: 15%;
  }
  @media (max-width: 491px) {
    margin-left: 10%;
  }
  @media (max-width: 1400px) {
    margin-left: 10%;
  }
`;

//Search overlay starts here
// export const ContainerSearch = styled.div`
//   width: 50%;
//   height: 50%;
//   position: absolute;
//   top: 25%;
//   left: 25%;
//   background-color: transparent;
// `;

// export const SearchInput = styled.input`
//   border: none;
//   width: 90%;
//   height: 20%;
//   background-color: transparent;
//   border-left: 4px solid #ffffff;
//   border-bottom: 0.1px solid #f8f8f8;
//   padding-left: 20px;
//   outline: none;
//   color: #fa7400;
//   font-size: 25px;
//   position: relative;
//   margin-bottom: 30px;

//   &::placeholder {
//     font-size: 25px;
//     color: #eeeeee;
//   }
// `;

// export const SearchIcon = styled.div`
//   color: #ffffff;
//   font-size: 30px;
//   position: absolute;
//   left: 630px;
//   top: 25px;
//   cursor: pointer;
// `;

// export const Tags = styled.ul`
//   display: flex;
//   flex-direction: row;
//   list-style-type: none;
//   justify-content: start;
//   align-items: flex-start;
// `;

// export const Tag = styled.li`
//   color: #ffffff;
//   width: 20%;
//   font-size: 15px;
//   border: 1px solid #ffffff;
//   padding: 10px 0px;
//   background-color: transparent;
//   min-width: 10%;
//   border-radius: 50px;
//   text-align: center;
//   margin-right: 10px;
//   cursor: pointer;

//   &:hover {
//     font-size: 14px;
//     color: #fa7400;
//     box-sizing: border-box;
//   }
// `;
//Search overlay ends here

// Navbar Extended

export const BtnSide = styled.button`
  font-size: 25px;
  margin-left: 10px;
  line-height: 15px;
  cursor: pointer;
  border: none;
  background: none;

  @media (min-width: 700px) {
    display: none;
  }
`;
export const ContinerIcon = styled.div`
  display: flex;
`;

export const NavExtendedContainer = styled.div`
  display: flex;
  background-color: #fff;
  position: absolute;
  top: 55px;
  bottom: 0;
  left: 0;
  width: 40%;
  height: 500px;
  flex-direction: column;
  padding: 4rem 0.5rem;
  gap: 2rem;
  /* text-align: center; */
  font-size: 1.3rem;
  font-weight: bold;
  transform: ${({ open }) => (open ? "translateX(0%);" : "translateX(-100%);")};
  transition: transform 150ms ease-in;

  @media (min-width: 700px) {
    display: none;
  } ;
`;

export const InfNavbarExtended = styled.div`
  display: flex;
  margin-top: -40px;
`;
export const DivTextExtended = styled.div`
  margin-left: 10px;
  margin-top: 10px;
`;

export const TextExtended = styled.p`
  line-height: 20px;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "18px")};
  color: #014b76;
`;
export const ImgNavbarExtended = styled.img`
  width: 55px;
  border-radius: 50%;
`;

export const SelectOpctionsExtended = styled.select`
  background: #7b77770f 0% 0% no-repeat padding-box;
  border-radius: 3px;
  display: inline-block;
  border: none;
  margin-left: 0px;
  padding: 8px 10px;
  outline: none;
`;

export const SpanIconExtended = styled.span`
  margin-left: 40px;
  margin-top: 10px;
  background: none;
  font-size: 14px;
  @media (max-width: 950px) {
    font-size: 12px;
  }
`;

export const NavbarListExtended = styled.div`
  color: ${({ color }) => (color ? color : "#000")};
`;
export const ListExtended = styled.li`
  list-style: none;
  display: ${({ display }) => (display ? display : "block")};
  display: block;
  margin-top: 8px;
  cursor: pointer;
  margin-left: 10px;
  color: #000;
  font-weight: 500;
  font-size: 16px;
  color: ${({ colorActive }) => (colorActive ? colorActive : "#000")};

  &:hover {
    color: #fa7400;
    transition: 0.5s;
  }
  &:active {
    color: #fa7400;
  }
`;
