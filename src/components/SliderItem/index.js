import {
  Item,
  Image,
  ItemTitle,
  SliderItemPrice,
  MoreInfo,
  Arrow,
  Text,
  ImageContainer,
} from "./index.style";

import { Link } from "react-router-dom";
const SliderItem = (props) => {
  return (
    <>
      <Link style={{ textDecoration: "none" }} to="/ProductDetails">
        <Item>
          <ImageContainer>
            <Image src={props.source} />
          </ImageContainer>
          <ItemTitle>{props.title}</ItemTitle>
          <SliderItemPrice>{props.price}</SliderItemPrice>

          <MoreInfo>
            <Text>{props.moreInfo}</Text>
            <Arrow id="hoverArrow">{props.arrowIcon}</Arrow>
          </MoreInfo>
        </Item>
      </Link>
    </>
  );
};

export default SliderItem;
