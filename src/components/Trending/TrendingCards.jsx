import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SmTitle, LgTitle } from "../../GlobalStyles";
import { ContinerCard, ContinerItem } from "../Trending/Trending.styled";
import Trending from "./Trending";
import { getTrending } from "../../redux/actions/trendingAction";
import Spinner from "../Spinner/Spinner";
const TrendingCards = (store) => {
  const [trendingCards, setTrendingCards] = useState([]);
  const dispatch = useDispatch();

  const { data, isSuccuss, isLoading, error } = useSelector(
    (state) => state.categoriesReducer
  );

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
      <ContinerCard>
        <>
          {isLoading ? (
            <Spinner />
          ) : (
            trendingCards.map((ele, index) => {
              return (
                <>
                  <Trending
                    images={ele.images}
                    name={ele.name}
                    price={ele.price}
                    key={index}
                  />
                  <Trending
                    images={ele.images}
                    name={ele.name}
                    price={ele.price}
                    key={index}
                  />
                  <Trending
                    images={ele.images}
                    name={ele.name}
                    price={ele.price}
                    key={index}
                  />

                  <Trending
                    images={ele.images}
                    name={ele.name}
                    price={ele.price}
                    key={index}
                  />
                </>
              );
            })
          )}
        </>
      </ContinerCard>
    </ContinerItem>
  );
};

export default TrendingCards;
