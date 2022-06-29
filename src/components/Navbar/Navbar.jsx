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
} from "../Navbar/Navbar.styled";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);
  return (
    <NavSection extendNavbar={extendNavbar}>
      {extendNavbar && (
        <>
                    <BtnSide
        onClick={() => {
          setExtendNavbar((curr) => !curr);
        }}
      >
        {extendNavbar ? <AiOutlineClose /> : <FaBars />}
      </BtnSide>
     <SelectOpctions>
        <option value="English">English</option>
        <option value="Arbic">Arbic</option>
      </SelectOpctions>
        
        </>



      )}
  
 
      <SpanIcon>
        <FaSearch />
      </SpanIcon>
      {extendNavbar && (
        <NavbarList>
          <ul>
            <List colorActive="#fa7400">Home</List>
            <List>New arrival</List>
            <List>Mobiles</List>
          </ul>
        </NavbarList>
      )}

      <Logo src="images/logo.png" />

      {extendNavbar && (
        <NavbarList marginLeft="2%">
          <ul>
            <List marginLeft="15px">Laptop</List>
            <List marginLeft="15px">Headphones</List>
            <List marginLeft="15px">Accessorieas</List>
          </ul>
        </NavbarList>
      )}

      <BtnSginIn>
        <Link to="/login" style={{ textDecoration: "none", color: "#fa7400" }}>
          Sgin In
        </Link>
      </BtnSginIn>
    </NavSection>
  );
};

export default Navbar;
