import {
  ItemInCartContainer,
  ImgNameCounterContainer,
  ImageContainer,
  NameParagraph,
  CounterContainer,
  Input,
  PriceCloseContainer,
  PriceParagraph,
  Button,
} from "./ItemInCart.styled";

import { GrFormClose } from "react-icons/gr";
const ItemInCart = () => {
  return (
    <ItemInCartContainer>
      {/* left => img, name and counter */}
      <ImgNameCounterContainer>
        <ImageContainer></ImageContainer>
        <NameParagraph>Labtop Bag</NameParagraph>
        <CounterContainer>
          <Button>+</Button>
          <Input type="text" />
          <Button>-</Button>
        </CounterContainer>
      </ImgNameCounterContainer>
      {/* right => price and delete */}
      <PriceCloseContainer>
        <PriceParagraph>$75</PriceParagraph>
        <GrFormClose color="#f00" />
      </PriceCloseContainer>
    </ItemInCartContainer>
  );
};

export default ItemInCart;
