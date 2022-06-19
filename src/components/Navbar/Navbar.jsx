import React from "react";
//Import blue print library for create the search overlay
import "@blueprintjs/core/lib/css/blueprint.css";
import { Overlay, Classes, Button } from "@blueprintjs/core";
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
  // Open overlay state
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <NavSection>
      <SelectOpctions>
        <option value="English">English</option>
        <option value="Arbic">Arbic</option>
      </SelectOpctions>

      <button
        style={{
          border: "none",
          marginLeft: "20px",
          backgroundColor: "transparent",
          cursor: "pointer",
        }}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <SpanIcon>
          <FaSearch />
        </SpanIcon>
      </button>

      {/*OverLay starts here*/}

      <Overlay className={Classes.OVERLAY_SCROLL_CONTAINER} isOpen={isOpen}>
        <button
          style={{
            border: "none",
            fontSize: "30px",
            marginLeft: "20px",
            backgroundColor: "transparent",
            cursor: "pointer",
            color: "#eeeeee",
            marginLeft: "1200px",
            marginTop: "50px",
          }}
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <FaRegWindowClose />
        </button>
        <ContainerSearch>
          <SearchInput type="text" placeholder="Type To Search..." />
          <SearchIcon>
            <FaSearch />
          </SearchIcon>
          <Tags>
            <Tag>Laptops</Tag>
            <Tag>Mobiles</Tag>
            <Tag>Play stations</Tag>
            <Tag>Ipads</Tag>
          </Tags>
        </ContainerSearch>
      </Overlay>
      {/*OverLay ends here*/}

      <NavbarList>
        <ul>
          <List colorActive="#fa7400">Home</List>
          <List>New arrival</List>
          <List>Mobiles</List>
        </ul>
      </NavbarList>
      {/* <a href="#"><Logo src="images/logo.png" /></a> */}
      <Logo src="images/logo.png" />
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
