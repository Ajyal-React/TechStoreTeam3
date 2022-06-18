


import React from "react";
import { AiFillHeart, AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import { CardPhone, FlexBox, Icon, ImgDimension, ImgMulti, Lines, Price, SubHeading } from "./index.style";

function SingleCard(props) {

	return (
        <div>
                <AiFillHeart />
                    <ImgMulti>
                    <ImgDimension src={`/Images/${props.img}.png`}  alt="logo" />
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
                    <Lines />
                    <FlexBox>
                        <Icon>
                            <AiFillStar  />
                            <AiFillStar  />
                            <AiFillStar  />
                            <AiFillStar  />
                            <AiFillStar  />
                        </Icon>
                        <Icon>
                            <AiOutlineShoppingCart  />
                        </Icon>
                    </FlexBox>
        </div>

                	);
                }
                
                export default SingleCard;