import React, { FC } from "react";
import Theme from "../../../styledHelpers/Theme";
import { StyledUl, StyledLi } from "../SideMenu/SideMenuStyle";
import { useSelector } from "react-redux";
import { IState } from "../../../reducers";
import { IUsersReducer } from "../../../reducers/usersReducers";
import { IUsersPhotosReducer } from "../../../reducers/usersPhotosReducers";
import { Link } from "react-router-dom";
import { AddButton, PersonBlock, PersonFullName, PersonImage, PersonJob, ProfileStyledA, Wrapper } from "./ProfileSectionStyle";



export const ProfileSection: FC = () => {
  const { usersList, usersPhotosList } = useSelector<IState, IUsersReducer & IUsersPhotosReducer>((globalState) => ({
    ...globalState.users,
    ...globalState.usersPhotosList
  }));

  return (
    <Wrapper>
      {console.log(usersList)}
      <PersonBlock>
        <PersonImage src={ usersPhotosList[0]?.url } />
        <PersonFullName>
          {usersList[0]?.name}
        </PersonFullName>
        <PersonJob>
          { usersList[0]?.company.name }
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
