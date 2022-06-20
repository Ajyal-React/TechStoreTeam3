import {
  SliderSection,
  SliderTitle,
  SliderBigTitle,
  SliderContent,
  TopTitle,
} from "./index.style";
import SliderItem from "../SliderItem";
import Slider from "react-slick";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import "./arrow.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        width: "42px",
        height: "85px",
        background: "#FA7400",
        borderTopLeftRadius: "100px",
        borderBottomLeftRadius: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    >
      <img src="./images/arrow_slider.svg" alt="" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        width: "42px",
        height: "85px",
        background: "#FA7400",
        borderTopRightRadius: "100px",
        borderBottomRightRadius: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    >
      <img src="./images/arrow_slider_left.svg" alt="" />
    </div>
  );
}

const Featuredproducts = (props) => {
  //Slick carousal settings starts here
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    dotsClass: "dots",
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  //Slick carousal settings ends here

  //Products list array starts here

  const [Product] = useState([
    {
      id: "1",
      image: "Images/wristwatch.PNG",
      title: "Smart Watch",
      price: "$20",
      moreInfo: "moreInfo",
      arrowIcon: <AiOutlineArrowRight />,
    },
    {
      id: "2",

      image: "Images/controller.PNG",
      title: "Games Arm",
      price: "$20",
      moreInfo: "moreInfo",
      arrowIcon: <AiOutlineArrowRight />,
    },
    {
      id: "3",

      image: "images/laptop.PNG",
      title: "Mac Laptop",
      price: "$20",
      moreInfo: "moreInfo",
      arrowIcon: <AiOutlineArrowRight />,
    },
    {
      id: "4",

      image: "Images/bag.PNG",
      title: "Back Bag",
      price: "$20",
      moreInfo: "moreInfo",
      arrowIcon: <AiOutlineArrowRight />,
    },
    {
      id: "5",
      image: "Images/wristwatch.PNG",
      title: "Smart Watch",
      price: "$20",
      moreInfo: "moreInfo",
      arrowIcon: <AiOutlineArrowRight />,
    },
    {
      id: "6",

      image: "Images/controller.PNG",
      title: "Games Arm",
      price: "$20",
      moreInfo: "moreInfo",
      arrowIcon: <AiOutlineArrowRight />,
    },
    {
      id: "7",

      image: "images/laptop.PNG",
      title: "Mac Laptop",
      price: "$20",
      moreInfo: "moreInfo",
      arrowIcon: <AiOutlineArrowRight />,
    },
    {
      id: "8",

      image: "Images/bag.PNG",
      title: "Back Bag",
      price: "$20",
      moreInfo: "moreInfo",
      arrowIcon: <AiOutlineArrowRight />,
    },
  ]);
  //Products list array ends here

  return (
    <SliderSection>
      <TopTitle>
        <SliderTitle>Devices</SliderTitle>
        <SliderBigTitle>Featured products</SliderBigTitle>
      </TopTitle>

      <SliderContent>
        <Slider {...settings}>
          {Product.map((el) => (
              <SliderItem
                key={el.id}
                source={el.image}
                title={el.title}
                price={el.price}
                moreInfo={el.moreInfo}
                arrowIcon={el.arrowIcon}
              ></SliderItem>
          ))}
        </Slider>
      </SliderContent>
    </SliderSection>
  );
};

export default Featuredproducts;
