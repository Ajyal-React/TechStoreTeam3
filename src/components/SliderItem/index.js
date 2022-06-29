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
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SliderItem = (props) => {
  const navigate = useNavigate();

  return (
    <Item
      onClick={() => {
        navigate(`/product/${props.id}`);
      }}
    >
      <ImageContainer>
        <Image src={props.source} />
      </ImageContainer>
      <ItemTitle>{props.title}</ItemTitle>
      <SliderItemPrice>${props.price}</SliderItemPrice>

      <MoreInfo>
        <Text>moreInfo</Text>
        <Arrow id="hoverArrow">
          <AiOutlineArrowRight />
        </Arrow>
      </MoreInfo>
    </Item>
  );
};

export default SliderItem;
