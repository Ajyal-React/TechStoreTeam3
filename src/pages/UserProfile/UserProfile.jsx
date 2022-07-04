import { ProfileContainer, MyOrderContainer } from "./UserProfile.stayled";
import Navbar from "../../components/Navbar/Navbar";
import UserInfo from "./components/UserInfo/UserInfo";
import { SideBar } from "./components/SideBar/SideBar";
import { Item } from "./components/Item/Item";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProfileUser } from "../../redux/actions/profileUserActions";

const UserProfile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileUser());
  }, []);
  return (
    <ProfileContainer>
      <Navbar />
      <UserInfo />
      <SideBar />
      <MyOrderContainer>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </MyOrderContainer>
    </ProfileContainer>
  );
};

export default UserProfile;
