import {
  SliderContainer,
  Discount,
  SliderImage,
  DiscountPrice,
} from "./SliderItem.styled";
import { Row, Column, Text, Price } from "../../../GlobalStyles";

const SliderItem = ({ itemData }) => {
  return (
    <SliderContainer>
      <Column direction="column" align="center">
        <Row w="100%">
          <Discount>{itemData.discount}</Discount>
        </Row>
        <SliderImage src={itemData.image} />
        <Row justify="space-between">
          <Text fontSize="37px" weight="600" lg>
            {itemData.title}
          </Text>
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
