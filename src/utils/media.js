import { css } from "styled-components";

export const mobile = (inner, size = 1200) => css`
  @media (max-width: ${size}px) {
    ${inner};
  }
`;
