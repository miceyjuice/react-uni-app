import styled from "styled-components";
import Theme from "../../../../styledHelpers/Theme";

export const TilesBoxWrapper = styled.div`
  margin-top: 2rem;
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
  font-size: ${Theme.FontSizes[14]};
  font-weight: ${Theme.FontWeights.light};
`;