import { Container } from "../../GlobalStyles";
import Button from "../Button";
import { OfferSection, Text } from "./index.style";

const Offer = (props) => {
  return (
    <OfferSection>
      <Container
        w="60%"
        margin="auto"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Text>Get 50% Off</Text>
        <Button
          text="Start Shopping"
        />
      </Container>
    </OfferSection>
  );
};

export default Offer;
