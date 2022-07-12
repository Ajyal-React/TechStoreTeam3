import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  ContinerCard,
  ContinerItem,
  SmTitle,
  LgTitle,
} from "../Trending/Trending.styled";
import Trending from "./Trending";
import { getTrending } from "../../redux/actions/trendingAction";
import Spinner from "../Spinner/Spinner";

const TrendingCards = () => {
  const [trendingCards , setTrendingCards] = useState([])
  const { data, isSuccuss, isLoading, error } = useSelector(
    (state) => state.categoriesReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (isSuccuss) {
      setTrendingCards(data);
    }
  }, [data, isSuccuss, isLoading, error]);

  useEffect(() => {
    dispatch(getTrending());
  }, []);


  return (
    <ContinerItem>
      <SmTitle>TOP PRODUCTS</SmTitle>
      <LgTitle>TRENDING THIS WEEK</LgTitle>
      <ContinerCard>s
        <>
          {isLoading ? (
            <Spinner />
          ) : (
            trendingCards?.length > 0 &&
            trendingCards?.map((ele, index) => (
              <Trending
                images={ele.images}
                name={ele.name}
                price={ele.price}
                id={ele._id}
                key={index}
              />
            ))
          )}
        </>
      </ContinerCard>
    </ContinerItem>
  );
};

export default TrendingCards;
