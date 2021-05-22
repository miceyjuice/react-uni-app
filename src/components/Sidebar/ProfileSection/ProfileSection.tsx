import React, { FC } from "react";
import Theme from "../../../styledHelpers/Theme";
import { StyledUl, StyledLi } from "../SideMenu/SideMenuStyle";
import { useSelector } from "react-redux";
import { IState } from "../../../reducers";
import { IUsersReducer } from "../../../reducers/usersReducers";
import { IUsersPhotosReducer } from "../../../reducers/usersPhotosReducers";
import { Link } from "react-router-dom";
import { AddButton, PersonBlock, PersonFullName, PersonImage, PersonJob, ProfileStyledA, Wrapper } from "./ProfileSectionStyle";
import { IUserProps } from '../../MainPage/MainPage';


export const ProfileSection: FC<IUserProps> = ({userId}) => {

  const { usersList, usersPhotosList } = useSelector<IState, IUsersReducer & IUsersPhotosReducer>((globalState) => ({
    ...globalState.users,
    ...globalState.usersPhotosList
  }));

  return (
    <Wrapper>
      <PersonBlock>
        <PersonImage src={ usersPhotosList[userId]?.url } />
        <PersonFullName to="/profile">
          {usersList[userId]?.name}
        </PersonFullName>
        <PersonJob>
          { usersList[userId]?.company.name }
        </PersonJob>
      </PersonBlock>
      <>
        <StyledUl>
          <StyledLi padding={"1rem 1.5rem"}>
            <ProfileStyledA
              to="/your-network"
              paddingLeft={"3rem"}
              beforeImg={Theme.Icons.network}
            >
              {" "}
              Your network{" "}
            </ProfileStyledA>
            <Link to="/new-user"><AddButton bgImage={Theme.Icons.userAdd} /></Link>
          </StyledLi>
          <StyledLi padding={"1rem 1.5rem"}>
            <ProfileStyledA
              to="/your-publications"
              paddingLeft={"3rem"}
              beforeImg={Theme.Icons.yourPublications}
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
