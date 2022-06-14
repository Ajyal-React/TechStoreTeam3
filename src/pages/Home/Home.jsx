import { Container } from "../../GlobalStyles";
import { SingleSlider } from "../../components";
import Featuredcategory from "../../components/‏‏FeaturedCategory";
import Featuredproducts from "../../components/FeaturedProducts";

const Home = () => {
  return (
    <Container w="100%" h="100vh">
      <Container margin="auto" mt="50px" w="85%">
        <Featuredcategory />
        <SingleSlider />
        <Featuredproducts />
      </Container>
    </Container>
  );
};

export default Home;
