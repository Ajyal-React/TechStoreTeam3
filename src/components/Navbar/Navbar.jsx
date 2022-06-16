import React from "react";
import {
  NavSection,
  SelectOpctions,
  NavbarList,
  List,
  Logo,
  SpanIcon,
  BtnSginIn
} from "../Navbar/Navbar.styled";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";

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
          <List colorActive='#fa7400'>Home</List>
          <List>New arrival</List>
          <List>Mobiles</List>
        </ul>
      </NavbarList>
      <Logo src="images/logo.png" />
      <NavbarList marginLeft='2%'>
        <ul>
          <List marginLeft='15px'>Laptop</List>
          <List marginLeft='15px'>Headphones</List>
          <List marginLeft='15px'>Accessorieas</List>
        </ul>
        
      </NavbarList>
      <BtnSginIn marginLeft='8%'>Sgin In</BtnSginIn>
    </NavSection>
  );
};

export default Navbar;
