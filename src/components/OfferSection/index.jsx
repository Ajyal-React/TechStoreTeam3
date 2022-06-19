import { Link } from "react-router-dom";
import Button from "../Button";
import { Container, OfferSection, Text } from "./index.style";

const Offer = (props) => {
  return (
    <OfferSection>
      <Text>Get 50% Off</Text>
      <Link to="/Signup"><Button text="Start Shopping" /></Link> 
    </OfferSection>
  );
};

export default Offer;
