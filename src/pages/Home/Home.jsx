import { SingleSlider } from "../../components";
import Featuredproducts from "../../components/FeaturedProducts";
import OfferSection from "../../components/OfferSection";

const Home = () => {
  return (
    <Container w="100%" h="100vh">
      <Container margin="auto" mt="50px" w="85%">
        <SingleSlider />
      </Container>
      <OfferSection />
      <Container margin="auto" mt="50px" w="85%">
        <Featuredproducts />
      </Container>
    </Container>
  );
};

export default Home;
