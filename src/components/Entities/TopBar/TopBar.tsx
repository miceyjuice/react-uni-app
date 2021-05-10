import React, { Dispatch, FC, SetStateAction } from "react";
import Theme from "../../../styledHelpers/Theme";
import {
  DisplayOptions,
  List,
  ListImg,
  ListText,
  Mosaic,
  MosaicImg,
  MosaicText,
  Title,
  Wrapper,
} from "./TopBarStyle";

interface IEntitiesListProps {
  setMosaicList: Dispatch<SetStateAction<boolean>>;
  listMosaic: boolean;
}

export const TopBar: FC<IEntitiesListProps> = ({
  setMosaicList,
  listMosaic,
}) => {
  const displayMosaic = () => {
    setMosaicList(true);
  };

  const displayList = () => {
    setMosaicList(false);
  };

  return (
    <Wrapper>
      <Title>Entities</Title>
      <DisplayOptions>
        <Mosaic isActive={listMosaic} onClick={displayMosaic}>
          <MosaicImg src={Theme.Icons.mosaic} />
          <MosaicText isActive={listMosaic}>Mosaic</MosaicText>
        </Mosaic>
        <List isActive={listMosaic} onClick={displayList}>
          <ListImg src={Theme.Icons.list} />
          <ListText isActive={listMosaic}>List</ListText>
        </List>
      </DisplayOptions>
    </Wrapper>
  );
};

export default TopBar;
