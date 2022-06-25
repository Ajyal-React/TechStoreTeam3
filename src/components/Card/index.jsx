import { AiFillHeart, AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import { CardPhone } from "../../GlobalStyles";
import {
  FlexBox,
  Icon,
  ImgDimension,
  ImgMulti,
  Lines,
  Price,
  SubHeading,
} from "./index.style";

function Card(props) {
  return (
    <CardPhone>
      <AiFillHeart />
      <ImgMulti>
        <ImgDimension src={`/Images/${props.img}.png`} alt="logo" />
      </ImgMulti>

      <FlexBox>
        <SubHeading fontSize="12px">HP laptop</SubHeading>
        <Price
          color="#0EA965"
          bgColor="white"
          borderRadius="5px"
          fontSize="8px"
        >
          $99
        </Price>
      </FlexBox>
      <Lines />
      <FlexBox>
        <Icon>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </Icon>
        <Icon>
          <AiOutlineShoppingCart />
        </Icon>
      </FlexBox>
    </CardPhone>
  );
}

export default Card;
