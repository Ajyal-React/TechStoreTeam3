import React from "react";
import { FaRegWindowClose, FaSearch } from "react-icons/fa";

import {
  NavSection,
  SelectOpctions,
  NavbarList,
  List,
  Logo,
  SpanIcon,
  BtnSginIn,
  ContainerSearch,
  SearchInput,
  SearchIcon,
  Tags,
  Tag,
} from "../Navbar/Navbar.styled";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <NavSection>
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
      {/* <a href="#"><Logo src="images/logo.png" /></a> */}
      <Logo src="/images/logo.png" />
      <NavbarList marginLeft="2%">
        <ul>
          <List marginLeft="15px">Laptop</List>
          <List marginLeft="15px">Headphones</List>
          <List marginLeft="15px">Accessorieas</List>
        </ul>
      </NavbarList>
      <BtnSginIn>
        <Link to="/login" style={{ textDecoration: "none", color: "#fa7400" }}>
          Sgin In
        </Link>
      </BtnSginIn>
    </NavSection>
  );
};

export default Navbar;
