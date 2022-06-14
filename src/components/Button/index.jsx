import "./index.style";
import { Btn } from "./index.style";

const Button = (props) => {
  return (
    <Btn
      style={{
        width: "20%",
        backgroundColor: "transparent",
        border: "1px solid #fff",
        color: "#fff",
        fontSize: "16px",
      }}
    >
      {props.text}
    </Btn>
  );
};

export default Button;
