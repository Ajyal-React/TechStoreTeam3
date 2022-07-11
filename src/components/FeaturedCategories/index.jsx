import { Nav, Sec, Li, LiBtn, Ul, SmallTitle, BigTitle } from "./index.style";

const TabCategory = () => {
  return (
    <Nav>
      <Sec>
        <SmallTitle>LAPTOPS</SmallTitle>
        <BigTitle>FEATURED CATEGORIES</BigTitle>
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

export default TabCategory;
