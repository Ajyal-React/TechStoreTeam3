// import { header } from "../../GlobalStyles";
// import { Button } from "../../GlobalStyles";
import {
  Nav,
  Sec,
  Header,
  Li,
  Paragraph,
  LiBtn,
  Ul,
  
} from "./index.style";


const Featurecategories =() => {
  
  return (
    <Nav>
      <Sec>
        <Paragraph>LAPTOPS</Paragraph>
        <Header>FEATURED CATEGORIES</Header>
      </Sec>
      <Ul>
        <LiBtn>MOBILES</LiBtn>
        <Li>LAPTOPS</Li>
        <Li>PLAY STATIONS</Li>
        <Li>IPADS</Li>
        <Li>AIRPODS</Li>
        <Li>MORE</Li>
      </Ul>
    </Nav>
  );
};

export default Featurecategories;
