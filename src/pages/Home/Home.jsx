import { HomeContainer } from "./Home.styled";
import { SingleSlider } from "../../components";
import Featuredproducts from "../../components/FeaturedProducts";
import OfferSection from "../../components/OfferSection";
import Navbar from "../../components/Navbar/Navbar";
import TrendingCards from "../../components/Trending/TrendingCards"
const Home = () => {
  return (
    <HomeContainer>
      <Navbar/>
      <SingleSlider />
      <OfferSection />
      <Featuredproducts />
      <TrendingCards/>
    </HomeContainer>
  );
};

export default Home;
