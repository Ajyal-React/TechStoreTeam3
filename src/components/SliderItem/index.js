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
  

  import {Link} from 'react-router-dom'
  const SliderItem = (props) => {
    return (
      <>
        <Item>
          <ImageContainer><Image src={props.source} /></ImageContainer>
          <ItemTitle>{props.title}</ItemTitle>
          <SliderItemPrice>{props.price}</SliderItemPrice>
          <Link style={{textDecoration:'none'}} to="/ProductDetails">
          <MoreInfo>
            <Text>{props.moreInfo}</Text>
            <Arrow id="hoverArrow">{props.arrowIcon}</Arrow>
          </MoreInfo>
          </Link>
         
        </Item>
      </>
    );
  };
  
  export default SliderItem;
  