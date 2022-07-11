import React, { useState } from "react";
import { FaRegWindowClose, FaSearch, FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import {
  NavSection,
  SelectOpctions,
  NavbarList,
  List,
  Logo,
  SpanIcon,
  BtnSginIn,
  BtnSide,
  ContainerSearch,
  SearchInput,
  SearchIcon,
  Tags,
  Tag,
  ListExtended,
  NavExtendedContainer,
  SelectOpctionsExtended,
  SpanIconExtended,
  NavbarListExtended,
  InfNavbarExtended,
  ImgNavbarExtended,
  TextExtended,
  DivTextExtended,
  ContinerIcon,
 
} from "../Navbar/Navbar.styled";

const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);
  return (
    <NavSection extendNavbar={extendNavbar}>
      <BtnSide
        onClick={() => {
          setExtendNavbar((curr) => !curr);
        }}
      >
        {extendNavbar ? <AiOutlineClose /> : <FaBars />}
      </BtnSide>

      {/* side navbar */}
      {extendNavbar && (
        <NavExtendedContainer open={extendNavbar}>
          <InfNavbarExtended>
            <ImgNavbarExtended src="images/user.png" />
            <DivTextExtended>
              <TextExtended fontSize="16px">UserName</TextExtended>
              <TextExtended fontSize="12px">My Profile</TextExtended>
            </DivTextExtended>
          </InfNavbarExtended>

          <NavbarListExtended>
            <ul>
              <ContinerIcon>
                <ListExtended colorActive="#fa7400" display='inline-block'>Home</ListExtended>
                <SpanIconExtended>
                  <FaSearch />
                </SpanIconExtended>
              </ContinerIcon>
              <ListExtended>New arrival</ListExtended>
              <ListExtended>Mobiles</ListExtended>
              <ListExtended>LabTops</ListExtended>
              <ListExtended>Headphones</ListExtended>
              <ListExtended>Accessorieas</ListExtended>
            </ul>
          </NavbarListExtended>
          <SelectOpctionsExtended>
            <option value="English">English</option>
            <option value="Arbic">Arbic</option>
          </SelectOpctionsExtended>
        </NavExtendedContainer>
      )}

      <SelectOpctions>
        <option value="English">English</option>
        <option value="Arbic">Arbic</option>
      </SelectOpctions>

      <SpanIcon>
        <FaSearch />
      </SpanIcon>

      <NavbarList>
        <ul>
          <List colorActive="#fa7400">Home</List>
          <List>New arrival</List>
          <List>Mobiles</List>
        </ul>
      </NavbarList>
      <Logo src="images/logo.png" />
      <BtnSginIn to="/login" style={{ textDecoration: "none", color: "#fa7400" }}>
        
          Sgin In
        
      </BtnSginIn>
    </NavSection>
  );
};

export default Navbar;
