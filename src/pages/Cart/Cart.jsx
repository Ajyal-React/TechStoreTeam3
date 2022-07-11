import Navbar from "../../components/Navbar/Navbar";
import { BiArrowBack } from "react-icons/bi";
import ItemInCart from "../../components/ItemInCart/ItemInCart.jsx";
import Footer from "../../components/Footer/Footer";
import {
  CartPageContainer,
  CartSection,
  ArrowBackContainer,
  Paragraph,
  ButtonContainer,
  Button,
} from "./Cart.styled";

const Cart = () => {
  return (
    <CartPageContainer>
      <Navbar />
      <CartSection>
        <ArrowBackContainer>
          <BiArrowBack />
          <Paragraph>Return to the details product</Paragraph>
        </ArrowBackContainer>
        {/* map  */}
        <ItemInCart />
        <ItemInCart />
        <ItemInCart />
        <ItemInCart />
        {/* end map  */}
        <ButtonContainer>
          <Button>Go To Payment</Button>
        </ButtonContainer>
      </CartSection>
      <Footer />
    </CartPageContainer>
  );
};

export default Cart;
