import React from "react";
import { AiFillHeart, AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import { CardPhone, FlexBox, ImgMulti, Price, SubHeading } from "./index.style";

function Card(props) {

	return (
		<CardPhone>
			<div>
				<AiFillHeart />
				<ImgMulti>
				<img src={`/Images/${props.img}.png`} className="img-multi" alt="logo" />
				</ImgMulti>               

				<FlexBox>
					<SubHeading fontSize="12px">HP laptop</SubHeading>
					<Price
						color="#0EA965"
						bgColor="white"
						borderRadius="5px"
						fontSize="8px"
					>
						$99
					</Price>
				</FlexBox>
				<hr className="lines" />
				<FlexBox>
					<p className="name-cust">
						<AiFillStar className="ico-star" />
						<AiFillStar className="ico-star" />
						<AiFillStar className="ico-star" />
						<AiFillStar className="ico-star" />
						<AiFillStar className="ico-star" />
					</p>
					<p className="prev-price">
						<AiOutlineShoppingCart  className="ico-shop" />
					</p>
				</FlexBox>
			</div>
		</CardPhone>
	);
}

export default Card;
