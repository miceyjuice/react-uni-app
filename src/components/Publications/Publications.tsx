import React, { FC, useContext } from "react";
import Publication from "./SinglePublication/SinglePublication";
import {
  Content,
  MainInfo,
  MainPublication,
  Wrapper,
  Date,
  Account,
  AccountImg,
  AccountInfo,
  PublicationsBox,
  BoxTitle,
  PublicationsList,
  MorePublicationsLink,
  MainImg,
} from "./PublicationsStyle";
import { IUserProps } from "../MainPage/MainPage";
import { useSelector } from "react-redux";
import { IState } from "../../reducers";
import { IUsersReducer } from "../../reducers/usersReducers";
import { IUsersPhotosReducer } from "../../reducers/usersPhotosReducers";
import { IUsersPostsReducer } from "../../reducers/usersPostsReducers";
import { UserIdContext } from "../../contexts/UserIdContext";

export const Publications: FC = () => {
  const { usersList, usersPhotosList, usersPostsList } = useSelector<
    IState,
    IUsersReducer & IUsersPhotosReducer & IUsersPostsReducer
  >((globalState) => ({
    ...globalState.users,
    ...globalState.usersPhotosList,
    ...globalState.usersPostsList
  }));
  
  const currentUserId = useContext(UserIdContext);

  return (
    <Wrapper>
      <MainPublication>
        <MainImg src={usersPhotosList[Math.floor(Math.random() * 5000)]?.url} />
        <MainInfo>
          <Content>{ usersPostsList?.filter( post => post.userId === currentUserId )[0]?.title }</Content>
          <Date>7 jan. 2020</Date>
          <Account>
            <AccountImg src={usersPhotosList[currentUserId]?.url} />
            <AccountInfo>{usersList[currentUserId]?.name}</AccountInfo>
          </Account>
        </MainInfo>
      </MainPublication>
      <PublicationsBox>
        <BoxTitle>Latest publications</BoxTitle>
        <PublicationsList>
          <Publication userId={currentUserId} postId={0} />
          <Publication userId={currentUserId} postId={1} />
          <Publication userId={currentUserId} postId={2} />
        </PublicationsList>
        <MorePublicationsLink to="/publications">
          See more publications...
        </MorePublicationsLink>
      </PublicationsBox>
    </Wrapper>
  );
};

export default Publications;
