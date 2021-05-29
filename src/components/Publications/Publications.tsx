import React, { FC } from "react";
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

export const Publications: FC<IUserProps> = ({ userId }) => {
  const { usersList, usersPhotosList, usersPostsList } = useSelector<
    IState,
    IUsersReducer & IUsersPhotosReducer & IUsersPostsReducer
  >((globalState) => ({
    ...globalState.users,
    ...globalState.usersPhotosList,
    ...globalState.usersPostsList
  }));

  return (
    <Wrapper>
      <MainPublication>
        <MainImg src={usersPhotosList[Math.floor(Math.random() * 5000)]?.url} />
        <MainInfo>
          <Content>{ usersPostsList?.filter( post => post.userId === userId )[0]?.title }</Content>
          <Date>7 jan. 2020</Date>
          <Account>
            <AccountImg src={usersPhotosList[userId]?.url} />
            <AccountInfo>{usersList[userId]?.name}</AccountInfo>
          </Account>
        </MainInfo>
      </MainPublication>
      <PublicationsBox>
        <BoxTitle>Latest publications</BoxTitle>
        <PublicationsList>
          <Publication userId={userId} postId={0} />
          <Publication userId={userId} postId={1} />
          <Publication userId={userId} postId={2} />
        </PublicationsList>
        <MorePublicationsLink to="/publications">
          See more publications...
        </MorePublicationsLink>
      </PublicationsBox>
    </Wrapper>
  );
};

export default Publications;
