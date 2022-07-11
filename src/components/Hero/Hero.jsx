import React, { useEffect } from "react";
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

const Hero = ({ offer}) => {
  // useEffect(() => {
  //   useDispatch(getOffers());
  // }, []);
  return (
    <HeroSection>
      <Image image={offer?.imageBanner}>
        <TetleHero top="50%" left="10%">
          <TitleSuber fontSize="40px" color="#fff" marginBottom="20px">
            {offer?.name}
          </TitleSuber>
          <Text fontSize="18px" color="#fff" weight="500">
            {offer?.description}{" "}
          </Text>
          <BtnHero>
            Start Shopping <BsChevronDoubleRight />
          </BtnHero>
          <IconDown>
            <IoIosArrowDown />
          </IconDown>
        </TetleHero>
      </Image>
    </HeroSection>
  );
};

export default Hero;
