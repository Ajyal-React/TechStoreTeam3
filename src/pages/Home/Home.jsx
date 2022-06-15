import { HomeContainer } from "./Home.styled";
import { SingleSlider } from "../../components";
import Featuredproducts from "../../components/FeaturedProducts";
import OfferSection from "../../components/OfferSection";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <HomeContainer>
      <Navbar/>
      <SingleSlider />
      <OfferSection />
      <Featuredproducts />
    </HomeContainer>
  );
};

export default Home;
