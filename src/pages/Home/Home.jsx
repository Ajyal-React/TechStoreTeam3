import { HomeContainer } from "./Home.styled";
import Featuredproducts from "../../components/FeaturedProducts";
import OfferSection from "../../components/OfferSection";
import TrendingCards from "../../components/Trending/TrendingCards";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import Categories from "../../components/FeaturedCategories/Categories";
import { useEffect, useState } from "react";
import homeServices from "../../api/homeServices";

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [featuredCategories, setFeaturedCategories] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const getFeaturedProducts = async () => {
    const res = await homeServices.getFeaturedProducts();
    if (res?.isSuccess) {
      setFeaturedProducts(res.data);
    } else if (res?.isError) {
      setErrorMessage(res.errorMessage);
    }
  };
  
  const getFeaturedCategories = async () => {
    const res = await homeServices.getFeaturedCategories();
    if (res?.isSuccess) {
      setFeaturedCategories(res.data);
    } else if (res?.isError) {
      setErrorMessage(res.errorMessage);
    }
  };

  const getFeaturedCategories = async () => {
    const res = await homeServices.getFeaturedCategories();
    if (res?.isSuccess) {
      setFeaturedCategories(res.data);
    } else if (res?.isError) {
      setErrorMessage(res.errorMessage);
    }
  };

  useEffect(() => {
    getFeaturedProducts();
    getFeaturedCategories();
  }, []);

  return (
    <HomeContainer>
      <Hero />
      <Categories featuredCategories={featuredCategories} />
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
