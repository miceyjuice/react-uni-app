import React, { FC } from "react";
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

export const Publication: FC = () => {
  return (
    <Wrapper>
      <PublicationImg src="https://via.placeholder.com/600/56a8c2" />
      <PublicationInfo>
        <Content>
          jdasjod asda sdasdasda iddasda sada jdasjod asda sdasdasda iddasda
          sada jdasjod asda sdasdasda iddasda sada jdasjod asda sdasdasda
          iddasda sada jdasjod asda sdasdasda iddasda sada jdasjod asda
          sdasdasda iddasda sada
        </Content>
        <Date>7 jan. 2020</Date>
        <Account>
          <AccountImg />
          <AccountInfo>Pawel Szumiec</AccountInfo>
        </Account>
      </PublicationInfo>
    </Wrapper>
  );
};

export default Publication;
