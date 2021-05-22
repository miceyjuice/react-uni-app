import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import { IState } from "../../reducers";
import { IUsersPhotosReducer } from "../../reducers/usersPhotosReducers";
import { EntitiesList, Wrapper } from "./EntitiesStyle";
import Entity from "./Entity/Entity";
import MoreFilterOptions from "./MoreFilterOptions/MoreFilterOptions";
import Options from "./Options/Options";
import TopBar from "./TopBar/TopBar";
import { IDisplayProps } from "../MainPage/MainPage";

export const Entities: FC<IDisplayProps> = ({ isHidden, setDisplayValue }) => {
  const { usersPhotosList } = useSelector<IState, IUsersPhotosReducer>(
    (globalState) => ({
      ...globalState.usersPhotosList,
    })
  );

  const [listMosaic, setListMosaic] = useState<boolean>(true);
  const [moreFiltersVisible, setMoreFiltersVisibility] =
    useState<boolean>(false);
  const [filterValue, setFilterValue] = useState<string>("");

  const entities = [
    {
      imgLink: usersPhotosList[100]?.url,
      title: "ABC generic company",
      content: "Caracas 1050, Distrito Catpita, Venezuela",
    },
    {
      imgLink: usersPhotosList[101]?.url,
      title: "Subsid Corp Ltd",
      content: "Caracas 1050, Distrito Catpita, Venezuela",
    },
    {
      imgLink: usersPhotosList[100]?.url,
      title: "World company SAS",
      content: "Caracas 1050, Distrito Catpita, Venezuela",
    },
    {
      imgLink: usersPhotosList[101]?.url,
      title: "Subsid ds Ltd",
      content: "Caracas 1050, Distrito Catpita, Venezuela",
    },
    {
      imgLink: usersPhotosList[100]?.url,
      title: "World company SAS",
      content: "Caracas 1050, Distrito Catpita, Venezuela",
    },
    {
      imgLink: usersPhotosList[101]?.url,
      title: "Subsid Corp Ltd",
      content: "Caracas 1050, Distrito Catpita, Venezuela",
    },
    {
      imgLink: usersPhotosList[100]?.url,
      title: "World company SAS",
      content: "Caracas 1050, Distrito Catpita, Venezuela",
    },
    {
      imgLink: usersPhotosList[101]?.url,
      title: "Subsid Corp Ltd",
      content: "Caracas 1050, Distrito Catpita, Venezuela",
    },
    {
      imgLink: usersPhotosList[100]?.url,
      title: "World company SAS",
      content: "Caracas 1050, Distrito Catpita, Venezuela",
    },
    {
      imgLink: usersPhotosList[101]?.url,
      title: "Subsid Corp Ltd",
      content: "Caracas 1050, Distrito Catpita, Venezuela",
    },
    {
      imgLink: usersPhotosList[100]?.url,
      title: "World company SAS",
      content: "Caracas 1050, Distrito Catpita, Venezuela",
    },
    {
      imgLink: usersPhotosList[101]?.url,
      title: "Subsid Corp Ltd",
      content: "Caracas 1050, Distrito Catpita, Venezuela",
    },
    {
      imgLink: usersPhotosList[100]?.url,
      title: "World company SAS",
      content: "Caracas 1050, Distrito Catpita, Venezuela",
    },
    {
      imgLink: usersPhotosList[101]?.url,
      title: "Subsid Corp Ltd",
      content: "Caracas 1050, Distrito Catpita, Venezuela",
    },
    {
      imgLink: usersPhotosList[100]?.url,
      title: "World company SAS",
      content: "Caracas 1050, Distrito Catpita, Venezuela",
    },
    {
      imgLink: usersPhotosList[101]?.url,
      title: "Subsid Corp Ltd",
      content: "Caracas 1050, Distrito Catpita, Venezuela",
    },
    {
      imgLink: usersPhotosList[100]?.url,
      title: "World company SAS",
      content: "Caracas 1050, Distrito Catpita, Venezuela",
    },
    {
      imgLink: usersPhotosList[101]?.url,
      title: "Subsid Corp Ltd",
      content: "Caracas 1050, Distrito Catpita, Venezuela",
    },
    {
      imgLink: usersPhotosList[100]?.url,
      title: "World company SAS",
      content: "Caracas 1050, Distrito Catpita, Venezuela",
    },
    {
      imgLink: usersPhotosList[101]?.url,
      title: "Subsid Corp Ltd",
      content: "Caracas 1050, Distrito Catpita, Venezuela",
    },
    {
      imgLink: usersPhotosList[100]?.url,
      title: "World company SAS",
      content: "Caracas 1050, Distrito Catpita, Venezuela",
    },
    {
      imgLink: usersPhotosList[101]?.url,
      title: "Subsid Corp Ltd",
      content: "Caracas 1050, Distrito Catpita, Venezuela",
    },
    {
      imgLink: usersPhotosList[100]?.url,
      title: "World company SAS",
      content: "Caracas 1050, Distrito Catpita, Venezuela",
    },
    {
      imgLink: usersPhotosList[101]?.url,
      title: "Subsid Corp Ltd",
      content: "Caracas 1050, Distrito Catpita, Venezuela",
    },
  ];

  return (
    <Wrapper>
      <TopBar setMosaicList={setListMosaic} listMosaic={listMosaic} />
      <Options
        filtersVisibility={moreFiltersVisible}
        setFiltersVisibility={setMoreFiltersVisibility}
        setDisplayValue={setDisplayValue}
        isHidden={isHidden}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
      />
      <MoreFilterOptions filtersVisibility={moreFiltersVisible} />
      <EntitiesList listState={listMosaic}>
        {entities
          .filter((entity) =>
            entity.title.toLowerCase().includes(filterValue.toLowerCase())
          )
          .map((entity) => (
            <Entity
              imgLink={entity?.imgLink}
              title={entity.title}
              content={entity.content}
              spacedEl={listMosaic}
              key={entity.title + Math.floor(Math.random() * 4213)}
            />
          ))}
      </EntitiesList>
    </Wrapper>
  );
};

export default Entities;
