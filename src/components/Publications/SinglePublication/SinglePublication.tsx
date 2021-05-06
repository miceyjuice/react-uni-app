import React, { FC } from "react";
import { useSelector } from "react-redux";
import { IState } from "../../../reducers";
import { IUsersPhotosReducer } from "../../../reducers/usersPhotosReducers";
import { IUsersReducer } from "../../../reducers/usersReducers";
import { IUsersPostsReducer } from "../../../reducers/usersPostsReducers";
import { IUserProps } from "../../MainPage/MainPage";
import {
  Content,
  PublicationImg,
  PublicationInfo,
  Wrapper,
  Date,
  Account,
  AccountImg,
  AccountInfo,
} from "./SinglePublicationStyle";

export const SinglePublication: FC<IUserProps> = ({ userId, postId }) => {
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
      <PublicationImg
        src={usersPhotosList[Math.floor(Math.random() * 5000)]?.url}
      />
      <PublicationInfo>
        <Content>
          { usersPostsList?.filter( post => post.userId === userId )[postId!]?.title }
        </Content>
        <Date>7 jan. 2020</Date>
        <Account>
          <AccountImg src={usersPhotosList[userId]?.url} />
          <AccountInfo>{usersList[userId]?.name}</AccountInfo>
        </Account>
      </PublicationInfo>
    </Wrapper>
  );
};

export default SinglePublication;
