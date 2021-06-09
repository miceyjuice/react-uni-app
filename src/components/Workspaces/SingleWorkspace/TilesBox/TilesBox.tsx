import React, { FC } from "react";
import Theme from "../../../../styledHelpers/Theme";
import {
  Tile,
  TileContent,
  TileIcon,
  TilesBoxWrapper,
  TilesList,
  TilesOption,
  TilesTitle,
  TilesTopBar,
  TileTitle,
} from "./TilesBoxStyle";

interface ITiles {
  icon: string;
  title: string;
  content: string;
}

const tiles: ITiles[] = [
  {
    icon: Theme.Icons.entities,
    title: "Explore your entities",
    content: `Take a few minutes to look at the most important elements and specificities of your entities`,
  },
  {
    icon: Theme.Icons.diagram,
    title: "Structure the ownership",
    content: `Get a clear view of the ownership by looking at the relations between individuals and entities`,
  },
  {
    icon: Theme.Icons.calendar,
    title: "Define the calendar",
    content: `Prepare future events by creating detailed plans around the life of your entity`,
  },
];

const TilesBox: FC = () => {
  return (
    <TilesBoxWrapper>
      <TilesTopBar>
        <TilesTitle>Start working on corporate matters</TilesTitle>
        <TilesOption>Hide</TilesOption>
      </TilesTopBar>
      <TilesList>
        {tiles.map((tile) => (
          <Tile
            bgimage={tile.icon}
            key={
              tile.title.toLowerCase().replaceAll(" ", "") +
              Math.floor(Math.random() * 100)
            }
          >
            <TileIcon src={tile.icon} />
            <TileTitle>{tile.title}</TileTitle>
            <TileContent>{tile.content}</TileContent>
          </Tile>
        ))}
      </TilesList>
    </TilesBoxWrapper>
  );
};

export default TilesBox;
