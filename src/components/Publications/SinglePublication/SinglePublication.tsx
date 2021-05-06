import React, { FC } from "react";
import { useSelector } from "react-redux";
import { IState } from "../../../reducers";
import { IUsersPhotosReducer } from "../../../reducers/usersPhotosReducers";
import { IUsersReducer } from "../../../reducers/usersReducers";
import { IUserIdProps } from "../../MainPage/MainPage";
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

export const Publication: FC<IUserIdProps> = ({ userId }) => {
  const { usersList, usersPhotosList } = useSelector<
    IState,
    IUsersReducer & IUsersPhotosReducer
  >((globalState) => ({
    ...globalState.users,
    ...globalState.usersPhotosList,
  }));

  return (
    <Wrapper>
      <PublicationImg
        src={usersPhotosList[Math.floor(Math.random() * 5000)]?.url}
      />
      <PublicationInfo>
        <Content>
          jdasjod asda sdasdasda iddasda sada jdasjod asda sdasdasda iddasda
          sada jdasjod asda sdasdasda iddasda sada jdasjod asda sdasdasda
          iddasda sada jdasjod asda sdasdasda iddasda sada jdasjod asda
          sdasdasda iddasda sada
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

export default Publication;
