import React from "react";
import {
  HeroSection,
  Image,
  TetleHero,
  BtnHero,
  IconDown,
  ContainerHero,
  TitleSuber,
} from "../Hero/Hero.styled";
import { Text } from "../../GlobalStyles";
import { BsChevronDoubleRight } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

const Hero = () => {
  return (
    <HeroSection>
      <Image src="images/hero_bg.png" />
      <ContainerHero>
      <TetleHero top="50%" left="10%">
        <TitleSuber fontSize="40px" color="#fff" marginBottom="20px">
          PLAYSTATION 5
        </TitleSuber>
        <Text fontSize="18px" color="#fff" weight="500">
          lightning-fast download speed with super-fast ssd storage
        </Text>
        <BtnHero>
          Start Shopping <BsChevronDoubleRight />
        </BtnHero>
        <IconDown>
          <IoIosArrowDown />
        </IconDown>
      </TetleHero>
        </ContainerHero>
    </HeroSection>
  );
};

export default Hero;
