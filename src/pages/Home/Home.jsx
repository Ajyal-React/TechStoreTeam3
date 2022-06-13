import { Container } from "../../GlobalStyles";
import { SingleSlider } from "../../components";

const Home = () => {
  return (
    <Container w="100%" h="100vh">
      <Container margin="auto" mt="50px" w="85%">
        <SingleSlider />
      </Container>
    </Container>
  );
};

export default Home;
