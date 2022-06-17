import styled from "styled-components";

export const Foot = styled.div`
  border: 0.3px solid #afafaf;
`;

export const ContFooter = styled.div`
  padding: 80px;
  display: flex;
`;

export const Elements1 = styled.div`
  //   gap: 20px;
`;

export const Text = styled.p`
  color: #302f2f;
  font-family: Poppins, sans-serif;
  width: ${({ width }) => (width ? width : "430px")};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "20px")};
  padding: 5%;
`;
export const Icons = styled.span`
  font-size: 23px;
  color: #fa7400;
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
`;
export const IconSocial = styled.span`
  font-size: 23px;
  color: ${({ color }) => (color ? color : "#000")};
  margin-right: 90px;
  margin-top: 20px;
`;
