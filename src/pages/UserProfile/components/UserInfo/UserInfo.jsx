import {
  UserInfoContainer,
  ProfileImageContainrt,
  FlexBox,
  ULContainer,
  UL,
  LI,
  H4,
  Paragraph,
} from "./UserInfo.stayled";
import { FaUserAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { RiPhoneFill, RiUserLocationFill } from "react-icons/ri";
import { MdSubtitles } from "react-icons/md";
const UserInfo = () => {
  return (
    <UserInfoContainer>
      <ProfileImageContainrt>
        <img src="" alt="" />
      </ProfileImageContainrt>
      <FlexBox>
        <ULContainer>
          <UL>
            <LI>
              <FaUserAlt color="#aaaaaa" />
            </LI>
            <LI>
              <H4>ahmed</H4>
            </LI>
            <LI>
              <Paragraph>yaser</Paragraph>
            </LI>
          </UL>
        </ULContainer>
        <ULContainer>
          <UL>
            <LI>
              <MdSubtitles color="#aaaaaa" />
            </LI>
            <LI>
              <H4>Title</H4>
            </LI>
            <LI>
              <Paragraph>Network Engineering</Paragraph>
            </LI>
          </UL>
        </ULContainer>
        <ULContainer>
          <UL>
            <LI>
              {" "}
              <IoMdMail color="#aaaaaa" />
            </LI>
            <LI>
              <H4>address</H4>
            </LI>
            <LI>
              <Paragraph>b.ahmed@gmail.com</Paragraph>
            </LI>
          </UL>
        </ULContainer>
        <ULContainer>
          <UL>
            <LI>
              {" "}
              <RiPhoneFill color="#aaaaaa" />
            </LI>
            <LI>
              <H4>Cell Phone</H4>
            </LI>
            <LI>
              <Paragraph>+9705078069</Paragraph>
            </LI>
          </UL>
        </ULContainer>
      </FlexBox>
    </UserInfoContainer>
  );
};

export default UserInfo;
