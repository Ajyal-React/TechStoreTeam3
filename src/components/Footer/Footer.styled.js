import styled from "styled-components";

export const Foot = styled.div`
  border: 0.3px solid #afafaf;
`;

export const ContFooter = styled.div`
  padding: 60px;
  margin-bottom: 10px;
  display: flex;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    padding: 0px;
  }
  @media (max-width: 992px) {
    flex-wrap: wrap;
  }
`;

export const Logo = styled.img`
  width: 150px;
  margin-left: 3%;

  @media (max-width: 768px) {
    margin-left: 43%;
    margin-top: 5%;
  }
  @media (max-width: 576px) {
    margin-left: 20%;
    margin-top: 1%;
  }
`;
export const Elements1 = styled.div`
  //   gap: 20px;
`;

export const Text = styled.p`
  color: #302f2f;
  font-family: Poppins, sans-serif;
  width: ${({ width }) => (width ? width : "30px")};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "20px")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : "0px")};
  margin-top: 10px;
  @media (max-width: 768px) {
    display: block;
    width: 90%;
    padding-left: 3%;
    margin-bottom: 5%;
  }
`;
export const Icons = styled.span`
  font-size: 23px;
  color: #fa7400;
`;
export const FooterList = styled.div`
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : "20px")};
  @media (max-width: 576px) {
    margin-left: 10%;
    margin-bottom: 5%;
  }
`;
export const List = styled.div`
  margin-top: 12px;
  font-size: 14px;
  flex-wrap: wrap;
  font-weight: ${({ weight }) => (weight ? weight : "500")};
  color: ${({ color }) => (color ? color : "#646363")};
  @media (max-width: 768px) {
    font-size: 14px;
    margin-left: 60px;
    margin-bottom: 15px;
  }
`;
export const Contacts = styled.span`
  @media (max-width: 768px) {
    text-align: center;
  }

  @media (max-width: 576px) {
    text-align: center;
  }
`;
export const PhonEmail = styled.span`
  @media (max-width: 768px) {
    display: flex;
    margin-bottom: 20px;
    justify-content: space-between;
    margin-top: 30px;
  }
`;
export const Line = styled.div`
  background: #646363;
  height: 1px;
  margin-top: -50px;
  width: 86%;
  margin-left: 7%;
`;

export const CopyRight = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 80px;
  margin-top: 10px;
`;
export const Textfoo = styled.p`
  color: #302f2f;
  font-family: Poppins, sans-serif;
  line-height: 20px;
  font-size: 16px;
  margin-top: 10px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 576px) {
    font-size: 12px;
  }
`;
export const IconSocial = styled.span`
  font-size: 23px;
  color: ${({ color }) => (color ? color : "#000")};
  margin-right: 90px;
  margin-top: 20px;
  margin-bottom: 20px;
  @media (max-width: 576px) {
    font-size: 18px;
    margin-top: 10px;
  }
`;

export const IconsCont = styled.span`
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : "20px")};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "0px")};
`;
