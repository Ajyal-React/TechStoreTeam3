import styled from "styled-components";
import Form from 'formik';
/*Left section starts here*/
export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;


/* export Form = styled.form`

`; */

export const LeftSection = styled.div`
  width: 35%;
  height: 100vh;
  background-image: url("images/GradientBg.svg");
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-width: 300px;
  flex-wrap: wrap;
  padding-left: 125px;
  @media (max-width: 341px) {
    padding-left: 0px;
    width: 100%;
  }
  @media (max-width: 576px) {
    width: 100%;
    align-items: center;
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
  @media (max-width: 576px) {
    text-align: center;
    padding: 10px;
  }
`;

export const DescText = styled.h5`
  margin-top: 20px;
  margin-bottom: 70px;
  color: #f3f3f3;
  font-size: 18px;
  font-weight: 400;
  max-width: 350px;
  opacity: 0.6;
  @media (max-width: 576px) {
    text-align: center;
    padding: 10px;
  }
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
  min-width: 300px;

  @media (max-width: 341px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 576px) {
    width: 100%;
    align-items: center;
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

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 90%;
  padding-left: 200px;
  @media (max-width: 341px) {
  padding-left: 225px;

   
  }
  @media (max-width: 576px) {
  padding-left: 225px;
   
  }
`;

export const LoginText = styled.h3`
  color: #000000;
  border-left: 7px solid #f6921e;
  padding-left: 15px;
  margin-bottom: 20px;
  font-size: 24px;
  text-transform: uppercase;
  @media (max-width: 341px) {
   text-align: center;
  font-size: 18px;
  margin-right: 40px;
   
  }
  @media (max-width: 576px) {
   
  }
`;

export const Input = styled.input.attrs((props) => ({
  placeholder: props.placeHolder,
  name: props.Name,
  type: props.Type,
}))`
  background-color: #ffffff;
  box-shadow: 2px 2px 30px #e3e3e3;
  outline: none;
  height: 50px;
  width: 100%;
  padding-left: 45px;
  border: 1px solid #eeeeee;
  margin-bottom: 9px;
  position: absolute;
  box-sizing: border-box;
  margin-left: 40px;

  @media (max-width: 576px) {
    margin-left: 40px;
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

  &:focus {
    border-left: 5px solid #f6921e;
  }

  &::placeholder {
    margin-top: 20px;
    color: #cccbcb;
    font-size: 12px;
    position: absolute;
    bottom: 25px;
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
  @media (max-width: 576px) {
  }
`;

export const LoginIcon = styled.img`
  width: 20%;
  margin-bottom: -8px;
  &:hover {
    width: 20.1%;
    margin-left: 3px;
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
  width: 100%;
  position: relative;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-right: 40px;

  @media (max-width: 576px) {
    right: 200px;
    width: 60%;
  }
`;

export const Icon = styled.div`
  position: absolute;
  left: 10px;
  position: absolute;
  z-index: 1;
  left: 20px;
  top: 10px;
  color: #cccbcb;
`;

export const Msg = styled.div`
  width: 100%;
  margin-top: 60px;
`;

export const MsgText = styled.p`
  font-size: 14px;
  font-size: 13px;
  color: red;
`;

export const SuccessMsg = styled.p`
  font-size: 14px;
  color: green;
`;
