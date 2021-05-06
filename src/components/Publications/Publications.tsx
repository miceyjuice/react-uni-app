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
import { IUserIdProps } from "../MainPage/MainPage";
import { useSelector } from "react-redux";
import { IState } from "../../reducers";
import { IUsersReducer } from "../../reducers/usersReducers";
import { IUsersPhotosReducer } from "../../reducers/usersPhotosReducers";

export const Publications: FC<IUserIdProps> = ({ userId }) => {
  const { usersList, usersPhotosList } = useSelector<
    IState,
    IUsersReducer & IUsersPhotosReducer
  >((globalState) => ({
    ...globalState.users,
    ...globalState.usersPhotosList,
  }));

  return (
    <Wrapper>
      <MainPublication>
        <MainImg src={ usersPhotosList[Math.floor(Math.random() * 5000)]?.url } />
        <MainInfo>
          <Content>jdasjod asda sdasdasda iddasda sada</Content>
          <Date>7 jan. 2020</Date>
          <Account>
            <AccountImg src={ usersPhotosList[userId]?.url }/>
            <AccountInfo>
              { usersList[userId]?.name }
            </AccountInfo>
          </Account>
        </MainInfo>
      </MainPublication>
      <PublicationsBox>
        <BoxTitle>Latest publications</BoxTitle>
        <PublicationsList>
          <Publication userId={ userId } />
          <Publication userId={ userId } />
          <Publication userId={ userId } />
        </PublicationsList>
        <MorePublicationsLink to="/publications">
          See more publications...
        </MorePublicationsLink>
      </PublicationsBox>
    </Wrapper>
  );
};

export default Publications;
