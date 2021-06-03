import React, { FC, useContext } from "react";
import Theme from "../../../styledHelpers/Theme";
import { StyledUl, StyledLi } from "../SideMenu/SideMenuStyle";
import { useSelector } from "react-redux";
import { IState } from "../../../reducers";
import { IUsersReducer } from "../../../reducers/usersReducers";
import { IUsersPhotosReducer } from "../../../reducers/usersPhotosReducers";
import { Link } from "react-router-dom";
import { AddButton, PersonBlock, PersonFullName, PersonImage, PersonJob, ProfileStyledA, Wrapper } from "./ProfileSectionStyle";
import { IUserProps } from '../../MainPage/MainPage';
import { UserIdContext } from "../../../contexts/UserIdContext";


export const ProfileSection: FC = () => {

  const { usersList, usersPhotosList } = useSelector<IState, IUsersReducer & IUsersPhotosReducer>((globalState) => ({
    ...globalState.users,
    ...globalState.usersPhotosList
  }));

  const currentUserId = useContext(UserIdContext);

  return (
    <Wrapper>
      <PersonBlock>
        <PersonImage src={ usersPhotosList[currentUserId]?.url } />
        <PersonFullName to="/profile">
          {usersList[currentUserId]?.name}
        </PersonFullName>
        <PersonJob>
          { usersList[currentUserId]?.company.name }
        </PersonJob>
      </PersonBlock>
      <>
        <StyledUl>
          <StyledLi padding={"1rem 1.5rem"}>
            <ProfileStyledA
              to="/your-network"
              paddingleft={"3rem"}
              beforeimg={Theme.Icons.network}
            >
              {" "}
              Your network{" "}
            </ProfileStyledA>
            <Link to="/new-user"><AddButton bgImage={Theme.Icons.userAdd} /></Link>
          </StyledLi>
          <StyledLi padding={"1rem 1.5rem"}>
            <ProfileStyledA
              to="/your-publications"
              paddingleft={"3rem"}
              beforeimg={Theme.Icons.yourPublications}
            >
              {" "}
              Your publications{" "}
            </ProfileStyledA>
            <Link to="/new-publication"><AddButton bgSize={"38%"} bgImage={Theme.Icons.plus} /></Link>
          </StyledLi>
        </StyledUl>
      </>
    </Wrapper>
  );
};

export default ProfileSection;
