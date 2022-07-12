import {
  SideBarContainer,
  UL,
  LI,
  ParagraphContainer,
  Paragraph,
} from "./SideBarContainer.styled";

export const SideBar = () => {
  return (
    <SideBarContainer>
      <UL>
        <LI>My Orders</LI>
        <LI>Wishlist</LI>
        <LI>Notifications</LI>
        <LI>settings</LI>
      </UL>
      <ParagraphContainer>
        <Paragraph>Logout</Paragraph>
      </ParagraphContainer>
    </SideBarContainer>
  );
};
