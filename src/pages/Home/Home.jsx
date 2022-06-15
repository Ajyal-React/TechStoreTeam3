import { HomeContainer } from "./Home.styled";
import { SingleSlider } from "../../components";
import Featuredproducts from "../../components/FeaturedProducts";
import OfferSection from "../../components/OfferSection";

const Home = () => {
  return (
    <HomeContainer>
          <SingleSlider />
      <OfferSection />
      <Featuredproducts />
    </HomeContainer>
  );
};

export default Home;
