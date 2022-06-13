import {
    Item,
    Image,
    ItemTitle,
    SliderItemPrice,
    MoreInfo,
    Arrow,
    Text,
    ImageContainer,
  } from "./index.style";
  
  const SliderItem = (props) => {
    return (
      <>
        <Item>
          <ImageContainer><Image src={props.source} /></ImageContainer>
          <ItemTitle>{props.title}</ItemTitle>
          <SliderItemPrice>{props.price}</SliderItemPrice>
          <MoreInfo>
            <Text>{props.moreInfo}</Text>
            <Arrow id="hoverArrow">{props.arrowIcon}</Arrow>
          </MoreInfo>
        </Item>
      </>
    );
  };
  
  export default SliderItem;
  