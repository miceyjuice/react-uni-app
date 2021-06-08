import React, { FC } from "react";
import styled from "styled-components";
import Theme from "../../../styledHelpers/Theme";
import Feed from "../../Feed/Feed";
import TopBar from "../../Feed/TopBar/TopBar";

interface IWorkspaceInfo {
  type: string;
  icon: string;
}

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

export const WorkspaceWrapper = styled.div`
  border-radius: 0.5rem;
  color: #f3f3f3;

  > *:not(:last-child) {
    background-color: #222;
    box-shadow: 0 0 0 1px #333;
  }
`;

export const MainInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
`;

export const Header = styled.div`
  border-radius: 0.5rem;
`;
export const TopImg = styled.div`
  background-image: url(${process.env.PUBLIC_URL +"assets/images/luxury-working-room-executive-office.jpg"});
  background-position: center;
  background-size: 100%;
  min-height: 10rem;
  border-radius: 0.5rem 0.5rem 0 0;
`;
export const MainIcon = styled.img`
  max-height: 3rem;
`;
export const MainText = styled.div``;
export const MainTitle = styled.h4`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 0.5rem 0;

  ::after {
    display: inline-block;
    content: "";
    background-image: url(${process.env.PUBLIC_URL + Theme.Icons.cog});
    background-size: 100%;
    width: 1rem;
    height: 1rem;
    cursor: pointer;
  }
`;
export const MainDescription = styled.div`
  font-weight: ${Theme.FontWeights.light};
  font-size: ${Theme.FontSizes[14]};
`;

export const TilesBox = styled.div`
  margin-top: 1rem;
  border-radius: 0.5rem;
  padding: 1rem 1.5rem;
`;

export const TilesTopBar = styled.div`
  display: flex;
  justify-content: space-between;
`;


export const TilesTitle = styled.h4`
  margin: 0.5rem 0;
`;
export const TilesOption = styled(TilesTitle)`
  cursor: pointer;
  
  :hover{
    filter: opacity(80%);
  }
`;

export const TilesList = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;
export const Tile = styled.div<{ bgimage: string }>`
  flex-basis: 33%;
  background-color: #333;
  background-image: ${({ bgimage }) => `url(${bgimage})`};
  background-repeat: no-repeat;
  background-position: 90%;
  background-blend-mode: overlay;
  background-size: 8rem;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0 1px #444;
`;
export const TileIcon = styled.img`
  height: 2.25rem;
`;
export const TileTitle = styled.h4`
  margin: 1rem 0;
`;
export const TileContent = styled.p`
  font-size: 14px;
  font-weight: 300;
`;

const Workspace: FC<IWorkspaceInfo> = ({ type, icon }) => {
  return (
    <WorkspaceWrapper>
      <Header>
        <TopImg />
        <MainInfo>
          <MainIcon src={process.env.PUBLIC_URL + icon} />
          <MainText>
            <MainTitle>{type}</MainTitle>
            <MainDescription>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
              nobis quisquam eligendi vel quae incidunt, cum velit, perspiciatis
              exercitationem sapiente officiis maxime? Nostrum, similique nihil.
            </MainDescription>
          </MainText>
        </MainInfo>
      </Header>
      <TilesBox>
        <TilesTopBar>
          <TilesTitle>Start working on corporate matters</TilesTitle>
          <TilesOption>
            Hide
          </TilesOption>
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
      </TilesBox>
      <Feed enableAdditionalOptions />
    </WorkspaceWrapper>
  );
};

export default Workspace;
