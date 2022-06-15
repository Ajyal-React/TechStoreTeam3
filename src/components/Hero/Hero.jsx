import React from "react";
import Navbar from "../Navbar/Navbar";
import {
  HeroSection,
  Image,
  TetleHero,
  BtnHero,
  IconArrow,
} from "../Hero/Hero.styled";
import { Title, Text } from "../../GlobalStyles";
import { MdOutlineDoubleArrow }  from "react-icons/md";;

const Hero = () => {
  return (
    <HeroSection>
      <Navbar />
      <Image src="images/hero_bg.png" />
      <TetleHero bottom="10%" left="10%">
        <Title fontSize="40px" color="#fff" marginBottom="20px">
          PLAYSTATION 5
        </Title>
        <Text fontSize="18px" color="#fff" weight="500">
          lightning-fast download speed with super-fast ssd storage
        </Text>
        <BtnHero>
          Start Shopping{" "}
          <IconArrow>
            <MdOutlineDoubleArrow />
          </IconArrow>
        </BtnHero>
      </TetleHero>
    </HeroSection>
  );
};

export default Hero;
