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
} from "./PublicationsStyle";

export const Publications: FC = () => {
  return (
    <Wrapper>
      <MainPublication>
        <MainInfo>
          <Content>jdasjod asda sdasdasda iddasda sada</Content>
          <Date>7 jan. 2020</Date>
          <Account>
            <AccountImg />
            <AccountInfo>Pawel Szumiec</AccountInfo>
          </Account>
        </MainInfo>
      </MainPublication>
      <PublicationsBox>
        <BoxTitle>Latest publications</BoxTitle>
        <PublicationsList>
          <Publication />
          <Publication />
          <Publication />
        </PublicationsList>
        <MorePublicationsLink>See more publications...</MorePublicationsLink>
      </PublicationsBox>
    </Wrapper>
  );
};

export default Publications;
