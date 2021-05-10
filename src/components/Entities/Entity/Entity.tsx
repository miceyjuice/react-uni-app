import React, { Dispatch, FC, SetStateAction } from "react";
import {
  Wrapper,
  EntityContent,
  EntityImg,
  EntityInfo,
  EntityTitle,
} from "./EntityStyles";

interface IEntityProps {
  imgLink: string;
  title: string;
  content: string;
  spacedEl: boolean;
}

export const EntitiesList: FC<IEntityProps> = ({
  imgLink,
  title,
  content,
  spacedEl,
}) => {
  return (
    <Wrapper>
      <EntityImg src={imgLink} />
      <EntityInfo spacedEl={spacedEl}>
        <EntityTitle>{title}</EntityTitle>
        <EntityContent>{content}</EntityContent>
      </EntityInfo>
    </Wrapper>
  );
};

export default EntitiesList;
