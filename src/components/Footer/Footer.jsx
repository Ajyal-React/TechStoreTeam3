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
  Logo,
  FooterList,
  List,
  Contacts,
  IconsCont,
  PhonEmail,
  Textfoo
} from "../Footer/Footer.styled";
import { FaEnvelope } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { ImFacebook } from "react-icons/im";
import { RiWhatsappFill } from "react-icons/ri";

const Footer = () => {
  return (
    <Foot>
      <ContFooter>
        <Elements1>
          <Logo src="/images/logo.png" />
          <Text width="380px" marginLeft="20px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </Elements1>

        <FooterList marginLeft="3%" fontSize="14px">
          <List color="#000" weight="700">
            Home
          </List>
          <List>Featured Categories</List>
          <List>Featured Products</List>
          <List>Offers</List>
        </FooterList>

        <FooterList marginLeft="5%" fontSize="14px">
          <List color="#000" weight="700">
            Menu
          </List>
          <List>Home</List>
          <List>New arrival</List>
          <List>Mobiles</List>
        </FooterList>

        <FooterList marginLeft="5%" fontSize="14px">
          <List color="#000" weight="700">
            Menu
          </List>
          <List>Laptops</List>
          <List>Headphones</List>
          <List>Accessories</List>
        </FooterList>

        <FooterList marginLeft="7%" fontSize="14px">
          <Contacts>
            <List color="#000" weight="700">
              Contacts
            </List>
            <List>
              Fell free get in touch with us via phone or send us a message
            </List>
          </Contacts>
          <PhonEmail>
          <List>
            <Icons>
              <MdPhone />
            </Icons>
            +1 234 567 89 10
          </List>

          <List>
            <Icons>
              <FaEnvelope />
            </Icons>
            support@khoomi.com
          </List>


          </PhonEmail>
         
        </FooterList>
      </ContFooter>

      <Line />

      <CopyRight>
        <Elements1>
          <Textfoo width="400px">all copyRights are reserved @2022</Textfoo>
        </Elements1>
        <IconSocial>
          <IconsCont>
            <ImFacebook color="#4267B2" />
          </IconsCont>
          <IconsCont>
            <RiWhatsappFill color="#25D366" />
          </IconsCont>
        </IconSocial>
      </CopyRight>
    </Foot>
  );
};

export default Footer;
