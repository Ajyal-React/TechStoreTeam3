import { Discount, SliderImage, DiscountPrice } from "./SingleSliderItem";
import { Container, FlexContainer, Text, Price } from "../../GlobalStyles";

const SingleSliderItem = ({ itemData }) => {
  return (
    <Container padding="22px 40px">
      <FlexContainer direction="column" align="center">
        <FlexContainer w="100%">
          <Discount>{itemData.discount}</Discount>
        </FlexContainer>
        <SliderImage src={itemData.image} />
        <FlexContainer w="100%" justify="space-between">
          <Text fontSize="37px" weight="600">
            {itemData.title}
          </Text>
          <Price fontSize="23px">{itemData.price}</Price>
        </FlexContainer>
        <FlexContainer
          w="100%"
          mt="15px"
          justify="space-between"
          align="center"
        >
          <Text fontSize="20px" weight="400" color="#7A7A7A">
            Brand: {itemData.brand}
          </Text>
          <DiscountPrice>{itemData.discountPrice}</DiscountPrice>
        </FlexContainer>
      </FlexContainer>
    </Container>
  );
};

export default SingleSliderItem;
