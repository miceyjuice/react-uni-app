import React, { FC } from "react";
import Theme from "../../../styledHelpers/Theme";
import { DisplayOptions, List, ListImg, ListText, Mosaic, MosaicImg, MosaicText, Title, Wrapper } from "./TopBarStyle";

export const TopBar: FC = () => {
  return (
    <Wrapper>
      <Title>Entities</Title>
      <DisplayOptions>
        <Mosaic>
          <MosaicImg src={Theme.Icons.mosaic} />
          <MosaicText>Mosaic</MosaicText>
        </Mosaic>
        <List>
          <ListImg src={Theme.Icons.list} />
          <ListText>List</ListText>
        </List>
      </DisplayOptions>
    </Wrapper>
  );
};

export default TopBar;
