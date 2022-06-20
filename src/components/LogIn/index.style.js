import styled from "styled-components";

/*Left section starts here*/
export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const LeftSection = styled.div`
  width: 35%;
  height: 100vh;
  background-image: url("images/GradientBg.svg");
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  padding-left: 125px;
  min-width: 300px;
  @media (max-width: 341px) {
    width: 100%;
    background-color: red;
  }
  @media (max-width: 576px) {
    width: 100%;
    justify-content: center;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }

  @media (max-width: 992px) {
    width: 100%;
    justify-content: center;
  }

  @media (max-width: 1200px) {
  }

  @media (min-width: 1400px) {
  }

  @media (max-width: 950px) {
  }
`;

export const Image = styled.img`
  width: auto;
  margin-bottom: 20px;
`;

export const WelcomeText = styled.h5`
  color: #f3f3f3;
  font-size: 30px;
  font-weight: bold;
`;

export const DescText = styled.h5`
  margin-top: 20px;
  margin-bottom: 70px;
  color: #f3f3f3;
  font-size: 18px;
  font-weight: 400;
  max-width: 350px;
  opacity: 0.6;
`;

export const ItalicText = styled.span`
  font-style: italic;
`;

export const LaptopImage = styled.img.attrs((props) => ({
  src: props.source || "images/laptop.PNG",
}))`
  max-width: 80%;
`;
/*Left section ends here*/

/*FormSection starts here*/
export const FormSection = styled.section`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
  background-color: #f3f3f3;
  min-width: 500px;
  @media (max-width: 341px) {
    width: 100%;
  }
  @media (max-width: 576px) {
    width: 100%;
    justify-content: center;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }

  @media (max-width: 992px) {
  }

  @media (max-width: 1200px) {
  }

  @media (min-width: 1400px) {
  }

  @media (max-width: 950px) {
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 90%;
  padding-left: 200px;
`;

export const LoginText = styled.h3`
  color: #000000;
  border-left: 7px solid #f6921e;
  padding-left: 15px;
  margin-bottom: 20px;
  font-size: 24px;
  text-transform: uppercase;
`;

export const Input = styled.input.attrs((props) => ({
  placeholder: props.placeHolder,
  name: props.Name,
  type: props.Type,
}))`
  background-color: #ffffff;
  box-shadow: 10px 12px 20px #000000 0.8;
  outline: none;
  height: 50px;
  width: 70%;
  padding-left: 20px;
  border: 1px solid #eeeeee;
  margin-bottom: 10px;
  box-sizing: border-box;

  &:focus {
    border-left: 5px solid #f6921e;
  }
`;

export const LoginButton = styled.button`
  background-color: transparent;
  margin-top: 40px;
  border: none;
  color: #707070;
  width: 30%;
  font-size: 16px;
  cursor: pointer;
  text-transform: uppercase;
  margin-left: 355px;
  font-weight: 500;
`;

export const LoginIcon = styled.img`
  width: 30%;
  margin-bottom: -7px;
  &:hover {
    width: 29.5%;
    margin-left: 5px;
  }
`;
/*FormSection ends here*/

/*Question starts here*/
export const QuestionSection = styled.div`
  padding-top: 200px;
  padding-bottom: 20px;
  box-sizing: border-box;
`;

export const Question = styled.a`
  color: #707070;
  height: 10%;
  margin-right: 260px;
  width: auto;
  margin-bottom: 30px;
  &:hover {
    text-decoration: none;
    color: #707070;
  }
`;

export const BoldBlack = styled.a`
  color: #3b3b3b;
  font-weight: bold;
  text-decoration: none;
`;
/*Question ends here*/

export const CustomizeForm = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

export const InputContainer = styled.div`
  width: 70%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Icon = styled.div`
  position: absolute;
  left: 10px;
  top: 27px;
`;

export const InputBox = styled.div`
  position: relative;
  margin-top: 10px;
  width: 50%;
  border: none;
  input {
    width: 100%;
    height: 60px;
    background: #ffffff;
    box-shadow: 0px 12px 20px #00000014;
    border: none;
    outline: none;
    font-size: 18px;
    padding-left: 30px;
    &::placeholder {
      color: transparent;
    }
    &:placeholder-shown ~ label {
      font-size: 14px;
      cursor: text;
      top: 20px;
    }
  }
  label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 14px;
    color: #9b9b9b;
    padding-left: 30px;
  }
  input:focus {
    ~ label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 14px;
      color: #9b9b9b;
    }
    border-left: 8px solid #fa7400;
  }
  input {
    &:required,
    &:invalid {
      box-shadow: none;
    }
  }
`;
