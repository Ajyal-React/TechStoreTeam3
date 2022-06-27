import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SmTitle, LgTitle } from "../../GlobalStyles";
import { ContinerCard, ContinerItem } from "../Trending/Trending.styled";

import store from "../../redux/store";
import Trending from "./Trending";

const TrendingCards = (store) => {
  // const [item] = useState([
  //   {
  //     image: "images/laptop.png",
  //     title: "Nike Court Air",
  //     price: "$58",
  //   },
  //   {
  //     image: "images/controller.png",
  //     title: "Nike Court Air",
  //     price: "$58",
  //   },
  //   {
  //     image: "images/bag.png",
  //     title: "Nike Court Air",
  //     price: "$58",
  //   },
  //   {
  //     image: "images/laptop.png",
  //     title: "Nike Court Air",
  //     price: "$58",
  //   },
  //   {
  //     image: "images/phone1.png",
  //     title: "Nike Court Air",
  //     price: "$58",
  //   },
  //   {
  //       image: "images/laptop.png",
  //       title: "Nike Court Air",
  //       price: "$58",
  //     },
  //     {
  //       image: "images/controller.png",
  //       title: "Nike Court Air",
  //       price: "$58",
  //     },
  //     {
  //       image: "images/bag.png",
  //       title: "Nike Court Air",
  //       price: "$58",
  //     },
  //     {
  //       image: "images/laptop.png",
  //       title: "Nike Court Air",
  //       price: "$58",
  //     },
  //     {
  //       image: "images/phone1.png",
  //       title: "Nike Court Air",
  //       price: "$58",
  //     },
  //     {
  //       image: "images/laptop.png",
  //       title: "Nike Court Air",
  //       price: "$58",
  //     },
  //     {
  //       image: "images/controller.png",
  //       title: "Nike Court Air",
  //       price: "$58",
  //     },
  //     {
  //       image: "images/bag.png",
  //       title: "Nike Court Air",
  //       price: "$58",
  //     },
  //     {
  //       image: "images/laptop.png",
  //       title: "Nike Court Air",
  //       price: "$58",
  //     },
  //     {
  //       image: "images/phone1.png",
  //       title: "Nike Court Air",
  //       price: "$58",
  //     },
  // ]);
  return (
    <ContinerItem>
      <SmTitle>TOP PRODUCTS</SmTitle>
      <LgTitle>TRENDING THIS WEEK</LgTitle>
      <ContinerCard>
        <>
          {/* {store.map((ele,index) => {
            return (
              <Trending image={ele.image} title={ele.title} price={ele.price} key={index}/>
            );
          })} */}
        </>
      </ContinerCard>
    </ContinerItem>
  );
};

export default TrendingCards;
