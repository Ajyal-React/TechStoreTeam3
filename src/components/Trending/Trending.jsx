import React from "react";
import {
  Cards,
  Images,
  CntDitales,
  PriceTre,
} from "../Trending/Trending.styled";
import { Text } from "../../GlobalStyles";
const Trending = (props) => {
  return (
    <Cards>
      <Images src={props.image} />
      <CntDitales>
        <Text fontSize="16">{props.title}</Text>
        <PriceTre>{props.price}</PriceTre>
      </CntDitales>
    </Cards>
  );
};

export default Trending;
