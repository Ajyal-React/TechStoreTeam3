import React from "react";
import {
    Foot,
  ContFooter,
  Elements1,
  CopyRight,
  Line,
  Text,
  IconSocial,
  Icons,

} from "../Footer/Footer.styled";
import { Logo, List, NavbarList } from "../Navbar/Navbar.styled";
import {} from "../../GlobalStyles";
import { FaEnvelope } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { ImFacebook } from "react-icons/im";
import { RiWhatsappFill } from "react-icons/ri";

const Footer = () => {
  return (
    <Foot>
      <ContFooter>
        <Elements1>
          <Logo src="images/logo.png" />
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </Elements1>

        <NavbarList marginLeft="3%" fontSize="14px">
          <List display="block" colorActive="#302F2Fs" weight="700">
            Home
          </List>
          <List display="block" marginTop="20px" colorActive="#646363">
            Featured Categories
          </List>
          <List display="block" marginTop="20px" colorActive="#646363">
            Featured Products
          </List>
          <List display="block" marginTop="20px" colorActive="#646363">
            Offers
          </List>
        </NavbarList>

        <NavbarList marginLeft="3%" fontSize="14px">
          <List display="block" colorActive="#302F2Fs" weight="700">
            Menu
          </List>
          <List display="block" marginTop="20px" colorActive="#646363">
            Home
          </List>
          <List display="block" marginTop="20px" colorActive="#646363">
            New arrival
          </List>
          <List display="block" marginTop="20px" colorActive="#646363">
            Mobiles
          </List>
        </NavbarList>

        <NavbarList marginLeft="3%" fontSize="14px">
          <List display="block" colorActive="#302F2Fs" weight="700">
            Menu
          </List>
          <List display="block" marginTop="20px" colorActive="#646363">
            Laptops
          </List>
          <List display="block" marginTop="20px" colorActive="#646363">
            Headphones
          </List>
          <List display="block" marginTop="20px" colorActive="#646363">
            Accessories
          </List>
        </NavbarList>

        <NavbarList marginLeft="10%" fontSize="14px">
          <List display="block" colorActive="#302F2Fs" weight="700">
            Menu
          </List>
          <Text width="400px" letterSpacing="-0.17px">
            Fell free get in touch with us via phone or send us a message
          </Text>
          <List display="block" marginTop="5px" colorActive="#646363">
            <Icons>
              <MdPhone />
            </Icons>
            +1 234 567 89 10
          </List>
 
          <List display="block" marginTop="15px" colorActive="#646363">
          <Icons>
              <FaEnvelope />
            </Icons>
            support@khoomi.com
          </List>

        </NavbarList>
      </ContFooter>

      <Line />

      <CopyRight>
        <Elements1>

        <Text>all copyRights are reserved @2022</Text>
        </Elements1>
        <IconSocial>
            <ImFacebook color='#4267B2'/>
            
            <RiWhatsappFill color="#25D366"/>
        </IconSocial>
      </CopyRight>
    </Foot>
  );
};

export default Footer;
