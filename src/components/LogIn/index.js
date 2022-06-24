import "./index.style";
import {
  LeftSection,
  Container,
  Image,
  WelcomeText,
  DescText,
  ItalicText,
  LaptopImage,
  FormSection,
  LoginForm,
  LoginText,
  LoginButton,
  LoginIcon,
  Question,
  BoldBlack,
  QuestionSection,
  CustomizeForm,
  InputContainer,
  Input,
  Icon,
  Msg,
  MsgText,
} from "./index.style";

import { HiMail } from "react-icons/hi";
import { FaLock } from "react-icons/fa";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { Formik, Form, useFormik } from "formik";
import * as yup from "yup";

const validate = yup.object().shape({
  email: yup
    .string()
    .email("The email is incorrect")
    .required("Please enter your email"),

  password: yup
    .string()
    .min(8, "please enter password loner than or equal 8 letters!")
    .required("Please enter your password"),
});

const LogIn = () => {
  const [formValues, setFormValues] = useState();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log("values are", values);
    },
    validationSchema: { validate },
  });
  return (
    <Fragment>
      {/*Login container starts here*/}
      <Container>
        {/*Left section starts here*/}
        <LeftSection>
          <Image src="images/logo.PNG"></Image>
          <WelcomeText>Welcome Back!</WelcomeText>
          <DescText>
            Login to your account and start your shopping
            <ItalicText>NOW</ItalicText>!
          </DescText>
          <LaptopImage source="images/LaptopLogin.svg"></LaptopImage>
        </LeftSection>
        {/*Left section ends here*/}

        {/*Form section starts here*/}
        <FormSection>
          <LoginForm>
            <LoginText>login</LoginText>
            {/*Formik starts here*/}
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={validate}
              onSubmit={(values, actions) => {
                console.log(values);
                setFormValues(values);

                const timeOut = setTimeout(() => {
                  actions.setSubmitting(false);

                  clearTimeout(timeOut);
                }, 1000);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleSubmit,
                isSubmitting,
                isValidating,
                handleBlur,
                isValid,
                handleChange,
              }) => {
                return (
                  <>
                    <Form name="contact" method="post" onSubmit={handleSubmit}>
                      <Input
                        Type="email"
                        Name="email"
                        autoComplete="email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeHolder="JohnDoe@xxx.xx"
                      />
                      {errors.email ? (
                        <Msg>
                          <MsgText>{errors.email}</MsgText>{" "}
                        </Msg>
                      ) : null}

                      <Input
                        Type="password"
                        Name="password"
                        placeHolder=".........."
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.password ? (
                        <Msg>
                          <MsgText>{errors.password}</MsgText>{" "}
                        </Msg>
                      ) : null}

                      <LoginButton
                        type="submit"
                        disabled={!isValid || isSubmitting}
                      >
                        {isSubmitting ? `...` : `login`}
                        <LoginIcon src="images/arrow.svg" />
                      </LoginButton>
                    </Form>
                  </>
                );
              }}
            </Formik>
            {/*Formik ends here*/}
          </LoginForm>
          <QuestionSection>
            <Question>
              Don't have account?
              <BoldBlack href="#">
                <Link
                  to="/signup"
                  style={{
                    textDecoration: "none",
                    color: "#3b3b3b",
                    fontWeight: "bold",
                  }}
                >
                  Sgin up
                </Link>
              </BoldBlack>
            </Question>
          </QuestionSection>
        </FormSection>

        {/*Form section starts here*/}
      </Container>
      {/*Login container ends here*/}
    </Fragment>
  );
};

export default LogIn;
