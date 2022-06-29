import styled from "styled-components";

export const OfferSection = styled.div`
  margin-top: 193px;
  width: 100%;
  height: auto;
  padding: 80px 0px;
  background-image: url("/images/laptop_bg.PNG");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 576px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: auto;
`;

export const Text = styled.p`
  color: white;
  font-weight: bold;
  font-size: 35px;
  @media (max-width: 576px) {
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;
