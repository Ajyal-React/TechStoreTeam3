import {
  ProductDetailsContainer,
  ImageDisplay,
  DetailsContent,
  DetailsColumn,
  RowGap,
  SmImageDisplay,
  SmImageBox,
  ProductTitle,
  SmText,
  Span,
  Select,
  Button,
} from "./ProductDetails.styled";
import { Navbar, RadioColor } from "../../components";
import { Column, Row, Divider } from "../../GlobalStyles";

const ProductDetails = () => {
  return (
    <ProductDetailsContainer>
      <Navbar />
      <DetailsContent>
        <DetailsColumn>
          <ImageDisplay src="./images/bag.png" />
          <RowGap gap="13px">
            <SmImageBox>
              <SmImageDisplay src="./images/bag.png" />
            </SmImageBox>
            <SmImageBox>
              <SmImageDisplay src="./images/phone1.png" />
            </SmImageBox>
            <SmImageBox>
              <SmImageDisplay src="./images/phone2.png" />
            </SmImageBox>
            <SmImageBox>
              <SmImageDisplay src="./images/phone3.png" />
            </SmImageBox>
            <SmImageBox>
              <SmImageDisplay src="./images/phone4.png" />
            </SmImageBox>
          </RowGap>
        </DetailsColumn>

        <DetailsColumn>
          <ProductTitle>MacBook Pro 13</ProductTitle>
          <SmText color="#9B9A9A">The best for your professional life</SmText>
          <SmText color="#707070" fz="20px" mt="10px">
            Availability in stock: <Span>Available</Span>
          </SmText>
          <Divider />
          <SmText fw="600" mt="25px">
            Choose your combination
          </SmText>
          <RowGap gap="40px">
            <RadioColor id="1" c1="#646363" c2="#FFFFFF" />
            <RadioColor id="2" c1="#FFFFFF" c2="#000000" />
            <RadioColor id="3" c1="#AFAFAF" c2="#000000" />
            <RadioColor id="4" c1="#CACACA" c2="#FFFFFF" />
          </RowGap>
          <SmText fw="600" mt="25px">
            Size and Weight
          </SmText>
          <Select />
          <SmText fw="600" mt="25px">
            Chip
          </SmText>
          <Select />
          <SmText fw="600" mt="25px">
            Storage
          </SmText>
          <Select />
          <SmText fw="600" mt="25px">
            Memory
          </SmText>
          <Select />
          <Button>Add To Cart</Button>
        </DetailsColumn>
      </DetailsContent>
    </ProductDetailsContainer>
  );
};

export default ProductDetails;
