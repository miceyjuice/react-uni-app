import React, { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { IState } from "../../reducers";
import { IUsersPhotosReducer } from "../../reducers/usersPhotosReducers";
import { IUsersReducer } from "../../reducers/usersReducers";
import { Wrapper } from "./EntitiesStyle";
import Entity from "./Entity/Entity";
import Options from "./Options/Options";
import TopBar from "./TopBar/TopBar";

const EntitiesList = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;
  padding: 1rem;
`;



export const Entities: FC = () => {
  const { usersPhotosList } = useSelector<
    IState,
    IUsersPhotosReducer
  >((globalState) => ({
    ...globalState.usersPhotosList,
  }));

  const entities = [
    {
      imgLink: usersPhotosList[100].url,
      title: "ABC generic company",
      content: "Caracas 1050, Distrito Catpita, Venezuela",
    },
    {
      imgLink: usersPhotosList[101].url,
      title: "Subsid Corp Ltd",
      content: "Caracas 1050, Distrito Catpita, Venezuela",
    },
    {
      imgLink: usersPhotosList[100].url,
      title: "World company SAS",
      content: "Caracas 1050, Distrito Catpita, Venezuela",
    },
    {
      imgLink: usersPhotosList[101].url,
      title: "Subsid ds Ltd",
      content: "Caracas 1050, Distrito Catpita, Venezuela",
    },
    {
      imgLink: usersPhotosList[100].url,
      title: "World company SAS",
      content: "Caracas 1050, Distrito Catpita, Venezuela",
    },
    {
      imgLink: usersPhotosList[101].url,
      title: "Subsid Corp Ltd",
      content: "Caracas 1050, Distrito Catpita, Venezuela",
    },
    {
      imgLink: usersPhotosList[100].url,
      title: "World company SAS",
      content: "Caracas 1050, Distrito Catpita, Venezuela",
    },
    {
      imgLink: usersPhotosList[101].url,
      title: "Subsid Corp Ltd",
      content: "Caracas 1050, Distrito Catpita, Venezuela",
    },
    {
      imgLink: usersPhotosList[100].url,
      title: "World company SAS",
      content: "Caracas 1050, Distrito Catpita, Venezuela",
    },
    {
      imgLink: usersPhotosList[101].url,
      title: "Subsid Corp Ltd",
      content: "Caracas 1050, Distrito Catpita, Venezuela",
    },
    {
      imgLink: usersPhotosList[100].url,
      title: "World company SAS",
      content: "Caracas 1050, Distrito Catpita, Venezuela",
    },
    {
      imgLink: usersPhotosList[101].url,
      title: "Subsid Corp Ltd",
      content: "Caracas 1050, Distrito Catpita, Venezuela",
    },
    {
      imgLink: usersPhotosList[100].url,
      title: "World company SAS",
      content: "Caracas 1050, Distrito Catpita, Venezuela",
    },
    {
      imgLink: usersPhotosList[101].url,
      title: "Subsid Corp Ltd",
      content: "Caracas 1050, Distrito Catpita, Venezuela",
    },
    {
      imgLink: usersPhotosList[100].url,
      title: "World company SAS",
      content: "Caracas 1050, Distrito Catpita, Venezuela",
    },
    {
      imgLink: usersPhotosList[101].url,
      title: "Subsid Corp Ltd",
      content: "Caracas 1050, Distrito Catpita, Venezuela",
    },
    {
      imgLink: usersPhotosList[100].url,
      title: "World company SAS",
      content: "Caracas 1050, Distrito Catpita, Venezuela",
    },
    {
      imgLink: usersPhotosList[101].url,
      title: "Subsid Corp Ltd",
      content: "Caracas 1050, Distrito Catpita, Venezuela",
    },
    {
      imgLink: usersPhotosList[100].url,
      title: "World company SAS",
      content: "Caracas 1050, Distrito Catpita, Venezuela",
    },
    {
      imgLink: usersPhotosList[101].url,
      title: "Subsid Corp Ltd",
      content: "Caracas 1050, Distrito Catpita, Venezuela",
    },
    {
      imgLink: usersPhotosList[100].url,
      title: "World company SAS",
      content: "Caracas 1050, Distrito Catpita, Venezuela",
    },
    {
      imgLink: usersPhotosList[101].url,
      title: "Subsid Corp Ltd",
      content: "Caracas 1050, Distrito Catpita, Venezuela",
    },
    {
      imgLink: usersPhotosList[100].url,
      title: "World company SAS",
      content: "Caracas 1050, Distrito Catpita, Venezuela",
    },
    {
      imgLink: usersPhotosList[101].url,
      title: "Subsid Corp Ltd",
      content: "Caracas 1050, Distrito Catpita, Venezuela",
    },
  ];

  return (
    <Wrapper>
      <TopBar />
      <Options />
      <EntitiesList>
        {entities.map((entity) => (
          <Entity
            imgLink={entity.imgLink}
            title={entity.title}
            content={entity.content}
          />
        ))}
      </EntitiesList>
    </Wrapper>
  );
};

export default Entities;
