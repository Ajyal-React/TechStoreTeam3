import { HomeContainer } from "./Home.styled";
import Featuredproducts from "../../components/FeaturedProducts";
import OfferSection from "../../components/OfferSection";
import TrendingCards from "../../components/Trending/TrendingCards";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import Categories from "../../components/FeaturedCategories/Categories";
import { useEffect, useState } from "react";
import homeServices from "../../api/homeServices";
import AuthServices from "../../api/AuthServices";

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const getFeaturedProducts = async () => {
    const res = await homeServices.getFeaturedProducts();
    if (res?.isSuccess) {
      setFeaturedProducts(res.data);
    } else if (res?.isError) {
      setErrorMessage(res.errorMessage);
    }
  };



  useEffect(() => {
    getFeaturedProducts();
      }, []);

  return (
    <HomeContainer>
      <Hero />
      <Categories />
      <OfferSection />
      {featuredProducts.length > 0 && (
        <Featuredproducts featuredProducts={featuredProducts} />
      )}
      <TrendingCards />
      <Footer />
    </HomeContainer>
  );
};

export default Home;
