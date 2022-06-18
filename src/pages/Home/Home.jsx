import { HomeContainer } from "./Home.styled";
import { SingleSlider } from "../../components";
import Featuredproducts from "../../components/FeaturedProducts";
import Featurecategories from "../../components/FeaturedCategories";
import OfferSection from "../../components/OfferSection";
import TrendingCards from "../../components/Trending/TrendingCards"
import Hero from '../../components/Hero/Hero'
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card";

const Home = () => {
  return (
    <HomeContainer>
      <Hero/>
      <Featurecategories />
      <Card />
      <SingleSlider />
      <OfferSection />
      <Featuredproducts />
      <TrendingCards/>
      <Footer/>
    </HomeContainer>
  );
};

export default Home;
