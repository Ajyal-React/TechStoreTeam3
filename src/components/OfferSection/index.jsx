import Button from "../Button";
import { Container, OfferSection, Text } from "./index.style";

const Offer = (props) => {
  return (
    <OfferSection>
      <Text>Get 50% Off</Text>
      <Button text="Start Shopping" /* padding="61 18" */ />
    </OfferSection>
  );
};

export default Offer;
