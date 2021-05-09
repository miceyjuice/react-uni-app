import React, { FC } from "react";
import { Wrapper, EntityContent, EntityImg, EntityInfo, EntityTitle } from "./EntityStyles";

interface IEntityProps {
  imgLink: string;
  title: string;
  content: string;
}

export const EntitiesList: FC<IEntityProps> = ({ imgLink, title, content }) => {
  return (
    <Wrapper>
      <EntityImg src={imgLink} />
      <EntityInfo>
        <EntityTitle>{title}</EntityTitle>
        <EntityContent>{content}</EntityContent>
      </EntityInfo>
    </Wrapper>
  );
};

export default EntitiesList;
