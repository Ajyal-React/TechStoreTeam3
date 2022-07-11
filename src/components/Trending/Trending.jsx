import React from "react";
import {
  Cards,
  Images,
  CntDitales,
  PriceTre,
} from "../Trending/Trending.styled";
import { Text } from "../../GlobalStyles";
import { useNavigate } from "react-router-dom";

const Trending = (props) => {
  const navigate = useNavigate();

  return (
    <Cards
      onClick={() => {
        navigate(`/product/${props.id}`);
      }}
    >
      <Images src={props.images} />
      <CntDitales>
        <Text fontSize="12px">{props.name}</Text>
        <PriceTre>{props.price}</PriceTre>
      </CntDitales>
    </Cards>
  );
};

export default Trending;
