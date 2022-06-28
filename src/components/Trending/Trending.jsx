import React from "react";
import {
  Cards,
  Images,
  CntDitales,
  PriceTre,
} from "../Trending/Trending.styled";
import { Text } from "../../GlobalStyles";
const Trending = (item) => {
  return (
    <Cards>
      <Images src={item.images} />
      <CntDitales>
        <Text fontSize="12px">{item.name}</Text>
        <PriceTre>{item.price}</PriceTre>
      </CntDitales>
    </Cards>
  );
};

export default Trending;