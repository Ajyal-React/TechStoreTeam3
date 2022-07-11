import {
  SliderContainer,
  Discount,
  SliderImage,
  DiscountPrice,
  Name,
} from "./SliderItem.styled";
import { Row, Column, Text, Price } from "../../../GlobalStyles";
import { useNavigate } from "react-router-dom";

const SliderItem = ({ itemData }) => {
    const navigate = useNavigate();

  return (
    <SliderContainer
      onClick={() => {
        navigate(`/product/${itemData.id}`);
      }}
    >
      <Column direction="column" align="center">
        <Row w="100%">
          <Discount>{itemData.discount}</Discount>
        </Row>
        <SliderImage src={itemData.image} />
        <Row justify="space-between">
          <Name fontSize="37px" weight="600" lg>
            {itemData.title}
          </Name>
          <Price>{itemData.price}</Price>
        </Row>
        <Row margin="15px 0px 0px 0px" justify="space-between" align="center">
          <Text fontSize="20px" weight="400" color="#7A7A7A">
            Brand: {itemData.brand}
          </Text>
          <DiscountPrice>{itemData.discountPrice}</DiscountPrice>
        </Row>
      </Column>
    </SliderContainer>
  );
};

export default SliderItem;
