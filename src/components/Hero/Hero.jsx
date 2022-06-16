import React from "react";
import Navbar from "../Navbar/Navbar";
import {
  HeroSection,
  Image,
  TetleHero,
  BtnHero,
  
  IconDown,
} from "../Hero/Hero.styled";
import { Title, Text } from "../../GlobalStyles";
import { BsChevronDoubleRight } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

const Hero = () => {
  return (
    <HeroSection>
      <Navbar />
      <Image src="images/hero_bg.png" />
      <TetleHero top="50%" left="10%">
        <Title fontSize="40px" color="#fff" marginBottom="20px">
          PLAYSTATION 5
        </Title>
        <Text fontSize="18px" color="#fff" weight="500">
          lightning-fast download speed with super-fast ssd storage
        </Text>
        <BtnHero>
          Start Shopping{" "}
            <BsChevronDoubleRight />
        </BtnHero>
        <IconDown>
          <IoIosArrowDown/>
        </IconDown>
      </TetleHero>
    </HeroSection>
  );
};

export default Hero;
