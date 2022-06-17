import styled, { css } from "styled-components";
import { Column, Row } from "../../GlobalStyles";
import { mobile } from "../../utils/media";

export const ProductDetailsContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const DetailsContent = styled.div`
  margin: 40px 140px;
  display: flex;
  gap: 50px;
  ${mobile(css`
    flex-wrap: wrap;
  `)}
  ${mobile(
    css`
      margin: 40px;
    `,
    800
  )}
`;

export const DetailsColumn = styled(Column)`
  width: 50%;
  ${mobile(css`
    width: 100%;
  `)}
`;

export const ImageDisplay = styled.img`
  width: 100%;
  height: 550px;
  padding: 100px;
  border-radius: 9px;
  border: 0.3px solid #c1c1c1;
  margin-bottom: 12px;
  object-fit: contain;
`;

export const SmImageBox = styled.div`
  width: 100%;
  max-width: 156px;
  height: 118px;
  max-height: 118px;
  overflow: hidden;
  border-radius: 9px;
  padding: 10px;
  border: 0.3px solid #c1c1c1;
`;
export const SmImageDisplay = styled.img`
  width: 100%;
  height: 100%;
  padding: 0px;
  margin-bottom: 0px;
  object-fit: contain;
`;

export const RowGap = styled(Row)`
  gap: ${({ gap }) => gap};
  ${mobile(css`
    flex-wrap: wrap;
  `,580)}
`;

export const ProductTitle = styled.h1`
  font-size: 54px;
  font-weight: bold;
`;

export const SmText = styled.p`
  font-size: ${({ fz }) => (fz ? fz : "18px")};
  font-weight: ${({ fw }) => (fw ? fw : "300")};
  color: ${({ color }) => (color ? color : "#646363")};
  margin-top: ${({ mt }) => (mt ? mt : "0px")};
`;

export const Span = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: #0ea965;
`;

export const Select = styled.select`
  width: 491px;
  height: 47px;
  background-color: #f4f4f4;
  border: 0.5px solid #afafaf;
  padding: 15px;
  outline: none;
  border-radius: 5px;
  ${mobile(css`
    width: 100%;
  `)}
`;

export const Button = styled.button`
  width: 491px;
  height: 47px;
  background: #fa7400;
  border: 0.4px solid #afafaf;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 4px;
  color: #ffffff;
  font-weight: 600;
  font-size: 16px;
  margin-top: 32px;
  ${mobile(css`
    width: 100%;
  `)}
`;
