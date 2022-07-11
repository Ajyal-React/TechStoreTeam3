import SingleCard from "../Card/singleCard";
import Navbar from "../Navbar/Navbar";
import { AllCard, CardLab } from "./index.style";



const ShowFeatured = () => {

  return (
    <div>
      
      <Navbar />
      <AllCard>
        <CardLab>
          <SingleCard img={"laptop"} />
        </CardLab>
        <CardLab>
          <SingleCard img={"laptop"} />
        </CardLab>
        <CardLab>
          <SingleCard img={"laptop"} />
        </CardLab>
        <CardLab>
          <SingleCard img={"laptop"} />
        </CardLab>
        <CardLab>
          <SingleCard img={"laptop"} />
        </CardLab>
        <CardLab>
          <SingleCard img={"laptop"} />
        </CardLab>
        <CardLab>
          <SingleCard img={"laptop"} />
        </CardLab>
        <CardLab>
          <SingleCard img={"laptop"} />
        </CardLab>
        <CardLab>
          <SingleCard img={"laptop"} />
        </CardLab>
        <CardLab>
          <SingleCard img={"laptop"} />
        </CardLab>
        <CardLab>
          <SingleCard img={"laptop"} />
        </CardLab>
        <CardLab>
          <SingleCard img={"laptop"} />
        </CardLab>

      </AllCard>
    </div>

  );
};

export default ShowFeatured;
