import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  /* padding: 0 140px; */
`;
export const Sec = styled.section`
  
`;

export const Header = styled('h5')`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;
  color: #111111;
`;

export const Paragraph = styled(Header)`
  font-size: 8px;
  margin-bottom: 10px;
  color: #302F2F;
`;

export const Ul = styled('ul')`
  list-style-type: none;
    display: flex;
    
`;

export const Li = styled(Header)`
    padding: 0.5em 1.5em;
    margin: auto;
    font-size: 20px;
`;
export const LiBtn = styled(Li)`
    background-color: #FA7400;
    border-radius: 8px;
    padding: 8px 30px;
    color: #fff;
`;
export const SmallTitle = styled("h3")`
  color: #302f2f;
  font-size: 14px;
  text-transform: uppercase;
`;

export const BigTitle = styled("h5")`
  color: #111111;
  font-size: 30px;
  text-transform: uppercase;
`;